const nodemailer = require("nodemailer");

export async function mailer({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  const transporter = await nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.TRANSPORT_EMAIL,
      pass: process.env.TRANSPORT_PASSWORD,
    },
  });
  transporter.verify(function (error: any, success: any) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  const mailOptions = {
    from: "Portfolio Message",
    to: "parsediyarishabh@gmail.com",
    subject: `Message from ${name}, Shared something with you`,
    text: `${message}`,
  };
  const info = await transporter.sendMail(mailOptions);
  if (!info) {
    return { message: "failure", sent: false };
  }
  return {
    data: info,
    message: "Sent Successfully",
    sent: true,
  };
}
