import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./ui/Eyebrow";

export default function ScheduleCta() {
  return (
    <section className="bg-[#f7f6f2] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end">
          <div className="order-1 relative h-40 w-1/2 shrink-0 overflow-hidden sm:h-80 md:h-62.5 md:w-[15%] lg:h-75 xl:h-108">
            <Image
              src="https://picsum.photos/seed/cvfc-left/400/800"
              alt="Beach background accent"
              fill
              sizes="(min-width: 768px) 15vw, 100vw"
              className="object-cover object-center md:object-right"
              unoptimized
            />
          </div>

          <div className="order-2 flex-1 px-5 py-10 sm:px-10 md:px-8 md:py-6 lg:px-12 xl:px-20">
            <div className="mx-auto max-w-2xl md:mx-0 lg:max-w-3xl">
              <Eyebrow className="tracking-[0.3em]">
                BOOK A THERAPY CONSULTATION
              </Eyebrow>

              <h2 className="mt-6 font-(family-name:--font-cormorant) font-normal leading-[1.2] text-[#2d3130] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px]">
                Work with a licensed psychologist who understands{" "}
                <span className="inline-block font-(family-name:--font-kristi) text-5xl font-normal leading-[0.7] text-[#A67B5B] tracking-widest sm:text-6xl">
                  you
                </span>
                .
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                <p>
                  Starting therapy takes courage, and finding the right
                  psychologist makes all the difference. As a licensed clinical
                  psychologist based in Santa Monica, I bring evidence-based
                  training in CBT, EMDR, and mindfulness-based care to help you
                  work through anxiety, trauma, and burnout at a pace that feels
                  safe. My goal is for you to feel heard, understood, and
                  equipped with real tools for change.
                </p>
                <p className="pt-1">
                  Click the button below to schedule a consultation.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-[50%] border border-[#2d3130] bg-transparent px-8 font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-[#2d3130] transition-colors hover:bg-[#A67B5B] hover:text-white"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="order-3 relative h-80 w-full md:w-[32%] shrink-0 sm:h-96 md:h-100 lg:h-112.5 xl:h-140">
            <div className="absolute top-0 right-0 bottom-0 h-full w-[80%] md:w-full text-transparent">
              <Image
                src="https://picsum.photos/id/1050/1000/1000"
                alt="Parent and child looking for shells on the beach"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover object -center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
