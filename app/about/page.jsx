import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import CollaborationItem from "@/components/Cards/CollaborationItem";
import RichHeading from "@/components/Shared/RichHeading";
import { hero, valueProposition, collaborators } from "@/data/about";

export const metadata = {
  title: "About Us | QMM",
  description: "Learn about QMM's independent, principal-based market making model.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative bg-teal py-16 sm:py-20 lg:py-28">
        <div className="diagonal-lines" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <RichHeading
              as="h2"
              html={valueProposition.title}
              className="font-title text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            />
            <p className="font-body text-base leading-relaxed text-white/85 sm:text-lg">
              {valueProposition.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-teal pb-16 sm:pb-20 lg:pb-28">
        <Container className="relative">
          <h3 className="mb-8 font-title text-xl font-bold text-white sm:mb-10 sm:text-2xl">
            We collaborate with:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {collaborators.map((item, index) => (
              <CollaborationItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                showDivider={index > 0}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
