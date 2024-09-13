import React from "react";
import myself from "@/images/Myself.jpg";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import MySocialHandles from "@/components/custom/MySocialHandles";
const help = [
  "Fast and Scalable Web Applications: Leveraging Next.js features like server-side rendering and static site generation, I build websites that are fast, SEO-friendly, and ready to scale as your business grows.",
  "Responsive and User-Centric Design: I ensure your website works seamlessly across all devices, offering a smooth user experience no matter where your customers are accessing it from.",
  "Clean and Maintainable Code: I focus on writing code that is easy to maintain and extend, so you can continue building upon your project as your needs evolve.",
  "Custom Solutions: Whether you need an e-commerce platform, blog, portfolio site, or SaaS application, I can tailor my development process to deliver exactly what you need.",
];
const WhyMe = [
  "Tailored Solutions for Your Needs: I take the time to understand your unique business goals, ensuring the web solutions I deliver are customized to drive results specific to your objectives.",
  "Performance-First Approach: I focus on building fast, efficient websites with Next.js and React, ensuring your site loads quickly, boosts SEO, and improves user retention, giving you a competitive edge.",
  " Future-Proof Code: I write clean, maintainable code that allows for easy updates and scalability, saving you time and costs in the long run as your business evolves.",
  "Responsive Design Expertise: I guarantee your website will look and perform flawlessly across all devices, from desktops to mobile phones, maximizing your audience reach and user engagement.",
  "Commitment to Deadlines: I am dedicated to delivering projects on time without compromising on quality, ensuring your business can move forward without delays.",
  "Clear Communication and Transparency: I maintain open and regular communication throughout the project, keeping you informed and involved in every key decision, ensuring no surprises along the way.",
  "Cutting-Edge Technologies: By using the latest web development tools and techniques, I ensure your website remains modern, secure, and up to date with industry best practices.",
];

const bio = [
  "Passionate <b>Next.js developer</b> focused on building fast, scalable, and user-friendly web applications",
  "Specializes in <b>Next.js<b/>, <b>React,</b> and <b>JavaScript</b>, with a strong foundation in creating responsive, high-performance projects.",
  "Portfolio features various projects demonstrating expertise in: - <b>Server-side rendering (SSR)</b> - <b>Static site generation (SSG)</b> - <b>Dynamic routing</b> - <b>API integration</b>",
  "Committed to writing clean, maintainable code with a focus on performance and SEO optimization.",
  "Enthusiastic about continuously learning and exploring new technologies to solve complex problems.",
  "Driven by the goal of building impactful digital solutions that offer seamless user experiences.",
  "Always open to collaboration – check out my projects and feel free to reach out",
];
const AboutMe = () => {
  const mapp = (array: string[]) => {
    return array.map((point, i) => {
      return (
        <>
          <div className="flex space-x-2" key={i}>
            <span>&#x2022;</span> <p>{htmlToText(point)}</p>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="sm:flex-row sm:justify-between glass flex flex-col p-3 hideScrollBarFireFox hideScrollBar overflow-y-auto h-screen">
        <div id="Info" className="flex flex-col">
          <div className="flex flex-col ">
            <Image
              alt="MySelf"
              src={myself}
              className="sm:hidden inline w-52 mx-auto rounded-full mt-2 "
            />
            <div id="name" className="p-3 border-b-2">
              <h1 className="font-extrabold text-center sm:text-left text-2xl">
                Shiva Shankar Buyyankar
              </h1>
              <h3
                id="tag"
                className="font-bold text-center sm:text-left text-xs"
              >
                Expert Web Designer | Web Developer From INDIA
              </h3>
            </div>
          </div>
          <div id="bio" className="p-3 text-base space-y-3 ">
            <div className="w- space-y-3 border-b-2 pb-5 md:border- md:px-2 md:pb-2 md:pt-2 sm:h-[580px]">
              <div className="font-bold text-2xl"> Who am I?</div>
              <div className="p-5"> {mapp(bio)}</div>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row w-full ">
          <div className="sm:w-full w-fit lg:hidden">
            <Image
              alt="MySelf"
              src={myself}
              className="sm:w-52 sm:h-52 hidden sm:flex lg:hidden mx-auto rounded-full"
            />
            <MySocialHandles style="hidden sm:flex lg:hidden sm:justify-center" />
          </div>
          <div className="p-3 mx-auto sm:border-b-2 pb-3 sm:border-t-2 mt-2 lg:mt-[72px] lg:h-[590px] overflow-y-auto hideScrollBar hideScrollBarFireFox sm:h-[449px] h-fit">
            <div className="font-bold text-2xl"> How I can help You</div>
            <div className="flex space-x-2 mt-5">
              <p>
                As a <b>Next.js developer</b>, my goal is to help you bring your
                vision to life by creating high-quality, performant websites and
                applications that meet your business needs. <br />
                Whether you are looking to build a new website from scratch or
                improve an existing one, <br /> I can provide solutions that
                focus on:
              </p>
            </div>
            <div className="p-5"> 
              {mapp(help)}
              </div>
          </div>
          <div className="p-3 mx-auto border-b-2 pb-3 sm:border-t-2 mt-2 lg:mt-[72px] lg:h-[590px] overflow-y-auto sm:h-[449px] hidden 2xl:inline hideScrollBarFireFox hideScrollBar ">
            <div className="font-bold text-2xl ">
              Why should you prefer me ?
            </div>
            <div className="mt-5 p-5">{mapp(WhyMe)}</div>
          </div>
          <div className="lg:w-[300%] xl:w-[200%] 2xl:w-[150%]  sm:flex-col sm:items-center space-y-5 hidden lg:flex">
            <Image
              alt="MySelf"
              src={myself}
              className="sm:w-52 sm:h-52 hidden lg:flex mx-auto rounded-full "
            />
            <MySocialHandles style="hidden lg:flex-col lg:flex items-center w-fit" />
          </div>
        </div>
      </div>
      <div className="glass p-3 mx-auto border-b-2 pb-3 sm:border-t-2 2xl:hidden sm:h-[449px] 2xl:border-l-2 hideScrollBarFireFox hideScrollBar overflow-y-auto">
        <div className="font-bold text-2xl"> Why should you prefer me ?</div>
        <div className="mt-5 p-5">{mapp(WhyMe)}</div>
        <p className="font-semibold">
          Hiring me means investing in a developer who’s as committed to your
          success as you are, ensuring your project not only meets but exceeds
          expectations!
        </p>
      </div>
      {/* Below sm */}
      <MySocialHandles style="sm:hidden" />
    </>
  );
};

export default AboutMe;
