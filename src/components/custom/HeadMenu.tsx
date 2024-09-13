import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineLocalOffer, MdWorkOutline } from "react-icons/md";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { CiCircleInfo } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
interface HeadMenuProps {
  style?: string;
}

const HeadMenu = ({ style }: HeadMenuProps) => {
  return (
    <div className={style}>
      <DropdownMenu>
        <DropdownMenuTrigger className="-ml-14">
          <span className="border-2 px-3 rounded-xl font-semibold hover:font-bold ">
            MENU
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="glass">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"} className="flex space-x-3 w-full">
              <HomeIcon className="mt-1"/>
              <span>Go to home</span> 
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold flex space-x-3">
            <Link href={"/"} className="flex space-x-3">
               <MdWorkOutline className="mt-1"/>
              <span>My Work</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"} className="flex space-x-3">
              <MdOutlineLocalOffer className="mt-1" />
              <span>Services Offered </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/AboutMe"} className="flex space-x-3">
              <CiCircleInfo className="mt-1" />
              <span>About Me </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/ContactShivaShankar"} className="flex space-x-3">
                <IoPersonAddOutline className="mt-1" />
        
              <span>Contact Me</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeadMenu;
