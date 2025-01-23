'use client'
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = ({project, index}) => {
    const [show, setShow] = useState(false);

    return (
        <motion.div 
            initial={{opacity: 0, y: index % 2 === 0 ? 100 : -100}} 
            whileInView={{opacity: 1, y: 0}} viewport={{once: true}} 
            transition={{duration: 1, type: 'spring', stiffness: 100}} 
            onClick={() => setShow((show) => !show)}
            className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
        >
            <Image src={project.url} alt="Project Image" width={400} height={400} className="rounded-lg opacity-70" />  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} className="absolute w-full h-full top-0 flex flex-col items-center justify-center gap-y-2 p-6 bg-white/95 rounded-lg">
            <h2 className="text-lg font-bold tracking-wide text-gray-500">{project.name}</h2>
            <p className="text-justify text-gray-500 first-letter:pl-2">{project.description}</p>
        </motion.div>
        </motion.div>
    )
}

export default Project;