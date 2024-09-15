import { resend } from "@/lib/resend";
import AcknowledgementEmail from "../../emails/AcknowledgementEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendAcknowledgeEmail(
  Name: string,
  Message: string,
  Email: string
): Promise<ApiResponse> {
  console.log({Name,Message,Email})
  try {
    await resend.emails.send({
      from: `Shiva Shankar Web Dev <${process.env.MAIL_ID}>`,
      to: Email,
      subject: "Thanks for your interest !",
      react: AcknowledgementEmail({ Name:Name, Message:Message }),
    });
    return { success: true, message: "Acknowledge email sent successfully",Name,Message,Email };
  } catch (error) {
    console.error("Error is sending verification email", error);
    return { success: false, message: "Failed to send Acknowledge email" };
  }
}
