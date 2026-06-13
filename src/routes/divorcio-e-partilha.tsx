import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, Scale, Briefcase, Home, HeartCrack } from "lucide-react";
import { LandingPage } from "@/components/lp/LandingPage";

export const Route = createFileRoute("/divorcio-e-partilha")({
  head: () => ({
    meta: [
      { title: "Divórcio e Partilha de Bens de Alto Valor | Gilson Carvalho" },
      { name: "description", content: "Condução estratégica e sigilosa para o seu divórcio e partilha de bens. Cotas empresariais, imóveis e investimentos com discrição absoluta." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Divórcio e Partilha"
      eyebrow="Divórcio · Partilha · Sigilo"
      headline={<>Condução estratégica e sigilosa para o seu <span className="text-gold-gradient italic">divórcio e partilha de bens.</span></>}
      subheadline="Divórcios consensuais e litigiosos de alto valor patrimonial. Partilha de cotas empresariais, imóveis e investimentos com discrição absoluta e proteção integral dos seus direitos."
      ctaPrimary="Quero Atendimento Sigiloso"
      formSubject="Divórcio e Partilha de Bens"
      benefits={[
        { icon: Lock, title: "Sigilo Absoluto", desc: "Atendimento discreto, com tramitação em segredo de justiça sempre que possível. Sua privacidade e reputação preservadas." },
        { icon: Briefcase, title: "Partilha de Cotas Empresariais", desc: "Avaliação técnica de quotas, ações e participações societárias. Estratégia para manter o controle do seu negócio." },
        { icon: Home, title: "Imóveis e Financiamentos", desc: "Partilha de imóveis quitados, financiados e em construção, com soluções para evitar a venda forçada do patrimônio familiar." },
        { icon: Scale, title: "Investimentos e Aplicações", desc: "Identificação e divisão correta de aplicações financeiras, criptoativos, previdência privada e participações no exterior." },
        { icon: ShieldCheck, title: "Proteção do Patrimônio Pré-Casamento", desc: "Defesa técnica para que bens adquiridos antes do casamento não sejam indevidamente partilhados." },
        { icon: HeartCrack, title: "Guarda, Pensão e Visitas", desc: "Acordos de guarda compartilhada, fixação de pensão e regime de convivência alinhados ao melhor interesse dos filhos." },
      ]}
      benefitsTitle="Estratégia, Sigilo e Resultado"
      testimonials={[
        { name: "Empresária — Tocantins", role: "Divórcio Litigioso", text: "Discrição total em um caso de alta exposição. Conseguiu preservar minha empresa e ainda viabilizar acordo justo. Estratégia brilhante." },
        { name: "Investidor — Rio de Janeiro", role: "Partilha Complexa", text: "Patrimônio com imóveis em 3 estados e investimentos internacionais. O Dr. Gilson conduziu cada detalhe com profundidade técnica raríssima." },
        { name: "Cliente — União Estável", role: "Dissolução Consensual", text: "Resolveu em 60 dias o que outro escritório levou anos. Acordo equilibrado, sem desgaste e com economia tributária." },
      ]}
      faqs={[
        { q: "Como é feita a partilha quando há cotas de empresa?", a: "Realizamos avaliação econômica da empresa por método adequado (fluxo de caixa, patrimônio líquido ou múltiplos) e estruturamos a partilha de forma a preservar a operação. As alternativas incluem compensação financeira, criação de quotas preferenciais sem direito de gestão ou pagamento parcelado, evitando que o ex-cônjuge ingresse na administração do negócio." },
        { q: "É possível fazer o divórcio em sigilo, sem exposição pública?", a: "Sim. Divórcios consensuais podem ser feitos em cartório (extrajudicial), sem qualquer audiência ou exposição. Nos casos judiciais, requeremos tramitação em segredo de justiça, especialmente quando há patrimônio relevante ou filhos menores envolvidos." },
        { q: "Imóvel financiado ainda em pagamento entra na partilha?", a: "Sim. Partilha-se o valor já amortizado durante o casamento. As parcelas pagas antes do casamento ou após o divórcio pertencem a quem as pagou. Estruturamos soluções como assunção do financiamento, refinanciamento ou venda com divisão do saldo." },
        { q: "Investimentos no exterior precisam ser declarados na partilha?", a: "Sim. Todos os bens do casal, no Brasil ou no exterior, integram o regime de bens. Atuamos com mapeamento patrimonial completo, inclusive contas internacionais, criptoativos e participações em offshore, garantindo partilha íntegra." },
        { q: "Quanto tempo demora um divórcio litigioso de alto patrimônio?", a: "Casos consensuais resolvem-se em 30 a 90 dias. Litigiosos com patrimônio complexo variam de 1 a 3 anos, mas sempre buscamos acordos parciais e tutelas antecipadas para que você não fique aguardando o final do processo para reorganizar sua vida." },
      ]}
    />
  );
}
