import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pipuyy.vercel.app"),

  title: {
    default: "pipuyy | Full Stack Developer",
    template: "%s | pipuyy",
  },
  description:
    "Portfolio of Muhammad Afiffudin (Pipuy), a passionate Full Stack Developer based in Indonesia. Specializing in modern web development, React.js, Node.js, and AI integrations.",

  keywords: [
    "Muhammad Afiffudin",
    "Muhammad Afiffudin Al Mahdi",
    "Politeknik Negeri Batam",
    "Polibatam",
    "Pipuy",
    "Full Stack Developer",
    "Ai Integration",
    "Frontend Developer",
    "Backend Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Indonesia",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Afiffudin" }],
  creator: "Muhammad Afiffudin",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pipuyy.vercel.app/",
    title: "Muhammad Afiffudin | Full Stack Developer",
    description:
      "Explore my projects, skills, and experience as a Full Stack Developer.",
    siteName: "Muhammad Afiffudin Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Afiffudin Portfolio Cover",
      },
    ],
  },

  // Twitter Card: Untuk preview link di Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afiffudin | Full Stack Developer",
    description:
      "Explore my projects, skills, and experience as a Full Stack Developer.",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
