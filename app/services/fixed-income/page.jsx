import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import RichHeading from "@/components/Shared/RichHeading";
import { fixedIncome } from "@/data/services";

export const metadata = {
  title: "Fixed Income | QMM",
  description: "Institutional fixed income trading and liquidity support.",
};

export default function FixedIncomePage() {
  const { hero, intro, coverage } = fixedIncome;

  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28">
        <div className="diagonal-lines diagonal-lines-light" aria-hidden="true" />
        <Container className="relative">
          <RichHeading
            as="h2"
            html={intro.title}
            className="mx-auto max-w-4xl text-center font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
          />
          <p className="mx-auto mt-8 max-w-3xl text-center font-body text-base leading-relaxed text-gray-body sm:text-lg">
            {intro.body}
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-green-bright py-16 sm:py-20 lg:py-28">
        <Container className="relative">
          <h2 className="mb-12 font-title text-5xl font-bold text-navy sm:mb-16 sm:text-6xl lg:text-7xl">
            Coverage
          </h2>
          <div className="space-y-8 sm:space-y-10">
            {coverage.map((item) => (
              <div key={item.number} className="flex items-center gap-6 sm:gap-10">
                <span className="font-title text-5xl font-bold text-white/40 sm:text-6xl lg:text-7xl">
                  {item.number}
                </span>
                <div className="flex flex-1 items-center gap-6">
                  <span className="h-px flex-1 bg-white/40" />
                  <p className="font-body text-base text-white sm:text-lg lg:text-xl">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
