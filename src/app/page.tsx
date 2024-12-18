import { FetchPosts } from "@/actions/FetchBlogs";
import SampleBlogsList from "@/components/custom/SampleBlogList";
import HeroSection from "@/components/custom/HeroSection";
import { Post } from "@/types/Post";



export default async function Home() {
  const Blogs = await FetchPosts() as Post[]

  return (
    <main className="bgImage">
      <HeroSection />
      <SampleBlogsList Blogs={Blogs}/>
    </main>
  );
}
