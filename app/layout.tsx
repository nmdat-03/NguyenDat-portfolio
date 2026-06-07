import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import { Black_Ops_One } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackOpsOne",
});

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
      className={`${roboto.className} ${blackOpsOne.variable} antialiased`}
    >
      <body className="min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}