"use client";
import axios from "axios";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserProfileIcon from "@/components/custom/icons/UserProfileIcon";

import { ClientReachOutSchema } from "@/schemas/ClientReachOutSchema";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
const ContactForm = () => {
  const [Sending, setSending] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ClientReachOutSchema>>({
    resolver: zodResolver(ClientReachOutSchema),
    defaultValues: {
      Email: "",
      Message: "",
      Name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ClientReachOutSchema>) {
    setSending(true);
    const response = await axios
      .post("/api/SendMessage", values)
      .then(() => {
        setSending(true);
        toast({
          title: "Success 👍",
          description: "Failed to send message 🥲",
          variant: "destructive",
          className: "glass fixed top-4 inset-x-0 mx-auto max-w-md",
        });
        return { data: { success: true } };
      })
      .catch(() => {
        setSending(false);
        toast({
          title: "Failure 👎",
          description: "Your message is sent ! Check your mailbox! 💫",
          variant: "destructive",
          className: "glass fixed top-4 inset-x-0 mx-auto max-w-md",
        });
        return { data: { success: false } };
      });
    setSending(false);
    console.log("👍", values, "This is the data from onSubmit function");
    console.log(response, "resoponded james bond");
    toast({
      title: response.data.success ? "Success 👍" : "Failure 👎",
      description: response.data.success
        ? "Your message is sent ! Check your mailbox! 💫"
        : "Failed to send message 🥲",
      variant: "destructive",
      className: "glass fixed top-4 inset-x-0 mx-auto max-w-md",
    });
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
                    <Dialog>
                      <DialogTrigger className="w-full">
                        <Textarea
                          placeholder="Enter your message....."
                          {...field}
                          className="w-full"
                        />
                      </DialogTrigger>
                      <DialogContent className="glass p-5">
                        <DialogHeader >
                          <DialogTitle className="py-3">Enter Your Message here...</DialogTitle>
                          <DialogDescription className="py-3 space-y-5">
                            <Textarea
                              placeholder="Enter your message....."
                              {...field}
                              className=""
                            />
                            <div className="px-1">
                            You can resize this box as per your convienience .{" "}
                            <br />
                            Close this dialog once you've completed writing your
                            message.
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </FormControl>
                  <FormDescription className="text-xs p-2">
                    This message will be sent to Shiva Shankar and he&apos;ll
                    respond as soon as possible
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                className="glassButton hover:text-lg rounded-xl"
                type="submit"
              >
                {Sending ? "Please wait....." : " Submit"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
