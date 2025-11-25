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

  const proposals = [
    {
      videos: 4,
      frequency: "1 por semana",
      price: "15.990,00",
      description: "Ideal para quem está começando",
    },
    {
      videos: 8,
      frequency: "2 por semana",
      price: "24.990,00",
      description: "Máximo crescimento e engajamento",
      highlighted: true,
    },
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
      <div className="relative z-10 container mx-auto max-w-7xl">
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
            Escolha o plano ideal para transformar seu canal
          </motion.p>

          {/* Proposals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {proposals.map((proposal, proposalIndex) => (
              <motion.div
                key={proposalIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.5 + proposalIndex * 0.2 }}
                className="relative"
              >
                {proposal.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-primary text-background px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                <Card className={`elevated bg-card/80 backdrop-blur-sm border-border/50 h-full ${proposal.highlighted ? 'ring-2 ring-accent/50' : ''}`}>
                  <CardContent className="p-6 md:p-8">
                    {/* Video count and frequency */}
                    <div className="text-center mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {proposal.videos} Vídeos
                      </h3>
                      <p className="text-lg md:text-xl font-semibold text-gradient">
                        {proposal.frequency} • Contrato mínimo de 4 Meses
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground mt-2">
                        {proposal.description}
                      </p>
                    </div>

                    {/* Serviços Incluídos */}
                    <h4 className="text-xl md:text-2xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Serviços Incluídos
                    </h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 0.4, 
                            delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 0.7 + proposalIndex * 0.2 + index * 0.05 
                          }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-background" />
                          </div>
                          <span className="text-sm md:text-base text-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Price */}
                    <motion.div
                      className="text-center mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 1.2 + proposalIndex * 0.2 }}
                    >
                      <div className="text-2xl md:text-3xl font-black text-gradient mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Investimento
                      </div>
                      <div className="text-3xl md:text-5xl font-black text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        R$ {proposal.price}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">por mês</p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.4 + proposalIndex * 0.2 }}
                    >
                      <Button
                        variant={proposal.highlighted ? "accent" : "default"}
                        size="lg"
                        className="text-base md:text-lg px-8 py-6 rounded-2xl w-full"
                      >
                        Começar Agora
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Payment Terms */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground/70">
              Pagamento D30 (30 dias após emissão da NF) • Mediante emissão de nota fiscal
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
