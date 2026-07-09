import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
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

      <div className="relative bg-[#FDFAE3]">
        <section className="relative py-16 sm:py-20 lg:py-28">
          <div
            className="absolute right-0 top-0 h-[40%] w-[35%] bg-[url('/images/rightCornerLines.png')] bg-cover bg-no-repeat sm:h-[50%] sm:w-[30%] lg:w-[25%]"
            aria-hidden="true"
          />
          <Container className="relative">
            <RichHeading
              as="h2"
              html={intro.title}
              className="font-title text-3xl font-extrabold leading-tight text-[#1B2433] sm:text-4xl md:text-5xl lg:text-[60px]"
            />
            <div className="mx-auto mt-6 max-w-4xl space-y-4 sm:mt-8 sm:space-y-6">
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-base font-medium leading-relaxed text-[#323232] sm:text-lg lg:text-[21px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-28">
          <Container>
            <h2 className="mb-8 text-center font-title text-3xl font-bold leading-tight text-[#323232] sm:mb-10 sm:text-4xl lg:text-[50px]">
              Key Capabilities
            </h2>
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.map((cap) => (
                <CapabilityCard
                  key={cap.id}
                  title={cap.title}
                  image={cap.image}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
