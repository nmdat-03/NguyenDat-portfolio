"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FileDown } from "lucide-react";

export default function AnimatedBorderButton() {
    const { t } = useLanguage();

    return (
        <a
            href="/CV_FrontendDeveloper_NguyenMinhDat.pdf"
            download
            className="group relative inline-flex overflow-hidden rounded-full p-0.5"
        >
            {/* Animated Border */}
            <span
                className="
                absolute inset-[-1000%] 
                animate-[spin_3s_linear_infinite] 
                bg-[conic-gradient(from_0deg,transparent,transparent,rgba(255,255,255,0.8),transparent)]"
            />

            {/* Glow */}
            <span
                className="
                    absolute inset-[-1000%]
                    animate-[spin_4s_linear_infinite]
                    bg-[conic-gradient(from_0deg,transparent_0deg,transparent_320deg,rgba(255,255,255,0.8)_340deg,transparent_360deg)]
                    blur-md
                "
            />

            {/* Content */}
            <span
                className="relative flex items-center gap-2 text-sm md:text-md rounded-full bg-linear-to-t from-slate-900 via-slate-800 to-slate-700 px-4 md:px-6 py-3 text-white transition-all duration-300"
            >
                <FileDown size={20} />
                {t.hero["download-cv"]}
            </span>
        </a>
    );
}