"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";
import ShinyButton from "./ShinyButton";

export default function AIFortuneTeller() {
    const [entered, setEntered] = useState(false);

    return (
        <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
            <AnimatedBackground />

            <AnimatePresence mode="wait">
                <motion.div
                    key="welcome"
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl font-bold mb-4  text-white"
                    >
                        Ask ChathGPT
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg sm:text-xl text-gray-300 mb-8"
                    >
                        Peer beyond today and unveil what awaits your destiny
                    </motion.p>

                    <ShinyButton />
                </motion.div>
                {/* <motion.div
                        key="crystal"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="relative w-full h-full flex items-center justify-center"
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src={require("../public/crystalball.jpg")}
                                alt="crystal_ball"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_#7f22fe]"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-10 text-center text-lg text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                        >
                            <p>The AI senses your presence...</p>
                        </motion.div>
                    </motion.div> */}
            </AnimatePresence>
        </div>
    );
}
