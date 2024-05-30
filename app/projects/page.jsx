"use client";
//shadcn component
import {
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
//framer motion
import { motion, useScroll, useTransform } from "framer-motion";
//next components
import Image from "next/image";
import Link from "next/link";
//react hooks
import { useRef } from "react";
//icons
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { SlMouse } from "react-icons/sl";
import { FaArrowDownLong } from "react-icons/fa6";

import { projects } from "@/app/data";
const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen  flex items-center justify-center text-8xl h-[100vh] text-center flex-col gap-24">
          My Projects
          <div className="flex">
            <SlMouse />

            <FaArrowDownLong className="animate-bounce" />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
            {projects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center  bg-gradient-to-r ${project.color}`}
                key={project.id}
              >
                <div className="flex flex-col  gap-8 text-black">
                  <div className="text-8xl leading-none font-extrabold font-londrina">
                    {project.num}
                  </div>
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-94 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420]">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {project.description}
                  </p>
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
          </motion.div>
        </div>
      </div>
      <div className="w-screen bg-white h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl xl:text-8xl text-black">
          Do you have a project ?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl font-outfit">
                Full-stack developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
