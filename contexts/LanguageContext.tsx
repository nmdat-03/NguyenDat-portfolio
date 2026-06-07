"use client";

import { createContext, useContext, useState } from "react";
import en from "@/messages/eng.json";
import vi from "@/messages/vie.json";

type Locale = "en" | "vi";

const translations = {
    en,
    vi,
};

type Translation = typeof en;

type LanguageContextType = {
    locale: Locale;
    setLocale: React.Dispatch<React.SetStateAction<Locale>>;
    t: Translation;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [locale, setLocale] = useState<Locale>("en");

    return (
        <LanguageContext.Provider
            value={{
                locale,
                setLocale,
                t: translations[locale],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used within a LanguageProvider"
        );
    }

    return context;
}