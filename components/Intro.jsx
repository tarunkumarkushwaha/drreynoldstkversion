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
                You’re holding onto hope that anxiety, stress, and past pain
                won’t always feel this heavy.
              </h2>

              <div className="mt-8 flex flex-col lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col">
                  <p className="font-sans text-[14px] font-bold uppercase tracking-[0.22em] text-[#595e5c] leading-5">
                    DR. MAYA REYNOLDS, PSYD, HELPS ADULTS TURN THAT HOPE INTO
                    LASTING CHANGE.
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    Whether you’re a high-achieving professional running on
                    overdrive, someone working through the lasting effects of
                    trauma, or an adult facing anxiety, panic, or burnout, I
                    offer a warm, evidence-based space to help you feel
                    regulated, understood, and equipped to move forward.
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
                    First and foremost, I believe what you’re experiencing is
                    real, valid, and worthy of support. As a licensed clinical
                    psychologist, I offer adults in {siteInfo.city} and
                    throughout {siteInfo.state} a calm, grounded space to
                    process anxiety, trauma, and chronic stress at a pace that
                    feels safe. Through evidence-based therapy and a
                    collaborative approach, you can reconnect with yourself and
                    build a more sustainable way forward.
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
