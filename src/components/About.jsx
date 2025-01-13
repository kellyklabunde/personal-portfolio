'use client';

import Heading from "./sub/Heading";
import Image from "next/image";
import { downloadIcon, arrowLeftIcon, aboutText } from "@/assets";

const About = () => {
    return (
        <div className="min-h-screen px-96 flex flex-col items-center justify-center">
            <Heading text={'About Me'}/>
            <div className="w-full flex items-center justify-between md:justify-center">
                <Image src={'/kelly-about.png'} alt='Kelly Klabunde' width={400} height={400} priority={true} className="w-[300px] lg:w-[200px] md:hidden" />
                <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100">{arrowLeftIcon}</span>
                    <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">{aboutText}</p>
                    <a href="/kelly-cv.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-color" > 
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;