import { t } from "@/config/themes";
import logoTempa from "@/assets/logo-tempa.png";
import logoClavo from "@/assets/logo-clavo.png";
import logoJagoIngat from "@/assets/logo-JagoIngat.png";
import coverClavo from "@/assets/cover-clavo.png";
import coverJagoIngat from "@/assets/cover-JagoIngat.png";
import coverTempa from "@/assets/cover-tempa.png";
import Image from "next/image";

export default function Projects() {
  const PROJECTS = [
    {
      icon: logoTempa,
      cover: coverTempa,
      title: "Tempa",
      subtitle: "Tempat Eksplorasi Masa Depan dan Persiapan Arah",
      desc: "A digital education platform that lets students experience college life before committing to a major. Explore free trial courses across disciplines, get AI-powered guidance, and make a confident, informed decision about your academic future.",
      tags: ["React.js", "Express.js", "Prisma", "MySQL", "Gemini API"],
      github: "https://github.com/T-E-M-P-A",
      live: "https://tempaa.ddns.net/",
    },
    {
      icon: logoClavo,
      cover: coverClavo,
      title: "Clavo",
      subtitle: "Fruit Ripeness Detection App",
      desc: "An Android app for real-time clove ripeness detection using on-device ML. Powered by TensorFlow Lite and MediaPipe, it delivers fast and accurate agricultural analysis directly from your phone — no internet required.",
      tags: ["Kotlin", "TensorFlow Lite", "MediaPipe"],
      github: "https://github.com/Jojo297/Clavo",
      live: "https://fruitdetect.id",
    },
    {
      icon: logoJagoIngat,
      cover: coverJagoIngat,
      // "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80",
      title: "JagoIngat",
      subtitle: "Memory Enhancement App",
      desc: "A React-based memory training app featuring interactive exercises and games to sharpen recall and cognitive skills. Clean UI, progress tracking, and techniques suited for all ages make memory improvement fun and accessible.",
      tags: ["React.js", "Tailwind CSS"],
      github: "https://github.com/Jojo297/JagoIngat",
      live: "https://jago-ingat.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="max-w-4xl mx-auto py-24 px-6 md:px-0">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">Projects</h2>
      <p className={`${t.muted} text-sm mb-12`}>Some things I've built</p>
      <div className="grid md:grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className={`border ${t.card} rounded-xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 duration-200`}
          >
            {/* Cover Image */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={p.cover}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linier-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-2xl">
                <Image
                  src={p.icon}
                  alt={`${p.title} logo`}
                  className="object-contain w-8 h-8 rounded-md shadow"
                />
              </span>
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-sm">{p.title}</h3>
                <div className="flex gap-2 ml-2 shrink-0">
                  {[
                    ["GitHub", p.github],
                    ["Live", p.live],
                  ].map(([l, href]) => (
                    <a
                      key={l}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs ${t.sub} border ${t.border} hover:border-violet-400 hover:text-violet-400 px-2 py-0.5 rounded transition-colors`}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
              <p className={`${t.muted} text-xs mb-2`}>{p.subtitle}</p>
              <p className={`${t.sub} text-xs leading-relaxed flex-1 mb-4`}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs border ${t.tag} px-2 py-0.5 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
