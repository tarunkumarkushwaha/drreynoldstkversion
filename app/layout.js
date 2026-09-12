import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/lib/data";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--    ",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--  ",
  display: "swap",
});

export const metadata = {
  title: `Counseling in ${siteInfo.city}, ${siteInfo.state} | ${siteInfo.name}`,
  description:
    "Counseling for adults, couples, and children in Newbury Park and across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
};

export default function RootLayout({
  children}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
