import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col justify-center items-center bg-gray-300">{children}</body>
    </html>
  );
}
