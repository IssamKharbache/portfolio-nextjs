import { motion, useScroll, useTransform } from "framer-motion";
import {
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/app/data";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          className={`h-screen w-screen flex items-center justify-center  bg-gradient-to-r ${project.color}`}
          key={project.id}
        >
          <div className="flex flex-col  gap-8 text-white">
            <div className="text-8xl leading-none font-extrabold font-londrina">
              {project.num}
            </div>
            <h1>{project.title}</h1>
            <div className="relative">
              <Image src={project.image} alt="" fill />
            </div>
            <p>{project.description}</p>
            {/* button */}
            <div className="flex items-center gap-4 ">
              {/* live button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/40 flex justify-center items-center group">
                      <BsArrowRight className="text-white text-3xl group-hover:text-accent -rotate-45 hover:rotate-0 duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github button*/}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/40 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
