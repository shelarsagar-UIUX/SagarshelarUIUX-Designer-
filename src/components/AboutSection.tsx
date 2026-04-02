import { motion } from "framer-motion";

const aboutBio = "I am Sagar Shelar — a UI/UX designer who loves solving complex problems with user-friendly solutions. With a background in psychology and design, I specialize in creating intuitive experiences. Let's connect!";

const cards = [
  {
    emoji: "🎨",
    title: "Who am I?",
    description:
      "A versatile UI/UX Designer with 3+ years of experience designing intuitive, user-centric digital products for startups and enterprises.",
  },
  {
    emoji: "💡",
    title: "My Philosophy",
    description:
      "Great design is clarity, usability, and effortless impact — building accessible, meaningful, and delightful user experiences.",
  },
  {
    emoji: "⚡",
    title: "My Distinct Edge",
    description:
      "I bridge design and development to deliver impactful solutions — from user research and wireframing to high-fidelity UI and design systems.",
  },
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "12+" },
  { label: "Task Completion Boost", value: "35%" },
];

const experience = [
  {
    role: "UI Designer",
    company: "Clover Infotech (Client - Bajaj Allianz)",
    location: "Pune",
    period: "Jun 2023 - Present",
    highlights: [
      "Spearheaded UI design for web apps, mobile apps, and enterprise websites",
      "Conducted user research, A/B testing, wireframes, and prototypes",
      "Increased user satisfaction by enhancing workflows and reducing task time",
    ],
  },
  {
    role: "UI/UX Designer & Researcher",
    company: "Springware IT Consulting",
    location: "Pune",
    period: "May 2022 - Jun 2023",
    highlights: [
      "Delivered UI designs for mobile/web across industries",
      "Partnered with dev teams for responsive implementation and smooth handoffs",
      "Enhanced UX through iterative testing and A/B testing",
    ],
  },
  {
    role: "Graphics Designer",
    company: "Springware IT Consulting",
    location: "Pune",
    period: "May 2021 - May 2022",
    highlights: [
      "Designed promotional assets for apps, websites, and social media",
      "Handled end-to-end design tasks from concept to final output",
    ],
  },
  {
    role: "Junior Associate Designer",
    company: "Affinity X Global Advertising",
    location: "Pune",
    period: "Aug 2019 - Sept 2020",
    highlights: [
      "Designed logos, brochures, social media graphics, and marketing materials",
    ],
  },
];

const skills = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Mobile-First Design",
];

const AboutSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-20 bg-background" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-4xl mb-4 block">{card.emoji}</span>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-gradient">{stat.value}</span>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-6 border-l-2 border-primary/30"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-1">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
