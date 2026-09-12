import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { siteInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow>
              Online &amp; in-person counseling in {siteInfo.city} &amp; across {siteInfo.state}
            </Eyebrow>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-6xl">
              Find steadier ground and start to <em className="italic text-teal-700">thrive</em> again.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-500 sm:text-lg">
              Focused therapy for adults, couples, teens, and children — built around reflection, healing, and real growth.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Book an Appointment
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl sm:mt-12">
              <Image
                src="https://picsum.photos/seed/cvfc-hero-1/500/700"
                alt="Family sitting together outdoors"
                fill
                sizes="(min-width:1024px) 20vw, 45vw"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="https://picsum.photos/seed/cvfc-hero-2/500/700"
                alt="Child smiling during a counseling session"
                fill
                sizes="(min-width:1024px) 20vw, 45vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
