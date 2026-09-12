import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";

export default function ScheduleCta() {
  return (
    <section className="section bg-sand/60">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>SCHEDULE AN APPOINTMENT</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Find a therapist who is the right fit for{" "}
              <em className="italic text-sea-600">you</em>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed   -muted sm:text-lg">
              Starting therapy takes courage, and finding the right therapist
              makes all the difference. Every member of our team brings
              genuine expertise and a commitment to helping you feel
              prioritized, understood, and supported.
            </p>
            <p className="mt-4 text-base   -muted">
              Ready to get started? Tap the button below to book a time.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book now
            </Link>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl">
            <Image
              src="https://picsum.photos/seed/cvfc-schedule/800/620"
              alt="Parent and child looking for shells on the beach"
              fill
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
