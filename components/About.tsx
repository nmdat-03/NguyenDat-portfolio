"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";



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
    const { t } = useLanguage();

    const infoCards = [
        {
            id: "gpa",
            title: t.about.gpa,
            value: "3.2 / 4.0",
            icon: "/icons/about/gpa.png",
        },
        {
            id: "english",
            title: t.about.english,
            value: t.about.ielts,
            icon: "/icons/about/ielts.png",
        },
    ];

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
                        {t.about.sectionTitle}
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
                        <p className="max-w-xl text-md leading-relaxed text-zinc-300">
                            {t.about.description1}
                        </p>

                        <p className="mt-4 max-w-xl text-md leading-relaxed text-zinc-300">
                            {t.about.description2}
                        </p>

                        <p className="mt-4 max-w-xl text-md leading-relaxed text-zinc-300">
                            {t.about.description3}
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
                                <p className="text-sm uppercase tracking-wider text-zinc-400">
                                    {t.about.education}
                                </p>

                                <div className="mt-3 flex items-center gap-3">
                                    <Image
                                        src="/icons/about/nttu.svg"
                                        alt="Education"
                                        width={32}
                                        height={32}
                                    />
                                    <h3 className="text-md md:text-lg font-semibold text-white">
                                        {t.about.university}
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
                                <p className="text-sm uppercase tracking-wider text-zinc-400">
                                    {t.about.major}
                                </p>

                                <div className="mt-3 flex items-center gap-3">
                                    <Image
                                        src="/icons/about/computer.png"
                                        alt="Major"
                                        width={32}
                                        height={32}
                                    />
                                    <h3 className="text-md md:text-lg font-semibold text-white">
                                        {t.about.majorValue}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>

                        {/* GPA + IELTS */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {infoCards.map((card) => (
                                <motion.div
                                    key={card.id}
                                    variants={cardVariants}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                                >
                                    <div className="relative">
                                        <p className="text-sm uppercase tracking-wider text-zinc-400">
                                            {card.title}
                                        </p>

                                        <div className="mt-3 flex items-center gap-3">
                                            <Image
                                                src={card.icon}
                                                alt={card.title}
                                                width={32}
                                                height={32}
                                            />

                                            <h3 className="text-md md:text-lg font-semibold text-white">
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