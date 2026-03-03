import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideIcon } from "lucide-react";

interface ProcessSectionProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
}

export const ProcessSection = ({
  number,
  title,
  description,
  icon: Icon,
  id,
}: ProcessSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const num = parseInt(number);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        background: `linear-gradient(135deg, hsl(220 28% ${7 + num}%) 0%, hsl(220 30% ${5 + num}%) 100%)`,
      }}
    >
      {/* Subtle orange grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(25 100% 53% / 0.8) 1px, transparent 1px), linear-gradient(90deg, hsl(25 100% 53% / 0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.07 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={inView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Icon className="w-64 h-64 md:w-96 md:h-96 text-primary" strokeWidth={0.5} />
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Number */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className="text-8xl md:text-9xl font-black text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {number}
            </span>
          </motion.div>

          {/* Icon */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary glow">
              <Icon className="w-10 h-10 text-background" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
};
