import { t } from "@/config/themes";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">About Me</h2>
      <p className={`${t.muted} text-sm mb-12`}>A little bit about who I am</p>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div
            className={`w-44 h-44 rounded-full ${t.bg3} border-2 ${t.border} flex items-center justify-center text-6xl`}
          >
            👨‍💻
          </div>
        </div>
        <div>
          <p className={`${t.sub} text-sm leading-relaxed mb-4`}>
            Hi! I'm{" "}
            <strong className={t.text}>Muhammad Afiffudin Al Mahdi</strong>, a
            passionate full-stack developer who loves building things for the
            web. From REST APIs to AI-powered features, I enjoy turning complex
            problems into elegant solutions.
          </p>
          <p className={`${t.sub} text-sm leading-relaxed mb-6`}>
            I work across the stack — backend with Node.js, Express & Laravel,
            frontend with React & Tailwind, and I've integrated AI tools like
            Gemini API and TensorFlow Lite into real products. ☕
          </p>
          <div className="flex gap-8">
            {[
              ["3+", "Years exp."],
              ["20+", "Projects"],
              ["10+", "Clients"],
            ].map(([n, l]) => (
              <div key={l}>
                <span className={`block text-2xl font-bold ${t.accent}`}>
                  {n}
                </span>
                <span className={`${t.muted} text-xs`}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
