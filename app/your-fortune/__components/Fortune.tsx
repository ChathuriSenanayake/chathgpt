'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import data from '../../../utils/fortune.json';

export default function YourFortuneResults() {
    const params = useSearchParams();
    const [step, setStep] = useState(1);
    const textAnimateControls = useAnimation();
    const nameanimateControls = useAnimation();

    const fortune = useMemo(() => {
        try {
            const name = params.get("name")
            console.log("name:", name && decodeURIComponent(name).trim());
            const hasKey = name && data.find(item => decodeURIComponent(name).trim().toLowerCase() === item.name.toLowerCase());
            if (!hasKey) {
                throw new Error("name not found")
            }
            return hasKey.fortune
        } catch (error) {
            return "Your future is still being written. Check again a year later!";
        }

    }, [params])

    useEffect(() => {
        let timer: NodeJS.Timeout;
        switch (step) {
            case 1:
                timer = setTimeout(() => {
                    setStep(2);
                }, 8000);
                break;
            case 2:
                timer = setTimeout(() => {
                    setStep(3);
                }, 2000);
                nameanimateControls.start({
                    opacity: [0, 1],
                    scale: [0, 1],
                    rotate: [0, 360],
                    transition: { duration: 2 },
                });
                break;
            case 3:
                nameanimateControls.start({
                    y: [0, -50],

                    transition: { duration: 2 },
                });
                textAnimateControls.start({
                    y: [0, -10],
                    opacity: [0, 1],
                    transition: { duration: 2 },
                });
                break;
            default:
                break;
        }

        return () => clearTimeout(timer);
    }, [step]);



    return (
        <div className="min-h-screen flex flex-col font-sans overflow-clip">
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4">

                {step === 1 && (
                    <div className="gap-10">
                        <motion.div
                            initial={{ y: 0, opacity: 0 }}
                            aria-hidden
                            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 8, }}
                            className=" text-white text-2xl text-center">
                            {"Gazing into the crystal ball..."}
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1, 0], transition: { duration: 8 } }}
                            className="w-96 h-96 rounded-full  bg-white/90 blur-2xl"
                        >
                        </motion.div>

                    </div>
                )}

                <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    // animate={{ rotate: [0, 360], scale: [0, 1], transition: { duration: 2 } }}
                    animate={nameanimateControls}
                    className="text-white text-2xl"
                >
                    {"Dear " + params?.get("name") || "Seeker of Truth" + ","}

                </motion.div>
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={textAnimateControls}
                    transition={{ duration: 3, }}
                    className=" text-white text-xl max-w-xl text-center"
                >
                    {fortune}

                </motion.div>
            </main>
        </div>
    );
}
