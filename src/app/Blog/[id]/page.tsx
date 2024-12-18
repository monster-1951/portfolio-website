import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FetchPost } from "@/actions/FetchBlogs";
import { Post } from "@/types/Post";


const Blog = async ({ params }: { params: { id: string } }) => {
  const Blogg = await FetchPost(params.id) as Post
  // console.log(post)
  function preprocessMarkdown(input: string): string {
    // Replace escaped newlines and backslashes with their original versions
    return input.replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }
  return (
    <div>
      <div
        id="Head"
        className="text-xl sm:text-3xl font-bold w-[95%] mx-auto py-5 xl:text-center"
      >
        {Blogg.Title}
      </div>
      <div className="xl:w-[70%] mx-auto space-y-10">
        <div className="space-y-3 border p-5">
          <ReactMarkdown
            className={""}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {preprocessMarkdown(Blogg.Content.toString())}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Blog;
