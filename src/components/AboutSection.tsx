import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🎨",
    title: "Who am I?",
    description: "I am a Senior UX Designer crafting seamless digital experiences.",
  },
  {
    emoji: "💡",
    title: "My Philosophy",
    description: "Great design is clarity, usability, and effortless impact.",
  },
  {
    emoji: "⚡",
    title: "My Distinct Edge",
    description: "I bridge design and dev to craft engaging, impactful solutions.",
  },
];

const stats = [
  { label: "Years Experience", value: "9+" },
  { label: "Successful Projects", value: "50+" },
  { label: "Users Impacted", value: "2K+" },
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
        <div className="grid grid-cols-3 gap-8 text-center">
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
      </div>
    </section>
  );
};

export default AboutSection;
