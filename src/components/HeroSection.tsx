import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";
import projectNestify from "@/assets/project-nestify.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectSteakshack from "@/assets/project-steakshack.jpg";

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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <img
              src={avatar}
              alt="Sagar Shelar"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              width={48}
              height={48}
            />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block"
            >
              Hello! <span className="animate-wave">👋</span> I'm
            </motion.span>
            <br />
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              Sagar Shelar
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I am a UI/UX designer who loves solving complex problems with user-friendly solutions. With a background in psychology and design, I specialize in creating intuitive experiences. Let's connect!
          </motion.p>

          <motion.div
            className="flex gap-3 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
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
