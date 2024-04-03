import { Metadata } from "next";
import {  Fira_Sans, Voltaire } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({ subsets: ["latin"], weight: ['300','400','500','700', '900'], style:['italic', 'normal'], variable: '--font-fira' });
const voltaire = Voltaire({subsets: ["latin"], weight: ['400'], style:[ 'normal'], variable: '--font-voltaire' });
export const metadata: Metadata = {
  title: "Wayfinder - Hotel Management",
  description: "A Kingdom Hearts themed hotel management system ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fira.variable} ${voltaire.variable}`}>
      <body >{children}</body>
    </html>
  );
}
