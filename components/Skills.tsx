"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: "/icons/techs/html.svg" },
            { name: "CSS", icon: "/icons/techs/css.svg" },
            { name: "React.js", icon: "/icons/techs/react.svg" },
            { name: "Next.js", icon: "/icons/techs/nextjs.svg" },
            { name: "JavaScript", icon: "/icons/techs/javascript.svg" },
            { name: "TypeScript", icon: "/icons/techs/typescript.svg" },
            { name: "Tailwind CSS", icon: "/icons/techs/tailwindcss.svg" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: "/icons/techs/nodejs.svg" },
            { name: "Express.js", icon: "/icons/techs/express.svg" },
            { name: "Prisma ORM", icon: "/icons/techs/prisma.svg" },
            { name: "PostgreSQL", icon: "/icons/techs/postgresql.svg" },
            { name: "MongoDB", icon: "/icons/techs/mongodb.svg" },
            { name: "MySQL", icon: "/icons/techs/mysql.svg" },
            { name: "GitHub", icon: "/icons/techs/github.svg" },
            { name: "Vercel", icon: "/icons/techs/vercel.svg" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Microsoft Word", icon: "/icons/techs/microsoft-word.svg" },
            { name: "Microsoft Excel", icon: "/icons/techs/microsoft-excel.svg" },
            { name: "Microsoft PowerPoint", icon: "/icons/techs/microsoft-powerpoint.svg" },
            { name: "Canva", icon: "/icons/techs/canva.svg" },
            { name: "Draw.io", icon: "/icons/techs/draw-io.svg" },
            { name: "ChatGPT", icon: "/icons/techs/chatgpt.svg" },
            { name: "NotebookLM", icon: "/icons/techs/notebooklm.svg" },
            { name: "Claude", icon: "/icons/techs/claude.svg" },
        ],
    },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7 },
    },
};

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section
            id="skills"
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
                        {t.skills.title}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="mb-5 text-xl font-semibold text-white">
                                {group.title}
                            </h3>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-indigo-300 hover:bg-white/10 hover:shadow-md hover:shadow-indigo-300"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={24}
                                            height={24}
                                        />

                                        <span className="text-sm text-white/90">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}