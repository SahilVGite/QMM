import Image from "next/image";
import Container from "@/components/Shared/Container";
import RichHeading from "@/components/Shared/RichHeading";

export default function PageHero({ title, image, tall = false, titleLines }) {
    const html =
        title ||
        (titleLines && titleLines.length ? titleLines.join("<br />") : "");

    return (
        <section
            className={`relative flex items-end overflow-hidden bg-navy ${
                tall
                    ? "min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]"
                    : "min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]"
            }`}
        >
            <Image
                src={image}
                alt=""
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="100vw"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/80" />
      <div className="diagonal-lines" aria-hidden="true" /> */}

            {html && (
                <Container className="relative z-10 pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pb-20">
                    <RichHeading
                        as="h1"
                        html={html}
                        className="font-title text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
                    />
                </Container>
            )}
        </section>
    );
}
