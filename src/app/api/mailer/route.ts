import { NextRequest, NextResponse } from "next/server";
import { mailer } from "../../../../services/mailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const response = await mailer({ name, message });
    if (response.sent) {
      return NextResponse.json({ message: "Email sent" });
    } else {
      return NextResponse.json({ message: "Failure" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
