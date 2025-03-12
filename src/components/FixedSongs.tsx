import { useState, useEffect } from "react";
import axios from "axios";

interface FixedSongsProps {
  token: string;
  deviceId: string | null;
  onPlay: () => void;
}

interface Song {
  id: string;
  name: string;
  artist: string;
  uri: string;
  albumArt?: string;
}

// List of 5 fixed songs with their Spotify URIs
const FIXED_SONGS: Song[] = [
  {
    id: "1",
    name: "Shape of You",
    artist: "Ed Sheeran",
    uri: "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
  },
  {
    id: "2",
    name: "Blinding Lights",
    artist: "The Weeknd",
    uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
  },
  {
    id: "3",
    name: "Dance Monkey",
    artist: "Tones and I",
    uri: "spotify:track:1rgnBhdG2JDFTbYkYRZAku",
  },
  {
    id: "4",
    name: "Someone You Loved",
    artist: "Lewis Capaldi",
    uri: "spotify:track:7qEHsqek33rTcFNT9PFqLf",
  },
  {
    id: "5",
    name: "Bad Guy",
    artist: "Billie Eilish",
    uri: "spotify:track:2Fxmhks0bxGSBdJ92vM42m",
  },
];

export default function FixedSongs({
  token,
  deviceId,
  onPlay,
}: FixedSongsProps) {
  const [songs, setSongs] = useState<Song[]>(FIXED_SONGS);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch album artwork for each song
  useEffect(() => {
    if (!token || !isClient) return;

    const fetchSongDetails = async () => {
      try {
        setLoading(true);

        // Get track IDs from URIs
        const trackIds = songs.map((song) => song.uri.split(":")[2]);

        // Fetch track details from Spotify API
        const response = await axios.get(
          `https://api.spotify.com/v1/tracks?ids=${trackIds.join(",")}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data && response.data.tracks) {
          // Update songs with album artwork
          const updatedSongs = songs.map((song, index) => ({
            ...song,
            albumArt:
              response.data.tracks[index]?.album.images[0]?.url || undefined,
          }));

          setSongs(updatedSongs);
        }

        setError(null);
      } catch (err: any) {
        console.error("Error fetching song details:", err);
        setError("Failed to load song details");
      } finally {
        setLoading(false);
        setInitialLoadComplete(true);
      }
    };

    fetchSongDetails();
  }, [token, isClient]);

  // Auto-play first song when component is loaded and device is ready
  useEffect(() => {
    if (!isClient) return;

    if (
      initialLoadComplete &&
      deviceId &&
      songs.length > 0 &&
      !currentlyPlaying
    ) {
      // Small delay to ensure device is fully ready
      const timer = setTimeout(() => {
        playSong(songs[0].uri);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [initialLoadComplete, deviceId, songs, currentlyPlaying, isClient]);

  // Play a song
  const playSong = (songUri: string) => {
    if (!deviceId) {
      setError("Device ID not available. Make sure Spotify is connected.");
      return;
    }

    axios
      .put(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        { uris: [songUri] },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        console.log("Playing song:", songUri);
        setCurrentlyPlaying(songUri);
        onPlay();
        setError(null);
      })
      .catch((err) => {
        console.error("Error playing song:", err);
        setError(
          `Error playing song: ${
            err.response?.data?.error?.message || err.message
          }`
        );
      });
  };

  // Render a consistent placeholder during server-side rendering
  if (!isClient) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="rounded-md bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="rounded-md bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Top Songs
        </h2>
        {error && <div className="text-sm text-red-500">{error}</div>}
      </div>

      <div className="space-y-1">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`group flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
              currentlyPlaying === song.uri
                ? "bg-gray-100 dark:bg-gray-800"
                : "hover:bg-gray-50 dark:hover:bg-gray-900/50"
            }`}
            onClick={() => playSong(song.uri)}
          >
            <div className="flex items-center justify-center w-8 h-8 text-gray-400 mr-3">
              {currentlyPlaying === song.uri ? (
                <div className="flex space-x-0.5">
                  <span className="w-0.5 h-3 bg-pink-500 rounded-full animate-[soundbar_0.5s_ease-in-out_infinite_alternate]"></span>
                  <span className="w-0.5 h-3 bg-pink-500 rounded-full animate-[soundbar_0.5s_ease-in-out_0.2s_infinite_alternate]"></span>
                  <span className="w-0.5 h-3 bg-pink-500 rounded-full animate-[soundbar_0.5s_ease-in-out_0.4s_infinite_alternate]"></span>
                </div>
              ) : (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {index + 1}
                </span>
              )}
            </div>

            {song.albumArt && (
              <img
                src={song.albumArt}
                alt={`${song.name} album art`}
                className="w-10 h-10 rounded-md object-cover"
              />
            )}

            <div className="ml-3 flex-1 min-w-0">
              <p
                className={`font-medium truncate ${
                  currentlyPlaying === song.uri
                    ? "text-pink-500"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {song.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {song.artist}
              </p>
            </div>

            <div className="ml-auto flex items-center">
              <button
                className={`p-2 rounded-full ${
                  currentlyPlaying === song.uri
                    ? "text-pink-500"
                    : "text-gray-400 opacity-0 group-hover:opacity-100"
                } transition-opacity`}
                aria-label={
                  currentlyPlaying === song.uri ? "Now playing" : "Play"
                }
              >
                {currentlyPlaying === song.uri ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
