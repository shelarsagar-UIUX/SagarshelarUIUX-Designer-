import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Avatar logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={avatar}
            alt="Sagar Shelar"
            className="w-9 h-9 rounded-full object-cover border-2 border-primary"
          />
          <span className="font-bold text-sm hidden sm:inline">Sagar</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Dark mode toggle + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <motion.button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full block"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full block"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full block"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-2">
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
