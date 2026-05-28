import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">Esta página não existe.</p>
        <Link to="/" className="mt-6 inline-flex rounded-sm border border-gold px-4 py-2 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition">Voltar ao início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-sm bg-gold px-4 py-2 text-sm text-primary-foreground">Tentar novamente</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gilson Carvalho — Advocacia | Excelência Jurídica" },
      { name: "description", content: "Dr. Gilson Carvalho — Advocacia premium em Gurupi/TO. Direito de Família, Civil, Imobiliário e Penal. Mestre em Direito, Professor Universitário. OAB/TO 2.591 · OAB/RJ 256.131. Atendimento presencial e online." },
      { name: "keywords", content: "advogado Gurupi, advogado Tocantins, Gilson Carvalho, direito de família, direito civil, direito imobiliário, direito penal, advocacia premium, inventário, divórcio, OAB TO, OAB RJ, professor de direito, mestre em direito, advogado online" },
      { name: "author", content: "Gilson Carvalho — Advocacia" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Gilson Carvalho — Advocacia | Excelência Jurídica" },
      { property: "og:description", content: "Ciência jurídica avançada e advocacia sob medida para proteger seu patrimônio e direitos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.professorgilson.com.br" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Gilson Carvalho — Advocacia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gilson Carvalho — Advocacia" },
      { name: "twitter:description", content: "Ciência jurídica avançada e advocacia sob medida." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.professorgilson.com.br" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
