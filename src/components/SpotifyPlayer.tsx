import { useEffect, useState } from "react";
import axios from "axios";
import NowPlaying from "./NowPlaying";
import FixedSongs from "./FixedSongs";
import {
  getToken,
  saveToken,
  clearToken,
  redirectToSpotifyLogin,
} from "@/utils/spotifyAuth";

declare global {
  interface Window {
    Spotify: {
      Player: new (options: any) => any;
    };
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export default function SpotifyPlayer() {
  const [player, setPlayer] = useState<any>(null);
  const [token, setToken] = useState("");
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [isAutoConnecting, setIsAutoConnecting] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const checkAndSetToken = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get("access_token");
        const expiresIn = params.get("expires_in");
        const errorParam = params.get("error");

        if (errorParam) {
          setError(decodeURIComponent(errorParam));
          window.history.replaceState({}, document.title, "/");
          setIsAutoConnecting(false);
          return;
        }

        if (accessToken) {
          if (expiresIn) {
            saveToken(accessToken, parseInt(expiresIn));
          } else {
            saveToken(accessToken);
          }
          setToken(accessToken);
          window.history.replaceState({}, document.title, "/");
          setIsAutoConnecting(false);
          return;
        }

        const storedToken = getToken();
        if (storedToken) {
          setToken(storedToken);
          setIsAutoConnecting(false);
          return;
        }

        setIsAutoConnecting(false);
      } catch (err) {
        console.error("Error checking token:", err);
        setError("Failed to initialize authentication");
        setIsAutoConnecting(false);
      }
    };

    checkAndSetToken();
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    if (!isAutoConnecting && !token) {
      const timer = setTimeout(() => {
        redirectToSpotifyLogin();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAutoConnecting, token, isClient]);

  useEffect(() => {
    if (!isClient || !token) return;

    if (
      document.querySelector(
        'script[src="https://sdk.scdn.co/spotify-player.js"]'
      )
    ) {
      if (window.Spotify) {
        setSdkReady(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    script.onload = () => {
      console.log("Spotify SDK script loaded");
      setSdkReady(true);
    };

    script.onerror = () => {
      setError("Failed to load Spotify Web Playback SDK");
    };

    document.body.appendChild(script);

    return () => {};
  }, [token, isClient]);

  useEffect(() => {
    if (!isClient || !token || !sdkReady) return;

    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("Spotify Web Playback SDK Ready");
    };

    const initializePlayer = () => {
      try {
        console.log("Initializing Spotify player");
        const newPlayer = new window.Spotify.Player({
          name: "My Next.js Spotify Player",
          getOAuthToken: (cb: (token: string) => void) => cb(token),
          volume: 0.5,
        });

        newPlayer.addListener(
          "initialization_error",
          ({ message }: { message: string }) => {
            console.error("Initialization error:", message);
            setError(`Initialization error: ${message}`);
          }
        );

        newPlayer.addListener(
          "authentication_error",
          ({ message }: { message: string }) => {
            console.error("Authentication error:", message);
            setError(`Authentication error: ${message}`);
            clearToken();
          }
        );

        newPlayer.addListener(
          "account_error",
          ({ message }: { message: string }) => {
            console.error("Account error:", message);
            setError(`Account error: ${message}. Premium account required.`);
          }
        );

        newPlayer.addListener(
          "playback_error",
          ({ message }: { message: string }) => {
            console.error("Playback error:", message);
            setError(`Playback error: ${message}`);
          }
        );

        newPlayer.addListener(
          "ready",
          ({ device_id }: { device_id: string }) => {
            console.log("Ready with Device ID", device_id);
            setDeviceId(device_id);
            setError(null);
          }
        );

        newPlayer.addListener(
          "not_ready",
          ({ device_id }: { device_id: string }) => {
            console.log("Device ID has gone offline", device_id);
          }
        );

        newPlayer.addListener("player_state_changed", (state: any) => {
          if (!state) return;
          setIsPlaying(!state.paused);
        });

        newPlayer.connect().then((success: boolean) => {
          if (success) {
            console.log(
              "The Web Playback SDK successfully connected to Spotify!"
            );
          } else {
            setError("Failed to connect to Spotify. Please try again.");
          }
        });

        setPlayer(newPlayer);
      } catch (err) {
        console.error("Error initializing Spotify player:", err);
        setError(
          "Failed to initialize Spotify player. Please refresh and try again."
        );
      }
    };

    if (window.Spotify) {
      initializePlayer();
    } else {
      window.onSpotifyWebPlaybackSDKReady = initializePlayer;
    }

    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [token, sdkReady, isClient]);

  const togglePlayback = () => {
    if (!player) {
      setError("Player not initialized");
      return;
    }

    player
      .togglePlay()
      .then(() => {
        console.log("Toggled playback");
      })
      .catch((err: any) => {
        console.error("Error toggling playback", err);
        setError(`Error toggling playback: ${err.message}`);
      });
  };

  const skipToNext = () => {
    if (!deviceId) {
      setError("Device ID not available");
      return;
    }

    axios
      .post(
        `https://api.spotify.com/v1/me/player/next?device_id=${deviceId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        console.log("Skipped to next track");
        setError(null);
      })
      .catch((err) => {
        console.error("Error skipping to next track", err);
        setError(
          `Error skipping to next track: ${
            err.response?.data?.error?.message || err.message
          }`
        );
      });
  };

  const skipToPrevious = () => {
    if (!deviceId) {
      setError("Device ID not available");
      return;
    }

    axios
      .post(
        `https://api.spotify.com/v1/me/player/previous?device_id=${deviceId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        console.log("Skipped to previous track");
        setError(null);
      })
      .catch((err) => {
        console.error("Error skipping to previous track", err);
        setError(
          `Error skipping to previous track: ${
            err.response?.data?.error?.message || err.message
          }`
        );
      });
  };

  const handleSongPlay = () => {
    setIsPlaying(true);
  };

  const handleLogin = () => {
    redirectToSpotifyLogin();
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-xl shadow-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Music
          </h1>
          <div className="h-8 w-32 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
        </div>
        <div className="p-12 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4"></div>
          <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-24"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-xl shadow-xl overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Music
        </h1>

        {!token ? (
          <button
            onClick={handleLogin}
            className="px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
            disabled={isAutoConnecting}
          >
            {isAutoConnecting ? "Connecting..." : "Connect to Spotify"}
          </button>
        ) : (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Connected to Spotify
          </div>
        )}
      </div>

      {error && (
        <div className="mx-6 mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
          <p>{error}</p>
          {error.includes("Premium") && (
            <p className="mt-2 text-xs opacity-80">
              Note: Spotify Web Playback SDK requires a Spotify Premium account.
            </p>
          )}
        </div>
      )}

      {isAutoConnecting ? (
        <div className="p-12 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Connecting to Spotify...
          </p>
        </div>
      ) : token ? (
        <div className="p-6">
          <div className="mb-8">{deviceId && <NowPlaying token={token} />}</div>

          {deviceId && (
            <div className="flex justify-center items-center space-x-8 mb-10">
              <button
                onClick={skipToPrevious}
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Previous track"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                </svg>
              </button>

              <button
                onClick={togglePlayback}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 ml-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={skipToNext}
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Next track"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                </svg>
              </button>
            </div>
          )}

          {deviceId && (
            <FixedSongs
              token={token}
              deviceId={deviceId}
              onPlay={handleSongPlay}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="w-24 h-24 mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-12 h-12"
            >
              <path
                fillRule="evenodd"
                d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Connect to Spotify</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Login with your Spotify Premium account to listen to your favorite
            music
          </p>
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Connect Now
          </button>
        </div>
      )}
    </div>
  );
}
