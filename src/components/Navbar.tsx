"use client";

import { useEffect, useState } from "react";
import { t } from "@/config/themes";
import { useTheme } from "next-themes";
import { log } from "console";

const NAV = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  const handleNavClick = (n: string) => {
    setActive(n);
    scrollTo(n);
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 pt-4 transition-all duration-300">
      <div className="relative mx-auto max-w-4xl h-12 flex items-center justify-center">
        <div
          className={`absolute w-full max-w-4xl flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "max-w-2xl opacity-100 pointer-events-auto"
              : "max-w-4xl opacity-0 pointer-events-none"
          }`}
        >
          {/* Logo pill */}
          <div
            className={`${t.logoThemeClass} border backdrop-blur-md px-4 h-11 rounded-full shadow-lg flex items-center gap-2 transition-colors duration-300`}
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="font-semibold text-sm tracking-wide">apipuy</span>
          </div>

          {/* Nav links pill (Hanya Desktop) */}
          <ul
            className={`hidden md:flex items-center gap-1 ${t.navThemeClass} border backdrop-blur-md px-2 h-11 rounded-full shadow-lg transition-colors duration-300`}
          >
            {NAV.map((n) => {
              const isCurrentActive = mounted && active === n;
              return (
                <li key={n}>
                  <button
                    onClick={() => handleNavClick(n)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isCurrentActive
                        ? "bg-violet-600 text-white shadow-md"
                        : t.bgBtnNav
                    }`}
                  >
                    {n}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Aksi Kanan */}
          <div className="flex items-center gap-2">
            {/* Hamburger Toggle (Hanya Mobile) */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden ${t.toggleThemeClass} border backdrop-blur-md w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 active:scale-95`}
            >
              <div className="flex flex-col gap-1 w-4">
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
            </button>

            {/* Theme toggle pill (Hanya Desktop) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hidden md:flex ${t.toggleThemeClass} border backdrop-blur-md w-11 h-11 rounded-full shadow-lg items-center justify-center text-base transition-all duration-300 hover:scale-110 active:scale-95`}
              title="Toggle theme"
            >
              <div className="transition-transform duration-500 rotate-180 dark:rotate-0 flex items-center justify-center">
                <span className="block dark:hidden">🌙</span>
                <span className="hidden dark:block">☀️</span>
              </div>
            </button>
          </div>
        </div>

        {/* ── TOP: single one-pill ── */}
        <div
          className={`absolute w-full transition-all duration-500 ${
            !scrolled
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            className={`${t.navThemeClass} border backdrop-blur-md rounded-full shadow-lg px-4 h-12 flex items-center justify-between transition-colors duration-300`}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 pl-1">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="font-semibold text-sm tracking-wide text-violet-600 dark:text-violet-400 transition-colors">
                apipuy
              </span>
            </div>

            {/* Nav links (Hanya Desktop) */}
            <div className="hidden md:flex justify-center flex-1">
              <ul className="flex items-center gap-0.5">
                {NAV.map((n) => {
                  const isCurrentActive = mounted && active === n;
                  return (
                    <li key={n}>
                      <button
                        onClick={() => handleNavClick(n)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                          isCurrentActive
                            ? "bg-violet-600 text-white shadow-md"
                            : t.bgBtnNav
                        }`}
                      >
                        {n}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Aksi Kanan */}
            <div className="flex items-center gap-1.5">
              {/* Theme toggle (Hanya Desktop) */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden md:flex bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 w-8 h-8 rounded-full items-center justify-center text-sm transition-all duration-300 hover:scale-110 active:scale-95"
                title="Toggle theme"
              >
                <div className="transition-transform duration-500 rotate-180 dark:rotate-0 flex items-center justify-center">
                  <span className="block dark:hidden">🌙</span>
                  <span className="hidden dark:block">☀️</span>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 active:scale-95"
              >
                <div className="flex flex-col gap-1 w-3.5 text-gray-700 dark:text-gray-300">
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <div
        className={`md:hidden absolute top-full left-0 w-full px-6 pt-3 transition-all duration-300 origin-top ${
          isMobileOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div
          className={`${t.navThemeClass} border backdrop-blur-md rounded-2xl shadow-xl p-2 flex flex-col gap-1`}
        >
          {NAV.map((n) => {
            const isCurrentActive = mounted && active === n;
            return (
              <button
                key={n}
                onClick={() => handleNavClick(n)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isCurrentActive ? "bg-violet-600 text-white" : t.bgBtnNav
                }`}
              >
                {n}
              </button>
            );
          })}

          <div
            className={`h-px w-full my-1 ${t.divider || "bg-gray-200 dark:bg-gray-700"}`}
          />

          {/* Theme Toggle di Dalam Dropdown */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${t.bgBtnNav}`}
          >
            <span>Appearance</span>
            <div className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded-full">
              <span className="block dark:hidden text-xs font-semibold text-gray-700">
                ☀️ Light
              </span>
              <span className="hidden dark:block text-xs font-semibold text-gray-300">
                🌙 Dark
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
