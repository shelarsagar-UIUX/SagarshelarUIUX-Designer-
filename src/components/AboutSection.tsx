import { motion } from "framer-motion";
import { Download } from "lucide-react";

const hardSkills = [
  { emoji: "🎨", label: "Product Design" },
  { emoji: "✏️", label: "Wireframing" },
  { emoji: "📱", label: "Mobile App Design" },
  { emoji: "🖥️", label: "Web Design" },
  { emoji: "🖌️", label: "Prototyping" },
  { emoji: "🖼️", label: "Mockup" },
];

const softSkills = [
  { emoji: "🔄", label: "Adaptability" },
  { emoji: "🕐", label: "Time Management" },
  { emoji: "🏃", label: "Agile Environments" },
  { emoji: "💬", label: "Communication" },
  { emoji: "🎤", label: "Presentation" },
  { emoji: "🤝", label: "Team Work" },
];

const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
];

const experience = [
  {
    company: "Clover Infotech",
    subtitle: "Client - Bajaj Allianz",
    role: "UI Designer",
    period: "Jun 2023 - Present",
    highlights: [
      "Spearheaded UI design for web apps, mobile apps, and enterprise websites",
      "Conducted user research, A/B testing, wireframes, and prototypes",
      "Increased user satisfaction by enhancing workflows and reducing task time",
    ],
  },
  {
    company: "Springware IT Consulting",
    role: "UI/UX Designer & Researcher",
    period: "May 2022 - Jun 2023",
    highlights: [
      "Delivered UI designs for mobile/web across industries",
      "Partnered with dev teams for responsive implementation and smooth handoffs",
      "Enhanced UX through iterative testing and A/B testing",
    ],
  },
  {
    company: "Springware IT Consulting",
    role: "Graphics Designer",
    period: "May 2021 - May 2022",
    highlights: [
      "Designed promotional assets for apps, websites, and social media",
      "Handled end-to-end design tasks from concept to final output",
    ],
  },
  {
    company: "Affinity X Global Advertising",
    role: "Junior Associate Designer",
    period: "Aug 2019 - Sept 2020",
    highlights: [
      "Designed logos, brochures, social media graphics, and marketing materials",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-20 bg-background" id="about">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div className="text-center space-y-3" {...fadeUp}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            My Design Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A look into the roles, teams, and work that shaped my path.
          </p>
        </motion.div>

        {/* Work History */}
        <div className="space-y-6">
          <motion.h3 className="text-2xl font-bold text-center" {...fadeUp}>
            Work History
          </motion.h3>
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold">{exp.company}</h4>
              {exp.subtitle && (
                <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
              )}
              <p className="text-base font-medium text-foreground/80 mt-1">{exp.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Product Design Skills */}
        <motion.div className="text-center" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Product Design Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <div className="bg-card rounded-2xl p-8 border border-border text-left">
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">Hard Skills</h3>
              <div className="space-y-4">
                {hardSkills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-4">
                    <span className="text-2xl">{skill.emoji}</span>
                    <span className="text-lg font-bold">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Soft Skills */}
            <div className="bg-card rounded-2xl p-8 border border-border text-left">
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-4">
                    <span className="text-2xl">{skill.emoji}</span>
                    <span className="text-lg font-bold">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tool Stack */}
        <motion.div {...fadeUp}>
          <h3 className="text-2xl font-bold text-center mb-8">Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="bg-card rounded-2xl p-8 border border-border flex items-center justify-center gap-4 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                <span className="text-xl font-bold">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume */}
        <motion.div className="flex justify-center" {...fadeUp}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
