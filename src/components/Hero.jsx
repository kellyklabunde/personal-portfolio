"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });
    const [mouseMove, setMouseMove] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        x.set(clientX);
        y.set(clientY);
        // console.log(clientX, clientY, x, y);
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
        setMouseMove(true);
        // console.log(innerWidth, innerHeight);
    }

    const { innerWidth, innerHeight } = windowOffset;

    const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 })
    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

    return (
        <div id="home" className="h-screen flex flex-col justify-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
            <div>
            <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 pb-4 sm:text-2xl dark:text-white">hi there,</h1>
                <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: .5 }} className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                    <motion.div className="flex items-center justify-center" style={{ rotateY: mouseMove ? rotateY : 0, rotateX: mouseMove ? rotateX : 0, transition: '0.1' }}>
                        <Image className="h-auto w-[150px]" src={'/hero2-img.png'} alt='Person Image' width={300} height={300} priority={true} />
                        <motion.span className="absolute text-3xl font-semibold text-white" initial={{ scale: 0 }}
                            animate={{ opacity: buttonHover ? 0 : 1, scale: buttonHover ? 2 : 0, y: buttonHover ? -40 : 0 }} transition={{ opacity: { delay: .4 } }} >Hi</motion.span>
                    </motion.div>
                    <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white">I'm Kelly Klabunde</h1>
                    <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">Frontend Developer</p>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: .5}} className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
                {heroIcons.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" className="rounded-lg hover:bg-red-400 hover:text-white tranition-colors">
                        {item.icon}
                    </a>
                ))}
            </motion.div>
            <motion.a
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{delay: .7}}
                href="/#contact"
                className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
            >
                Talk to me
            </motion.a>
        </div>
    )
}

export default Hero;