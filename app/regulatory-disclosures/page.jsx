import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import { hero, sections } from "@/data/regulatory";

export const metadata = {
    title: "Regulatory Disclosures | QMM",
    description: "Regulatory information and website disclaimer for QMM Ltd.",
};

export default function RegulatoryDisclosuresPage() {
    return (
        <>
            <PageHero title={hero.title} image={hero.image} tall />

            <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28">
                <div className="absolute right-0 top-0 w-[35%] h-[42%] bg-[url('/images/rightCornerLines.png')] bg-cover bg-no-repeat" />
                <Container className="relative">
                    <div className="mx-auto max-w-4xl space-y-16 sm:space-y-20">
                        {sections.map((section) => (
                            <div key={section.id}>
                                <h2 className="font-title text-3xl font-bold text-navy sm:text-4xl">
                                    {section.title}
                                </h2>
                                <div className="mt-8 space-y-6">
                                    {section.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph.slice(0, 50)}
                                            className="font-body font-medium text-base leading-[1.6] text-gray-body sm:text-lg"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
