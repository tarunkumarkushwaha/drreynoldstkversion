import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteInfo } from "@/lib/data";
import Header from "@/components/Header";

export const metadata = {
  title:
    "About Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Meet Dr. Maya Reynolds, PsyD — a licensed clinical psychologist in Santa Monica, CA, specializing in anxiety, panic, trauma, and burnout using CBT, EMDR, and mindfulness-based therapy. In-person & telehealth across California.",
  keywords: [
    "Dr. Maya Reynolds",
    "clinical psychologist Santa Monica",
    "anxiety therapist Santa Monica",
    "trauma therapist California",
    "EMDR therapist Santa Monica",
    "burnout therapy California",
    "licensed psychologist PsyD",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description:
      "Licensed clinical psychologist in Santa Monica, CA helping high-achieving adults navigate anxiety, trauma, and burnout through evidence-based, compassionate therapy.",
    type: "profile",
    locale: "en_US",
  },
};

const approachMethods = [
  {
    label: "CBT",
    name: "Cognitive Behavioral Therapy",
    copy: "Identifies the thought patterns feeding anxiety and worry, and builds practical tools to interrupt them.",
  },
  {
    label: "EMDR",
    name: "Eye Movement Desensitization & Reprocessing",
    copy: "Helps the brain reprocess painful memories so past experiences carry less weight in daily life.",
  },
  {
    label: "MBT",
    name: "Mindfulness-Based Practices",
    copy: "Builds present-moment awareness to ease overthinking and chronic tension in the body.",
  },
  {
    label: "BOT",
    name: "Body-Oriented Techniques",
    copy: "Addresses the physiological side of stress and trauma, not just the thoughts around it.",
  },
];

const focusAreas = [
  "Anxiety & Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "High-Achievers & Professionals",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Maya Reynolds",
  honorificSuffix: "PsyD",
  jobTitle: "Licensed Clinical Psychologist",
  description:
    "Licensed clinical psychologist based in Santa Monica, California, offering therapy for adults navigating anxiety, panic, trauma, and burnout.",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteInfo.city,
    addressRegion: siteInfo.state,
    addressCountry: "US",
  },
  knowsAbout: [
    "Anxiety",
    "Panic Disorder",
    "Trauma",
    "Burnout",
    "Perfectionism",
    "EMDR",
    "Cognitive Behavioral Therapy",
    "Mindfulness-Based Therapy",
  ],
  medicalSpecialty: "Psychiatric",
  areaServed: {
    "@type": "State",
    name: "California",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-[#EFE8D9] py-16 sm:py-20 lg:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>
                  <span className="text-[14px] uppercase tracking-[0.28em] text-black/55">
                    About Dr. Maya Reynolds, PsyD
                  </span>
                </Eyebrow>

                <h1 className="font-(family-name:--font-cormorant) mt-6 text-3xl font-normal leading-tight text-[#2d3130] sm:text-5xl lg:text-[52px]">
                  A licensed clinical psychologist dedicated to helping you find
                  calm, resilience, and a stronger sense of self.
                </h1>

                <p className="mt-6 text-[15px] leading-relaxed text-black/70 sm:text-[18px]">
                  Providing warm, evidence-based therapy in Santa Monica and
                  online across California.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto aspect-2/3 w-full max-w-95 overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm lg:max-w-none">
                  <Image
                    src="/images/DrMaya.png"
                    alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                    fill
                    priority
                    sizes="(min-width: 1024px) 35vw, (min-width: 640px) 380px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
