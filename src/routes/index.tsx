import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, FileText, Home, Shield, MapPin, Mail, Phone, Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo_gilson.png";
import imgGilson from "@/assets/img-gilson.png";
import imgEscritorio from "@/assets/img-escritorio.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import bgLibrary from "@/assets/bg-library.jpg";
import bgGavel from "@/assets/bg-gavel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gilson Carvalho — Advocacia | Excelência em Direito" },
      { name: "description", content: "Dr. Gilson Carvalho · OAB/TO 2.591 · OAB/RJ 256.131. Direito de Família, Civil, Imobiliário e Penal em Gurupi-TO." },
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
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Gilson Carvalho Advogado" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wider uppercase text-foreground/85 hover:text-gold transition-colors">
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
        <div className="lg:hidden bg-navy-deep border-t border-gold/20 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-wider hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-center mt-4 px-5 py-3 text-xs tracking-[0.18em] uppercase border border-gold text-gold">
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
              <span className="font-medium">Dr. Gilson Carvalho</span> <span className="text-gold mx-2">|</span> OAB/TO 2.591 · OAB/RJ 256.131
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-gold/90">
              Professor Universitário · Mestre & Especialista
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
            <article key={s.title} className="group aspect-square bg-navy/60 backdrop-blur-sm border border-gold/20 p-8 flex flex-col hover:border-gold hover:bg-navy transition-all duration-500">
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

function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", area: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Dr. Gilson, meu nome é ${form.nome}.\nTelefone: ${form.telefone}\nE-mail: ${form.email}\nÁrea: ${form.area}`;
    window.open(waLink(msg), "_blank");
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
        <form onSubmit={onSubmit} className="bg-navy/80 backdrop-blur border border-gold/25 p-8 md:p-10 space-y-5">
          <h3 className="font-serif text-2xl mb-2">Envie sua mensagem</h3>
          <div className="gold-divider w-16 mb-6" />
          {[
            { name: "nome", label: "Nome Completo", type: "text" },
            { name: "telefone", label: "Telefone / WhatsApp", type: "tel" },
            { name: "email", label: "E-mail", type: "email" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/90 mb-2">{f.label}</label>
              <input
                required
                type={f.type}
                value={form[f.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/90 mb-2">Área de Interesse</label>
            <select
              required
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              className="w-full bg-navy-deep border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none"
            >
              <option value="">Selecione uma área</option>
              {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              <option value="Outro">Outro</option>
            </select>
          </div>
          <button type="submit" className="w-full mt-4 py-4 bg-gold text-primary-foreground text-xs tracking-[0.22em] uppercase font-medium hover:shadow-[0_0_30px_oklch(0.78_0.12_80/0.4)] transition-all">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
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
            <li className="pt-2 text-gold/80 text-xs tracking-wider">OAB/TO 2.591 · OAB/RJ 256.131</li>
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
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-primary-foreground flex items-center justify-center shadow-[0_10px_30px_-5px_oklch(0.78_0.12_80/0.6)] hover:scale-110 transition-transform">
      <MessageCircle size={26} strokeWidth={2} />
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
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
