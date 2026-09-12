import Image from "next/image";
import Container from "./ui/Container";
import { expertiseTags } from "@/lib/data";

export default function Expertise() {
  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative order-2 aspect-5/4 w-full overflow-hidden rounded-4xl lg:order-1">
            <Image
              src="https://picsum.photos/seed/cvfc-expertise/700/560"
              alt="Two people talking outdoors near water"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              You deserve a place where your story is heard, valued, and
              understood.
            </h2>
            <p className="mt-4      text-lg italic text-sea-600">
              Nothing you carry is too heavy to bring here.
            </p>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest2   -muted">
              Our areas of expertise
            </h3>
            <ul className="mt-4">
              {expertiseTags.map((tag) => (
                <li
                  key={tag}
                  className="border-b border-ink/10 py-3      text-lg italic    first:pt-0"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="mt-4      italic   -muted">
              &hellip;and more.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
