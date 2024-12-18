import Myself from "@/images/Myself.jpg";
import HeadMenu from "./HeadMenu";
import Image from "next/image";
import Link from "next/link";
const Head = () => {
  return (
    <div className="glass red flex space-x-8 sm:space-x-8 px-3 py-4 justify-between sticky top-0 z-10">
      <span className="px-5 sm:hidden flex space-x-5">
        <Image
          alt="DP"
          src={Myself}
          height={100}
          width={100}
          className="rounded-full my-auto w-12 h-12 md:w-12 md:h-12 "
        />

        <Link href={"/"} className="my-auto">
          <span className="font-bold text-base text-nowrap sm:text-3xl">
            Shiva Shankar Web dev
          </span>
        </Link>
      </span>

      <span className=" hidden sm:flex space-x-5 my-auto">
        <Image
          alt="DP"
          src={Myself}
          height={300}
          width={300}
          className="rounded-full my-auto w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12"
        />
        <Link href={"/"} className="my-auto">
          <div className="font-bold xl:text-4xl text-2xl my-auto flex flex-col -space-y-7 lg:space-y-0 lg:flex-row">
            <span className="text-nowrap">Web Development By </span>&nbsp;{" "}
            <span className="text-nowrap">Shiva Shankar</span>
          </div>
        </Link>
      </span>
      <div className="lg:flex lg:justify-end space-x-10 p-3 hidden w-full ">
        <Link href={"/MyWork"}>
          <span className="hover:font-semibold">My Work</span>
        </Link>
        <Link href={"/Blog"}>
          <span className="hover:font-semibold">Blog</span>
        </Link>
        <Link href={"/AboutMe"}>
          <span className="hover:font-semibold">About Me</span>
        </Link>
        <Link href={"/ContactShivaShankar"}>
          <span className="hover:font-semibold">Contact Me</span>
        </Link>
      </div>
      <HeadMenu  />
    </div>
  );
};

export default Head;
