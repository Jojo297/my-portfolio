"use client";

import { useEffect, useState } from "react";
import { t } from "@/config/themes";
import { useTheme } from "next-themes";

const NAV = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
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
    <nav
      className={`fixed top-0 w-full ${t.nav} backdrop-blur border-b z-50 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className={`${t.accent} font-semibold tracking-wide text-sm`}>
          afif.dev
        </span>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6">
            {NAV.map((n) => (
              <li key={n}>
                <button
                  onClick={() => scrollTo(n)}
                  className={`${t.sub} hover:${t.text} text-sm transition-colors cursor-pointer hover:text-violet-600`}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${t.toggle} w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all`}
            title="Toggle theme"
          >
            {mounted ? (theme === "dark" ? "☀️" : "🌙") : "   "}
          </button>
        </div>
      </div>
    </nav>
  );
}
