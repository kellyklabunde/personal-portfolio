'use client'
import Image from "next/image";

const Project = () => {
    return (
        <div className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
            <Image src={'/projects/guideme.png'} alt="Project Image" width={400} height={400} className="rounded-lg opacity-70" />  
        <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center gap-y-2 p-6 bg-black bg-opacity-50 rounded-lg">
            <h2>Guide.me</h2>
            <p>description</p>
        </div>
        </div>
    )
}

export default Project;