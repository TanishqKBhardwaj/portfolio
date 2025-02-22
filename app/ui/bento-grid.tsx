"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "../components/GridGlobe";
import * as motion from "motion/react-client"
import { animate, stagger } from "motion"
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2.0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        staggerChildren: 0.2
      }}

      className={cn(
        "grid grid-cols-1 md:grid-cols-3  gap-6  max-w-fit md:max-w-6xl mx-auto ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img, imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number,
  img?: string;
  imgClassName: string;
  titleClassName: string;
}) => {
 const [emailText,setEmailText]=useState("Copy My Email")
 const handleClick = () => {
  navigator.clipboard.writeText("bhardwajtanishq275@gmail.com")
  
  animate(
    "#email-button", 
    { scale: [1, 1.2, 1] }, 
    { duration: 1, ease: "easeInOut", onPlay:()=>{setEmailText("Email Copied")},onComplete:()=>{setEmailText("Copy My Email")} },
    
  );
};

  return (
    <div
      className={cn(
        " relative rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-transparent justify-between flex flex-col space-y-4",
        className, id == 6 || id == 2 || id == 1 ? "p-0" : "p-4"
      )}
      style={{ background: 'radial-gradient(circle, rgba(6,3,36,1) 90%, rgba(3,14,16,1) 100%, rgba(71,71,97,1) 100%, rgba(68,68,141,1) 100%)' }}
    >

      <div className="group-hover/bento:translate-x-2 transition duration-200 h-full w-full relative ">
        {img && <motion.img animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }} src={img} className={`${imgClassName} z-1 `}></motion.img>}
        {id == 6 && <BackgroundGradientAnimation />}
        {id == 2 && <GlobeDemo />}
        <div className="  z-3">
          <motion.div initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }} className={` ${titleClassName} ${id == 6 ? " text-2xl font-monotext-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-blue-100 to-white drop-shadow-xl tracking-wide animate-pulse" : " font-bold text-neutral-600 dark:text-neutral-200 "} w-full `}>
            {title}
          </motion.div>
          <div className="font-sans font-normal text-center  text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
          {id == 3 &&
            <div className="grid absolute top-20 mx-auto grid-cols-2 gap-2 justify-between items-center w-full">
              {['MongoDb', 'ExpressJs', 'ReactJs', 'NodeJs', 'TailwindCss'].map((item, index) =>
                <div className="border w-10px border-sky-400 rounded-xl">
                  <p className="text-center p-2 text-sm text-slate-500">{item}</p>
                </div>

              )}

            </div>}
        </div>
        {id == 6 && <div className="flex justify-center">
          <button className="p-[3px] relative" onClick={()=>handleClick()} id="email-button">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              {emailText}
            </div>
          </button></div>}

      </div>
    </div>
  );
};
