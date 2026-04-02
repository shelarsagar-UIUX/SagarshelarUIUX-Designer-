import { motion } from "framer-motion";
import { Star } from "lucide-react";

const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ValueSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-20 bg-background" id="value">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 tracking-wide uppercase">
            Value
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Why Work With Me?
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-lg mx-auto">
            Backed by experience, driven by purpose.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 — Experience */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 border border-border flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Over <span className="text-gradient">3+ years</span> of experience
            </h3>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              Crafting user-centric digital products for startups and enterprises alike.
            </p>
          </motion.div>

          {/* Card 2 — Solves problems */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 border border-border flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Solves <span className="text-gradient">problems</span> with designs
            </h3>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              Turning complex challenges into simple, intuitive user experiences.
            </p>
          </motion.div>

          {/* Card 3 — Milestones / Stats */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 border border-border"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-8 leading-snug">
              Turning <span className="text-gradient">ideas</span> into milestones
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/60 rounded-2xl p-5 text-center">
                <Stars />
                <p className="text-3xl md:text-4xl font-extrabold mt-2">+ 12</p>
                <p className="text-muted-foreground text-xs mt-1">Successful Projects</p>
              </div>
              <div className="bg-secondary/60 rounded-2xl p-5 text-center">
                <Stars />
                <p className="text-3xl md:text-4xl font-extrabold mt-2">+ 35%</p>
                <p className="text-muted-foreground text-xs mt-1">Task Completion Boost</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Tools */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 border border-border flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {tools.map((tool, i) => (
                <motion.img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 200 }}
                />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-center leading-snug">
              Skilled in <span className="text-gradient">modern design</span> tools
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
