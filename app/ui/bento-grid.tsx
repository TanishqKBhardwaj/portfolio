import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3  gap-6  max-w-fit md:max-w-6xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?:string;
  imgClassName:string;
  titleClassName:string;
}) => {
  return (
    <div
      className={cn(
        " relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: 'radial-gradient(circle, rgba(6,3,36,1) 90%, rgba(3,14,16,1) 100%, rgba(71,71,97,1) 100%, rgba(68,68,141,1) 100%)'}}
    >
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 h-full relative ">
        {img &&<img src ={img} className={`${imgClassName}  `}></img>}
        <div className="z-3">
        <div className={` ${titleClassName} font-sans font-bold text-neutral-600 dark:text-neutral-200 w-[20em] absolute bottom-20`}>
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div></div>
        
      </div>
    </div>
  );
};
