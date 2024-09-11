import Myself from "@/images/Myself.jpg";
import HeadMenu from "./HeadMenu";
import Image from "next/image";
import Link from "next/link";
const Head = () => {
  return (
    <div className="bg-purple-950 text-white flex space-x-8 sm:space-x-8 px-3 py-4 justify-between">
      <span className="px-5 sm:hidden  flex space-x-5">
        <Image
          alt="DP"
          src={Myself}
          height={100}
          width={100}
          className="rounded-full my-auto w-6 h-6 md:w-12 md:h-12"
        />

        <Link href={"/"} className="my-auto">
          <span className="font-bold text-base sm:text-3xl">
            {" "}
            Shiva Shankar Web dev
          </span>
        </Link>
      </span>

      <span className=" hidden sm:flex space-x-5 my-auto">
        <Image
          alt="DP"
          src={Myself}
          height={250}
          width={250}
          className="rounded-full my-auto w-6 h-6 sm:w-12 sm:h-12 md:w-12 md:h-12"
        />
        <Link href={"/"} className="my-auto">
          <span className="font-bold text-2xl my-auto">
            Web Development By Shiva Shankar
          </span>
        </Link>
      </span>
      <div className="lg:flex justify-between space-x-10 p-3 hidden ">
        <span className="hover:font-semibold">About Me</span>
        <span className="hover:font-semibold">My Work</span>
        <span className="hover:font-semibold">Services Offered</span>
        <span className="hover:font-semibold">Contact Me</span>
      </div>
      <div className="md:flex hidden lg:hidden p-3">Contact Me</div>
      <HeadMenu style="md:hidden my-auto" />
    </div>
  );
};

export default Head;
