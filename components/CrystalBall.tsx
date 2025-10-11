"use client";
import Image from "next/image";

export const CrystalBall = () => {
    return (
        <div className="absolute top-80 inset-0 h-screen w-screen flex items-center justify-center">
            <div className="relative w-full h-full">
                <Image
                    src={require("../public/crystalBall.png")}
                    alt="crystal_ball"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
};