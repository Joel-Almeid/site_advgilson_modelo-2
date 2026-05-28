import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, FileText, Home, Shield, MapPin, Mail, Phone, Menu, X, Clock, Star, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo_gilson.png";
import imgGilson from "@/assets/img-gilson.png";
import imgEscritorio from "@/assets/img-escritorio.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import bgLibrary from "@/assets/bg-library.jpg";
import bgGavel from "@/assets/bg-gavel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gilson Carvalho — Advocacia | Excelência em Direito · Gurupi/TO" },
      { name: "description", content: "Dr. Gilson Carvalho · OAB/TO 2.591 · OAB/RJ 256.131. Advocacia premium em Direito de Família, Civil, Imobiliário e Penal. Atendimento presencial e online em Gurupi/Tocantins." },
    ],
    links: [
      { rel: "canonical", href: "https://www.professorgilson.com.br" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Gilson Carvalho — Advocacia",
          url: "https://www.professorgilson.com.br",
          telephone: "+55-63-98447-4070",
          email: "advogado@gilsoncarvalho.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Guanabara, nº 1669, Centro",
            addressLocality: "Gurupi",
            addressRegion: "TO",
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          areaServed: ["Tocantins", "Rio de Janeiro", "Brasil"],
        }),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "5563984474070";
const waLink = (msg = "Olá Dr. Gilson, gostaria de agendar uma consulta.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: Users, title: "Direito de Família e Sucessões", desc: "Demandas familiares, divórcios, inventários e partilhas de bens de forma humanizada e estratégica." },
  { icon: FileText, title: "Direito Civil & Contratos", desc: "Regulação de relações jurídicas gerais, elaboração, análise e revisão de contratos complexos e obrigações." },
  { icon: Home, title: "Direito Imobiliário", desc: "Segurança jurídica em transações, contratos de compra e venda, posses e regularização de imóveis." },
  { icon: Shield, title: "Direito Penal / Criminal", desc: "Defesa técnica especializada e acompanhamento detalhado em demandas de complexidade criminal." },
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Nossos Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const testimonials = [
  {
    name: "Mariana A.",
    role: "Cliente — Direito de Família",
    text: "O Dr. Gilson conduziu meu inventário com uma clareza impressionante. Como professor universitário, ele explica cada passo de forma didática. Profissionalismo absoluto.",
  },
  {
    name: "Ricardo B.",
    role: "Empresário — Direito Civil",
    text: "Agilidade e profundidade técnica raras. Resolveu um contrato delicado em tempo recorde, sempre com transparência total. Recomendo sem hesitar.",
  },
  {
    name: "Juliana M.",
    role: "Cliente — Direito Imobiliário",
    text: "Sentimento de segurança do primeiro contato ao fim do processo. A bagagem acadêmica de Mestre se nota em cada parecer. Atendimento humano e preciso.",
  },
];

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é um diagnóstico jurídico completo do seu caso, com total sigilo. Pode ser presencial em nosso escritório em Gurupi/TO ou 100% online por videoconferência. Ao final, você recebe um direcionamento técnico claro e a proposta de honorários, sem compromisso.",
  },
  {
    q: "O atendimento pode ser feito 100% online?",
    a: "Sim. Atendemos clientes em todo o Brasil por videoconferência, e-mail e WhatsApp, com a mesma profundidade técnica do atendimento presencial. Documentos podem ser assinados digitalmente conforme a legislação vigente.",
  },
  {
    q: "Quais são as áreas de atuação do escritório?",
    a: "Atuamos em Direito de Família e Sucessões, Direito Civil e Contratos, Direito Imobiliário e Direito Penal. Para demandas fora destas áreas, oferecemos rede de parceiros de confiança.",
  },
  {
    q: "Como são definidos os honorários?",
    a: "Os honorários seguem a Tabela da OAB e são sempre apresentados por escrito após a consulta inicial, conforme a complexidade do caso. Trabalhamos com transparência total: sem surpresas, sem custos ocultos.",
  },
];

