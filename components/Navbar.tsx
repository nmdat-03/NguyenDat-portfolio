"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { label: t.navbar.home, href: "#home" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.skills, href: "#skills" },
    { label: t.navbar.projects, href: "#projects" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  const [active, setActive] = useState("#home");
  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling) return;

      const sections = document.querySelectorAll("section[id]");

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const center = window.innerHeight / 2;

        if (rect.top <= center && rect.bottom >= center) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActive(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClickScrolling]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setActive(href);
    setIsClickScrolling(true);
    setIsOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setIsClickScrolling(false);
    }, 800);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative rounded-full px-4 py-2 text-sm font-medium"
            >
              {active === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                  }}
                />
              )}

              <span
                className={`relative z-10 ${active === item.href
                  ? "text-black"
                  : "text-zinc-300 hover:text-white"
                  }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Language Switcher Desktop */}
      <div className="fixed top-6 right-6 z-50 hidden md:block">
        <div className="flex items-center rounded-full border border-white/10 bg-white/10 p-1.5 backdrop-blur-xl">
          <button
            onClick={() => setLocale("en")}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition 
              ${locale === "en"
                ? "bg-white text-black"
                : "text-zinc-300 hover:text-white"
              }`}
          >
            <Image
              src="/icons/flags/us.svg"
              alt="English"
              width={18}
              height={18}
            />
            ENG
          </button>

          <button
            onClick={() => setLocale("vi")}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition 
              ${locale === "vi"
                ? "bg-white text-black"
                : "text-zinc-300 hover:text-white"
              }`}
          >
            <Image
              src="/icons/flags/vn.svg"
              alt="Tiếng Việt"
              width={18}
              height={18}
            />
            VIE
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between md:hidden">
        <Link
          href="#home"
          className="text-2xl uppercase text-white"
        >
          Nguyen Dat
        </Link>

        <div className="flex items-center gap-5">
          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "vi" : "en")}
            aria-label="Change language"
            className="border border-white/50 rounded-full"
          >
            <Image
              src={locale === "en" ? "/icons/flags/us.svg" : "/icons/flags/vn.svg"}
              alt="Language"
              width={36}
              height={36}
            />
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-white bg-white/10 p-3 backdrop-blur-xl"
          >
            {isOpen ? (
              <X size={18} className="text-white" />
            ) : (
              <Menu size={18} className="text-white" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block rounded-xl px-4 py-3 text-sm transition 
                    ${active === item.href
                      ? "bg-white text-black"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}