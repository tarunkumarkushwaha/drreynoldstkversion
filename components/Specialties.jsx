import Link from "next/link";
import Container from "./ui/Container";
import { expertiseAreas } from "@/lib/data";

const specialties = expertiseAreas;

export default function Specialties() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-(family-name:--font-cormorant) mt-6 lg:mt-20 text-3xl font-normal text-[#2d3130] sm:text-4xl lg:text-[42px]">
              Our{" "}
              <span className="inline-block font-(family-name:--font-kristi) text-5xl font-light leading-[0.7] text-[#88a49e] tracking-widest sm:text-6xl">
                specialties
              </span>{" "}
              include&hellip;
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between">
                <div>
                  
                  <h3 className="mt-6 font-(family-name:--font-cormorant) text-[24px] font-normal text-[#2d3130] sm:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-black/65 sm:text-[18px]">
                    {item.copy}
                  </p>
                </div>

                <div className="mt-6 pb-4 ">
                  <Link
                    href="/"
                    className="inline-block border-b border-[#2d3130] font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-[#2d3130] transition-opacity hover:opacity-75"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
