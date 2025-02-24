import React from 'react'
import { PinContainer } from '../ui/3d-pin'
import { projects } from '../data'
import * as motion from 'motion/react-client'
function Projects() {
  return (
    <motion.div 
    initial={{ opacity: 0,scale:0.5 }}
    whileInView={{ opacity: 1,scale:1 }} transition={{duration:2,ease:"easeInOut"}} className='py-20' id='projects'>
      <h1 className='text-center text-4xl md:text-5xl font-bold w-[10rem] mx-auto md:w-full '>Some of my <span className='text-purple-500'>recent projects</span></h1>
    <div className='flex flex-col mt-10 md:flex-row items-center justify-center'>
      { projects.map((item,index)=>(
        <div key={index} className="h-[30rem] w-full flex items-center justify-center  ">
        <PinContainer
          title={item.title}
          href={item.link}
        >
          <div className="flex basis-full space-y-3 flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-fit ">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-slate-100">
              {item.title}
            </h2>
            <div className='flex item-center justify-between gap-2 w-full'>
              {item.iconLists.map((icons,i)=>(
                <img key={i} src={icons} className='object-contain w-3rem h-3rem'></img>
              ))}
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 "  >
              <img src={item.img} className='object-contain overflow-hidden'></img>
              </div>
              <p className='text-wrap'>{item.des}</p>
              <span className='   border border-cyan-500 rounded-xl p-1 text-start text-purple-500 w-fit'>Hover on me</span>
          </div>
        </PinContainer>
      </div>
      ))

      }
      </div>
       
    </motion.div>
  )
}

export default Projects
