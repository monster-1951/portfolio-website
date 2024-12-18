'use server'
import dbConnect from "@/lib/dbConnect"
import PostModel from "@/models/Post.model"

export const FetchPosts = async () => {
    await dbConnect();
  
    try {
      const AllPosts = await PostModel.find().lean().exec();
      return AllPosts;
    } catch (error) {
      console.log("Error in Fetching the posts", error, "😭");
      return error 
    }
  };

export const FetchPost = async (_id:string) => {
    await dbConnect();
  
    try {
      const Post = await PostModel.findOne({_id:_id});
      return Post;
    } catch (error) {
      console.log("Error in Fetching the posts", error, "😭");
      return error 
    }
  }
