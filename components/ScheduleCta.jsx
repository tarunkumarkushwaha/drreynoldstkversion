import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";

export default function ScheduleCta() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Schedule an appointment</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
              Find a therapist who is the right fit for <em className="italic text-teal-700">you</em>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-500 sm:text-lg">
              Starting therapy takes courage, and finding the right therapist makes all the difference. Every member
              of our team brings genuine expertise and a commitment to helping you feel prioritized, understood, and
              supported.
            </p>
            <p className="mt-4 text-base text-stone-500">Ready to get started? Tap the button below to book a time.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Book now
            </Link>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/cvfc-schedule/800/620"
              alt="Parent and child looking for shells on the beach"
              fill
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
