"use client";
import { Typewriter } from "react-simple-typewriter";

const LoopText = () => {
  return (
    <h1 className="flex items-center gap-4 justify-center xl:justify-start text-xl mb-4">
      Software
      <span className="text-accent">
        <Typewriter
          words={["Developer", "Designer"]}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          loop={true}
        />
      </span>
    </h1>
  );
};

export default LoopText;
