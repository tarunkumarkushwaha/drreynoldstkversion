import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";

export default function HowWeWork() {
  return (
    <section className="section bg-sea-700 text-cream">
      <Container>
        <Eyebrow>
          <span className="text-sea-300">HOW WE WORK</span>
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl text-cream sm:text-4xl">
          We&rsquo;re here to make a real difference.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl">
            <Image
              src="https://picsum.photos/seed/cvfc-howwework/700/860"
              alt="Two people walking together on a sunset beach"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="     text-xl italic text-sea-100 sm:text-2xl">
              The people we work with are usually juggling so much at once
              that putting themselves first is the hardest part.
            </p>
            <p className="mt-6 text-base leading-relaxed text-cream/80">
              Here, your needs come first. Our team takes time to really
              listen, because no two people carry the same story, and a
              one-size-fits-all approach was never going to work. If
              you&rsquo;re ready to put in the work, we&rsquo;re ready to
              stand beside you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/80">
              Some sessions gently challenge you to see things from a new
              angle; others make space to simply sit with what you&rsquo;re
              feeling. Either way, we take the process seriously, because
              healing, building a fulfilling life, and forming meaningful
              relationships matter. We&rsquo;re here to walk alongside you as
              you find your strengths and step into what comes next.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cream underline decoration-sea-300 decoration-2 underline-offset-4"
            >
              Learn more about us
            </Link>
          </div>
        </div>

        <div className="relative mt-14 aspect-video w-full overflow-hidden rounded-4xl sm:aspect-21/8">
          <Image
            src="https://picsum.photos/seed/cvfc-family-sunset/1600/650"
            alt="Family holding hands on the beach at sunset"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
