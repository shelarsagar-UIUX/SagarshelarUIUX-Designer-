import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";
import projectNestify from "@/assets/project-nestify.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectSteakshack from "@/assets/project-steakshack.jpg";
import { Palette, PenTool, Code, Download } from "lucide-react";

const row1 = [projectNestify, projectPortfolio, projectMarketing, projectSteakshack];
const row2 = [projectSteakshack, projectMarketing, projectPortfolio, projectNestify];

const MarqueeRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => {
  const doubled = [...images, ...images, ...images];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={reverse ? "scroll-marquee-reverse" : "scroll-marquee"}
        style={{ display: "flex", gap: "1rem", width: "max-content" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="w-52 h-36 md:w-64 md:h-44 rounded-xl overflow-hidden flex-shrink-0 bg-card"
          >
            <img
              src={img}
              alt="Project"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const roleTags = [
  { label: "UI/UX Designer", icon: Palette, bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-300" },
  { label: "Vibe Coder", icon: Code, bg: "bg-pink-50 dark:bg-pink-950/40", text: "text-pink-700 dark:text-pink-300" },
  { label: "Graphics Designer", icon: PenTool, bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col items-center lg:items-start justify-center px-8 md:px-16 lg:px-20 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Large profile photo card */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
            animate={{ scale: 1, opacity: 1, rotate: -3 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
          >
            <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
              <img
                src={avatar}
                alt="Sagar Shelar"
                className="w-full h-full object-cover"
                width={256}
                height={320}
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="inline-block">
                Hi <span className="animate-wave">👋</span>
              </span>
              <br />
              <span className="text-gradient inline-block mt-1">
                I'm Sagar Shelar,
              </span>
              <br />
              <span className="inline-block mt-1">
                and I love solving complex problems with user-friendly solutions!
              </span>
            </h1>
          </motion.div>

          {/* Role tags */}
          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {roleTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tag.bg} ${tag.text} font-semibold text-xs sm:text-sm w-fit`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <tag.icon size={16} />
                {tag.label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex gap-3 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View portfolio
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
            <motion.a
              href="https://www.behance.net/sagarshelar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Behance ↗
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right gradient with marquee */}
      <div className="hidden lg:flex gradient-hero relative flex-col justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          <MarqueeRow images={row1} />
          <MarqueeRow images={row2} reverse />
        </motion.div>

        <motion.span
          className="absolute bottom-12 right-12 text-[10rem] font-extrabold leading-none select-none pointer-events-none"
          style={{ color: "hsl(0 0% 100% / 0.15)" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          hello
        </motion.span>
      </div>

      {/* Mobile marquee below hero */}
      <motion.div
        className="lg:hidden overflow-hidden pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <MarqueeRow images={row1} />
        <MarqueeRow images={row2} reverse />
      </motion.div>
    </section>
  );
};

export default HeroSection;
