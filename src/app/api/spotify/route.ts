// pages/api/login.js
import { NextResponse } from "next/server";
import querystring from "querystring";
import crypto from "crypto";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  console.log("🚀 ~ GET ~ client_id:", client_id);
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  console.log("🚀 ~ GET ~ redirect_uri:", redirect_uri);

  // Generate a random state value for security
  const state = crypto.randomBytes(16).toString("hex");

  const scope =
    "streaming user-read-email user-read-private user-library-read user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private";

  const authUrl = `https://accounts.spotify.com/authorize?${querystring.stringify(
    {
      response_type: "code",
      client_id,
      scope,
      redirect_uri,
      state,
      show_dialog: false, // Set to false for automatic login
    }
  )}`;

  return NextResponse.redirect(authUrl);
}
