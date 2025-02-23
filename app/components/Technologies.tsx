import React from 'react'
import { technologies } from '../data'
import * as motion from 'motion/react-client'

function Technologies() {
  return (
    <div className='py-20'>
     <div className='w-full h-fit flex flex-col md:flex-row items-center  gap-x-5 justify-between'>
        <motion.div transition={{staggerChildren:2}} className='flex flex-col  w-full md:w-[35%] gap-y-1 md:gap-y-3 h-fit'>
            {technologies[0].map((img,i)=>(
                <motion.div initial={{translateX:'-100%'}} whileInView={{translateX:'0%'}} transition={{duration:2,ease:'easeInOut'}} key={i} className="flex justify-end items-center flex-shrink-0  rounded-xl h-5rem" >

                    <img  src={img} className='object-contain overflow-hidden h-5rem w-5rem' style={{marginRight:`${(5*i)}em`}}></img>
                </motion.div>
            ))}
        </motion.div>
        <motion.h1 initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:2,ease:"easeInOut"}} className='text-center text-5xl w-[30%] rounded-full p-2' style={{background: 'radial-gradient(circle, rgba(2,0,36,1) 82%, rgba(133,40,224,0.9865196078431373) 100%, rgba(0,212,255,1) 100%)'}}>Languages & frameworks with which <span className='text-purple-500'>I am familiar with</span></motion.h1>
        <motion.div  transition={{staggerChildren:2}} className='flex flex-col   gap-y-1 md:gap-y-3 w-full md:w-[35%]'>
            {technologies[1].map((img,i)=>(
                <motion.div initial={{translate:'100%'}} whileInView={{translate:'0%'}} transition={{duration:2,ease:'easeInOut'}} key={i} className={`flex justify-start items-center w-full  h-5rem`} >

                <img  src={img} className='object-contain overflow-hidden h-8rem w-8rem' style={{marginLeft:`${(5*i)}em`}}></img>
            </motion.div>
            ))}
        </motion.div>
        </div> 
    </div>
  )
}

export default Technologies
