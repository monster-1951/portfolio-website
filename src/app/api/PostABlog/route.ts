import dbConnect from "@/lib/dbConnect";
import PostModel from "@/models/Post.model";

export async function POST(request: Request) {
  const password = process.env.PASSWORD
  await dbConnect();
  try {
    const { Content, Title, SubHeading, Category, Password } =
      await request.json();
    // console.log({ Title, SubHeading, Category, Password })
    if (Password ===password ) {
      const NewBlog = new PostModel({
        Category,
        Content,
        SubHeading,
        Title,
      });
      await NewBlog.save();

      return Response.json(
        { success: true, NewBlog },
        {
          status: 201,
        }
      );
    } else {
      return Response.json(
        { success: false, message: "Wrong Password",Password },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("Error Creating Post:", error);
    return Response.json(
      {
        success: false,
        message: "Error creating post",
      },
      { status: 500 }
    );
  }
}
