import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-20" id="contact">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          I'm always open to new opportunities, ideas, or just a good conversation.
        </p>
        <motion.a
          href="mailto:austinpratik@gmail.com"
          className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
