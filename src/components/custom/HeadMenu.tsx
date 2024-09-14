import { MdOutlineLocalOffer, MdWorkOutline } from "react-icons/md";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { CiCircleInfo } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";


const HeadMenu = () => {
  return (
    <>
      <Sheet>
      <SheetTrigger className="-ml-14 ">
        <span className="hidden md:inline lg:hidden border-2 px-3 rounded-xl font-semibold hover:font-bold ">
          MENU
        </span>
        <GiHamburgerMenu className="md:hidden" />
      </SheetTrigger>
      <SheetContent className="hover:font-bold glass">
        <SheetHeader className="p-3">
          <SheetTitle>
            <Link href={"/"} className="flex space-x-3 w-full">
              <HomeIcon className="mt-1" />
              <span>Go to home</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetHeader className="p-3">
          <SheetTitle>
            <Link href={"/MyWork"} className="flex space-x-3">
              <MdWorkOutline className="mt-1" />
              <span>My Work</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetHeader className="p-3">
          <SheetTitle>
            <Link href={"/"} className="flex space-x-3">
              <MdOutlineLocalOffer className="mt-1" />
              <span>Services Offered </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetHeader className="p-3">
          <SheetTitle>
            <Link href={"/AboutMe"} className="flex space-x-3">
              <CiCircleInfo className="mt-1" />
              <span>About Me </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <SheetHeader className="p-3">
          <SheetTitle>
            <Link href={"/ContactShivaShankar"} className="flex space-x-3">
              <IoPersonAddOutline className="mt-1" />
              <span>Contact Me</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </>
  );
};

export default HeadMenu;
