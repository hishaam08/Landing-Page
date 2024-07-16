"use client";

import Arrow from "@/assets/icons/arrow.svg";
import messageImage from "@/assets/message.png";
import cursorImage from "@/assets/cursor.png";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[74px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[375px] bg-black w-[750px] sm:w-[1924px] sm:h-[768px] lg:w-[3000px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 px-2 py-1 border rounded-lg border-[#fff]/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              Read more <Arrow />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="relative">
            <h1 className="font-bold tracking-tighter text-center text-7xl sm:text-9xl">
              One Task
              <br />
              at a Time
            </h1>
            <motion.div
              drag
              className="absolute hidden h-[200px] w-[200px] sm:inline top-[56px] left-[498px]"
            >
              <Image
                // className="max-w-none"
                // height={200}
                // width={200}
                src={messageImage}
                alt="message image"
                draggable="false"
              />
            </motion.div>
            <motion.div
              drag
              className="absolute hidden sm:inline right-[476px] top-[108px]"
            >
              <Image
                // height={200}
                // width={200}
                className="max-w-none"
                src={cursorImage}
                alt="cursor image"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="max-w-md mt-8 text-xl text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="px-5 py-3 text-black bg-white rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
