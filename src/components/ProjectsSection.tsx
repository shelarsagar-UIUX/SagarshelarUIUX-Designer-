import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectNestify from "@/assets/project-nestify.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectSteakshack from "@/assets/project-steakshack.jpg";

const projects = [
  {
    title: "Nestify Furnitures",
    description: "Furniture marketplace for affordable new & secondhand.",
    tags: ["Furniture", "E-commerce Website"],
    image: projectNestify,
    slug: "nestify-furnitures",
  },
  {
    title: "Adam Hiklin Portfolio",
    description: "Sleek portfolio with bold visuals, smooth flow, and motion.",
    tags: ["Portfolio", "Website"],
    image: projectPortfolio,
    slug: "adam-hiklin-portfolio",
  },
  {
    title: "Vision Pulse Marketing",
    description: "Bold site showcasing services, work, and unique style.",
    tags: ["Marketing", "Website"],
    image: projectMarketing,
    slug: "vision-pulse-marketing",
  },
  {
    title: "Steak Shack",
    description: "Mobile app to browse, customize, and order steaks.",
    tags: ["Restaurant", "Mobile App"],
    image: projectSteakshack,
    slug: "steak-shack",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-20 bg-card/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Link to={`/project/${project.slug}`} key={project.title}>
            <motion.div
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
