"use client";
import { t } from "@/config/themes";

export default function Hero() {
  const scrollTo = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="max-w-4xl mx-auto px-6 min-h-screen flex flex-col justify-center pt-20">
      <span
        className={`inline-block ${t.badge} border text-xs px-4 py-1 rounded-full mb-6 w-fit`}
      >
        👋 Available for hire
      </span>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Hi, I'm <span className={t.accent}>Muhammad Afiffudin</span>
        <br />
        <span className="text-3xl md:text-5xl">Full Stack Developer</span>
      </h1>
      <p className={`${t.sub} text-lg max-w-xl mb-8`}>
        I build clean, scalable web applications with a focus on performance, AI
        integration, and great user experience.
      </p>
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => scrollTo("Projects")}
          className={`${t.btn} px-6 py-3 rounded-lg text-sm font-medium transition-colors`}
        >
          View my work
        </button>
        <button
          onClick={() => scrollTo("Contact")}
          className={`border ${t.btnOut} px-6 py-3 rounded-lg text-sm transition-colors`}
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}
