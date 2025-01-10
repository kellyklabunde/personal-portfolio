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
                <div>
                    <span>Arrow left</span>
                    <p>About text</p>
                    <a href="/kelly-cv.pdf" download="" >
                        <span>Download CV</span>
                        <span>Icon</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;