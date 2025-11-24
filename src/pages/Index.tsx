import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProposalSection } from "@/components/ProposalSection";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import {
  Target,
  Lightbulb,
  Video,
  TrendingUp,
  Users,
} from "lucide-react";
import Aurora from "@/components/Aurora";

const Index = () => {
  const processes = [
    {
      number: "01",
      title: "Diagnóstico do Canal",
      description:
        "Identificamos exatamente onde seu canal está e onde pode chegar. Analisamos métricas, concorrência e oportunidades para traçar o caminho mais estratégico para o seu crescimento.",
      icon: Target,
      id: "process-01",
    },
    {
      number: "02",
      title: "Planejamento do Conteúdo",
      description:
        "Criamos temas estratégicos para seu calendário editorial baseado em dados reais do seu nicho. Com as ideias aprovadas, produzimos roteiros focados em aumentar visualizações e retenção da sua audiência.",
      icon: Lightbulb,
      id: "process-02",
    },
    {
      number: "03",
      title: "Edição e Otimização",
      description:
        "Transformamos suas gravações em vídeos profissionais e atrativos. Edição completa, thumbnails impactantes, títulos otimizados e todos os detalhes para maximizar alcance e performance.",
      icon: Video,
      id: "process-03",
    },
    {
      number: "04",
      title: "Acompanhamento Contínuo",
      description:
        "Monitoramos resultados, ajustamos estratégias e garantimos evolução constante. Você tem nossa equipe ao seu lado, dia após dia, focada no crescimento do seu canal.",
      icon: TrendingUp,
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
