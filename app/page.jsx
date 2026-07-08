import HomeHero from "@/components/Hero/HomeHero";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import ServiceCard from "@/components/Cards/ServiceCard";
import PerformanceChart from "@/components/Sections/PerformanceChart";
import { hero, intro, performance, services } from "@/data/home";

export default function HomePage() {
    return (
        <>
            <HomeHero title={hero.title} image={hero.image} />

            <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28">
                <div className="absolute left-0 top-0 w-[25%] h-[50%] bg-[url('/images/leftCornerLines.png')] bg-cover bg-no-repeat" />
                <Container className="relative">
                    <div className="mx-auto max-w-197.25 space-y-6">
                        {intro.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph.slice(0, 40)}
                                className="font-body font-medium text-[21px] leading-relaxed text-gray-body sm:text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-gray-light pb-16 sm:pb-20 lg:pb-28">
                <Container>
                    <SectionHeading className="mb-12 sm:mb-16">
                        {performance.title}
                    </SectionHeading>
                </Container>
                <PerformanceChart />
            </section>

            <section
                id="what-we-do"
                className="bg-gray-light pb-16 sm:pb-20 lg:pb-28"
            >
                <Container>
                    <SectionHeading className="mb-10 sm:mb-14">
                        What We Do
                    </SectionHeading>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                image={service.image}
                                href={service.href}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
