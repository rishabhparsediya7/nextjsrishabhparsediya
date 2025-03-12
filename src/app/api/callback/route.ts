// pages/api/callback.js
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error) {
    console.error("Error from Spotify authorization:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/?error=${error}`
    );
  }

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  // State verification could be added here if you store the state in a session

  try {
    console.log("Exchanging code for token...");
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI as string,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("Token exchange successful");

    // Include the expires_in parameter in the redirect
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/?access_token=${
        response.data.access_token
      }&expires_in=${response.data.expires_in}`
    );
  } catch (error: any) {
    console.error(
      "Error exchanging code for token:",
      error.response?.data || error.message
    );

    const errorMessage =
      error.response?.data?.error_description ||
      error.response?.data?.error ||
      "Failed to exchange code for token";

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/?error=${encodeURIComponent(
        errorMessage
      )}`
    );
  }
}
