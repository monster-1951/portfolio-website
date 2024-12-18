import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FetchPost } from "@/actions/FetchBlogs";
import { Post } from "@/types/Post";

// const Blogg = {
//   _id: "6762ac6655652653a7b2de80",
//   Category: "Responsive Design",
//   SubHeading:
//     "Learn how to seamlessly integrate MongoDB into your Next.js applications with best practices for efficient connection handling, resource management, and improved performance.",
//   Content:
//     "\n" +
//     "![Sample Image](/BlogImages/1.jpg)\n" +
//     "\n" +
//     "```css\n" +
//     '<div className="xl:w-[70%] mx-auto space-y-10">\n' +
//     "        {Blogs.map((Blog, index) => {\n" +
//     "          return (\n" +
//     '            <div key={index} className="space-y-3 border p-5">\n' +
//     "              <ReactMarkdown\n" +
//     '                className={""}\n' +
//     "                remarkPlugins={[remarkGfm]}\n" +
//     "                rehypePlugins={[rehypeRaw]}\n" +
//     "              >\n" +
//     "                {Blog.Content}\n" +
//     "              </ReactMarkdown>\n" +
//     "            </div>\n" +
//     "          );\n" +
//     "        })}\n" +
//     "      </div>\n" +
//     "```\n" +
//     "\n" +
//     "In today's digital landscape, having a responsive website is no longer optional—it's essential. With over 60% of web traffic coming from mobile devices, a responsive design ensures your website looks great and performs well on all screen sizes.\n" +
//     "\n" +
//     "## Key Benefits:\n" +
//     "1. **Improved User Experience**: A seamless experience across devices keeps visitors engaged.\n" +
//     "3. **Cost Efficiency**: Instead of maintaining separate desktop and mobile sites, one responsive design works everywhere.\n" +
//     "\n" +
//     "### How I Can Help\n" +
//     "As a web developer, I specialize in crafting responsive websites that:\n" +
//     "- Adapt beautifully to any device.\n" +
//     "- Use modern frameworks like **Bootstrap** or **Tailwind CSS**.\n" +
//     "- Load quickly and perform optimally.\n" +
//     "\n" +
//     "**Let’s work together to make your website a pleasure to use!**",
//   Title: "The Importance of Responsive Design in 2024",
//   createdAt: "2024-12-18T11:05:10.277Z",
//   updatedAt: "2024-12-18T11:05:10.277Z",
//   __v: 0,
// };

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
