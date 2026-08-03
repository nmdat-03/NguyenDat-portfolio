import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import { LanguageProvider } from "@/contexts/LanguageContext";


export const metadata: Metadata = {
  title: "Nguyen Dat | Portfolio",
  description: "Nguyen Dat Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased`}
    >
      <body className="min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}