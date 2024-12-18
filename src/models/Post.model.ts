import { Post } from "@/types/Post";
import mongoose, { Schema } from "mongoose";



const PostSchema = new Schema<Post>(
  {
    Category: {
      type: String,
      required: true,
    },
    SubHeading: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel =
  (mongoose.models.Post as mongoose.Model<Post>) ||
  mongoose.model<Post>("Post", PostSchema);

export default PostModel;
