import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteInfo } from "@/lib/data";
import Header from "@/components/Header";

export default function OurOffice() {
  return (
    <>
      <Header />
      <section className="bg-[#EFE8D9] py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>
                <span className="text-[14px] uppercase tracking-[0.28em] text-black/55">
                  Our Office
                </span>
              </Eyebrow>

              <h2 className="font-(family-name:--font-cormorant) mt-6 text-3xl font-normal leading-[1.15] text-black/65 sm:text-4xl lg:text-[44px]">
                A calm space designed to help you feel at{" "}
                <span className="inline-block font-(family-name:--font-kristi) text-5xl font-normal leading-[0.7] text-[#A67B5B] tracking-wide sm:text-6xl">
                  ease
                </span>
                .
              </h2>

              <p className="mt-6 max-w-md text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                My {siteInfo.city} office is a quiet, private space with natural
                light and a comfortable, uncluttered environment — built to feel
                grounding the moment you walk in. Clients often tell me the
                space itself helps them settle before we&rsquo;ve even started
                talking.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-[14px] text-black/70 sm:text-[16px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A9A86]" />
                  In-person sessions in {siteInfo.city}, {siteInfo.state}, or
                  secure telehealth anywhere in the state
                </li>
                <li className="flex items-start gap-3 text-[14px] text-black/70 sm:text-[16px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A9A86]" />
                  Private, soundproofed, and confidential — no waiting room
                  run-ins
                </li>
                <li className="flex items-start gap-3 text-[14px] text-black/70 sm:text-[16px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A9A86]" />
                  Comfortable seating and natural light, with nothing clinical
                  or cold about it
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-3/4 overflow-hidden rounded-3xl">
                <Image
                  src="/images/office1.jpeg"
                  alt={`Dr. Maya Reynolds' private therapy office in ${siteInfo.city}, ${siteInfo.state}`}
                  fill
                  sizes="(min-width:1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-3xl sm:mt-12">
                <Image
                  src="/images/office2.jpeg"
                  alt={`Comfortable, calming seating area in Dr. Reynolds' Santa Monica therapy office`}
                  fill
                  sizes="(min-width:1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
