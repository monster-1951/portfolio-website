import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface HeadMenuProps {
  style?: string;
}

const HeadMenu = ({ style }: HeadMenuProps) => {
  return (
    <div className={style}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="border-2 px-3 rounded-xl font-semibold hover:font-bold ">
            MENU
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white bg-purple-950">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"}>Go to home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"}>My Work</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"}>Services Offered</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/"}>About Me</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">
            <Link href={"/ContactShivaShankar"}>Contact Me</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeadMenu;
