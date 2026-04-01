import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import projectNestify from "@/assets/project-nestify.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectSteakshack from "@/assets/project-steakshack.jpg";

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  overview: string;
  role: string;
  duration: string;
  tools: string[];
  challenge: string;
  process: string[];
  solution: string;
  outcome: string[];
}> = {
  "nestify-furnitures": {
    title: "Nestify Furnitures",
    subtitle: "Furniture marketplace for affordable new & secondhand.",
    tags: ["Furniture", "E-commerce Website"],
    image: projectNestify,
    overview:
      "Nestify is an e-commerce platform designed to make furniture shopping seamless and affordable. The goal was to create a clean, user-friendly marketplace where buyers can browse new and secondhand furniture with confidence.",
    role: "UI/UX Designer",
    duration: "3 Months",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    challenge:
      "Users found it difficult to trust secondhand furniture online due to lack of transparency in product quality and unclear return policies. The existing competitors had cluttered interfaces that overwhelmed first-time buyers.",
    process: [
      "Conducted user research with 20+ potential buyers to understand pain points in online furniture shopping.",
      "Created user personas and journey maps to identify key friction points in the buying flow.",
      "Developed low-fidelity wireframes focusing on product discoverability and trust signals.",
      "Iterated on high-fidelity prototypes with usability testing across 3 rounds.",
      "Designed a cohesive design system for consistent UI across web and mobile.",
    ],
    solution:
      "Designed a minimalist interface with prominent trust badges, detailed product condition ratings, 360° image views, and a streamlined checkout. Added AR preview functionality for spatial visualization.",
    outcome: [
      "40% increase in user engagement during usability testing",
      "Reduced cart abandonment by 25% through simplified checkout",
      "Positive feedback from 90% of test participants on product trust signals",
    ],
  },
  "adam-hiklin-portfolio": {
    title: "Adam Hiklin Portfolio",
    subtitle: "Sleek portfolio with bold visuals, smooth flow, and motion.",
    tags: ["Portfolio", "Website"],
    image: projectPortfolio,
    overview:
      "A modern portfolio website crafted for a creative professional, emphasizing bold typography, immersive scroll animations, and a narrative-driven layout that showcases work with impact.",
    role: "UI/UX Designer",
    duration: "2 Months",
    tools: ["Figma", "Framer", "After Effects"],
    challenge:
      "The client needed a portfolio that stood out in a saturated market of generic templates. It had to balance creativity with usability, ensuring recruiters and clients could find key information quickly.",
    process: [
      "Analyzed 30+ designer portfolios to identify effective patterns and differentiation opportunities.",
      "Created mood boards exploring brutalist, editorial, and motion-heavy aesthetic directions.",
      "Prototyped scroll-triggered animations and micro-interactions in Framer.",
      "Tested navigation flow with 10 design professionals for feedback.",
      "Refined visual hierarchy and motion timing based on user feedback.",
    ],
    solution:
      "Delivered a scroll-driven narrative portfolio with cinematic transitions, a custom cursor, and a case study format that walks visitors through the design thinking behind each project.",
    outcome: [
      "Portfolio received 3x more engagement vs previous static version",
      "Client reported 50% increase in inbound project inquiries",
      "Featured in 2 design inspiration galleries",
    ],
  },
  "vision-pulse-marketing": {
    title: "Vision Pulse Marketing",
    subtitle: "Bold site showcasing services, work, and unique style.",
    tags: ["Marketing", "Website"],
    image: projectMarketing,
    overview:
      "Vision Pulse is a digital marketing agency website designed to communicate brand energy, showcase services, and convert visitors into leads through a compelling visual narrative.",
    role: "UI/UX Designer",
    duration: "2.5 Months",
    tools: ["Figma", "Adobe XD", "Photoshop"],
    challenge:
      "The agency's previous website had low conversion rates and failed to communicate their bold, results-driven brand personality. Service pages were text-heavy and lacked visual appeal.",
    process: [
      "Conducted stakeholder interviews to align on brand voice and conversion goals.",
      "Performed competitive analysis of 15 marketing agency websites.",
      "Designed data-driven landing pages with clear CTAs and social proof sections.",
      "Created interactive service showcases with animated case study previews.",
      "A/B tested hero section variants to optimize engagement.",
    ],
    solution:
      "Built a high-energy website with dynamic scroll animations, video backgrounds, client testimonial carousels, and strategically placed CTAs that guide visitors toward consultation booking.",
    outcome: [
      "60% improvement in lead generation conversion rate",
      "Average session duration increased by 45%",
      "Bounce rate decreased by 30% post-launch",
    ],
  },
  "steak-shack": {
    title: "Steak Shack",
    subtitle: "Mobile app to browse, customize, and order steaks.",
    tags: ["Restaurant", "Mobile App"],
    image: projectSteakshack,
    overview:
      "Steak Shack is a food ordering mobile app designed for a premium steakhouse, focusing on an appetizing visual experience, easy customization, and seamless ordering flow.",
    role: "UI/UX Designer",
    duration: "2 Months",
    tools: ["Figma", "Principle", "Illustrator"],
    challenge:
      "The restaurant's existing ordering process was phone-based, leading to order errors and long wait times. They needed a digital solution that maintained their premium brand feel while simplifying the ordering experience.",
    process: [
      "Shadowed restaurant staff and observed ordering patterns to map the end-to-end flow.",
      "Interviewed 15 regular customers about their dining and ordering preferences.",
      "Designed meal customization flows allowing doneness, sides, and sauce selection.",
      "Created appetizing food photography guidelines and UI compositions.",
      "Conducted usability testing with 12 participants across 2 iterations.",
    ],
    solution:
      "Designed a dark-themed, visually rich mobile app with large food imagery, intuitive meal customization, real-time order tracking, and a loyalty rewards system that encourages repeat orders.",
    outcome: [
      "Order accuracy improved by 35% vs phone orders",
      "Average order value increased by 20% through smart upsell suggestions",
      "App received 4.8★ rating in usability testing",
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {study.title}
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {study.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Cover Image */}
      <motion.section
        className="px-6 md:px-16 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-4xl mx-auto">
          <img
            src={study.image}
            alt={study.title}
            className="w-full rounded-2xl object-cover aspect-video"
          />
        </div>
      </motion.section>

      {/* Meta Info */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Role", value: study.role },
            { label: "Duration", value: study.duration },
            { label: "Tools", value: study.tools.join(", ") },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-card rounded-xl p-5 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="font-semibold text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <CaseSection title="Overview" delay={0.1}>
        <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
      </CaseSection>

      {/* Challenge */}
      <CaseSection title="The Challenge" delay={0.15}>
        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
      </CaseSection>

      {/* Process */}
      <CaseSection title="Design Process" delay={0.2}>
        <ol className="space-y-4">
          {study.process.map((step, i) => (
            <motion.li
              key={i}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
            </motion.li>
          ))}
        </ol>
      </CaseSection>

      {/* Solution */}
      <CaseSection title="The Solution" delay={0.1}>
        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
      </CaseSection>

      {/* Outcome */}
      <CaseSection title="Results & Impact" delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {study.outcome.map((item, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-5 border border-border text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-sm text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* Footer CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

const CaseSection = ({
  title,
  delay = 0,
  children,
}: {
  title: string;
  delay?: number;
  children: React.ReactNode;
}) => (
  <section className="px-6 md:px-16 pb-16">
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </motion.div>
  </section>
);

export default CaseStudy;
