"use client";
import { t } from "@/config/themes";
import me from "@/assets/me.png";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="max-w-4xl mx-auto  min-h-screen grid md:grid-cols-2 gap-12 items-center pt-20">
      {/* LEFT — Text */}
      <div>
        <span
          className={`inline-flex items-center gap-2 ${t.badge} border text-xs px-4 py-1.5 rounded-full mb-6`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for hire
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          Hi, I'm{" "}
          <span className={`${t.accent} relative`}>
            Muhammad Afiffudin
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
            >
              <path
                d="M0 6 Q75 0 150 5 Q225 10 300 4"
                stroke="#7c6ff7"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </span>
          <br />
          <span
            className={`${t.heroSub} text-2xl md:text-3xl font-medium mt-2 block`}
          >
            Full Stack Developer
          </span>
        </h1>
        <p className={`${t.sub} text-base leading-relaxed mb-8 max-w-md`}>
          I craft clean, scalable web applications with a passion for AI
          integration and delivering exceptional user experiences.
        </p>
        {/* CTA */}
        <div className="flex gap-3 flex-wrap mb-10">
          <button
            onClick={() => scrollTo("Projects")}
            className={`${t.btn} px-6 py-3 rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5`}
          >
            View my work ↓
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            className={`border ${t.btnOut} px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5`}
          >
            Get in touch
          </button>
        </div>
        {/* Mini stats row */}
        <div className={`flex gap-6 pt-6 border-t ${t.border}`}>
          {[
            ["3+", "Years exp."],
            ["20+", "Projects"],
            ["10+", "Clients"],
          ].map(([n, l]) => (
            <div key={l}>
              <span className={`block text-xl font-bold ${t.accent}`}>{n}</span>
              <span className={`${t.muted} text-xs`}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="flex justify-center items-center">
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl scale-110 animate-pulse" />
          {/* Rotating dashed ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "18s" }}
            viewBox="0 0 300 300"
          >
            <circle
              cx="150"
              cy="150"
              r="140"
              fill="none"
              stroke="#7c6ff7"
              strokeWidth="1"
              strokeDasharray="8 14"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>

          {/* Floating card wrapper */}
          <div className="relative z-10 m-8 animate-float-y">
            {/* Photo frame */}
            <div
              className={`w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 ${t.photoFrame} shadow-2xl shadow-violet-500/20`}
            >
              <div
                className={`w-full h-full ${t.photoBg} flex flex-col items-center justify-center gap-2`}
              >
                <Image
                  src={me}
                  alt={`Muhammad Afiffudin Al Mahdi`}
                  className="object-contain w-full h-full rounded-md shadow"
                />
              </div>
            </div>

            {/* Floating badge — top right */}
            <div
              style={{
                animation: "floatY 3s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
              className={`absolute -top-4 -right-4 ${t.floatBadge} border rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-medium`}
            >
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="react js"
                  loading="lazy"
                  className="w-4 h-4"
                />
              </span>{" "}
              React.js
            </div>

            {/* Floating badge — bottom left */}
            <div
              style={{
                animation: "floatY 3.5s ease-in-out infinite",
                animationDelay: "1s",
              }}
              className={`absolute -bottom-4 -left-4 ${t.floatBadge} border rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-medium`}
            >
              <span>
                {" "}
                <img
                  src="https://api.iconify.design/lucide:sparkles.svg?color=%238b5cf6"
                  alt="react js"
                  loading="lazy"
                  className="w-4 h-4"
                />
              </span>{" "}
              AI Integration
            </div>

            {/* Floating badge — bottom right */}
            <div
              style={{
                animation: "floatY 4s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
              className={`absolute -bottom-4 -right-2 ${t.floatBadge} border rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-medium`}
            >
              <span>
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="react js"
                  loading="lazy"
                  className="w-4 h-4"
                />
              </span>{" "}
              Node.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
