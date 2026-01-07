import { useState } from "react";
import { House, Notebook } from "phosphor-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

/* ---------- Icon Button (only active shows circle) ---------- */
const IconButton = ({ id, activeIcon, setActiveIcon, children, href }) => {
  const isActive = activeIcon === id;

  const className = `
    w-11 h-11
    flex items-center justify-center
    rounded-full
    transition
    ${isActive ? "bg-black/10 dark:bg-white/10" : ""}
    active:bg-black/15 dark:active:bg-white/15
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={() => setActiveIcon(id)}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={() => setActiveIcon(id)}
      className={className}
    >
      {children}
    </button>
  );
};

export default function BottomNavbar() {
  const { theme, setTheme } = useTheme();
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-1
          px-2 py-3
          rounded-full
          bg-[var(--card)]
          border border-[var(--border)]
          backdrop-blur-md
          text-[var(--icon)]
        "
      >
        {/* HOME */}
        <IconButton
          id="home"
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
        >
          <House size={22} weight="regular" />
        </IconButton>

        {/* NOTEBOOK */}
        <IconButton
          id="notes"
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
        >
          <Notebook size={22} weight="regular" />
        </IconButton>

        {/* SEPARATOR */}
        <div className="h-6 w-px bg-[var(--border)] mx-1" />

        {/* GITHUB */}
        <IconButton
          id="github"
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          href="https://github.com/Shivam30Mishra"
        >
          <FaGithub size={20} />
        </IconButton>

        {/* LINKEDIN */}
        <IconButton
          id="linkedin"
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          href="https://www.linkedin.com/in/shivam-mishra-777026280/"
        >
          <FaLinkedin size={20} />
        </IconButton>

        {/* X */}
        <IconButton
          id="twitter"
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          href="https://x.com/shivamM97963756"
        >
          <FaXTwitter size={18} />
        </IconButton>

        {/* SEPARATOR */}
        <div className="h-6 w-px bg-[var(--border)] mx-1" />

        {/* THEME TOGGLE */}
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setActiveIcon("theme");
          }}
          className={`
            w-11 h-11
            flex items-center justify-center
            rounded-full
            transition
            ${activeIcon === "theme" ? "bg-black/10 dark:bg-white/10" : ""}
            active:bg-black/15 dark:active:bg-white/15
          `}
        >
          {theme === "dark" ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>
      </div>
    </div>
  );
}
