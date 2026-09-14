import Image from "next/image";
import { expertiseTags } from "@/lib/data";

export default function Expertise() {
  return (
    <section className="bg-[#f7f6f2]">
      <div className="relative min-h-95 w-full overflow-hidden sm:min-h-120 lg:min-h-140">
        <Image
          src="https://picsum.photos/seed/cvfc-expertise/1600/900"
          alt="Children playing on the beach"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />

        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px]" />

        <div className="absolute inset-0 flex items-center justify-start p-6 text-left sm:p-12 lg:px-24 xl:px-32">
          <h2 className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl font-(family-name:--font-cormorant) text-[26px] font-light leading-[1.1] text-white sm:text-3xl lg:text-[40px] xl:text-[44px]">
            You deserve a therapist who truly listens to your anxiety, trauma,
            and burnout.{" "}
            <em className="italic">
              Nothing will be too heavy for us to work through together.
            </em>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-28 xl:px-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h3 className="font-(family-name:--font-cormorant) text-3xl font-normal text-[#2d3130] sm:text-4xl lg:text-[42px]">
              Our areas of{" "}
              <span className="inline-block tracking-widest font-(family-name:--font-kristi) text-4xl font-normal text-[#A67B5B] sm:text-5xl lg:text-[58px]">
                expertise
              </span>
            </h3>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {expertiseTags.map((tag) => (
                <li
                  key={tag}
                  className="border-b border-[#e5e3de] py-4 font-sans text-[16px] font-normal uppercase tracking-[0.2em] text-[#595e5c]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
