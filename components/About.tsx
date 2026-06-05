"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const infoCards = [
    {
        title: "Education",
        value: "Nguyen Tat Thanh University",
        icon: "/icons/nttu.svg",
    },
    {
        title: "Major",
        value: "Software Engineering",
        icon: "/icons/computer.png",
    },
    {
        title: "GPA",
        value: "3.2 / 4.0",
        icon: "/icons/gpa.png",
    },
    {
        title: "English",
        value: "IELTS 6.0",
        icon: "/icons/ielts.png",
    },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7 },
    },
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <section
            id="about"
            className="container-custom flex min-h-screen py-24"
        >
            <div className="w-full">
                {/* Section Label */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    className="mb-12 border-b border-zinc-500 pb-6"
                >
                    <p className="text-xl font-medium uppercase tracking-[0.25em] text-white">
                        About me
                    </p>
                </motion.div>

                <div className="grid items-start gap-16 md:grid-cols-2">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-lg font-bold tracking-tight md:text-3xl bg-linear-to-b from-white via-blue-200 to-indigo-400 bg-clip-text text-transparent">
                            Building modern web experiences.
                        </h2>

                        <p className="mt-6 max-w-xl text-md leading-relaxed text-zinc-300">
                            I&apos;m a Frontend Developer passionate about
                            creating responsive, accessible, and user-friendly
                            web applications.
                        </p>

                        <p className="mt-4 max-w-xl text-md leading-relaxed text-zinc-300">
                            My primary stack includes React, Next.js,
                            TypeScript, Tailwind CSS, and PostgreSQL. I enjoy
                            transforming ideas into clean and interactive
                            interfaces while focusing on performance and user
                            experience.
                        </p>

                        <p className="mt-4 max-w-xl text-md leading-relaxed text-zinc-300">
                            Currently, I am expanding my knowledge of backend
                            development and full-stack technologies to build
                            complete web solutions.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        className="space-y-4"
                    >
                        {/* Education */}
                        <motion.div
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                        >
                            <div className="relative">
                                <p className="text-sm uppercase tracking-wider text-zinc-500">
                                    Education
                                </p>

                                <div className="mt-3 flex items-center gap-3">
                                    <Image
                                        src="/icons/nttu.svg"
                                        alt="Education"
                                        width={32}
                                        height={32}
                                    />
                                    <h3 className="text-lg font-semibold text-white">
                                        Nguyen Tat Thanh University
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* Major */}
                        <motion.div
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                        >
                            <div className="relative">
                                <p className="text-sm uppercase tracking-wider text-zinc-500">
                                    Major
                                </p>

                                <div className="mt-3 flex items-center gap-3">
                                    <Image
                                        src="/icons/computer.png"
                                        alt="Major"
                                        width={32}
                                        height={32}
                                    />
                                    <h3 className="text-lg font-semibold text-white">
                                        Software Engineering
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* GPA + IELTS */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {infoCards.slice(2).map((card) => (
                                <motion.div
                                    key={card.title}
                                    variants={cardVariants}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                                >
                                    <div className="relative">
                                        <p className="text-sm uppercase tracking-wider text-zinc-500">
                                            {card.title}
                                        </p>

                                        <div className="mt-3 flex items-center gap-3">
                                            <Image
                                                src={card.icon}
                                                alt={card.title}
                                                width={32}
                                                height={32}
                                            />

                                            <h3 className="text-lg font-semibold text-white">
                                                {card.value}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}