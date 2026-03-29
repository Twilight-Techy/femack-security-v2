import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // The app password 'deew alfh fdfp boif'
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to themselves
      replyTo: email, // Reply goes to the person who filled out the form
      subject: `Website Contact Form: ${subject || "New Inquiry"}`,
      text: `
Name: ${firstName} ${lastName || ""}
Email: ${email}
Subject: ${subject || "None"}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7f6; padding: 40px 10px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(10, 37, 64, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0a2540; padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase;">FEMACK SECURITY</h1>
                      <p style="color: #00a3e0; margin: 10px 0 0 0; font-size: 14px; font-weight: bold; letter-spacing: 2px;">NEW WEBSITE INQUIRY</p>
                    </td>
                  </tr>
                  
                  <!-- Body Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">You have received a new message from the Femack Security profile website contact form.</p>
                      
                      <!-- Details Grid -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; background-color: #f9fbfd; border-radius: 8px; border: 1px solid #e1e8ed;">
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e1e8ed;">
                            <span style="display: block; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Subject</span>
                            <span style="display: block; font-size: 16px; color: #0a2540; font-weight: bold;">${subject || "General Inquiry"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e1e8ed;">
                            <span style="display: block; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Sender Details</span>
                            <span style="display: block; font-size: 16px; color: #0a2540; font-weight: bold; margin-bottom: 2px;">${firstName} ${lastName || ""}</span>
                            <a href="mailto:${email}" style="font-size: 14px; color: #00a3e0; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px;">
                            <span style="display: block; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message Content</span>
                            <div style="font-size: 15px; color: #333333; line-height: 1.6; white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #edf1f4;">${message}</div>
                          </td>
                        </tr>
                      </table>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="background-color: #00a3e0; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 10px rgba(0, 163, 224, 0.3);">Reply to Inquiry</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #061626; padding: 20px 30px; text-align: center;">
                      <p style="margin: 0; color: #667685; font-size: 12px;">This email was automatically generated by the Femack Security Contact System.</p>
                      <p style="margin: 5px 0 0 0; color: #667685; font-size: 12px;">© ${new Date().getFullYear()} Femack Security Limited.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
