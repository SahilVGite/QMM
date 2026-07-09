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

      <div className="relative bg-teal">
        <div className="absolute inset-0"><img src="/images/aboutPageBgPattern.png" alt="" /></div>
        <section className="relative z-10 py-16 sm:py-20 lg:py-28 min-h-screen flex items-center justify-center">
          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <RichHeading
                as="h2"
                html={valueProposition.title}
                className="font-title text-3xl font-extrabold leading-tight text-[#E6E7E8] sm:text-4xl lg:text-[60px]"
              />
              <p className="font-body text-base font-medium leading-relaxed text-[#E6E7E8] sm:text-lg lg:text-[21px]">
                {valueProposition.body}
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-28 relative z-10">
          <Container>
            <h2 className="mb-8 font-title text-3xl font-bold leading-tight text-[#E6E7E8] sm:mb-10 sm:text-4xl lg:text-[50px]">
              We collaborate with:
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {collaborators.map((item, index) => (
                <CollaborationItem
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  showDivider={index > 0}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
