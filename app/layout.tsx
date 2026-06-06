import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import { Audiowide } from "next/font/google";

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
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
      className={`${poppins.className} ${audiowide.variable} antialiased`}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}