import nodemailer from 'nodemailer';

interface MailerParams {
  name: string;
  message: string;
}

export async function mailer({ name, message }: MailerParams) {
  if (!process.env.TRANSPORT_EMAIL || !process.env.TRANSPORT_PASSWORD) {
    throw new Error('Email configuration is missing');
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.TRANSPORT_EMAIL,
      pass: process.env.TRANSPORT_PASSWORD,
    },
  });

  try {
    // Verify the connection configuration
    await transporter.verify();
    
    const mailOptions = {
      from: `"${name}" <${process.env.TRANSPORT_EMAIL}>`,
      to: 'parsediyarishabh@gmail.com',
      subject: `New message from ${name} via Portfolio`,
      text: message,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>New Message from Portfolio Contact Form</h2>
              <p><strong>From:</strong> ${name}</p>
              <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>`
    };

    const info = await transporter.sendMail(mailOptions);
    
    return {
      message: 'Email sent successfully',
      sent: true,
      data: info
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}
