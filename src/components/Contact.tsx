"use client";

import { t } from "@/config/themes";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
  };
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <div className="w-12 h-1 bg-violet-500 rounded mb-4" />
      <h2 className="text-3xl font-semibold mb-1">Contact</h2>
      <p className={`${t.muted} text-sm mb-12`}>Let's work together</p>
      <div className={`${t.bg2} border ${t.border} rounded-2xl p-8`}>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-3">Get in touch</h3>
            <p className={`${t.sub} text-sm mb-6`}>
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
            <div className="flex flex-col gap-3">
              {[
                ["💼", "linkedin.com/in/afiffudin"],
                ["🐙", "github.com/afiffudin"],
                ["📧", "afif@yourname.dev"],
              ].map(([icon, label]) => (
                <a
                  key={label}
                  href="#"
                  className={`flex items-center gap-3 ${t.sub} hover:${t.accent} text-sm transition-colors`}
                >
                  <span
                    className={`w-8 h-8 ${t.socialIcon} border rounded-lg flex items-center justify-center`}
                  >
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <span className="text-4xl">🎉</span>
              <p className="font-medium">Message sent!</p>
              <p className={`${t.sub} text-sm`}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className={`text-xs ${t.accent} border border-violet-500/30 px-4 py-1.5 rounded-lg hover:bg-violet-500/10 transition-colors mt-2`}
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {(
                [
                  { key: "name", placeholder: "Your name", type: "text" },
                  { key: "email", placeholder: "Your email", type: "email" },
                ] as const
              ).map(({ key, placeholder, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={`${t.cardInner} border rounded-lg px-4 py-2.5 text-sm ${t.text} placeholder-gray-500 outline-none transition-colors w-full`}
                />
              ))}
              <textarea
                placeholder="Your message..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${t.cardInner} border rounded-lg px-4 py-2.5 text-sm ${t.text} placeholder-gray-500 outline-none resize-none transition-colors w-full`}
              />
              <button
                onClick={handleSend}
                className={`${t.btn} px-6 py-2.5 rounded-lg text-sm font-medium transition-colors self-start`}
              >
                Send message →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
