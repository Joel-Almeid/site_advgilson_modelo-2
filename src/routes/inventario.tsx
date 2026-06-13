import { createFileRoute } from "@tanstack/react-router";
import { Scroll, Clock, Building2, FileText, Banknote, Scale } from "lucide-react";
import { LandingPage } from "@/components/lp/LandingPage";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Inventário Judicial e Extrajudicial | Gilson Carvalho Advocacia" },
      { name: "description", content: "Regularização ágil e segura de heranças e inventários complexos. Cartório, multas de ITCMD, alvarás e testamentos. Atendimento premium em Gurupi/TO." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Inventário e Sucessões"
      eyebrow="Inventário · Herança · Testamento"
      headline={<>Regularização ágil e segura de <span className="text-gold-gradient italic">heranças e inventários complexos.</span></>}
      subheadline="Inventários judiciais e extrajudiciais conduzidos com técnica e velocidade. Liberação de alvarás, partilha de bens e cumprimento de testamentos com total segurança jurídica."
      ctaPrimary="Quero Resolver o Inventário"
      formSubject="Inventário e Partilha de Herança"
      benefits={[
        { icon: Building2, title: "Inventário Extrajudicial", desc: "Quando há consenso entre herdeiros e ausência de menores, conduzimos o inventário diretamente em cartório, em semanas, não em anos." },
        { icon: Scale, title: "Inventário Judicial Complexo", desc: "Atuação técnica em casos com litígio entre herdeiros, ausência de testamento, bens em vários estados ou no exterior." },
        { icon: Clock, title: "Cumprimento do Prazo Legal", desc: "Abertura dentro dos 60 dias para evitar a multa do ITCMD. Se já passou, atuamos com estratégias para reduzir a penalidade." },
        { icon: Banknote, title: "Alvarás e Liberação de Valores", desc: "Pedidos de alvará para saque de saldos bancários, FGTS, PIS, restituição de IR e levantamento de valores em ações judiciais." },
        { icon: Scroll, title: "Testamento e Disposições Finais", desc: "Cumprimento integral de testamentos, com defesa da vontade do falecido e respeito à legítima dos herdeiros necessários." },
        { icon: FileText, title: "Sobrepartilha e Inventários Antigos", desc: "Resolução de inventários nunca abertos, sobrepartilha de bens omitidos e regularização de imóveis em nome de falecidos há décadas." },
      ]}
      benefitsTitle="Soluções para Cada Tipo de Inventário"
      testimonials={[
        { name: "Família F.", role: "Inventário Extrajudicial", text: "Resolvido em 45 dias, totalmente em cartório. Sem audiências, sem desgaste. Atendimento humano em um momento difícil." },
        { name: "Herdeiro — RJ", role: "Inventário Judicial", text: "Caso travado havia 8 anos com outro advogado. Em pouco mais de um ano o Dr. Gilson conseguiu a partilha e a liberação dos imóveis." },
        { name: "Cliente — Tocantins", role: "Sobrepartilha", text: "Imóvel da minha avó nunca tinha sido regularizado. Foi conduzido com profundidade técnica e agora está finalmente em meu nome." },
      ]}
      faqs={[
        { q: "Qual o prazo legal para abrir o inventário e qual a multa por atraso?", a: "O prazo legal é de 60 dias contados da data do falecimento. Em caso de atraso, o estado pode aplicar multa sobre o ITCMD que varia, em média, de 10% a 20% do imposto devido. Mesmo após o prazo, atuamos com pedidos de redução ou parcelamento da multa em diversos estados." },
        { q: "Quando posso fazer o inventário em cartório (extrajudicial)?", a: "Quando todos os herdeiros são maiores e capazes, há acordo total sobre a partilha e não existe testamento (ou o testamento já foi cumprido judicialmente). O processo em cartório é resolvido em semanas, com custo muito menor do que o judicial." },
        { q: "Como funciona o alvará para sacar dinheiro em conta do falecido?", a: "Antes de finalizar o inventário, é possível obter alvará judicial para sacar saldos bancários, FGTS, PIS, restituição de IR e verbas trabalhistas. Atuamos com pedidos urgentes para que a família tenha recursos imediatos para despesas iniciais." },
        { q: "E se houver herdeiros menores de idade ou incapazes?", a: "Nestes casos o inventário precisa obrigatoriamente ser judicial, com participação do Ministério Público. Conduzimos o processo com a celeridade possível e proteção integral dos interesses dos menores." },
        { q: "Bens em outro estado ou no exterior podem ser inventariados aqui?", a: "Sim. O inventário tramita no último domicílio do falecido e abrange bens em todo o território nacional. Para bens no exterior, atuamos em conjunto com correspondentes para regularização integral." },
      ]}
    />
  );
}
