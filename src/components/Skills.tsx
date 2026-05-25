import { t } from "@/config/themes";

export default function Skills() {
  const SKILL_GROUPS = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "HTML/CSS"],
    },
    {
      category: "Frameworks & Libraries",
      icon: "📦",
      skills: [
        "Node.js",
        "Express.js",
        "React.js",
        "Laravel",
        "Prisma ORM",
        "Tailwind CSS",
      ],
    },
    {
      category: "AI & Integration",
      icon: "🤖",
      skills: ["Gemini AI API", "MediaPipe", "TensorFlow Lite"],
    },
    {
      category: "Tools & Infrastructure",
      icon: "🛠️",
      skills: [
        "Docker",
        "Nginx",
        "Linux (Ubuntu)",
        "Git/GitHub",
        "aaPanel",
        "Postman",
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">Skills</h2>
      <p className={`${t.muted} text-sm mb-12`}>Technologies I work with</p>
      <div className="flex flex-col gap-6">
        {SKILL_GROUPS.map((g) => (
          <div
            key={g.category}
            className={`${t.catBg} rounded-xl p-5 border ${t.border}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{g.icon}</span>
              <h3 className={`font-semibold text-sm ${t.accent}`}>
                {g.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className={`text-xs px-3 py-1.5 rounded-lg border ${t.tag} font-medium`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
