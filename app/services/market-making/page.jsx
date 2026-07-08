import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import RichHeading from "@/components/Shared/RichHeading";
import CapabilityCard from "@/components/Cards/CapabilityCard";
import { marketMaking } from "@/data/services";

export const metadata = {
  title: "Market Making | QMM",
  description: "Continuous two-way liquidity across multiple asset classes.",
};

export default function MarketMakingPage() {
  const { hero, intro, capabilities } = marketMaking;

  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative bg-cream py-16 sm:py-20 lg:py-28">
        <div className="diagonal-lines diagonal-lines-light" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <RichHeading
              as="h2"
              html={intro.title}
              className="font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
            />
            <div className="space-y-6">
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-base leading-relaxed text-gray-body sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-16 sm:pb-20 lg:pb-28">
        <Container>
          <SectionHeading className="mb-10 sm:mb-14">Key Capabilities</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.id} title={cap.title} icon={cap.icon} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
