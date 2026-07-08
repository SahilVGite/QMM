import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import AudienceCard from "@/components/Cards/AudienceCard";
import RichHeading from "@/components/Shared/RichHeading";
import { securitiesLending } from "@/data/services";

export const metadata = {
  title: "Securities Lending & Borrowing | QMM",
  description: "Efficient access to ADX-listed equities.",
};

export default function SecuritiesLendingPage() {
  const { hero, intro, audiences } = securitiesLending;

  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative bg-white py-16 sm:py-20 lg:py-28">
        <div className="diagonal-lines diagonal-lines-light" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <RichHeading
              as="h2"
              html={intro.title}
              className="font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]"
            />
            <p className="font-body text-base leading-relaxed text-gray-body sm:text-lg">
              {intro.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 sm:pb-20 lg:pb-28">
        <Container>
          <h2 className="mb-8 font-title text-2xl font-bold text-navy sm:mb-10 sm:text-3xl">
            Our Service
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.id}
                title={audience.title}
                items={audience.items}
                icon={audience.icon}
                clip={audience.clip}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
