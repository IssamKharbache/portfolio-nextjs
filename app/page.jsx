"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
//componenets
import Socials from "@/components/mycomp/Socials";
import Shapes from "@/components/mycomp/Shape";
import Stats from "@/components/mycomp/Stats";
import LoopText from "@/components/mycomp/LoopText";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/mycomp/AnimatedText";

const Home = () => {
  return (
    <section className="h-full py-4 mt-44 md:mt-14">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <motion.div className="text-center xl:text-left">
            <LoopText
              className="flex items-center gap-4 justify-center xl:justify-start text-xl mb-4"
              loop={true}
              cursor="_"
              firstWord="Software"
              words={["Developer", "Designer"]}
            />
            <h1 className="h1 font-outfit text-[20px] md:text-[30px] xl:text-[50px] flex flex-col gap-4 mb-6">
              Hello I'm <br />
              <AnimatedText
                delay="2"
                text="Issam Kharbache"
                className="text-accent font-outfit font-extrabold text-[60px] md:text-[70px] xl:text-[130px] "
              />
            </h1>
            <p className="max-w-[500px] sm:ml-12 xl:ml-0  mb-9 text-white/80 text-[12px] md:text-[15px] ">
              I'm a full stack developer. I enjoy building sites & apps and I am
              proficient in various programming languages and technologies.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button> */}
              <div className="mb-6 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          {/* 3D SHAPES */}
          <div>
            <Shapes />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
