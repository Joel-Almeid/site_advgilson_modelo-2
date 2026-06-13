import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Briefcase, FileSignature, Lock, Scale } from "lucide-react";
import { LandingPage } from "@/components/lp/LandingPage";

export const Route = createFileRoute("/protecao-patrimonial")({
  head: () => ({
    meta: [
      { title: "Proteção Patrimonial — Pacto Antenupcial e Contrato de Namoro | Gilson Carvalho" },
      { name: "description", content: "Segurança jurídica e blindagem de bens antes e durante o relacionamento. Pacto antenupcial, contrato de namoro e planejamento matrimonial." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      areaLabel="Proteção Patrimonial"
      eyebrow="Pacto · Contrato · Blindagem"
      headline={<>Segurança jurídica e <span className="text-gold-gradient italic">blindagem de bens</span> antes e durante o relacionamento.</>}
      subheadline="Pacto antenupcial, contrato de namoro e planejamento matrimonial estratégico. Proteja o patrimônio construído antes da união e blinde empresas familiares contra partilhas futuras."
      ctaPrimary="Quero Blindar Meu Patrimônio"
      formSubject="Proteção Patrimonial e Pacto Antenupcial"
      benefits={[
        { icon: FileSignature, title: "Pacto Antenupcial", desc: "Escritura pública que define o regime de bens e protege seu patrimônio antes do casamento. Personalização total das regras." },
        { icon: Lock, title: "Separação Total de Bens", desc: "Cada cônjuge mantém a propriedade exclusiva dos bens presentes e futuros. Proteção ideal para empresários e segundos casamentos." },
        { icon: Heart, title: "Contrato de Namoro", desc: "Documento que afasta a configuração de união estável, protegendo o patrimônio em relacionamentos sem intenção de constituir família." },
        { icon: Briefcase, title: "Blindagem de Empresa Familiar", desc: "Estruturas societárias e cláusulas que impedem que cotas empresariais sejam partilhadas em caso de divórcio do sócio." },
        { icon: ShieldCheck, title: "Planejamento Matrimonial", desc: "Análise estratégica do casal: regime ideal, doações pré-casamento e proteção de bens recebidos por herança ou doação." },
        { icon: Scale, title: "Alteração de Regime de Bens", desc: "Ação judicial para modificação do regime de bens durante o casamento, quando há motivo relevante e ausência de prejuízo a terceiros." },
      ]}
      benefitsTitle="Proteção Antes que o Problema Surja"
      testimonials={[
        { name: "Empresário — Segundo Casamento", role: "Pacto Antenupcial", text: "Patrimônio construído em 30 anos protegido com cláusulas precisas. Tranquilidade total para começar a nova fase da vida." },
        { name: "Sócio de Holding", role: "Blindagem Societária", text: "Estrutura que garante que minhas cotas não serão partilhadas em hipótese alguma. Trabalho técnico de altíssimo nível." },
        { name: "Cliente — Contrato de Namoro", role: "Relacionamento de Longa Data", text: "Documento que trouxe segurança jurídica para ambos. Sem desgastes futuros e com total transparência no relacionamento." },
      ]}
      faqs={[
        { q: "O que é o pacto antenupcial e quando é obrigatório?", a: "É a escritura pública lavrada em cartório antes do casamento que define o regime de bens. É obrigatório sempre que o casal escolher regime diverso da Comunhão Parcial (Separação Total, Comunhão Universal ou Participação Final nos Aquestos). Sem o pacto, vigora automaticamente a Comunhão Parcial." },
        { q: "O regime de Separação Total realmente protege todo o meu patrimônio?", a: "Sim. Na Separação Total convencional, cada cônjuge mantém propriedade e administração exclusiva dos bens presentes e futuros, inclusive os adquiridos onerosamente durante o casamento. É o regime mais protetivo, recomendado para empresários, segundos casamentos e situações de patrimônio assimétrico." },
        { q: "Contrato de namoro tem validade jurídica no Brasil?", a: "Sim. Embora não tenha regulamentação específica, o contrato de namoro tem validade contratual, serve como forte prova documental de que o casal não pretende constituir família (afastando união estável) e é amplamente aceito pela jurisprudência quando bem elaborado, com cláusulas claras e renovação periódica." },
        { q: "Como proteger minha empresa familiar de uma futura partilha?", a: "Utilizamos combinação de pacto antenupcial com separação total, contrato social com cláusulas restritivas à entrada de cônjuges, holding familiar e acordo de quotistas. O conjunto dessas medidas garante que, mesmo em caso de divórcio, o controle e a operação da empresa permaneçam intocados." },
        { q: "Posso alterar o regime de bens depois de casado?", a: "Sim. A lei permite a alteração do regime de bens durante o casamento, por meio de ação judicial. É necessário pedido conjunto dos cônjuges, motivação relevante e ausência de prejuízo a terceiros (credores, por exemplo). Conduzimos o processo com toda a documentação e fundamentação necessária." },
      ]}
    />
  );
}
