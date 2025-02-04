'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Load = () => {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, []);

  return (
    <motion.div initial={{ top: 0 }} animate={{ top: load ? '-100%' : 0 }} transition={{ duration: .5 }} className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-yellow-100 z-50">
        <img src="loader.gif" height={200} width={200} alt="loading" />
    </motion.div>
    );
};

export default Load;
        