import React from "react";
import { GiDiamonds } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DiamondDropDown = () => {
  const MoveToWhoAmI = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scrolling effect
    });

  };
  const MoveToHowCanIHelpYou = () => {
    window.scrollTo({
      top: 1050,
      behavior: "smooth", // for a smooth scrolling effect
    });

  };
  const MoveToWhyMe = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth", // for a smooth scrolling effect
    });

  };
  const MoveToPersonalInfo = () => {
    window.scrollTo({
      top: 3050,
      behavior: "smooth", // for a smooth scrolling effect
    });

  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GiDiamonds className="w-10 text-white h-10 " />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="glass">
          <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={MoveToWhoAmI}>Who am I?</DropdownMenuItem>
          <DropdownMenuItem onClick={MoveToHowCanIHelpYou}>How I can help you?</DropdownMenuItem>
          <DropdownMenuItem onClick={MoveToWhyMe}>Why should you prefer me ?</DropdownMenuItem>
          <DropdownMenuItem onClick={MoveToPersonalInfo}>Personal Information</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DiamondDropDown;
