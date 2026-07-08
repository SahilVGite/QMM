import Image from "next/image";
import Container from "@/components/Shared/Container";
import RichHeading from "@/components/Shared/RichHeading";

export default function HomeHero({ title, titleLine2, image }) {
  const bannerTitle = titleLine2
    ? `${title}<br />${titleLine2}`
    : title;

  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-navy sm:min-h-[600px] lg:min-h-[720px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/70" />
      <div className="diagonal-lines" aria-hidden="true" />

      <Container className="relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28">
        <RichHeading
          as="h1"
          html={bannerTitle}
          className="max-w-3xl font-title text-4xl font-extrabold leading-[1.1] text-[#FDFAE3] sm:text-5xl lg:text-[4rem]"
        />
      </Container>
    </section>
  );
}
