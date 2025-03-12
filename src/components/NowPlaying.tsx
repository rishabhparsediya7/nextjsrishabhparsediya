import { useEffect, useState } from "react";
import axios from "axios";

interface NowPlayingProps {
  token: string;
}

interface TrackInfo {
  name: string;
  artists: string;
  albumArt: string;
  isPlaying: boolean;
}

export default function NowPlaying({ token }: NowPlayingProps) {
  const [trackInfo, setTrackInfo] = useState<TrackInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchNowPlaying = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 204) {
          setTrackInfo(null);
          setError(null);
          setLoading(false);
          return;
        }

        const data = response.data;
        if (data && data.item) {
          setTrackInfo({
            name: data.item.name,
            artists: data.item.artists
              .map((artist: any) => artist.name)
              .join(", "),
            albumArt: data.item.album.images[0]?.url || "",
            isPlaying: data.is_playing,
          });
          setError(null);
        } else {
          setTrackInfo(null);
          setError("No track information available");
        }
      } catch (err: any) {
        console.error("Error fetching now playing:", err);
        if (err.response?.status !== 403) {
          setError(
            err.response?.data?.error?.message ||
              "Failed to fetch currently playing track"
          );
        }
        setTrackInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 3000);

    return () => clearInterval(interval);
  }, [token]);

  if (!token) return null;

  if (!isClient) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4">
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-800"></div>
        <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-24"></div>
      </div>
    );
  }

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center py-8">
  //       <div className="animate-pulse flex space-x-4">
  //         <div className="rounded-lg bg-gray-200 dark:bg-gray-700 h-32 w-32"></div>
  //         <div className="flex-1 space-y-4 py-1">
  //           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
  //           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  //           <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (error && error !== "No track information available") {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  if (!trackInfo) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4">
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="font-medium text-center">Nothing Playing</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
          Select a song from the list below to start playing
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* Album Art */}
      <div className="relative mb-6 w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-xl overflow-hidden">
        {trackInfo.albumArt ? (
          <img
            src={trackInfo.albumArt}
            alt={`${trackInfo.name} album art`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {/* Playing indicator */}
        {trackInfo.isPlaying && (
          <div className="absolute bottom-2 right-2 bg-black/30 backdrop-blur-sm rounded-full p-1.5">
            <div className="flex space-x-1">
              <span className="w-1 h-3 bg-white rounded-full animate-[soundbar_0.5s_ease-in-out_infinite_alternate]"></span>
              <span className="w-1 h-3 bg-white rounded-full animate-[soundbar_0.5s_ease-in-out_0.2s_infinite_alternate]"></span>
              <span className="w-1 h-3 bg-white rounded-full animate-[soundbar_0.5s_ease-in-out_0.4s_infinite_alternate]"></span>
            </div>
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="text-center">
        <h3 className="font-bold text-xl">{trackInfo.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {trackInfo.artists}
        </p>
        <p className="text-xs text-pink-500 mt-2 font-medium">
          {trackInfo.isPlaying ? "PLAYING" : "PAUSED"}
        </p>
      </div>
    </div>
  );
}
