import { t } from "@/config/themes";

export default function Footer() {
  return (
    <footer
      className={`border-t ${t.footer} py-6 text-center text-sm transition-colors duration-300`}
    >
      Designed & built by{" "}
      <span className={`${t.text} font-medium`}>
        Muhammad Afiffudin Al Mahdi
      </span>{" "}
      · 2026
    </footer>
  );
}
