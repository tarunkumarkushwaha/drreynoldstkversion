import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteInfo } from "@/lib/data";

export const metadata = {
  title: "About Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
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
    <main className="min-h-screen overflow-hidden bg-[#D8CFBF] py-16 sm:py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <div className="mx-auto max-w-295">
          <Eyebrow>
            <span className="text-[14px] uppercase tracking-[0.28em] text-black/55">
              About Dr. Maya Reynolds, PsyD
            </span>
          </Eyebrow>

          <h1 className="font-(family-name:--font-cormorant) mt-6 max-w-3xl text-4xl font-normal leading-tight text-[#2d3130] sm:text-5xl lg:mt-10 lg:text-[56px]">
            A licensed clinical psychologist dedicated to helping you find
            calm, resilience, and a stronger sense of self.
          </h1>

          <div className="relative mt-12 aspect-21/9 w-full overflow-hidden">
            <Image
              src="https://picsum.photos/seed/reynolds-office/1600/900"
              alt="Dr. Maya Reynolds' calm, private therapy office in Santa Monica, California"
              fill
              className="object-cover"
              unoptimized
              sizes="100vw"
            />
          </div>

          {/* Intro / philosophy */}
          <div className="mt-16 grid grid-cols-1 items-start gap-y-12 lg:mt-24 lg:grid-cols-20">
            <div className="lg:col-span-13 lg:pr-16">
              <h2 className="text-[12px] font-medium uppercase leading-6 tracking-[0.22em] text-[#2B2B2B] lg:text-[14px]">
                My approach blends compassionate understanding with
                evidence-based techniques like CBT, EMDR, and mindfulness to
                guide your healing.
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <p className="text-[14px] leading-7 text-black/70 lg:text-[18px]">
                  Many of the people I work with are high-achieving,
                  thoughtful, and self-aware—but internally feel exhausted,
                  stuck in overthinking, or emotionally on edge. They&rsquo;re
                  &ldquo;functional&rdquo; on the outside while quietly
                  managing constant worry, tension in their body, or a sense
                  of always bracing for something to go wrong.
                </p>

                <p className="text-[14px] leading-7 text-black/70 lg:text-[18px]">
                  I take a warm, collaborative, and grounded approach.
                  Sessions are structured enough to feel supportive, while
                  still leaving space for reflection and depth—so you leave
                  understanding both the emotional and physiological sides of
                  what you&rsquo;re experiencing.
                </p>
              </div>

              <div className="mt-12 h-px w-20 bg-black/35 lg:mt-16" />
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                My Philosophy &amp; Approach
              </p>
            </div>

            <div className="bg-[#CDC2B0] p-8 lg:col-span-7 lg:p-10">
              <span className="mb-4 block text-[10px] uppercase tracking-[0.24em] text-black/50">
                Why Work With Me
              </span>
              <ul className="space-y-6 text-[#2d3130]">
                <li className="text-[15px] leading-relaxed lg:text-[16px]">
                  <strong className="mb-1 block text-[12px] font-medium uppercase tracking-wider text-black/80">
                    Evidence-Based &amp; Integrative
                  </strong>
                  CBT, EMDR, mindfulness, and body-oriented techniques,
                  tailored to what you actually need.
                </li>
                <li className="text-[15px] leading-relaxed lg:text-[16px]">
                  <strong className="mb-1 block text-[12px] font-medium uppercase tracking-wider text-black/80">
                    Trauma-Informed Care
                  </strong>
                  A carefully paced approach focused on safety, stabilization,
                  and helping you feel regulated day to day.
                </li>
                <li className="text-[15px] leading-relaxed lg:text-[16px]">
                  <strong className="mb-1 block text-[12px] font-medium uppercase tracking-wider text-black/80">
                    A Space Designed to Feel Safe
                  </strong>
                  A quiet, private Santa Monica office with natural light—or
                  secure telehealth from anywhere in California.
                </li>
              </ul>
            </div>
          </div>

          {/* Areas of focus */}
          <div className="mt-20 lg:mt-28">
            <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">
              Areas of Focus
            </p>
            <h2 className="font-(family-name:--font-cormorant) mt-4 max-w-2xl text-3xl font-normal leading-tight text-[#2d3130] sm:text-4xl">
              What I most often help clients work through.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-black/15 bg-[#EFE8D9] px-5 py-2 text-[13px] font-medium uppercase tracking-wide text-[#2d3130] sm:text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Approach / methods */}
          <div className="mt-20 lg:mt-28">
            <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">
              My Approach
            </p>
            <h2 className="font-(family-name:--font-cormorant) mt-4 max-w-2xl text-3xl font-normal leading-tight text-[#2d3130] sm:text-4xl">
              Evidence-based methods, used together.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {approachMethods.map((method) => (
                <div key={method.label} className="border-t border-black/20 pt-5">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-black/45">
                    {method.label}
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-[#2d3130]">
                    {method.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-black/70 sm:text-[16px]">
                    {method.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trauma + burnout, side by side */}
          <div className="mt-20 grid grid-cols-1 gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-(family-name:--font-cormorant) text-2xl font-normal text-[#2d3130] sm:text-3xl">
                Trauma work, paced carefully.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-black/70 sm:text-[16px]">
                I work with adults who&rsquo;ve experienced single-incident
                trauma as well as more complex, long-standing patterns that
                may stem from childhood, relationships, or chronic stress. My
                approach emphasizes safety and stabilization first—helping
                you feel more regulated in daily life, not just during
                sessions.
              </p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-cormorant) text-2xl font-normal text-[#2d3130] sm:text-3xl">
                Support for burnout &amp; high internal pressure.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-black/70 sm:text-[16px]">
                Many of my clients are entrepreneurs, creatives, or
                professionals who feel disconnected from themselves after
                years of pushing through stress. Therapy becomes a space to
                slow down, reconnect, and build more sustainable ways of
                living and working.
              </p>
            </div>
          </div>

          {/* Office */}
          <div className="mt-20 lg:mt-28">
            <div className="h-px w-20 bg-black/35" />
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
              The Office
            </p>
            <p className="mt-6 max-w-3xl text-[14px] leading-7 text-black/70 sm:text-[18px]">
              I offer both in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located anywhere in
              California. My office is a quiet, private space designed to
              feel calm and grounding, with natural light and a comfortable,
              uncluttered environment. Clients often share that the space
              itself helps them feel more at ease when they arrive.
            </p>
          </div>

          {/* Closing + CTA */}
          <div className="mt-20 border-t border-black/20 pt-12 lg:mt-28">
            <p className="max-w-3xl text-[14px] leading-7 text-black/70 sm:text-[18px]">
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process. My goal isn&rsquo;t
              just symptom relief, but helping you develop insight, resilience,
              and a stronger relationship with yourself over time. If
              you&rsquo;re looking for a therapist who combines practical
              tools with depth-oriented work—and who understands the
              realities of living and working in a fast-paced
              environment—I may be a good fit.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block border-b border-[#2d3130] font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-[#2d3130] transition-opacity hover:opacity-75"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}