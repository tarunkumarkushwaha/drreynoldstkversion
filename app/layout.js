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
  metadataBase: new URL("https://drreynoldstkversion.vercel.app/"),
  title: {
    default: `${siteInfo.name} | Licensed Clinical Psychologist in ${siteInfo.city}, ${siteInfo.state}`,
    template: `%s | ${siteInfo.name}`,
  },
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA, offering evidence-based therapy for anxiety, panic, trauma, and burnout using CBT, EMDR, and mindfulness-based methods. In-person & telehealth across California.",
  keywords: [
    "Dr. Maya Reynolds",
    "clinical psychologist Santa Monica",
    "anxiety therapist Santa Monica",
    "trauma therapist California",
    "EMDR therapist Santa Monica",
    "burnout therapy California",
    "licensed psychologist PsyD",
    "telehealth therapy California",
  ],
  authors: [{ name: siteInfo.name }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  category: "Health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drreynoldstkversion.vercel.app/",
    siteName: siteInfo.name,
    title: `${siteInfo.name} | Licensed Clinical Psychologist in ${siteInfo.city}, ${siteInfo.state}`,
    description:
      "Evidence-based therapy for anxiety, panic, trauma, and burnout. In-person in Santa Monica or telehealth across California.",
    
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | Licensed Clinical Psychologist`,
    description:
      "Evidence-based therapy for anxiety, panic, trauma, and burnout. In-person in Santa Monica or telehealth across California.",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${cormorant.variable} ${kristi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
