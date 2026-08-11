import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/manrope";
import "./globals.css";
import "./layout-fixes.css";
import "./layout-polish.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "WhatsApp Blindado em 72h | Weslen Farias",
    description:
      "Entenda onde sua clínica perde pacientes dentro do WhatsApp e conheça o caminho para uma operação oficial, organizada e rastreável.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "O seu anúncio funcionou. E agora?",
      description:
        "Descubra o ponto cego entre o clique e a agenda na aula WhatsApp Blindado em 72h.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1792,
          height: 900,
          alt: "O anúncio funcionou. E agora? Veja o que acontece depois do clique.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "O seu anúncio funcionou. E agora?",
      description: "Veja o que acontece com os leads depois do clique.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
