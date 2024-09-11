import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeadMenuProps {
  style?: string;
}

const HeadMenu = ({ style }: HeadMenuProps) => {
  return (
    <div className={style}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="border-2 px-3 rounded-xl font-semibold hover:font-bold ">MENU</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white bg-purple-950">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:font-bold">My Work</DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">Services Offered</DropdownMenuItem>
          <DropdownMenuItem className="hover:font-bold">Contact Me</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeadMenu;
