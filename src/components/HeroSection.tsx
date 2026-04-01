import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6">
            <img
              src={avatar}
              alt="Austin Pratik"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              width={48}
              height={48}
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Hello! 👋 I'm
            <br />
            <span className="text-gradient">Austin Pratik</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            I'm a senior <strong className="text-foreground">product designer</strong> at{" "}
            <strong className="text-foreground">Apple</strong> crafting intuitive and impactful
            digital products.
          </p>

          <motion.a
            href="#projects"
            className="inline-flex mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Right gradient */}
      <div className="hidden lg:block gradient-hero relative">
        <motion.span
          className="absolute bottom-20 right-16 text-[12rem] font-extrabold leading-none opacity-20 select-none"
          style={{ color: "hsl(0 0% 100% / 0.3)" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          hello
        </motion.span>
      </div>
    </section>
  );
};

export default HeroSection;
