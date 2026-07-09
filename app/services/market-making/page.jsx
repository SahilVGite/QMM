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
            className="absolute right-0 top-0 h-[50%] w-[25%] bg-[url('/images/rightCornerLines.png')] bg-cover bg-no-repeat"
            aria-hidden="true"
          />
          <Container className="relative">
            <RichHeading
              as="h2"
              html={intro.title}
              className="font-title text-[60px] font-extrabold leading-tight text-[#1B2433]"
            />
            <div className="mx-auto mt-8 max-w-4xl space-y-6">
              {intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-[21px] font-medium leading-relaxed text-[#323232]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-28">
          <Container>
            <h2 className="mb-10 text-center font-title text-[50px] font-bold leading-tight text-[#323232] sm:mb-14">
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
