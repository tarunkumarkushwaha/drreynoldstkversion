import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { whoWeHelp } from "@/lib/data";

export default function WhoWeHelp() {
  return (
    <section className="section bg-sand/60">
      <Container>
        <h2 className="text-center text-3xl sm:text-4xl">
          Who we <em className="italic text-sea-600">help</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {whoWeHelp.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="relative aspect-5/4 w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium">
                {item.href ? (
                  <Link href={item.href} className="link-underline">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-relaxed   -muted sm:text-base">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
