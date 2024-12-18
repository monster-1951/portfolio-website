import { FetchPosts } from '@/actions/FetchBlogs'
import SampleBlogsList from '@/components/custom/SampleBlogList'
import { Post } from '@/types/Post'
import React from 'react'

const page = async() => {
      const Blogs = await FetchPosts() as Post[]
  return (
    <SampleBlogsList Blogs={Blogs}/>
  )
}

export default page