import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Project } from "@/types/Project.type";
import Image from "next/image";
  interface ViewImageDialogProps {
    Projectt:Project,
    i:number,
  }

const ViewImageDialog = ({Projectt,i}:ViewImageDialogProps) => {
    const Project :Project = Projectt
  return (
   <div className="flex justify-center">
     <Dialog>
      <DialogTrigger className="text-xs px-3">
        View Image
      </DialogTrigger>
      <DialogContent className="glass">
        <DialogHeader>
          <DialogTitle className="p-3">
            {Project.Title} , Image {i + 1}
          </DialogTitle>
          <DialogDescription className="h-fit">
            <div className="flex h-full">
              <Image
                alt="BlogSpot"
                src={Project.Image[i]}
                className="p-2 rounded-xl w-fit border my-auto mx-auto"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
   </div>
  );
};

export default ViewImageDialog;
