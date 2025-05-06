'use client';
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
            <Heading text={'Get in touch'}/>
            <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
                <motion.div initial={{opacity: 0, y: 150}} whileInView={{opacity: 1, y: 0}} transition={{duration: .4}} viewport={{once: true}}>
                    <Image src={'/contact-nobg.png'} alt="Contact Image" width={400} height={400} className="w-[400px] opacity-80" />
                </motion.div>
                <motion.form target="_blank" action="https://formsubmit.co/contact.kellyklabunde@gmail.com" method="POST" className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-y-3" initial={{opacity: 0, x: 150}} whileInView={{opacity: 1, x: 0}} transition={{duration: .4}} viewport={{once: true}}>
                    <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                        <input type="text" placeholder="Your Name" name="name" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" />
                        <input type="email" placeholder="Your Email" name="email" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"  />
                    </div>
                    <input type="text" placeholder="Subject" name="subject" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" />
                    <textarea placeholder="Write me a message" name="textarea" className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" />
                    <button type="submit" className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer">Send Message</button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;