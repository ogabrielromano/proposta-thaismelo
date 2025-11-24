import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

export const ProposalSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const benefits = [
    "Gerente de YouTube dedicado",
    "Estratégia de longo prazo",
    "Análise de dados do YouTube",
    "Roteiros otimizados",
    "Thumbnails de alta conversão",
    "Gestão completa do canal",
    "Relatórios mensais detalhados",
    "Suporte prioritário",
    "Otimização contínua",
    "Grupo no WhatsApp Para Comunicação Direta com Equipe",
  ];

  return (
    <section
      id="proposal"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-20"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 96%) 0%, hsl(0 0% 98%) 100%)",
      }}
    >
      {/* Dramatic background effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Lightning icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-accent/50 blur-2xl rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Zap className="relative w-16 h-16 text-accent" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-7xl font-black text-center mb-4 md:mb-6 text-gradient"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Pronto para Decolar?
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl text-center text-muted-foreground mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transforme seu canal com nossa estratégia completa
          </motion.p>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="elevated bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 md:p-12">
                {/* Benefits list */}
                <h3 className="text-2xl md:text-4xl font-bold text-center mb-2 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Serviços Incluídos
                </h3>
                <p className="text-base md:text-2xl font-semibold text-center mb-6 text-gradient">
                  8 Vídeos (2 por semana) • Contrato mínimo de 4 Meses
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 0.4, 
                        delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 0.6 + index * 0.1 
                      }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-background" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <motion.div
                  className="text-center mb-6 md:mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-3xl md:text-5xl font-black text-gradient mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Investimento
                  </div>
                  <div className="text-4xl md:text-6xl font-black text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    R$ 24.990,00
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Plano customizado para suas necessidades</p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-2xl"
                  >
                    Começar Agora
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
