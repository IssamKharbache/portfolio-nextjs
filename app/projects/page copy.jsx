"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectsSliderButtons from "@/components/mycomp/ProjectsSliderButtons";

const projects = [
  {
    //shopay ecomm
    num: "01",
    category: "frontend",
    title: "project 1",
    color: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facilis aut dicta, quas consequatur doloribus voluptatibus recusandae iste labore optio quos, atque corrupti voluptas blanditiis in similique dolores, fuga exercitationem",
    stack: [
      {
        name: "JSX",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Next js",
      },
      {
        name: "Mongodb",
      },
    ],
    image: "",
    github: "",
    live: "",
  },
  {
    //shopay ecomm
    num: "02",
    category: "fullstack",
    title: "project 2",
    color: "",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facilis aut dicta, quas consequatur doloribus voluptatibus recusandae iste labore optio quos, atque corrupti voluptas blanditiis in similique dolores, fuga exercitationem",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Next.js",
      },
      {
        name: "Node.js",
      },
    ],
    image: "",
    github: "",
    live: "",
  },
  {
    //shopay ecomm
    num: "03",
    category: "fullstack",
    color: "",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facilis aut dicta, quas consequatur doloribus voluptatibus recusandae iste labore optio quos, atque corrupti voluptas blanditiis in similique dolores, fuga exercitationem",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Next.js",
      },
      {
        name: "Node.js",
      },
    ],
    image: "",
    github: "",
    live: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0  "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold font-londrina">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the , in last item */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4 ">
                {/* live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
          <div className="w-full   xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 rounded-md "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative  group flex justify-center items-center bg-pink-50">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="w-full h-full">
                        <Image src="/logo.png" fill className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider arrows */}
              <ProjectsSliderButtons
                ctnStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-4 xl:px-0"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all  rounded-lg "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
