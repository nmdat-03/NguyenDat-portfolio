"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Restaurant Website",
        description:
            "A modern restaurant platform with authentication, ordering food, checkout process, order management, and VNPay integration.",
        image: "/projects/restaurant.png",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        github: "https://github.com/nmdat-03/restaurant-app",
        demo: "https://demo-restaurant-app.vercel.app",
    },
    {
        title: "School Management System",
        description:
            "A role-based school management platform for students, teachers, parents, and administrators. Includes authentication, attendance tracking, grade management, and dashboard analytics.",
        image: "/projects/school.png",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        github: "https://github.com/nmdat-03/school-management-app",
        demo: null,
    },
    {
        title: "SAOvet Hospital Website",
        description:
            "A modern veterinary hospital website that provides pet care information, online appointment booking, service management, and user-friendly experience for pet owners and hospital staffs.",
        image: "/projects/SAOvet.png",
        tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
        github: "https://github.com/nmdat-03/SAOvet_Hospital",
        demo: null,
    },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7 },
    },
};

export default function Projects() {
    return (
        <section
            id="projects"
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
                        Projects
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const imageVariants: Variants = {
                            hidden: {
                                opacity: 0,
                                x: index % 2 === 0 ? -80 : 80,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8 },
                            },
                        };

                        const contentVariants: Variants = {
                            hidden: {
                                opacity: 0,
                                x: index % 2 === 0 ? 80 : -80,
                            },
                            visible: {
                                opacity: 1, x: 0,
                                transition: { duration: 0.8 },
                            },
                        };

                        return (
                            <div
                                key={project.title}
                                className={`grid items-center gap-10 lg:grid-cols-2
                                ${index % 2 === 1
                                        ? "lg:[&>*:first-child]:order-2"
                                        : ""
                                    }`}
                            >
                                {/* Image */}
                                <motion.div
                                    variants={imageVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="overflow-hidden rounded-lg border border-white/10 bg-white/5"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={1200}
                                        height={700}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                >
                                    <h3 className="text-xl md:text-3xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-md md:text-xl mt-4 leading-relaxed text-white/70">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {project.tech.map(
                                            (tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ amount: 0.3 }}
                                                    transition={{ delay: techIndex * 0.08, duration: 0.3 }}
                                                    className="rounded-full border border-white bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10"
                                                >
                                                    {tech}
                                                </motion.span>
                                            )
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="mt-8 flex gap-4"
                                    >
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-xl bg-linear-to-t from-slate-300 via-slate-200 to-slate-100 px-5 py-3 text-sm font-medium text-black transition hover:scale-105 hover:shadow-lg hover:shadow-indigo-300"
                                            >
                                                <Image
                                                    src="/icons/browser.svg"
                                                    alt="Browser Icon"
                                                    width={24}
                                                    height={24}
                                                />
                                                Live Demo
                                            </Link>
                                        )}

                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-xl border border-white/50 bg-linear-to-t from-slate-900 via-slate-800 to-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:shadow-lg hover:shadow-white"
                                        >
                                            <Image
                                                src="/icons/github.svg"
                                                alt="Github Icon"
                                                width={32}
                                                height={32}
                                            />
                                            GitHub
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}