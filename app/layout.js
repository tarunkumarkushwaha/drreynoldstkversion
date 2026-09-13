import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/lib/data";
import { Kristi } from "next/font/google";

const kristi = Kristi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kristi",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: `Counseling in ${siteInfo.city}, ${siteInfo.state} | ${siteInfo.name}`,
  description:
    "Counseling for adults, couples, and children in Newbury Park and across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${cormorant.variable} ${kristi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
