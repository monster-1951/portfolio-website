import React from "react";
import myself from "@/images/Myself.jpg";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import MySocialHandles from "@/components/custom/MySocialHandles";
import NavigateAboutPage from "@/components/custom/NavigateAboutPage";
const help = [
  {
    Head: "Fast and Scalable Web Applications",
    Point:
      "Leveraging Next.js features like server-side rendering and static site generation, I build websites that are fast, SEO-friendly, and ready to scale as your business grows.",
  },
  {
    Head: "Responsive and User-Centric Design",
    Point:
      "I ensure your website works seamlessly across all devices, offering a smooth user experience no matter where your customers are accessing it from.",
  },
  {
    Head: "Clean and Maintainable Code",
    Point:
      "I focus on writing code that is easy to maintain and extend, so you can continue building upon your project as your needs evolve.",
  },
  {
    Head: "Custom Solutions",
    Point:
      "Whether you need an e-commerce platform, blog, portfolio site, or SaaS application, I can tailor my development process to deliver exactly what you need.",
  },
];

const WhyMe = [
  {
    Head: "Tailored Solutions for Your Needs",
    Point:
      "I take the time to understand your unique business goals, ensuring the web solutions I deliver are customized to drive results specific to your objectives.",
  },
  {
    Head: "Performance-First Approach",
    Point:
      "I focus on building fast, efficient websites with Next.js and React, ensuring your site loads quickly, boosts SEO, and improves user retention, giving you a competitive edge.",
  },
  {
    Head: " Future-Proof Code",
    Point:
      "I write clean, maintainable code that allows for easy updates and scalability, saving you time and costs in the long run as your business evolves.",
  },
  {
    Head: "Responsive Design Expertise",
    Point:
      "I guarantee your website will look and perform flawlessly across all devices, from desktops to mobile phones, maximizing your audience reach and user engagement.",
  },
  {
    Head: "Commitment to Deadlines",
    Point:
      "I am dedicated to delivering projects on time without compromising on quality, ensuring your business can move forward without delays.",
  },
  {
    Head: "Clear Communication and Transparency",
    Point:
      "I maintain open and regular communication throughout the project, keeping you informed and involved in every key decision, ensuring no surprises along the way.",
  },
  {
    Head: "Cutting-Edge Technologies",
    Point:
      "By using the latest web development tools and techniques, I ensure your website remains modern, secure, and up to date with industry best practices.",
  },
];

const bio = [
  "Committed to writing clean, maintainable code with a focus on performance and SEO optimization.",
  "Enthusiastic about continuously learning and exploring new technologies to solve complex problems.",
  "Driven by the goal of building impactful digital solutions that offer seamless user experiences.",
  "Always open to collaboration – check out my projects and feel free to reach out",
];

