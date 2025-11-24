import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";


export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("process-01");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
    
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Client Profile */}
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full mb-4 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 blur-sm" />
              <div className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/foto.jpg" 
                  alt="Thais Melo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl font-medium text-muted-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Proposta para <span className="text-foreground font-semibold">Thais Melo</span>
            </motion.p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Sua Estratégia</span>
            <br />
            <span className="text-foreground">Completa de YouTube</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Do planejamento à execução, transforme seu canal com nossa metodologia comprovada
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToNext}
              className="text-lg px-8 py-6 rounded-xl"
            >
              Descobrir Como Fazemos
            </Button>
            
            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
