import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Conhecendo NextJS",
  description: "Site acadêmico para aprender NextJS",
  keywords: ['NextJS', 'Estudos', 'Sujeito Programador'],
  openGraph: {
    images: ['https://sujeitoprogramador.com/wp-content/uploads/2021/06/thumpost.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <br/>

        {children}
      </body>
    </html>
  );
}
