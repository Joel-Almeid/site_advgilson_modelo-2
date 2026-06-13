import { createFileRoute } from "@tanstack/react-router";
import { Building2, ShieldCheck, Coins, Users, Scale, FileText } from "lucide-react";
import { LandingPage } from "@/components/lp/LandingPage";

export const Route = createFileRoute("/planejamento-sucessorio")({
  head: () => ({
    meta: [
      { title: "Planejamento Sucessório e Holding Familiar | Gilson Carvalho" },
      { name: "description", content: "Proteja o patrimônio de uma vida inteira e evite o inventário familiar. Holding Familiar, doação em vida e redução de ITCMD. Atendimento premium." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Planejamento Sucessório"
      eyebrow="Holding · Proteção · Sucessão"
      headline={<>Proteja o patrimônio de uma vida inteira e <span className="text-gold-gradient italic">evite o inventário familiar.</span></>}
      subheadline="Holding Familiar, doação de bens em vida e blindagem patrimonial conduzidas por um Mestre em Direito. Estrutura jurídica que garante economia tributária e harmonia entre herdeiros."
      ctaPrimary="Quero Proteger Meu Patrimônio"
      formSubject="Planejamento Sucessório"
      benefits={[
        { icon: Building2, title: "Holding Familiar", desc: "Estruturação completa da PJ que centraliza o patrimônio, organiza a sucessão e profissionaliza a gestão dos bens da família." },
        { icon: Coins, title: "Redução de ITCMD", desc: "Planejamento tributário lícito que pode reduzir drasticamente o imposto de transmissão pago em doações e na sucessão." },
        { icon: ShieldCheck, title: "Blindagem Patrimonial", desc: "Proteção dos bens contra riscos empresariais, ações de terceiros e instabilidades futuras, com total segurança jurídica." },
        { icon: Users, title: "Harmonia entre Herdeiros", desc: "Regras claras de governança e cláusulas restritivas que previnem brigas familiares e disputas judiciais entre herdeiros." },
        { icon: FileText, title: "Doação em Vida", desc: "Doação com reserva de usufruto: você transmite os bens hoje, mantém o controle e o uso enquanto viver." },
        { icon: Scale, title: "Testamento Estratégico", desc: "Elaboração de testamento técnico que respeita a legítima e materializa exatamente a sua vontade sucessória." },
      ]}
      benefitsTitle="Estratégias para Proteger sua Família"
      testimonials={[
        { name: "Carlos R.", role: "Empresário — Holding Familiar", text: "Estruturamos a holding em poucos meses. Economia tributária real e a tranquilidade de saber que meus filhos não passarão por inventário." },
        { name: "Lucia M.", role: "Cliente — Doação em Vida", text: "Conduzido com extrema delicadeza. O Dr. Gilson conciliou interesses de 4 herdeiros sem qualquer conflito. Trabalho impecável." },
        { name: "Roberto S.", role: "Médico — Proteção Patrimonial", text: "Profundidade técnica de Mestre em Direito. Cada cláusula foi pensada para proteger meu patrimônio profissional e familiar." },
      ]}
      faqs={[
        { q: "O que é uma Holding Familiar e por que ela evita o inventário?", a: "A Holding é uma pessoa jurídica que centraliza o patrimônio da família. Os bens deixam de pertencer às pessoas físicas e passam a pertencer à PJ; os herdeiros recebem cotas em vida. Quando o titular falece, não há inventário sobre os imóveis — apenas a transferência de cotas societárias, processo muito mais rápido, barato e sigiloso." },
        { q: "É possível reduzir legalmente o ITCMD com planejamento sucessório?", a: "Sim. Doações antecipadas com reserva de usufruto, integralização de bens pelo valor histórico e escolha estratégica do estado de tributação podem gerar economia significativa de ITCMD, dentro da legalidade absoluta. Cada caso é dimensionado individualmente." },
        { q: "Posso continuar administrando meus bens após criar a Holding?", a: "Sim. O contrato social é desenhado para que você permaneça como administrador único, com poderes amplos. Os herdeiros são cotistas, mas as decisões de gestão continuam exclusivamente em suas mãos enquanto for de sua vontade." },
        { q: "A Holding protege contra brigas entre herdeiros?", a: "Sim. Cláusulas de incomunicabilidade, impenhorabilidade, inalienabilidade e regras de governança familiar previnem que cotas saiam da família (em divórcios, por exemplo) e estabelecem como decisões serão tomadas, eliminando a principal fonte de conflitos." },
        { q: "Em quanto tempo a Holding é constituída?", a: "Após a coleta de documentos e definição da estratégia, a constituição da PJ e a transferência dos bens leva, em média, de 60 a 120 dias, dependendo da complexidade patrimonial e do estado." },
      ]}
    />
  );
}
