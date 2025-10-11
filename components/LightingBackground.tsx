"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LightingBackground() {
    const shouldReduceMotion = useReducedMotion();
    const strokes = useMemo(() => {
        const count = 5;
        return Array.from({ length: count }).map(() => {
            const top = Math.round(Math.random() * 80 + 5); // 5%..85%
            const height = Math.round(Math.random() * 60 + 20); // 20%..80%
            const initialY = -Math.round(Math.random() * 140 + 20); // -20% .. -160%
            const animateY = Math.round(Math.random() * 240 + 60); // 60% .. 300%
            const duration = +(Math.random() * 1.8 + 1.2).toFixed(2); // 1.2..3.0s
            const delay = +(Math.random() * 1.2).toFixed(2);
            const width = Math.random() > 0.6 ? 2 : 1; // 2px or 1px
            const rotate = Math.random() > 0.5 ? -8 : 6;
            const opacity = +(Math.random() * 0.35 + 0.6).toFixed(2); // 0.6..0.95
            return { top, width, initialY, animateY, duration, delay, height, rotate, opacity };
        });
    }, []);
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* slow rotating soft gradient to give depth
            <motion.div
                initial={{ opacity: 0.12 }}
                animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
                transition={shouldReduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/4 -left-1/4 w-[150vw] h-[150vh] bg-[radial-gradient(closest-side,_rgb(99_102_241)_0%,_rgba(79,70,229,0.35)_30%,_transparent_60%)] blur-3xl"
                style={{ mixBlendMode: "screen" }}
            /> */}

            {/* main sweeping lighting strokes (randomized but stable per mount) */}
            {
                // generate a small list of randomized stroke configs once per mount
                /* eslint-disable react-hooks/rules-of-hooks */
            }


            {strokes.map((s, i) => (
                <motion.div
                    key={`stroke-${i}`}
                    initial={{ y: `${s.initialY}%` }}
                    animate={shouldReduceMotion ? undefined : { y: `${s.animateY}%` }}
                    transition={shouldReduceMotion ? undefined : { duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
                    className="absolute top-0 bg-gradient-to-b from-transparent via-white/80 to-transparent blur-sm"
                    style={{
                        top: `${s.top}%`,
                        width: `${s.width}%`,
                        height: `${s.height}px`,
                        transform: `rotate(${s.rotate}deg)`,
                        opacity: s.opacity,
                        filter: "drop-shadow(0 0 18px rgba(123,241,168,0.9))",
                        mixBlendMode: "screen",
                    }}
                />
            ))}

            {/* secondary slower stroke for depth
            <motion.div
                initial={{ x: "140%" }}
                animate={shouldReduceMotion ? undefined : { x: "-140%" }}
                transition={shouldReduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[58%] left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent blur opacity-80 rotate-6"
                style={{ filter: "drop-shadow(0 0 10px rgba(99,102,241,0.7))", mixBlendMode: "screen" }}
            /> */}

            {/* moving soft glints (small highlights)
            <motion.div
                initial={{ x: -100, y: -50, opacity: 0.4 }}
                animate={shouldReduceMotion ? undefined : { x: [-100, 1100], opacity: [0.4, 0.9, 0.4] }}
                transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 left-0 w-48 h-48 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-2xl opacity-30"
                style={{ mixBlendMode: "screen" }}
            /> */}

            {/* <motion.div
                initial={{ x: 1200, y: 60, opacity: 0.25 }}
                animate={shouldReduceMotion ? undefined : { x: [1200, -200], opacity: [0.25, 0.7, 0.25] }}
                transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute top-2/3 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-pink-300/40 to-transparent blur-3xl opacity-25"
                style={{ mixBlendMode: "screen" }}
            /> */}
        </div>
    );
}
