import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">

           

            <div className="flex flex-col items-center space-y-4">
                <h1 className=" text-center lg:max-w-[30vw] text-3xl md:text-5xl">
                    Lets get  <span className="text-purple-500">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:bhardwajtanishq275@gmail.com" className="mt-10 w-fit">
                    <button className=" md:w-52 relative inline-flex h-12 overflow-hidden rounded-full md:rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full md:rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Let's get in touch   <FaLocationArrow className='mx-2'/>
                                </span>
                              </button>
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Tanishq Bhardwaj
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a target="blank" href={info.link}>
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;