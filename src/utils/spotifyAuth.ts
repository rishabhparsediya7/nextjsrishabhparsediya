// Constants
const TOKEN_KEY = "spotify_access_token";
const TOKEN_EXPIRY_KEY = "spotify_token_expiry";

/**
 * Save Spotify access token to localStorage with expiry time
 * @param token Access token from Spotify
 * @param expiresIn Expiry time in seconds
 */
export const saveToken = (token: string, expiresIn: number = 3600): void => {
  try {
    // Calculate expiry time (current time + expiry seconds)
    const expiryTime = Date.now() + expiresIn * 1000;

    // Save token and expiry time to localStorage
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
  } catch (error) {
    console.error("Error saving token to localStorage:", error);
  }
};

/**
 * Get Spotify access token from localStorage if it exists and is not expired
 * @returns Access token or null if not found or expired
 */
export const getToken = (): string | null => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const expiryTime = localStorage.getItem(TOKEN_EXPIRY_KEY);

    if (!token || !expiryTime) {
      return null;
    }

    // Check if token is expired
    if (Date.now() > parseInt(expiryTime)) {
      // Token expired, clear it
      clearToken();
      return null;
    }

    return token;
  } catch (error) {
    console.error("Error retrieving token from localStorage:", error);
    return null;
  }
};

/**
 * Clear Spotify access token from localStorage
 */
export const clearToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
  } catch (error) {
    console.error("Error clearing token from localStorage:", error);
  }
};

/**
 * Check if token exists and is valid
 */
export const hasValidToken = (): boolean => {
  return getToken() !== null;
};

/**
 * Redirect to Spotify login
 */
export const redirectToSpotifyLogin = (): void => {
  window.location.href = "/api/spotify";
};