const OAB_LINE = "OAB/TO 2.591 · OAB/RJ 256.131";
const HORARIO = "Seg. a Sex. · 09:00 às 18:00";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path fill="#ffffff" d="M16.001 3C9.373 3 4 8.373 4 15c0 2.387.701 4.61 1.905 6.49L4 29l7.7-1.86A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3zm0 21.6c-1.83 0-3.59-.49-5.13-1.42l-.37-.22-4.57 1.1 1.13-4.45-.24-.38A9.55 9.55 0 1 1 25.6 15c0 5.3-4.3 9.6-9.6 9.6zm5.27-7.18c-.29-.14-1.72-.85-1.99-.95s-.46-.14-.65.14-.74.95-.91 1.14-.33.22-.62.07a7.85 7.85 0 0 1-2.31-1.43 8.7 8.7 0 0 1-1.6-1.99c-.17-.29 0-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48s.05-.36-.02-.5-.65-1.57-.89-2.15c-.23-.55-.47-.48-.65-.49h-.55a1.06 1.06 0 0 0-.77.36 3.22 3.22 0 0 0-1 2.4c0 1.42 1.04 2.79 1.18 2.98s2.04 3.11 4.94 4.36c.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.06-.12-.26-.19-.55-.33z"/>
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Gilson Carvalho Advogado" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] tracking-wider uppercase text-foreground/85 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={waLink()} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.18em] uppercase border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300">
          Falar com Advogado
        </a>
        <button className="lg:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="block text-sm uppercase tracking-wider hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={close} className="block text-center mt-4 px-5 py-3 text-xs tracking-[0.18em] uppercase border border-gold text-gold">
            Falar com Advogado
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Excelência · Ética · Resultado</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            Ciência jurídica avançada e <span className="text-gold-gradient italic">advocacia sob medida</span> para proteger o seu patrimônio e seus direitos.
          </h1>
          <div className="space-y-2 pt-2">
            <p className="text-base md:text-lg text-foreground/90">
              <span className="font-medium">Dr. Gilson Carvalho</span>
            </p>
            <p className="text-sm text-gold/95 font-medium tracking-wide">{OAB_LINE}</p>
            <p className="text-xs tracking-[0.25em] uppercase text-foreground/70">
              Professor Universitário · Mestre & Especialista
            </p>
            <p className="flex items-center gap-2 text-xs text-foreground/80 pt-1">
              <Clock size={14} className="text-gold" /> {HORARIO}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs tracking-[0.22em] uppercase font-medium hover:shadow-[0_0_40px_oklch(0.78_0.12_80/0.45)] transition-all duration-300">
              Agendar sua Consulta
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
        <div className="relative justify-self-center lg:justify-self-end">
          <div className="absolute -inset-3 border border-gold/40" />
          <div className="absolute -inset-1 border border-gold" />
          <div className="relative overflow-hidden bg-navy">
            <img src={imgGilson} alt="Dr. Gilson Carvalho" className="w-[320px] md:w-[400px] lg:w-[440px] h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-navy-deep border border-gold px-6 py-3">
            <p className="text-gold text-xs tracking-[0.2em] uppercase">20+ anos de atuação</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-28">
      <div className="absolute inset-0">
        <img src={bgLibrary} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-deep/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Áreas de Atuação</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Especialidades Jurídicas</h2>
          <div className="gold-divider mx-auto w-32" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group card-lift aspect-square bg-navy/60 backdrop-blur-sm border border-gold/20 p-8 flex flex-col">
              <s.icon className="text-gold mb-6" size={40} strokeWidth={1.2} />
              <h3 className="font-serif text-xl mb-4 leading-tight">{s.title}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed flex-1">{s.desc}</p>
              <div className="h-px w-10 bg-gold mt-6 group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="absolute inset-0">
        <img src={bgGavel} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-deep/88" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Sobre Nós</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
              Conheça quem atua em prol dos <span className="text-gold-gradient italic">seus direitos</span>
            </h2>
          </div>
          <div className="gold-divider w-24" />
          <p className="text-foreground/85 leading-relaxed text-[15px]">
            Advogado desde o ano de 2004, com atuação nos estados do Tocantins e Rio de Janeiro,
            marcada pela promoção dos Direitos Humanos e atuação no Direito de Família e Sucessões.
            Professor universitário desde o ano de 2006. Especialização em Direito Civil e Direito
            Processual pela PUC/GO em 2006 e mestrado em Direito (Processo, Justiça e Direitos
            Humanos) em 2016 pela UCP-Petrópolis. MBA em Gestão na Advocacia pelo IPOG em 2024.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gold/20">
            {[
              { v: "20+", l: "Anos de Atuação" },
              { v: "Mestre", l: "em Direito" },
              { v: "MBA", l: "IPOG" },
            ].map((c) => (
              <div key={c.l}>
                <div className="font-serif text-2xl md:text-3xl text-gold-gradient">{c.v}</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-foreground/70 mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 border border-gold/30 rounded-md" />
          <img src={imgEscritorio} alt="Escritório Gilson Carvalho" className="relative w-full h-auto rounded-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 bg-navy-deep">
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={bgLibrary} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Prova Social</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">O que dizem nossos clientes</h2>
          <div className="gold-divider mx-auto w-32" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="card-lift relative bg-navy/70 backdrop-blur-sm border border-gold/20 p-8 flex flex-col">
              <Quote className="text-gold/40 absolute top-5 right-5" size={36} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-current" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed text-[15px] italic flex-1">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-gold/20">
                <div className="font-serif text-lg text-gold">{t.name}</div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-foreground/65 mt-1">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="absolute inset-0">
        <img src={bgGavel} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-deep/92" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Perguntas Frequentes</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Tire suas dúvidas</h2>
          <div className="gold-divider mx-auto w-32" />
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-navy/60 backdrop-blur-sm border border-gold/20 px-6 rounded-sm hover:border-gold/50 transition-colors">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-gold hover:no-underline py-5 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed text-[15px] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", area: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.nome.trim().length < 2) err.nome = "Informe seu nome completo.";
    if (form.telefone.replace(/\D/g, "").length < 10) err.telefone = "Telefone inválido.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "E-mail inválido.";
    if (!form.area) err.area = "Selecione uma área.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const msg =
`Olá Dr. Gilson, meu nome é ${form.nome}, meu e-mail é ${form.email} e gostaria de falar sobre ${form.area}.
Telefone/WhatsApp: ${form.telefone}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative py-28 bg-navy-deep">
      <div className="absolute inset-0 opacity-10">
        <img src={bgHero} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Captação</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Vamos conversar sobre <span className="text-gold-gradient italic">o seu caso.</span>
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Atendimento discreto, com total privacidade e sigilo profissional. Cada caso é tratado
            com a atenção e a profundidade técnica que merece.
          </p>
          <div className="gold-divider w-24" />
          <ul className="space-y-5">
            {[
              { Icon: MapPin, label: "Av. Guanabara, nº 1669, Centro — Gurupi, Tocantins" },
              { Icon: Mail, label: "advogado@gilsoncarvalho.com" },
              { Icon: Phone, label: "+55 (63) 98447-4070" },
              { Icon: Clock, label: HORARIO },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 border border-gold/40 flex items-center justify-center">
                  <Icon className="text-gold" size={18} strokeWidth={1.5} />
                </span>
                <span className="pt-2 text-foreground/90 text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="bg-navy/80 backdrop-blur border border-gold/25 p-8 md:p-10 space-y-5">
          <h3 className="font-serif text-2xl mb-2">Envie sua mensagem</h3>
          <div className="gold-divider w-16 mb-6" />

          <FormField label="Nome Completo" error={errors.nome}>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="form-input w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </FormField>

          <FormField label="Telefone / WhatsApp" error={errors.telefone}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="(63) 99999-9999"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: maskPhone(e.target.value) })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors placeholder:text-foreground/30"
            />
          </FormField>

          <FormField label="E-mail" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </FormField>

          <FormField label="Área de Interesse" error={errors.area}>
            <select
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              className="w-full bg-navy-deep border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none"
            >
              <option value="">Selecione uma área</option>
              {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              <option value="Outro">Outro</option>
            </select>
          </FormField>

          <button type="submit" className="w-full mt-4 py-4 bg-gold text-primary-foreground text-xs tracking-[0.22em] uppercase font-medium hover:shadow-[0_0_30px_oklch(0.78_0.12_80/0.4)] transition-all">
            Enviar Mensagem
          </button>
          <p className="text-[11px] text-foreground/55 text-center pt-2">
            Ao enviar, você será direcionado para o WhatsApp do escritório.
          </p>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/90 mb-2">{label}</label>
      {children}
      {error && <p className="text-[11px] text-destructive mt-1">{error}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Gilson Carvalho" className="h-16 w-auto mb-4 opacity-90" />
          <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
            Excelência jurídica com ética, transparência e dedicação total.
          </p>
          <p className="text-xs text-gold/80 tracking-wider mt-4">{OAB_LINE}</p>
        </div>
        <div>
          <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Navegação</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-gold transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Contato</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>Av. Guanabara, 1669 — Centro</li>
            <li>Gurupi / Tocantins</li>
            <li>+55 (63) 98447-4070</li>
            <li>advogado@gilsoncarvalho.com</li>
            <li className="pt-2 flex items-center gap-2 text-foreground/75">
              <Clock size={13} className="text-gold" /> {HORARIO}
            </li>
            <li className="pt-2 text-gold/80 text-xs tracking-wider">{OAB_LINE}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>© 2026 Gilson Carvalho — Advocacia. Todos os direitos reservados.</p>
          <p className="text-gold/80 tracking-[0.3em] uppercase">Excelência · Ética · Resultado</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group">
      <span className="relative flex w-14 h-14">
        <span className="wa-ping absolute inline-flex h-full w-full rounded-full" />
        <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-110 transition-transform"
          style={{ background: "#25D366" }}>
          <WhatsAppIcon size={30} />
        </span>
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="bg-navy-deep text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
