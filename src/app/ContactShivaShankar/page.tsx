"use client";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

import UserProfileIcon from "@/components/custom/icons/UserProfileIcon";

import { ClientReachOutSchema } from "@/schemas/ClientReachOutSchema";
const ContactForm = () => {
  const form = useForm<z.infer<typeof ClientReachOutSchema>>({
    resolver: zodResolver(ClientReachOutSchema),
    defaultValues: {
      Email:"",
      Message:"",
      Name:""
    },
  });

  async function onSubmit(values: z.infer<typeof ClientReachOutSchema>) {
    // console.log("submitted");
    // console.log(values);
    const response  = await axios.post("/api/SendMessage",values)
    console.log("👍", values, "This is the data from onSubmit function");
  }
  return (
    <div className="-mt-5 w-[80%] mx-auto h-[90vh] flex items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="glass space-y-8 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[70%] mx-auto p-5 rounded-b-2xl rounded-t-2xl flex flex-col lg:flex-row h-fit"
        >
          <h1 className="p-3 font-bold text-center border-b-2 lg:border-b-0 flex justify-center items-center lg:text-xl">
            <p>
              Enter your details <br /> Shiva Shankar <br />
              will Contact you shortly
            </p>
          </h1>
          <div className="lg:p-3">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex space-x-3">
                      <p>Name</p>
                      <UserProfileIcon />
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Good name..."
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email 📩</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your message....."
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormDescription className="text-xs p-2">
                    This message will be sent to Shiva Shankar and he'll respond
                    as soon as possible
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button className="glassButton hover:text-orange-600 rounded-xl" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
