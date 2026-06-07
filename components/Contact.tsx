"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const contacts = [
    {
        icon: "/icons/contact/email.svg",
        label: "Email",
        value: "nmdat2910@gmail.com",
        href: "mailto:nmdat2910@gmail.com",
    },
    {
        icon: "/icons/contact/phone.svg",
        label: "Phone",
        value: "0862 012 063",
        href: ""
    },
    {
        icon: "/icons/techs/github.svg",
        label: "GitHub",
        value: "nmdat-03",
        href: "https://github.com/nmdat-03",
    },
    {
        icon: "/icons/contact/facebook.svg",
        label: "Facebook",
        value: "Nguyen Minh Dat",
        href: "https://facebook.com/n.m.dat2910",
    },
    {
        icon: "/icons/contact/zalo.svg",
        label: "Zalo",
        value: "0862 012 063",
        href: "https://zalo.me/0862012063",
    },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7 },
    },
};

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section
            id="contact"
            className="container-custom py-24"
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
                    <p className="section-title text-xl font-medium uppercase tracking-[0.25em] text-white">
                        {t.contact.title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-bold text-white">
                        {t.contact.heading}
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contacts.map((contact) => {

                            return (
                                <Link
                                    key={contact.label}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                >
                                    <Image
                                        src={contact.icon}
                                        alt={contact.label}
                                        width={32}
                                        height={32}
                                    />

                                    <div>
                                        <p className="text-sm text-white/50">
                                            {contact.label}
                                        </p>

                                        <p className="text-white">
                                            {contact.value}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="mailto:nmdat2910@gmail.com"
                            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-t from-slate-900 via-slate-800 to-slate-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-indigo-300 hover:shadow-lg"
                        >
                            <Image
                                src="/icons/contact/email.svg"
                                alt="Email Icon"
                                width={32}
                                height={32}
                            />
                            {t.contact.button}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}