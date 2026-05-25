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

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 w-full z-50 px-6 pt-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo pill */}
        <div
          className={`pointer-events-auto ${t.logoThemeClass} border backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300`}
        >
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="font-semibold text-sm tracking-wide">pipuy</span>
        </div>

        {/* Center nav pill */}
        <ul
          className={`pointer-events-auto hidden sm:flex items-center gap-1 ${t.navThemeClass} border backdrop-blur-md px-2 py-1.5 rounded-full shadow-lg transition-all duration-300`}
        >
          {NAV.map((n) => {
            // 1. Cek apakah sudah di-mount dan apakah menu ini yang aktif
            const isCurrentActive = mounted && active === n;

            return (
              <li key={n}>
                <button
                  onClick={() => {
                    setActive(n);
                    scrollTo(n);
                  }}
                  // 2. Gunakan variabel isCurrentActive untuk menentukan kelas
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${
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

        {/* Theme toggle pill */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`pointer-events-auto ${t.toggleThemeClass} border backdrop-blur-md w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-base transition-all duration-300 hover:scale-110 active:scale-95`}
          title="Toggle theme"
        >
          <span
            className={`transition-transform duration-500 ${t.logoAnimation}`}
          >
            {mounted ? (theme === "dark" ? "☀️" : "🌙") : "   "}
          </span>
        </button>
      </div>
    </nav>
  );
}
