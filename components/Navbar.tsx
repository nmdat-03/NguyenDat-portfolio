"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { audiowide } from "@/lib/fonts";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
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

      const activeItem = navItems.find(
        (item) => item.href === `#${currentSection}`
      );

      if (activeItem) {
        setActive(activeItem.label);
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
    href: string,
    label: string
  ) => {
    e.preventDefault();

    setActive(label);
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
      {/* Desktop */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.label)}
              className="relative rounded-full px-4 py-2 text-sm font-medium"
            >
              {active === item.label && (
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
                className={`relative z-10 ${active === item.label
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

      {/* Mobile */}
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between md:hidden">
        <Link
          href="#home"
          className={`${audiowide.className} text-2xl text-white uppercase`}
        >
          Nguyen Dat
        </Link>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-white bg-white/10 p-3 backdrop-blur-xl"
        >
          {isOpen
            ? <X size={20} className="text-white" />
            : <Menu size={20} className="text-white" />
          }
        </button>

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
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                  className={`block rounded-xl px-4 py-3 text-sm transition 
                    ${active === item.label
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