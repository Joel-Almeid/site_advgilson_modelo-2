import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { MapPin, Mail, Phone, Clock, Star, Quote, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo_gilson.png";
import bgHero from "@/assets/bg-hero.jpg";
import bgLibrary from "@/assets/bg-library.jpg";
import bgGavel from "@/assets/bg-gavel.jpg";

export const WHATSAPP = "5563984474070";
export const waLink = (msg = "Olá Dr. Gilson, gostaria de agendar uma consulta.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const OAB_LINE = "OAB/TO 2.591 · OAB/RJ 256.131";
const HORARIO = "Seg. a Sex. · 09:00 às 18:00";

export type Benefit = { icon: LucideIcon; title: string; desc: string };
export type Testimonial = { name: string; role: string; text: string };
export type FAQItem = { q: string; a: string };

export type LandingProps = {
  areaLabel: string;
  eyebrow: string;
  headline: React.ReactNode;
  subheadline: string;
  ctaPrimary?: string;
  benefitsTitle?: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  formSubject: string;
};

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

function LPHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Gilson Carvalho Advogado" className="h-12 w-auto" />
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs tracking-[0.18em] uppercase bg-gold text-primary-foreground font-medium hover:shadow-[0_0_30px_oklch(0.78_0.12_80/0.5)] transition-all duration-300"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}

function Hero({ eyebrow, headline, subheadline, ctaPrimary, formSubject }: LandingProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/55" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">{eyebrow}</span>
          <div className="h-px w-12 bg-gold" />
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground max-w-4xl mx-auto">
          {headline}
        </h1>
        <p className="text-base md:text-lg text-foreground/85 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        <div className="space-y-2 pt-2">
          <p className="text-sm text-gold/95 font-medium tracking-wide">{OAB_LINE}</p>
          <p className="flex items-center justify-center gap-2 text-xs text-foreground/75">
            <Clock size={14} className="text-gold" /> {HORARIO}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href={waLink(`Olá Dr. Gilson, gostaria de falar sobre ${formSubject}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-xs tracking-[0.22em] uppercase font-medium hover:shadow-[0_0_40px_oklch(0.78_0.12_80/0.45)] transition-all duration-300"
          >
            {ctaPrimary ?? "Agendar Consulta Estratégica"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center px-8 py-4 border border-gold text-gold text-xs tracking-[0.22em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits({ benefits, benefitsTitle }: LandingProps) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={bgLibrary} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-deep/92" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Como podemos ajudar</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">{benefitsTitle ?? "Soluções Sob Medida"}</h2>
          <div className="gold-divider mx-auto w-32" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article key={b.title} className="glass-card p-8 flex flex-col rounded-sm">
              <b.icon className="text-gold mb-5" size={36} strokeWidth={1.2} />
              <h3 className="font-serif text-xl mb-3 leading-tight">{b.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">{b.desc}</p>
              <div className="h-px w-10 bg-gold mt-6" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ testimonials }: LandingProps) {
  return (
    <section className="relative py-24 bg-navy-deep">
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={bgLibrary} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Prova Social</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Clientes que confiaram</h2>
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

function FAQ({ faqs }: LandingProps) {
  return (
    <section className="relative py-24">
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
            <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 rounded-sm">
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

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/90 mb-2">{label}</label>
      {children}
      {error && <p className="text-[11px] text-destructive mt-1">{error}</p>}
    </div>
  );
}

function Contact({ formSubject }: LandingProps) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [accept, setAccept] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.nome.trim().length < 2) err.nome = "Informe seu nome completo.";
    if (form.telefone.replace(/\D/g, "").length < 10) err.telefone = "Telefone inválido.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "E-mail inválido.";
    if (!accept) err.accept = "Você precisa aceitar a Política de Privacidade.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const msg =
`Olá Dr. Gilson, meu nome é ${form.nome}, meu e-mail é ${form.email} e gostaria de falar sobre ${formSubject}.
Telefone/WhatsApp: ${form.telefone}
${form.mensagem ? `Mensagem: ${form.mensagem}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative py-24 bg-navy-deep">
      <div className="absolute inset-0 opacity-10">
        <img src={bgHero} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Atendimento Personalizado</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Solicite uma <span className="text-gold-gradient italic">análise estratégica.</span>
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
        <form onSubmit={onSubmit} noValidate className="glass-card p-8 md:p-10 space-y-5 rounded-sm">
          <h3 className="font-serif text-2xl mb-2">Envie sua mensagem</h3>
          <div className="gold-divider w-16 mb-6" />

          <Field label="Nome Completo" error={errors.nome}>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </Field>

          <Field label="Telefone / WhatsApp" error={errors.telefone}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="(63) 99999-9999"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: maskPhone(e.target.value) })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors placeholder:text-foreground/30"
            />
          </Field>

          <Field label="E-mail" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors"
            />
          </Field>

          <Field label="Mensagem (opcional)">
            <textarea
              rows={3}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full bg-transparent border-b border-gold/30 py-3 text-foreground focus:border-gold outline-none transition-colors resize-none"
            />
          </Field>

          <label className="flex items-start gap-3 text-[12px] text-foreground/75 pt-2 cursor-pointer">
            <input
              type="checkbox"
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              className="mt-1 accent-[color:var(--gold)]"
            />
            <span>
              <ShieldCheck size={14} className="inline text-gold mr-1 -mt-0.5" />
              Li e aceito a <span className="text-gold">Política de Privacidade</span>. Meus dados serão tratados em conformidade com a <strong>LGPD</strong> e usados apenas para contato sobre este atendimento.
            </span>
          </label>
          {errors.accept && <p className="text-[11px] text-destructive">{errors.accept}</p>}

          <button type="submit" className="w-full mt-2 py-4 bg-gold text-primary-foreground text-xs tracking-[0.22em] uppercase font-medium hover:shadow-[0_0_30px_oklch(0.78_0.12_80/0.4)] transition-all">
            Falar com Especialista
          </button>
        </form>
      </div>
    </section>
  );
}

function LPFooter() {
  return (
    <footer className="bg-navy-deep border-t border-gold/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Gilson Carvalho" className="h-12 w-auto opacity-90" />
          <div className="text-xs text-foreground/70">
            <p className="text-gold/85 tracking-wider">{OAB_LINE}</p>
            <p className="flex items-center gap-2 mt-1"><Clock size={12} className="text-gold" /> {HORARIO}</p>
          </div>
        </div>
        <p className="text-xs text-foreground/60 text-center">© 2026 Gilson Carvalho — Advocacia.</p>
        <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase">Excelência · Ética · Resultado</p>
      </div>
    </footer>
  );
}

function FloatingWA({ formSubject }: { formSubject: string }) {
  return (
    <a
      href={waLink(`Olá Dr. Gilson, gostaria de falar sobre ${formSubject}.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex w-14 h-14">
        <span className="wa-ping absolute inline-flex h-full w-full rounded-full" />
        <span
          className="relative inline-flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-110 transition-transform"
          style={{ background: "#25D366" }}
        >
          <WhatsAppIcon size={30} />
        </span>
      </span>
    </a>
  );
}

export function LandingPage(props: LandingProps) {
  return (
    <div className="bg-navy-deep text-foreground">
      <LPHeader />
      <main>
        <Hero {...props} />
        <Benefits {...props} />
        <Testimonials {...props} />
        <FAQ {...props} />
        <Contact {...props} />
      </main>
      <LPFooter />
      <FloatingWA formSubject={props.formSubject} />
    </div>
  );
}
