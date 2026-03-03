import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProposalSection } from "@/components/ProposalSection";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import {
  Users,
  Sparkles,
  BarChart2,
  Target,
} from "lucide-react";
import Aurora from "@/components/Aurora";

const Index = () => {
  const processes = [
    {
      number: "01",
      title: "Audiência Ideal",
      description:
        "Nosso canal é acompanhado por investidores, traders e entusiastas de criptomoedas — exatamente o público-alvo do Mercado Bitcoin. Alcançamos pessoas com poder aquisitivo e interesse ativo em soluções financeiras digitais.",
      icon: Users,
      id: "process-01",
    },
    {
      number: "02",
      title: "Inserção Autêntica",
      description:
        "Cada inserção é integrada organicamente ao conteúdo, com roteiro aprovado previamente. Apresentada de forma natural e genuína, gera maior credibilidade e engajamento real da audiência com a marca Mercado Bitcoin.",
      icon: Sparkles,
      id: "process-02",
    },
    {
      number: "03",
      title: "Alcance e Métricas",
      description:
        "Relatório pós-campanha completo com impressões, cliques, visualizações e alcance. Dados transparentes para você mensurar o retorno do investimento e avaliar o impacto de cada inserção no canal.",
      icon: BarChart2,
      id: "process-03",
    },
    {
      number: "04",
      title: "Oportunidade Exclusiva",
      description:
        "Vagas limitadas para o período de 10 a 31 de março de 2026. Uma janela estratégica para posicionar o Mercado Bitcoin como referência de investimento para uma audiência qualificada e em crescimento.",
      icon: Target,
      id: "process-04",
    },
  ];

  return (
    <>

    <div className="relative">

      <ProgressIndicator />

      <div id="hero">
        <HeroSection />
      </div>

      {processes.map((process) => (
        <ProcessSection key={process.id} {...process} />
      ))}

      <ProposalSection />
    </div>
    </>
  );
};

export default Index;
