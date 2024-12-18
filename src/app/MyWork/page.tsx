import { Project } from "@/types/Project.type";
import ProjectCarousel from "@/components/custom/ProjectCarousel";
import { Projects } from "@/constants/ProjectsDetails";
import { GiDiamonds } from "react-icons/gi";





const page = () => {
  return (
    <>
      <div className=" text-3xl font-semibold text-center py-2">
        Explore the projects done by me
        <div className="p-2 sticky text-center flex justify-center">
      <GiDiamonds className="w-10 text-black h-10 " /> <p className="p-2 text-xl">These are just few samples  </p><GiDiamonds className="w-10 text-black h-10 " />
      </div>
      </div>
     
      <div className="glass w-[100%] mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Projects.map((Project: Project, i: number) => {
          return (
          <ProjectCarousel Projectt={Project} key={i}/>
          );
        })}
      </div>
    </>
  );
};

export default page;
