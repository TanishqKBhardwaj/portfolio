import React from 'react'
import { CardSpotlight } from '../ui/card-spotlight'
import * as motion from 'motion/react-client'

function ContactInfo() {
  return (
    <div className='py-20 '>
      <motion.div initial={{translateX:'-100%',opacity:0}} whileInView={{translateX:'0%',opacity:1}} transition={{duration:2,ease:'easeInOut',staggerChildren:2}} className=' flex justify-center w-fit h-[30rem]  shadow-2xl shadow-purple-500 '>
        <CardSpotlight className='w-full h-full' >

        <h1  className='text-center font-mono text-3xl md:text-5xl mb-5'>About<span className='text-purple-500'> Me</span></h1>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,ease:'easeInOut'}} className='flex justify-between'>
            <motion.img initial={{translateX:'-100%'}} whileInView={{translateX:'0%'}} transition={{duration:1,ease:'easeInOut'}} src='/assets/exp1.svg' className='w-[50%] h-[50%] rounded-xl'></motion.img>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,ease:'easeInOut'}} className='grid grid-cols-1 gap-y-2 md:gap-y-3'>
             <p >Hey, I am <span className='text-purple-500'>Tanishq Bhardwaj, </span>pre-final year student at IIIT Nagpur, passionate about web development and aiming to become a software developer. Enthusiastic about building impactful projects and currently seeking internship opportunities to enhance my skills.</p>
             <p>If you want to contact me then mail me at <span className='text-blue-500'>@bhardwajtanishq275@gmail.com</span> or contact me directly to <span className='text-blue-500'>9823484336</span></p>
             </motion.div>
        </motion.div>
        </CardSpotlight>
        

      </motion.div>
    </div>
  )
}

export default ContactInfo

