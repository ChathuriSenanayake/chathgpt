import AnimatedBackground from "@/components/AnimatedBackground";
import { CrystalBall } from "@/components/CrystalBall";
import AIFortuneTeller from "@/components/FullView";
import ShinyButton from "@/components/ShinyButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans ">
      <AIFortuneTeller />
      {/* <CrystalBall />
      <main className="flex-1 flex flex-col items-center justify-center gap-20 p-4">
        <div>
          <div className="text-2xl  items-center justify-center text-center">Welcome to the</div>
          <div className="text-2xl  items-center justify-center text-center">AI Fortune Teller</div>
        </div>

        <ShinyButton />
      </main>

      <footer className="flex text-xs  items-center justify-center p-4">
        <div>Created by Chath_S</div>
      </footer> */}
    </div>
  );
}
