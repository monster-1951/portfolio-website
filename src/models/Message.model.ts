import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
  content: string;
  sentBy: string;
  senderName: string;
  createdAt: Date;
}

const MessageSchema = new Schema<Message>(
  {
    content: {
      type: String,
      required: true,
    },
    sentBy: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel =
  (mongoose.models.Message as mongoose.Model<Message>) ||
  mongoose.model<Message>("Message", MessageSchema);

export default MessageModel;
