import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectNestify from "@/assets/project-nestify.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectSteakshack from "@/assets/project-steakshack.jpg";
import projectPetcare from "@/assets/project-petcare.jpg";

const projects = [
  {
    title: "Pet Care",
    description: "Mobile app for pet grooming, buying, and care services.",
    tags: ["Pet Care", "Mobile App"],
    image: projectPetcare,
    slug: "pet-care",
  },
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-card/50" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Link to={`/project/${project.slug}`} key={project.title}>
            <motion.div
              className="group bg-background rounded-2xl overflow-hidden border border-border cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.15)" }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] sm:aspect-square object-cover"
                  loading="lazy"
                  width={640}
                  height={640}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
