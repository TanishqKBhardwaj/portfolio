import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from '../ui/text-generate-effect';
 
function Hero() {
  return (
    <div className="max-h-lvh mt-10   md:h-[80vh] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden" >
      

      <div className="h-full w-full bg-black  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center" style={{backgroundColor:'#070F2B'}}>
     
      <Spotlight
        className=" absolute -top-40 left-0 md:right-0 md:top-0"
        fill="blue"
      />

<Spotlight
        className=" absolute -top-40 left-0 md:right-80 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        
       <TextGenerateEffect className='text-center text-orange-500' duration={2} filter={false} textSize='text-4xl md:text-7xl' words="Hi," />
       <br/>
       <TextGenerateEffect className='text-center' duration={2} filter={false} textSize='text-4xl md:text-7xl' words="I am Tanishq Bhardwaj" />

       
        <TextGenerateEffect className='text-center' textSize='text-xl md:text-2xl' duration={2} filter={true} words="Aspiring Software Developer specializing in modern web development. Lets build something amazing together!"/>
       
      </div>
    </div>
    </div>
)}

export default Hero
