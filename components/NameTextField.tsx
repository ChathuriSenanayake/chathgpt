"use client";
import Image from "next/image";
import { motion } from 'framer-motion';

export const NameTextField = () => {
    return (
        <>
            <motion.p
                className="items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >Tell me your first name</motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="px-10 items-center justify-center">
                <input className="focus:outline-none border-0 h-14 border-b-white border-b  text-center text-2xl" />
            </motion.div>
        </>
    );
};