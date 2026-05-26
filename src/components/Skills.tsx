import { t } from "@/config/themes";

export default function Skills() {
  const SKILL_GROUPS = [
    {
      category: "Frameworks & Libraries",
      colSpan: "md:col-span-2",
      skills: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
          invertDark: true,
        },
        {
          name: "Laravel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "Prisma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
          invertDark: true,
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Languages",
      colSpan: "md:col-span-1",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          name: "HTML/CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
      ],
    },
    {
      category: "AI & Integration",
      colSpan: "md:col-span-1",
      skills: [
        // AI tidak punya logo spesifik di devicon, kita pakai emoji/logo umum Google
        {
          name: "Gemini API",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
        },
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        },
        { name: "MediaPipe", emoji: "🤖" }, // Menggunakan fallback emoji jika tidak ada logo
      ],
    },
    {
      category: "Infrastructure & Tools",
      colSpan: "md:col-span-2",
      skills: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "Ubuntu",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
        },
        {
          name: "Nginx",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
        },
        {
          name: "Git/GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          invertDark: true,
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
      ],
    },
    {
      category: "Databases",
      colSpan: "md:col-span-3",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Redis",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto py-24 px-6 md:px-0">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">Skills</h2>
      <p className={`${t.muted} text-sm mb-12`}>Technologies I work with</p>

      {/* Grid Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((g) => (
          <div
            key={g.category}
            className={`${g.colSpan} ${t.bg2} rounded-2xl p-6 border ${t.border} shadow-sm hover:shadow-md transition-shadow duration-300`}
          >
            <h3
              className={`font-semibold text-sm ${t.sub} mb-6 tracking-wide uppercase`}
            >
              {g.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {g.skills.map((s) => (
                <div
                  key={s.name}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${t.border} ${t.bg3} hover:bg-violet-500/5 hover:border-violet-500/30 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10`}
                >
                  {/* Icon/Logo */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt={s.name}
                        loading="lazy"
                        className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-3`}
                      />
                    ) : (
                      <span className="text-sm transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-3"></span>
                    )}
                  </div>

                  {/* Teks Skill */}
                  <span
                    className={`text-sm font-medium ${t.text} transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400`}
                  >
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
