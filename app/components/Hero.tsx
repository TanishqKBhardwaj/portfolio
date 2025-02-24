import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { IoIosSend } from 'react-icons/io';

function Hero() {
  return (
    <div className="max-h-lvh mt-10 rounded-lg   md:max-h-fit w-full  flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden" >


      <div className="h-full w-full p-5 bg-black  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex flex-col gap-2  items-center justify-center" style={{ backgroundColor: '#070F2B' }}>

        <Spotlight
          className=" absolute -top-40 left-0 md:right-0 md:top-0"
          fill="blue"
        />

        <Spotlight
          className=" absolute -top-40 left-0 md:right-80 md:-top-20"
          fill="white"
        />
        <div className=" p-10 max-w-7xl flex flex-col md:flex-row items-center justify-between  mx-auto relative  w-full pt-20 md:pt-0">
          <div className=' md:w-[60%]'>

            <TextGenerateEffect className='text-center md:text-start ' duration={2} filter={false} textSize='text-4xl md:text-7xl' words="Hi," />

            <TextGenerateEffect className='text-center md:text-start' duration={2} filter={false} textSize='text-4xl md:text-7xl' words="I am Tanishq Bhardwaj" />
          </div>

          <TextGenerateEffect className='text-center md:w-[40%]' textSize='text-xl md:text-2xl' duration={2} filter={true} words="Aspiring Software Developer specializing in modern web development. Lets build something amazing together!" />



        </div>
        <div>
          <a className=" md:w-52 relative inline-flex h-12 overflow-hidden rounded-full md:rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer" href='#projects' >
            <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full md:rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Show my work   <IoIosSend className='mx-2'/>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
