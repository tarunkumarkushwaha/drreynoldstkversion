import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto  px-4 sm:px-0 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/heal.jpg"
              alt="Family holding hands on the beach facing the ocean"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <div className="flex flex-col justify-center px-2 sm:px-6 md:px-4">
            <h2 className="font-(family-name:--font-cormorant) mt-6 lg:mt-20 text-3xl font-normal text-[#2d3130] sm:text-4xl lg:text-[42px]">
              Healing from anxiety and trauma{" "}
              <span className="inline-block tracking-widest font-(family-name:--font-kristi) text-5xl font-normal leading-none text-[#A67B5B] sm:text-6xl lg:text-[70px]">
                &amp;
              </span>{" "}
              building a life that feels sustainable.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
