import { forwardRef } from "react";
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
    a: "I specialize in end-to-end UI/UX design — from user research, journey mapping, and wireframing to high-fidelity UI, prototyping, and design systems for mobile and web platforms.",
  },
  {
    q: "What is your design process?",
    a: "My process involves discovery, user research, wireframing, prototyping, usability testing, and iterative refinement — always collaborating closely with cross-functional teams.",
  },
  {
    q: "What industries have you worked in?",
    a: "I've worked across insurance (Bajaj Allianz), IT consulting, advertising, e-commerce, and startups — delivering impactful designs for both enterprise and consumer products.",
  },
  {
    q: "What are the primary tools you use?",
    a: "Figma, Adobe XD, Photoshop, Illustrator — along with prototyping tools and design system frameworks for seamless developer handoffs.",
  },
  {
    q: "How do you approach design challenges?",
    a: "I start with understanding users and business goals through research, then iterate rapidly using A/B testing, client feedback, and data-driven decisions to deliver optimal solutions.",
  },
];

const FAQSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-24 px-8 md:px-16 lg:px-20 bg-background" id="faq">
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
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
