import dbConnect from "@/lib/dbConnect";
import MessageModel from "@/models/Message.model";

import { sendAcknowledgeEmail } from "@/helpers/sendAcknowledgeEmail";

export async function POST(request: Request) {
  await dbConnect();
  
  // console.log({ Name, Email, Message }, "route");
  
  try {
    const { Name, Email, Message } = await request.json();

     // Send email

     const emailResponse =await sendAcknowledgeEmail(Name, Message,Email);
     if (!emailResponse.success) {
       return Response.json(
         {
           success: false,
           message: emailResponse.message,
         },
         {
           status: 500,
         }
       );
     }

     
    // Create new message

    const newMessage = new MessageModel({
      senderName: Name,
      sentBy: Email,
      content: Message,
    });
    await newMessage.save();

   




    return Response.json(
      { success: true, newMessage,email:emailResponse },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return Response.json(
      {
        success: false,
        message: "Error sending message",
      },
      { status: 500 }
    );
  }
}
