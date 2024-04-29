import { NextRequest, NextResponse } from "next/server";
import Admin from "@/models/Admin";
import { verifyEmail } from "../../../../services/mailer";
const bcryptjs = require("bcryptjs");
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { otp, adminId } = reqBody;
    console.log(reqBody);

    const admin = await Admin.findOne({ _id: adminId });
    if (!admin) {
      return NextResponse.json({
        message: "Admin does not exist with this email",
      });
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
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err) {
    return NextResponse.json(`Error:${err}`);
  }
}
