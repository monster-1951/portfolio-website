"use client";

import { ClientSchema } from "@/schemas/ClientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ZoomIcon from "@/components/custom/icons/ZoomIcon";
import GoogleMeetIcon from "@/components/custom/icons/GoogleMeetIcon";
import { FaLocationDot } from "react-icons/fa6";
import CompanyIcon from "@/components/custom/icons/CompanyIcon";
import IGIcon from "@/components/custom/icons/IGIcon";
import FBIcon from "@/components/custom/icons/FBIcon";
import LinkedinIcon from "@/components/custom/icons/LinkedinIcon";
import XIcon from "@/components/custom/icons/XIcon";
import UserProfileIcon from "@/components/custom/icons/UserProfileIcon";
import Link from "next/link";
const ContactForm = () => {
  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      Name: "",
      Email: "",
      MobileNumber: "",
      Location: "",
      PreferredCommunication: "",
    },
  });

  function onSubmit(values: z.infer<typeof ClientSchema>) {
    console.log("submitted");
    console.log(values);
  }
  return (
    <div className="mt-2">
      <h1 className="w-[80%] sm:w-[75%] md:w-[50%] mx-auto p-5 bg-purple-800 text-white font-bold text-center rounded-t-2xl">
        <p>Enter your details,</p> <p>Shiva Shankar will Contact you shortly</p>
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-purple-200 space-y-8 w-[80%] sm:w-[75%] md:w-[50%] mx-auto p-5 rounded-b-2xl"
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex space-x-3">
                    <p>Your Good Name</p>
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
                  <Input placeholder="Email address" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="MobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number 📞</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile number" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="PreferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date 📅</FormLabel>
                <FormControl>
                  <Input placeholder="On which date you are free to attend call" {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="PreferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time ⌚</FormLabel>
                <FormControl>
                  <Input placeholder="At what time you will be free on that day" {...field} type="time" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="PreferredCommunication"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex space-x-3">
                    <p>Preferred Communication</p> <ZoomIcon />
                    <GoogleMeetIcon />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Zoom or Google Meet" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex space-x-4">
                    <p>Location</p> <FaLocationDot />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input placeholder="City name" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex space-x-2">
                    <p>Company</p> <CompanyIcon />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company name (if exists)"
                    {...field}
                    type=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="SocialMedia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex">
                    <p className="h-full my-auto">Social media handler</p>
                    <Link
                      href={"https://www.instagram.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IGIcon />
                    </Link>
                    <Link
                      href={"https://www.facebook.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FBIcon />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon />
                    </Link>
                    <Link
                      href={"https://x.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon />
                    </Link>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your profile link on your favourite social media platform"
                    {...field}
                    type="url"
                  />
                </FormControl>
                {/* <FormDescription>You can click any of the icon above to go there</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button className="bg-purple-900 text-white hover:bg-purple-950 hover:text-bold">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
