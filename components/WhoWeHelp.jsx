import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { whoWeHelp } from "@/lib/data";

const whoWeHelpData = whoWeHelp;

export default function WhoWeHelp() {
  return (
    <section className="bg-[#f7f6f2] py-12 sm:py-16 lg:py-24">
      <h2 className="text-left ml-10 md:ml-16 font-(family-name:--font-cormorant) text-4xl font-normal text-[#2d3130] sm:text-5xl lg:text-[56px]">
        Who we{" "}
        <span className="inline-block tracking-widest font-(family-name:--font-kristi) text-5xl font-normal leading-none text-[#A67B5B] sm:text-6xl lg:text-[70px]">
          help
        </span>
      </h2>
      <Container className="max-w-7xl px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mt-10 ml-1 md:ml-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {whoWeHelpData.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-stone-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>

              <h3 className="mt-6 font-(family-name:--font-cormorant) text-[24px] font-normal text-[#2d3130] sm:text-[28px]">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
