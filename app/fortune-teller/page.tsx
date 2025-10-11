import AnimatedBackground from "@/components/AnimatedBackground";
import { CrystalBall } from "@/components/CrystalBall";
import { NameTextField } from "@/components/NameTextField";
import ShinyButton from "@/components/ShinyButton";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans overflow-clip">
            {/* <CrystalBall /> */}
            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center gap-20 p-4">
                <NameTextField />
            </main>

            {/* Footer */}
            <footer className="flex text-xs  items-center justify-center p-4">
                <div>Created by Chath_S</div>
            </footer>
        </div>
    );
}
