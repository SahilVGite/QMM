import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import Accordion from "@/components/Sections/Accordion";
import RichHeading from "@/components/Shared/RichHeading";
import { liquidityProvision } from "@/data/services";

export const metadata = {
  title: "Liquidity Provision Solutions | QMM",
  description: "Structured liquidity with measurable impact for listed companies.",
};

export default function LiquidityProvisionPage() {
  const { hero, intro, accordion } = liquidityProvision;

  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative bg-green-lime py-16 sm:py-20 lg:py-28">
        <div className="diagonal-lines diagonal-lines-light" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <RichHeading
              as="h2"
              html={intro.title}
              className="font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
            />
            <p className="font-body text-base leading-relaxed text-navy/80 sm:text-lg">
              {intro.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-teal py-16 sm:py-20 lg:py-28">
        <Container>
          <Accordion items={accordion} />
        </Container>
      </section>
    </>
  );
}
