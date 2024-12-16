import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown (tables, strikethrough, etc.)
import rehypeHighlight from "rehype-highlight"; // For syntax highlighting
import { BlogsList } from "@/constants/Blogs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = ({Blog}:{Blog:string}) => {
  return (
    <div className="inset-0 bg-gradient-to-b from-black/60 to-black/60 sm:border sm:rounded-xl text-white p-3 leading-8 text-xl w-fit sm:w-[80%] text-wrap mx-auto sm:px-16 px-10  xl:w-[60%] space-y-3">
    <ReactMarkdown
   remarkPlugins={[remarkGfm]}
   rehypePlugins={[rehypeHighlight]}
   className=""
 >
   {Blog.substring(0, 150) + "....."}
 </ReactMarkdown>
  <Link href={'/Blogs'}> <Button variant={"outline"}>Read More</Button></Link>
</div>
  );
};

export default page;
