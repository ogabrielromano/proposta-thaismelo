import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "process-01", label: "01" },
  { id: "process-02", label: "02" },
  { id: "process-03", label: "03" },
  { id: "process-04", label: "04" },
  { id: "proposal", label: "Proposta" },
];

export const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection
                ? "bg-gradient-primary scale-150 glow"
                : "bg-border hover:bg-primary"
            }`}
          />

          {/* Label tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-card text-card-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border border-border">
              {section.label}
            </div>
          </div>

          {/* Active indicator line */}
          {index === activeSection && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute -left-2 top-0 w-1 h-3 bg-gradient-primary rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};