const PersonalLife = [
  {
    Head: "Myself",
    Point:
      "My name is Shiva Shankar Buyyankar, and I am pursuing Engineering in Computer Science. I'll be completing my graduation by 2026.",
  },
  {
    Head: "Why I am here",
    Point:
      "My passion pushed me to learn web development and become a freelance web developer.",
  },
  {
    Head: "My skills",
    Point:
      "With a focus on full-stack development, I bring expertise in creating scalable web applications using modern technologies like React, NextJS, MongoDB, TypeScript, and Node.js. I also have experience in CMS integration, authentication, and building custom APIs.",
  },
  {
    Head: "My love",
    Point:
      "I love solving complex problems and turning ideas into functional digital products. What excites me the most is creating seamless user experiences that not only look good but also perform efficiently.",
  },
  {
    Head: "Tech Stack",
    Point: "NextJS , MongoDB , TypeScript",
  },
  {
    Head: "How can I help you",
    Point:
      "I help businesses bring their visions to life with responsive, high-performance websites tailored to their needs. Whether it's launching a new product, optimizing a platform, or building a blogging CMS, I’m here to help you succeed.",
  },
  {
    Head: "What should you do",
    Point:
      "Feel free to explore my portfolio and see the projects I’ve worked on. If you’re looking to build something amazing together, let’s connect!",
  },
];
const AboutMe = () => {
  
  const mapp = (array: string[]) => {
    return array.map((point, i) => {
      return (
        <div className="flex space-x-2 p-2" key={i}>
          <span>&#x2022;</span> <p>{htmlToText(point)}</p>
        </div>
      );
    });
  };

  const bulletMapp = (array: { Head: string; Point: string }[]) => {
    return array.map((point, i) => {
      return (
        <div className="flex space-x-2 p-2" key={i}>
          <span>&#x2022;</span>
          <p>
            <b className="text-xl">{point.Head}</b> : {point.Point}
          </p>
        </div>
      );
    });
  };

  return (
    <>
      <NavigateAboutPage />
      <div className="sm:flex-row sm:justify-between glass flex flex-col p-3   h-fit">
        <div id="Info" className="flex flex-col">
          <div className="flex flex-col ">
            <Image
              alt="MySelf"
              src={myself}
              className="sm:hidden inline w-60 h-fit mx-auto rounded-full mt-2 "
              width={1000}
              height={1000}
            />
            <div id="name" className="p-3 border-b-2">
              <h1 className="font-extrabold text-center sm:text-left text-2xl ">
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
          <div
            id="bio"
            className="p-3 text-base space-y-3 overflow-y-scroll border-b-2"
          >
            <div className="space-y-3 pb-5 md:px-2 md:pb-2 md:pt-2 sm:h-[580px]">
              <div className="font-bold text-2xl"> Who am I?</div>
              <div className="p-5">
                <div className="flex space-x-2 p-2">
                  <span>&#x2022;</span>{" "}
                  <p>
                    Passionate <b className="text-xl">Next.js developer</b>{" "}
                    focused on building fast, scalable, and user-friendly web
                    applications
                  </p>
                </div>
                <div className="flex space-x-2 p-2">
                  <span>&#x2022;</span>{" "}
                  <p>
                    Specializes in <b className="text-xl">Next.js</b>,{" "}
                    <b className="text-xl">React,</b> and{" "}
                    <b className="text-xl">JavaScript</b>, with a strong
                    foundation in creating responsive, high-performance
                    projects.
                  </p>
                </div>
                <div className="flex space-x-2 p-2">
                  <span>&#x2022;</span>
                  <p>
                    Portfolio features various projects demonstrating expertise
                    in: - <b className="text-xl">Server-side rendering (SSR)</b>{" "}
                    -<b className="text-xl">Static site generation (SSG)</b> -{" "}
                    <b>Dynamic routing</b>-{" "}
                    <b className="text-xl">API integration</b>
                  </p>
                </div>
                {mapp(bio)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row w-full ">
          <div className="sm:w-full w-fit lg:hidden">
            <Image
              alt="MySelf"
              src={myself}
              className="sm:w-52 sm:h-52 hidden sm:flex lg:hidden mx-auto rounded-full"
              width={1000}
              height={1000}
            />
            <MySocialHandles
              AboutPage={false}
              style="hidden sm:flex lg:hidden sm:justify-center"
            />
          </div>
          <div className="p-3 mx-auto sm:border-b-2 pb-3 sm:border-t-2 mt-2 lg:mt-[72px] lg:h-[590px] overflow-y-auto   sm:h-[449px] h-fit">
            <div className="font-bold text-2xl"> How I can help You</div>
            <div className="flex space-x-2 mt-5">
              <p>
                As a <b className="text-xl">Next.js developer</b>, my goal is to
                help you bring your vision to life by creating high-quality,
                performant websites and applications that meet your business
                needs. <br />
                Whether you are looking to build a new website from scratch or
                improve an existing one, <br /> I can provide solutions that
                focus on:
              </p>
            </div>
            <div className="p-5">{bulletMapp(help)}</div>
          </div>

          <Image
            alt="MySelf"
            src={myself}
            className="sm:w-52 sm:h-52 hidden lg:flex mx-auto rounded-full "
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="glass p-3 mx-auto border-b-2 pb-3 sm:border-t-2 sm:h-[449px] 2xl:border-l-2   overflow-y-auto">
          <div className="font-bold text-2xl"> Why should you prefer me ?</div>
          <div className="mt-5 p-5">{bulletMapp(WhyMe)}</div>
          <p className="font-semibold">
            Hiring me means investing in a developer who’s as committed to your
            success as you are, ensuring your project not only meets but exceeds
            expectations!
          </p>
        </div>
        <div className="glass p-3 mx-auto border-b-2 pb-3 sm:border-t-2 sm:h-[449px] 2xl:border-l-2  overflow-y-scroll">
          <div className="font-bold text-2xl">Personal Information</div>
          <div className="mt-5 p-5">{bulletMapp(PersonalLife)} </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
