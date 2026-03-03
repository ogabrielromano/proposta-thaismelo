import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Flame, CalendarDays } from "lucide-react";

export const ProposalSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const benefits = [
    "Inserção de 60–90 segundos integrada ao conteúdo",
    "Menção direta e destacada à marca Mercado Bitcoin",
    "Link na descrição e comentário fixado",
    "Story de divulgação nas redes sociais",
    "Aprovação prévia do roteiro da inserção",
    "Relatório pós-campanha com métricas",
    "Liberdade criativa alinhada às diretrizes da marca",
    "Comunicação direta via WhatsApp",
  ];

  const proposals = [
    {
      insertions: 2,
      totalPrice: "10.000,00",
      unitPrice: "5.000,00",
      description: "Presença inicial estratégica",
    },
    {
      insertions: 4,
      totalPrice: "18.000,00",
      unitPrice: "4.500,00",
      description: "Máxima exposição e recall da marca",
      highlighted: true,
    },
  ];

  const standardTable = [
    {
      insertions: "4 inserções/mês",
      monthly: "R$ 11.000,00/mês",
      unit: "R$ 2.750,00/inserção",
      duration: "Mín. 6 meses",
    },
    {
      insertions: "6 inserções/mês",
      monthly: "R$ 13.500,00/mês",
      unit: "R$ 2.250,00/inserção",
      duration: "Mín. 6 meses",
    },
    {
      insertions: "6 inserções/mês",
      monthly: "R$ 9.000,00/mês",
      unit: "R$ 1.500,00/inserção",
      duration: "Mín. 12 meses",
    },
  ];

  return (
    <section
      id="proposal"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-20"
      style={{
        background: "linear-gradient(135deg, hsl(220 28% 6%) 0%, hsl(220 30% 4%) 100%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(25 100% 53% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(25 100% 53% / 0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dramatic background effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
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
          <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl rounded-full" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Flame icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary/40 blur-2xl rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Flame className="relative w-16 h-16 text-primary" />
            </div>
          </motion.div>

          {/* Period badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 bg-primary/15 border border-primary/30 px-5 py-2 rounded-full">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm md:text-base">
                Oferta especial · 10 a 31 de março de 2026
              </span>
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
            Invista na Sua Marca
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl text-center text-muted-foreground mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Escolha o pacote ideal e leve o Mercado Bitcoin ao próximo nível de visibilidade
          </motion.p>

          {/* Proposals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
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
                      Melhor Custo-Benefício
                    </div>
                  </div>
                )}
                <Card
                  className={`elevated bg-card/80 backdrop-blur-sm border-border/50 h-full ${
                    proposal.highlighted ? "ring-2 ring-primary/50" : ""
                  }`}
                >
                  <CardContent className="p-6 md:p-8">
                    {/* Insertion count */}
                    <div className="text-center mb-6">
                      <h3
                        className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {proposal.insertions} Inserções
                      </h3>
                      <p className="text-lg md:text-xl font-semibold text-gradient">
                        R$ {proposal.unitPrice} / inserção
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground mt-2">
                        {proposal.description}
                      </p>
                    </div>

                    {/* O que está incluído */}
                    <h4
                      className="text-xl md:text-2xl font-bold text-center mb-4 text-foreground"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      O que está incluído
                    </h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{
                            duration:
                              typeof window !== "undefined" && window.innerWidth < 768
                                ? 0
                                : 0.4,
                            delay:
                              typeof window !== "undefined" && window.innerWidth < 768
                                ? 0
                                : 0.7 + proposalIndex * 0.2 + index * 0.05,
                          }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-background" />
                          </div>
                          <span className="text-sm md:text-base text-foreground">
                            {benefit}
                          </span>
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
                      <div
                        className="text-2xl md:text-3xl font-black text-gradient mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Investimento Total
                      </div>
                      <div
                        className="text-3xl md:text-5xl font-black text-foreground mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        R$ {proposal.totalPrice}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        10 a 31 de março · {proposal.insertions}x inserções
                      </p>
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
                        Fechar Parceria
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Standard Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-8"
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-2 text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Tabela de Valores Padrão
            </h3>
            <p className="text-center text-muted-foreground text-sm mb-6">
              Para parcerias contínuas e de longo prazo
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border/40">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-primary/10 border-b border-border/40">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-foreground">
                      Inserções
                    </th>
                    <th className="text-center px-4 md:px-6 py-3 font-semibold text-foreground">
                      Valor Mensal
                    </th>
                    <th className="text-center px-4 md:px-6 py-3 font-semibold text-foreground">
                      Por Inserção
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 font-semibold text-foreground">
                      Duração
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {standardTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-border/20 transition-colors hover:bg-primary/5 ${
                        i % 2 === 0 ? "bg-card/40" : "bg-card/20"
                      }`}
                    >
                      <td className="px-4 md:px-6 py-4 text-foreground font-medium">
                        {row.insertions}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center text-gradient font-bold">
                        {row.monthly}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-center text-muted-foreground">
                        {row.unit}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-right text-muted-foreground text-sm">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground/70">
              Pagamento D30 (30 dias após emissão da NF) · Mediante emissão de nota fiscal
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
