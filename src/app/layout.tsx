import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Avaliação de Currículo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Header />

        <main className="flex flex-1 justify-center">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
