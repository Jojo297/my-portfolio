import { t } from "@/config/themes";

const SOCIALS = [
  {
    name: "LinkedIn",
    handle: "Muhammad Afiffudin",
    href: "https://www.linkedin.com/in/apipuu",
    color: "#0A66C2",
    shadow: "hover:shadow-[#0A66C2]/25",
    border: "hover:border-[#0A66C2]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@Jojo297",
    href: "https://github.com/Jojo297",
    colorDark: "#ffffff",
    colorLight: "#111827",
    shadow: "hover:shadow-gray-500/25",
    borderDark: "hover:border-gray-400",
    borderLight: "hover:border-gray-800",
    logoDark: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-900">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    logoLight: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    handle: "mafiffudin28@gmail.com",
    href: "mailto:afiffudin@gmail.com",
    color: null,
    shadow: "hover:shadow-red-500/25",
    border: "hover:border-red-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="#EA4335"
        />
        <path
          d="M0 5.457v.727l12 9 12-9v-.727C24 3.434 21.69 2.28 20.073 3.493L18.545 4.64 12 9.548 5.455 4.64 3.927 3.493C2.31 2.28 0 3.434 0 5.457z"
          fill="#FBBC05"
        />
        <path
          d="M0 6.184v13.182c0 .904.732 1.636 1.636 1.636H5.91V11.73L0 6.184z"
          fill="#34A853"
        />
        <path
          d="M18.545 11.73v9.273h4.273A1.636 1.636 0 0 0 24 19.366V6.184l-5.455 5.545z"
          fill="#4285F4"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@apipuy",
    href: "https://www.instagram.com/apipuuuuuuuuuuuuu?igsh=dzBqZWI5bjk0Ymx3",
    color: "instagram",
    shadow: "hover:shadow-pink-500/25",
    border: "hover:border-pink-500",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-24 px-6 md:px-0">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">About Me</h2>
      <p className={`${t.muted} text-sm mb-12`}>A little bit about who I am</p>

      <div className=" gap-10 items-start">
        {/* Bio — 3 cols */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <p className={`${t.sub} text-base leading-relaxed`}>
            Hi! I'm{" "}
            <span className={`${t.text} font-semibold`}>
              Muhammad Afiffudin Al Mahdi
            </span>
            , a passionate full-stack developer based in Indonesia. I love
            crafting digital experiences — from robust REST APIs to AI-powered
            features — turning complex problems into clean, elegant solutions.
          </p>
          <p className={`${t.sub} text-base leading-relaxed`}>
            I work across the full stack: backend with{" "}
            <span className={`${t.text} font-medium`}>
              Node.js, Express & Laravel
            </span>
            , frontend with{" "}
            <span className={`${t.text} font-medium`}>React & Tailwind</span>,
            and I've shipped real products integrating{" "}
            <span className={`${t.text} font-medium`}>
              Gemini AI, MediaPipe & TensorFlow Lite
            </span>
            .
          </p>
          <p className={`${t.sub} text-base leading-relaxed`}>
            Driven by curiosity and a desire to build things that actually
            matter. When I'm not coding, you'll find me exploring new tech or
            enjoying a good cup of coffee ☕
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "🇮🇩 Based in Indonesia",
              "🎓 Computer Science",
              "🤖 AI Enthusiast",
            ].map((c) => (
              <span
                key={c}
                className={`text-xs px-3 py-1.5 rounded-full border ${t.tag} font-medium`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Socials — 2 cols */}
      </div>
    </section>
  );
}
