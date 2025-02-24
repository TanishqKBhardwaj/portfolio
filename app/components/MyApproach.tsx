"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export function MyApproach() {
  return (
    <div className="py-20">
        <motion.h1 initial={{opacity:0 , scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeInOut',staggerChildren:1}} className="font-bold text-3xl md:text-5xl mb-10 w-full text-center font-mono">My <span className="text-purple-500">Approach</span></motion.h1>
      <motion.div transition={{duration:2,ease:'easeInOut'}} className=" flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        { webDevPhases.map((item,index)=>(
            <motion.div key={index} initial={{rotateX:180}} whileInView={{rotateX:0}} transition={{duration:2,ease:'easeInOut'}} className="h-[30rem] w-[30rem]">
                
        <Card  
        title={item.title} icon={<AceternityIcon text={`Phase ${index+1}`} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName={item.color}
            colors={[[88, 11, 11]]}
          />
           <ul className='absolute top-20 left-0 right-0 '>
                        {
                        item.points.map((point,i)=>(
                            <li key={i} className='mb-2 font-semibold'>{point}</li>
                        ))
                    }
                        </ul>
                    
        </Card>
            </motion.div>))}
        
      </motion.div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;

}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-full relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-purple-500 font-serif text-xl opacity-0  group-hover/canvas-card:opacity-100 scale:1 group-hover/canvas-card:scale:5 relative z-10 mt-4  font-bold  group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

       
      </div>
    </div>
  );
};

const AceternityIcon = ({text}:{text?:string;}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[10rem]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {text}
    </span>
  </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const webDevPhases = [
    {
      title: "Planning & Research",
      points: [
        "Understanding Requirements: Analyzing project goals and defining key features.",
        "Wireframing & UI Planning: Creating rough sketches or wireframes to visualize layout and user flow.",
        "Tech Stack Selection: Choosing appropriate technologies (e.g., MERN stack, Tailwind CSS, Shadcn UI) for the project.",
        "Design Inspiration: Researching UI/UX trends to ensure user-friendly and modern designs."
      ],color:"bg-emrald-900"
    },
    {
      title: "Development & Implementation",
      points: [
        "Frontend Development: Building responsive and dynamic user interfaces using React and Tailwind CSS, with interactive components powered by Shadcn UI.",
        "Backend Development: Setting up RESTful APIs with Node.js and Express.js. Integrating MongoDB for data management.",
        "Authentication & Security: Implementing secure login/register features with token-based authentication (e.g., JWT) and role-based access where needed.",
        "Version Control: Managing code efficiently using Git and GitHub, ensuring clean commits and proper branching."
      ],color:"bg-sky-600"
    },
    {
      title: "Testing & Deployment",
      points: [
        "Debugging & Optimization: Ensuring code quality, fixing bugs, and optimizing performance for better load times.",
        "Responsive Testing: Verifying cross-browser and device compatibility for a consistent user experience.",
        "Deployment: Hosting the project using platforms like Vercel or Netlify for frontend and Render or Heroku for backend, connecting them seamlessly.",
        "Post-Deployment Monitoring: Continuously checking the deployed app for issues and planning future improvements."
      ],color:'bg-red-950'
    }
  ];
  