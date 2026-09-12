import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import { expertiseAreas } from "@/lib/data";

export default function Specialties() {
  return (
    <section className="section">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Honoring where you&rsquo;ve been and helping shape where
            you&rsquo;re headed.
          </h2>
          <h3 className="mt-4 text-lg   -muted">
            Our specialties include&hellip;
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {expertiseAreas.map((area) => (
              <div key={area.title}>
                <h4 className="text-xl font-medium">{area.title}</h4>
                <p className="mt-3 text-sm leading-relaxed   -muted sm:text-base">
                  {area.copy}
                </p>
                <Link
                  href={area.href}
                  className="link-underline mt-3 inline-block text-sm font-semibold"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl lg:aspect-auto">
            <Image
              src="https://picsum.photos/seed/cvfc-specialties/700/900"
              alt="Person walking along the shoreline"
              fill
              sizes="(min-width:1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
