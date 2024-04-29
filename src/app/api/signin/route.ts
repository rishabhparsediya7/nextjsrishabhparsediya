import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
const bcryptjs = require("bcryptjs");
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const admin = await db
      .collection("portfolioadmins")
      .findOne({ email: email });
    if (!admin) {
      return NextResponse.json({
        message: "Admin does not exist with this email",
      });
    }
    const validPassword = await bcryptjs.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    const tokenData = {
      id: admin._id,
      username: admin.name,
      email: admin.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      access_token: token,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    response.cookies.set("email", email, {
      httpOnly: true,
    });
    return response;
  } catch (err) {
    return NextResponse.json(`Error:${err}`);
  }
}
