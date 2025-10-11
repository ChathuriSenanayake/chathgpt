'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';




export default function AnimatedBackground() {
    const backgroundControls = useAnimation();

    useEffect(() => {
        // backgroundControls.start({
        //     backgroundColor: ["#4f39f6"],
        //     // backgroundColor: ["#372aac", "#7f22fe", "#372aac"],
        //     // background: ["linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"],
        //     gradientTransform: ["rotate(0deg)", "rotate(180deg)", "rotate(360deg)"],
        //     transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        // });
        backgroundControls.start({
            background: "linear-gradient(90deg, #7f22fe, #5139f7, #23b4f5,  #5139f7, #7f22fe)",

            // background: "linear-gradient(90deg, #7f22fe, #7f22fe, #23b4f5, #7f22fe, #7f22fe)",
            backgroundSize: "400% 400%",
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: { duration: 10, repeat: Infinity, ease: "linear" },
        });
    }, []);

    return (
        <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 -z-30"
            animate={backgroundControls}>
        </motion.div >
    );
}

