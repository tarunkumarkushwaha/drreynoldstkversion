import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutPage() {
  return (
    <main className="bg-[#D8CFBF] py-16 sm:py-20 lg:py-28 overflow-hidden min-h-screen">
      <Container>
        <div className="max-w-295 mx-auto">
          <Eyebrow>
            <span className="uppercase tracking-[0.28em] text-[14px] text-black/55">
              About Us
            </span>
          </Eyebrow>

          <h1 className="font-(family-name:--font-cormorant) mt-6 lg:mt-10 text-4xl font-normal text-[#2d3130] sm:text-5xl lg:text-[56px] max-w-3xl leading-tight">
            Dedicated to helping you restore balance, strength, and connection.
          </h1>

          <div className="relative mt-12 aspect-21/9 w-full overflow-hidden">
            <Image
              src="https://picsum.photos/seed/cvfc-about-hero/1600/900"
              alt="Therapist sitting in a calm office"
              fill
              className="object-cover"
              unoptimized
              sizes="100vw"
            />
          </div>

          <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-20 items-start gap-y-12">
            <div className="lg:col-span-13 lg:pr-16">
              <h2 className="text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.22em] leading-6 text-[#2B2B2B]">
                Our approach blends compassionate understanding with evidence-based techniques to guide your personal journey.
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <p className="text-[14px] lg:text-[18px] leading-7 text-black/70">
                  We believe that true healing begins in a space where you feel completely heard and valued. Life brings complex challenges, and navigating them alone can feel overwhelming.
                </p>

                <p className="text-[14px] lg:text-[18px] leading-7 text-black/70">
                  Whether you are seeking clarity in your personal life, deeper intimacy in your relationships, or tools to handle stress, we are here to support your growth every step of the way.
                </p>
              </div>

              <div className="mt-12 lg:mt-16 h-px w-20 bg-black/35" />
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                Our Philosophy & Values
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#CDC2B0] p-8 lg:p-10">
              <span className="text-[10px] uppercase tracking-[0.24em] text-black/50 block mb-4">
                Why Choose Us
              </span>
              <ul className="space-y-6 text-[#2d3130]">
                <li className="text-[15px] lg:text-[16px] leading-relaxed">
                  <strong className="block font-medium uppercase text-[12px] tracking-wider mb-1 text-black/80">Tailored Care</strong>
                  Every session is designed specifically around your unique goals and experiences.
                </li>
                <li className="text-[15px] lg:text-[16px] leading-relaxed">
                  <strong className="block font-medium uppercase text-[12px] tracking-wider mb-1 text-black/80">Safe Environment</strong>
                  A non-judgmental, warm atmosphere where you can feel secure exploring vulnerable feelings.
                </li>
                <li className="text-[15px] lg:text-[16px] leading-relaxed">
                  <strong className="block font-medium uppercase text-[12px] tracking-wider mb-1 text-black/80">Holistic Healing</strong>
                  We integrate emotional, relational, and practical tools for sustainable change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}