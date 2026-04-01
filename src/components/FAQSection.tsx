import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What kind of work do you specialize in?",
    a: "I specialize in end-to-end product design — from user research and wireframing to high-fidelity UI and design systems.",
  },
  {
    q: "What is your design process?",
    a: "My process involves discovery, research, ideation, prototyping, testing, and iterative refinement to deliver impactful solutions.",
  },
  {
    q: "What industries have you worked in?",
    a: "I've worked across tech, e-commerce, fintech, healthcare, and consumer products with both startups and enterprise teams.",
  },
  {
    q: "What are the primary tools you use?",
    a: "Figma, Framer, Adobe Creative Suite, Principle, and various prototyping and design system tools.",
  },
  {
    q: "How do you approach design challenges?",
    a: "I start with understanding the user and business goals, then iterate rapidly with data-driven decisions and constant validation.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-20 bg-background" id="faq">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-sm md:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
