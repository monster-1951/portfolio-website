"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UploadPostSchema } from "@/schemas/UploadPostSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import axios from "axios";

const Post = () => {
  const [Sending, setSending] = useState(false);
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof UploadPostSchema>>({
    resolver: zodResolver(UploadPostSchema),
    defaultValues: {
      Title: "",
      Content: "",
      SubHeading: "",
      Category: "",
      Password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof UploadPostSchema>) {
    setSending(true);
    const response = await axios
      .post("/api/PostABlog", values)
      .then(() => {
        setSending(true);
        toast({
          title: "Success 👍",
          description: "Your message is sent ! Check your mailbox! 💫",

          variant: "destructive",
          className: "red fixed top-4 inset-x-0 mx-auto max-w-md",
        });
        return { data: { success: true } };
      })
      .catch(() => {
        setSending(false);
        toast({
          title: "Failure 👎",
          description: "Failed to send message 🥲",
          variant: "destructive",
          className: "bg-white fixed top-4 inset-x-0 mx-auto max-w-md",
        });
        return { data: { success: false } };
      });
    setSending(false);
   
    console.log(response, "resoponded james bond");
    toast({
      title: response.data.success ? "Success 👍" : "Failure 👎",
      description: response.data.success
        ? "Post Uploaded 💫"
        : "Failed to upload the post 🥲",
      variant: "destructive",
      className: "bg-white fixed top-4 inset-x-0 mx-auto max-w-md",
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:w-[70%] w-[80%] xl:w-[50%] mx-auto py-8"
      >
        <FormField
          control={form.control}
          name="Title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of the Blog" {...field} />
              </FormControl>
              <FormDescription>Title of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="What category this blog belongs to"
                  {...field}
                />
              </FormControl>
              <FormDescription>Category of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="SubHeading"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Description</FormLabel>
              <FormControl>
                <Input placeholder="Description of the blog" {...field} />
              </FormControl>
              <FormDescription>Description of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Content</FormLabel>
              <FormControl>
                <Input
                  placeholder="Content of the blog"
                  {...field}
                  className="min-h-fit"
                  type="text"
                />
              </FormControl>
              <FormDescription>Content of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormDescription>
                Password is needed to upload the post
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="red" variant={"outline"}>
          {" "}
          {Sending ? "Please wait....." : " Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default Post;
