import { createFileRoute } from "@tanstack/react-router";
import { Scale, TrendingUp, TrendingDown, Search, Gavel, ShieldCheck } from "lucide-react";
import { LandingPage } from "@/components/lp/LandingPage";

export const Route = createFileRoute("/pensao-alimenticia")({
  head: () => ({
    meta: [
      { title: "Pensão Alimentícia — Fixação, Revisão e Execução | Gilson Carvalho" },
      { name: "description", content: "Garantia, análise e revisão estratégica de pensão alimentícia. Cálculo por sinais exteriores de riqueza, revisão e execução ágil de débitos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Pensão Alimentícia"
      eyebrow="Fixação · Revisão · Execução"
      headline={<>Garantia, análise e <span className="text-gold-gradient italic">revisão estratégica de pensão alimentícia.</span></>}
      subheadline="Atuação técnica em fixação justa, ações revisionais e execução ágil. Análise por sinais exteriores de riqueza para garantir o valor que seu filho realmente merece."
      ctaPrimary="Quero Avaliar Meu Caso"
      formSubject="Pensão Alimentícia"
      benefits={[
        { icon: Scale, title: "Fixação Justa de Alimentos", desc: "Ação de alimentos com pedido de tutela urgente para fixação imediata do valor já no início do processo." },
        { icon: Search, title: "Sinais Exteriores de Riqueza", desc: "Investigação patrimonial quando o alimentante esconde rendimentos: empresas, imóveis, veículos e padrão de vida incompatível." },
        { icon: TrendingUp, title: "Revisional para Aumento", desc: "Ação para majorar a pensão quando o filho cresce, surgem novas necessidades ou a renda do alimentante aumenta." },
        { icon: TrendingDown, title: "Revisional para Redução", desc: "Defesa do alimentante em caso de desemprego, redução de renda, nascimento de novo filho ou outras mudanças relevantes." },
        { icon: Gavel, title: "Execução de Alimentos", desc: "Cobrança ágil de parcelas em atraso, com risco de prisão civil em até 3 dias, bloqueio de contas e penhora de bens." },
        { icon: ShieldCheck, title: "Exoneração de Alimentos", desc: "Pedido de cessação da pensão quando o alimentado atinge maioridade, conclui formação ou se torna autossuficiente." },
      ]}
      benefitsTitle="Estratégia em Cada Fase da Pensão"
      testimonials={[
        { name: "Mãe — Tocantins", role: "Execução de Alimentos", text: "O pai do meu filho estava devendo 14 meses. Em menos de 30 dias houve quitação total. Profissionalismo e agilidade." },
        { name: "Empresário — Revisional", role: "Redução de Pensão", text: "Perda da renda principal exigia revisão urgente. Conseguiu redução justa, sem prejudicar meu filho. Caso conduzido com sensibilidade." },
        { name: "Cliente — Fixação Inicial", role: "Ação de Alimentos", text: "Valor fixado em tutela já na primeira semana. O Dr. Gilson identificou rendimentos que o ex tentava ocultar. Diferença enorme." },
      ]}
      faqs={[
        { q: "Como é calculado o valor da pensão alimentícia?", a: "O cálculo segue o binômio necessidade-possibilidade. Considera-se as necessidades reais do alimentado (educação, saúde, moradia, alimentação, lazer) e a capacidade financeira do alimentante. Quando o pai/mãe é autônomo, empresário ou ocultam renda, utilizamos análise de sinais exteriores de riqueza: padrão de vida, viagens, veículos e movimentação bancária." },
        { q: "Posso pedir a revisão da pensão se a situação financeira mudou?", a: "Sim. A pensão pode ser revista (aumentada ou reduzida) sempre que houver alteração relevante na necessidade do filho ou na possibilidade do alimentante: desemprego, novo filho, doença, aumento de renda, conclusão de tratamento, etc." },
        { q: "O que acontece se a pensão não for paga?", a: "Cabe execução com risco de prisão civil de 1 a 3 meses pelas 3 últimas parcelas vencidas, além de bloqueio de contas, penhora de salário, veículos e imóveis pelas parcelas mais antigas. Atuamos com extrema agilidade para garantir o cumprimento." },
        { q: "A pensão acaba automaticamente quando o filho faz 18 anos?", a: "Não. A obrigação não cessa automaticamente. É necessária ação de exoneração de alimentos. Enquanto o filho estiver cursando ensino superior ou técnico, em regra, a pensão pode ser mantida até os 24 anos." },
        { q: "É possível conseguir pensão de avós ou de outros parentes?", a: "Sim, em caráter subsidiário e complementar, quando os pais não têm condições. Atuamos também em ações de alimentos entre cônjuges, ex-cônjuges e companheiros, quando há comprovada necessidade." },
      ]}
    />
  );
}
