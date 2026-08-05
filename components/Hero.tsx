"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { SquareChartGantt } from "lucide-react";
import AnimatedBorderButton from "./AnimatedBorderButton";
import { useLanguage } from "@/contexts/LanguageContext";

const techs = [
    {
        src: "/icons/techs/react.svg",
        alt: "React",
        className: "-top-6 left-8",
        duration: 4,
    },
    {
        src: "/icons/techs/nextjs.svg",
        alt: "Next.js",
        className: "top-12 -right-8",
        duration: 5,
    },
    {
        src: "/icons/techs/typescript.svg",
        alt: "TypeScript",
        className: "bottom-30 -left-10",
        duration: 4.5,
    },
    {
        src: "/icons/techs/microsoft-word.svg",
        alt: "MicrosoftWord",
        className: "bottom-8 -right-6",
        duration: 6,
    },
    {
        src: "/icons/techs/draw-io.svg",
        alt: "DrawIO",
        className: "-bottom-10 left-20",
        duration: 5.5,
    },
];

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="container-custom flex min-h-screen p-24"
        >
            <div className="grid gap-18 items-center md:grid-cols-2 md:gap-0">
                {/* Left */}
                <div>
                    <p className="mb-4 text-xl md:text-2xl font-black bg-linear-to-b from-white via-cyan-200 to-teal-400 bg-clip-text text-transparent">
                        {t.hero.heading}
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                        <TypeAnimation
                            sequence={[
                                "Software Engineer",
                                1500,
                                "",
                                500,
                                "Frontend Developer",
                                1500,
                                "",
                                500,
                                "Business Analyst",
                                1500,
                                "",
                                500,
                            ]}
                            wrapper="span"
                            speed={10}
                            deletionSpeed={10}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="mt-6 text-md leading-relaxed text-zinc-300">
                        {t.hero.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="flex gap-2 items-center rounded-full bg-linear-to-t from-slate-300 via-slate-200 to-slate-100 px-4 md:px-6 py-3 font-medium text-sm md:text-md text-black transition hover:scale-105 hover:shadow-indigo-300 hover:shadow-lg"
                        >
                            <SquareChartGantt size={20} />
                            {t.hero["view-projects"]}
                        </Link>

                        <AnimatedBorderButton />
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Glow behind avatar */}
                        <div className="absolute inset-0 scale-110 rounded-full bg-white/10 blur-3xl" />

                        <Image
                            src="/avatar.jpg"
                            alt="Nguyen Dat"
                            width={384}
                            height={384}
                            priority
                            className="relative h-72 w-72 rounded-full border border-zinc-700 object-cover shadow-2xl md:h-96 md:w-96"
                        />

                        {techs.map((tech) => (
                            <motion.div
                                key={tech.alt}
                                className={`absolute z-20 ${tech.className}`}
                                whileHover={{ scale: 1.15 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: tech.duration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}

                            >
                                <div className="rounded-xl border border-white bg-white/10 p-3 backdrop-blur shadow-md shadow-white">
                                    <Image
                                        src={tech.src}
                                        alt={tech.alt}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}