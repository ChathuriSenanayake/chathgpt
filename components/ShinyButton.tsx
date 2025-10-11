'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




export default function ShinyButton() {
    const shineControls = useAnimation();
    const borderControls = useAnimation();
    const router = useRouter();

    const animateShine = () => {
        shineControls.start({
            x: ['-200%', '200%'],
            transition: { duration: 1, ease: 'easeOut' },
            stopColor: "#7bf1a8"
        });
    }


    useEffect(() => {
        animateShine();
    }, []);


    const handleHoverStart = () => {
        animateShine();
    };

    //         // <div className='w-lg h-4 flex justify-center items-center p-4'>

    return (
        <motion.div className="px-6 py-3 rounded-lg" style={{ border: '0 0 5px oklch(67.3% 0.182 276.935)' }}>
            <motion.button
                onClick={() => router.push('/fortune-teller')}
                whileTap={{ scale: 0.80 }}
                onHoverStart={handleHoverStart}
                whileHover={{ boxShadow: '0 0 15px #fff', backdropFilter: "#fff" }}
                className="relative overflow-hidden px-8 py-3 sm:px-8 rounded-xl bg-gray-800 text-white font-semibold text-lg shadow-lg transition-transform"
            >
                Enter If You Dare
                <motion.span
                    animate={shineControls}
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                    style={{ x: '-200%' }}
                />

            </motion.button>
            {/* Animated SVG border */}
            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 250 70"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    x="3"
                    y="3"
                    width="244"
                    height="64"
                    rx="12"
                    ry="12"
                    fill="transparent"
                    stroke="oklch(67.3% 0.182 276.935)"
                    strokeWidth="2"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                    animate={borderControls}
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: 0 }}
                />
            </svg>
        </motion.div >
    );
}

