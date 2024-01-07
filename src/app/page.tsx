"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { assets } from "@/utils/asset-util";
import { type Icon, icons } from "@/utils/icon-util";
import { cn } from "@/utils/tailwind-util";
import { IconRotation } from "@/components/IconRotation";
import { Poppins } from "next/font/google";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Cursor } from "@/components/Cursor";
import logo from "../../public/provoke_logo.png";
import logo2 from "../../public/gartcod-without-bg.png"

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});
export default function Home() {
  const [currentIcon, setCurrentIcon] = useState<Icon>(icons[0]);
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateIcons = () => {
      setCurrentIcon(icons[currentIndex]);
      currentIndex = (currentIndex + 1) % icons.length;
    };
    const intervalId = setInterval(rotateIcons, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      {/* Background color */}
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-yellow-300": currentIcon === "chrome",
            "bg-red-300": currentIcon === "mobile",
            "bg-neutral-300": currentIcon === "desktop",
          }
        )}
      />
      {/* Grid */}
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30"
      />
      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      {/* Reveal */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Content */}
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          {/* Heading */}
          <h1
            className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
          >
            <Image
              alt="Figma logo"
              className="inline-block mr-8 -mt-2"
              src={logo2}
              width="100"
              height="100"
            />
            <span
              className={cn("transition-colors duration-200", {
                "text-yellow-300": currentIcon === "chrome",
                "text-red-300": currentIcon === "mobile",
                "text-neutral-300": currentIcon === "desktop",
              })}
            >
              <span className="text-white">for</span> <IconRotation currentIcon={currentIcon} /> & Cloud gaming
            </span>{" "}
          </h1>
          {/* Sub heading */}
          <p className="mb-8">
            <span className="text-gray-300 flex">
              <p className="mt-3 mr-2">Join us on the launch of gartcod by</p>
              <span>
                <Image src={logo} alt="logo" width={50} height={50} />
              </span>
            </span>
          </p>
          {/* Claim ticket button */}
          <div className="mb-8">
            <button
              ref={buttonRef}
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-yellow-300": currentIcon === "chrome",

                  "bg-red-300": currentIcon === "mobile",
                  "bg-neutral-300": currentIcon === "desktop",
                }
              )}
            >
              Claim Ticket
            </button>
          </div>
          {/* Countdown timer */}
          <CountdownTimer currentIcon={currentIcon} />
        </div>
      </div>
      <Cursor buttonRef={buttonRef} />
    </main>
  );
}
