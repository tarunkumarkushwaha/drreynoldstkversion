import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./ui/Eyebrow";
import { siteInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-[#f7f6f2] overflow-hidden py-10 sm:py-16 md:py-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row ">
          
          <div className="order-1 h-full md:order-2 flex flex-1 flex-col justify-center px-6 py-0 sm:px-12 md:px-10 lg:px-16 xl:px-24">
            <div className="mx-auto max-w-xl md:mx-0 lg:max-w-2xl">
              <Eyebrow className="w-full tracking-widest pb-2 md:pb-16 md:w-[80%]">
                ONLINE &amp; IN-PERSON COUNSELING IN{" "}
                {siteInfo.city.toUpperCase()} &amp; ACROSS{" "}
                {siteInfo.state.toUpperCase()}
              </Eyebrow>

              <h1 className="mt-8 font-(family-name:--font-cormorant) text-[44px] sm:text-5xl lg:text-[46px] xl:text-[54px] font-normal leading-[1.18] text-[#2d3130]">
                Rebuild your foundation on solid ground and finally begin to{" "}
                <span className="inline-block font-(family-name:--font-kristi) text-5xl font-normal leading-[0.7] text-[#7c9d96] tracking-wide sm:text-6xl lg:text-[72px]">
                  thrive
                </span>
                .
              </h1>

              <p className="mt-8 max-w-lg text-[14px] font-normal leading-loose text-[#595e5c] sm:text-[15px] lg:text-[16px]">
                Specialized therapy for adults, couples, teens, and children to
                reflect, heal, and grow.
              </p>

              <div className="mt-10 pb-4 ">
                <Link
                  href="/contact"
                  className="inline-block border-b border-[#2d3130] font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-[#2d3130] transition-opacity hover:opacity-75"
                >
                  BOOK AN APPOINTMENT
                </Link>
              </div>
            </div>
          </div>

          <div className="order-2 mt-8 flex w-full flex-row items-end gap-3 px-6 md:contents md:m-0 md:p-0">
   
            <div className="order-1 md:order-1 relative aspect-3/4 w-[70%] shrink-0 overflow-hidden sm:h-120 md:h-auto md:w-[38%] lg:w-[35%]">
              <Image
                src="https://picsum.photos/seed/cvfc-hero-1/800/1000"
                alt="Family walking on the beach"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 70vw"
                className="object-cover object-center"
                unoptimized
              />
            </div>

            <div className="order-2 md:order-3 relative aspect-1/2 flex-1 shrink-0 overflow-hidden sm:h-80 md:h-72 md:w-[8%] md:flex-none md:self-end lg:h-70 xl:h-80">
              <Image
                src="https://picsum.photos/seed/cvfc-hero-2/400/800"
                alt="Beach background accent"
                fill
                sizes="(min-width: 768px) 15vw, 30vw"
                className="object-cover object-center md:object-right"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
