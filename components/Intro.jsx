import Image from "next/image";
import { siteInfo } from "@/lib/data";

export default function Intro() {
  return (
    <section className="bg-[#f7f6f2] overflow-hidden">
      <div className="mx-auto w-full max-w-360">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
          <div className="w-full px-6 py-12 sm:px-12 md:px-16 lg:w-[65%] lg:px-16 lg:py-24 xl:px-24 xl:py-28">
            <div className="max-w-2xl">
              <h2 className="font-(family-name:--font-cormorant) text-3xl font-normal leading-[1.2] text-[#2d3130] sm:text-4xl lg:text-[42px] xl:text-[48px]">
                You’re holding onto hope that life can be better than it is
                right now.
              </h2>

              <div className="mt-8 flex flex-col lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col">
                  <p className="font-sans text-[14px] font-bold uppercase tracking-[0.22em] text-[#595e5c] leading-5">
                    AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE
                    A REALITY.
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    Whether you’re an adult seeking personal growth, looking to
                    work through your trauma, a couple working on your
                    relationship, or a parent looking for support for your
                    child, we provide a compassionate and safe space to help you
                    navigate all of life’s ups and downs.
                  </p>
                </div>

                <div className="relative my-8 aspect-4/3 w-[60%] overflow-hidden sm:aspect-video lg:hidden">
                  <Image
                    src="https://picsum.photos/seed/cvfc-shoreline/1000/700"
                    alt="Calm shoreline with gentle waves"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div>
                  <p className="text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    First and foremost, we believe what you’re going through is
                    real, valid, and worthy of support. Our team offers clients
                    in the {siteInfo.city} area and across {siteInfo.state} an
                    environment to discover a new life and a deeper sense of
                    self in the midst of their struggles. As we tap into the
                    power of connection and understanding, you can find your
                    footing again and take a transformative path forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block lg:w-[28%] xl:w-[25%] shrink-0">
            <Image
              src="https://picsum.photos/seed/cvfc-shoreline/1000/1200"
              alt="Calm shoreline with gentle waves"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover object-left"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
