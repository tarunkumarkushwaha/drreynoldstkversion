import Image from "next/image";
import Container from "./ui/Container";

export default function Intro() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container className="max-w-4xl text-center">
        <h2 className="font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
          You&rsquo;re still holding on to the hope that life can feel better than it does right now.
        </h2>
        <p className="mt-6 font-serif text-xl italic text-teal-700 sm:text-2xl">
          At Conejo Valley Family Counseling, we want to help make that hope real.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-500 sm:text-lg">
          Whether you&rsquo;re an adult working on personal growth, processing trauma, a couple strengthening your
          relationship, or a parent looking for support for your child, we offer a caring, steady space to help you
          move through life&rsquo;s harder chapters.
        </p>
      </Container>

      <Container className="mt-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <Image
            src="https://picsum.photos/seed/cvfc-shoreline/1600/700"
            alt="Calm shoreline with gentle waves"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </Container>

      <Container className="mt-10 max-w-3xl">
        <p className="text-center text-base leading-relaxed text-stone-500 sm:text-lg">
          Above all, we believe what you&rsquo;re going through is real, valid, and worth supporting. Our team gives
          clients across the area a place to reconnect with themselves in the middle of their struggles. Through
          genuine connection and understanding, you can find solid footing again and take a meaningful step forward.
        </p>
      </Container>
    </section>
  );
}
