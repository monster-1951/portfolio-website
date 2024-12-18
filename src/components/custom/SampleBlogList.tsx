import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Post } from "@/types/Post";
import { LuBookOpen } from "react-icons/lu";
interface BlogsProps {
  Blogs: Post[];
}

function extractDate(dateTimeString: string): string {
  // Split the string by spaces
  const parts = dateTimeString.split(" ");
  
  // Extract the date (Month, Day, Year)
  const date = `${parts[1]} ${parts[2]} ${parts[3]}`;
  
  return date;
}
const SampleBlogsList = ({ Blogs }: BlogsProps) => {
  const BlogsList = Blogs;
  return (
    <div className="min-h-screen mt-8">
      <div className="text-center text-2xl font-bold text-[#ff3131]">
        My Blogs
      </div>
      {BlogsList.map((Blog, index) => {
        return (
          <div
            key={index}
            className="shadow-lg  rounded-xl p-3 leading-8 w-fit sm:w-[80%] text-wrap mx-auto sm:px-16 px-10 py-5 xl:w-[60%] space-y-3"
          >
            <div>
              <div className="text-xl font-semibold ">
                {Blog.Title.toString()}
              </div>
              <div className="flex space-x-5 font-light">
                <div>
                  {/* {typeof(Blog.updatedAt) =="string" &&
                    "Updated on " + Blog.updatedAt?.split("T")[0]} */}
                    { "Updated on " + extractDate((Blog.updatedAt|| "").toString()) || " "}
                </div>
                <div className="flex">
                  {" "}
                  <LuBookOpen className="mt-[9px]" />
                  {Math.round(Blog.Content.split(" ").length / 4 / 60) +
                    " min read"}
                </div>
              </div>
            </div>

            <div>{Blog.SubHeading.split("T")[0]}</div>
            <Link href={`/Blog/${Blog._id}`} className="flex ">
              <Button variant={"outline"} className="red mt-5">
                Read More
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SampleBlogsList;
