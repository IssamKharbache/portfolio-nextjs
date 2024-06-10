"use client";
import { Typewriter } from "react-simple-typewriter";

const LoopText = ({ words, cursor, firstWord, loop, className }) => {
  return (
    <h1 className={className}>
      {firstWord}
      <span className="text-accent">
        <Typewriter
          words={words}
          cursor
          cursorStyle={cursor}
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
          loop={loop}
        />
      </span>
    </h1>
  );
};

export default LoopText;
