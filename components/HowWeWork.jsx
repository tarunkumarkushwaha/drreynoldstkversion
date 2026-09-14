import Image from "next/image";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-[#D8CFBF] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="max-w-295 mx-auto">
          <Eyebrow>
            <span className="uppercase tracking-[0.28em] text-[14px] text-black/55">
              How We Work
            </span>
          </Eyebrow>

          <h2 className="font-(family-name:--font-cormorant) mt-6 lg:mt-20 text-3xl font-normal text-[#2d3130] sm:text-4xl lg:text-[42px]">
            We’re here to make a difference.
          </h2>

          <div className="relative mt-8 aspect-5/4 w-full overflow-hidden lg:hidden">
            <Image
              src="https://picsum.photos/seed/cvfc-hero-1/800/1000"
              alt="Family holding hands on the beach at sunset"
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
              loading="eager"
            />
          </div>

          <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-20 items-start gap-y-8">
            <div className="lg:col-span-13 lg:pr-12">
              <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-[11px] lg:text-[14px] font-medium uppercase tracking-[0.2em] lg:tracking-[0.22em] leading-5 text-[#2B2B2B]">
                    The clients we work with are balancing so many things at
                    once. It’s often hard for them to put themselves first.
                  </h3>

                  <p className="mt-6 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    Here, your needs are always top priority. Our team takes the
                    time to deeply listen to our clients in order to truly
                    understand their story and their struggles. We recognize
                    that no two people are the same and that personalized
                    therapy means an intentional, tailored approach.
                  </p>
                </div>

                <div>
                  <p className="text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    Sometimes we may gently challenge you to look at things
                    differently and other times we may explore your emotions,
                    all while encouraging you to practice what you've learned in
                    your daily life. We take what we do seriously because
                    healing, meaningful relationships, and a fulfilling life all
                    matter.
                  </p>
                </div>
              </div>

              <div className="mt-10 pb-4 ">
                <Link
                  href="/"
                  className="inline-block border-b border-[#2d3130] font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-[#2d3130] transition-opacity hover:opacity-75"
                >
                  Learn More About Us
                </Link>
              </div>

              
            </div>

            <div className="hidden lg:block lg:col-span-7 relative h-140">
              <div className="absolute -right-28 top-0 w-107.5 h-140 overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/cvfc-hero-1/800/1000"
                  alt="Family holding hands on the beach at sunset"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="430px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
