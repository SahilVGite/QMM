import Image from "next/image";
import PageHero from "@/components/Hero/PageHero";
import Container from "@/components/Shared/Container";
import { hero, member } from "@/data/management";

export const metadata = {
  title: "Management | QMM",
  description: "Meet the QMM management team.",
};

export default function ManagementPage() {
  return (
    <>
      <PageHero title={hero.title} image={hero.image} tall />

      <section className="relative overflow-hidden bg-[#1C4447]">
        <div className="absolute inset-0 bg-[url('/images/managementBgLines.png')] bg-cover bg-center bg-no-repeat" />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="pt-16 lg:py-28 lg:pr-8">
              <h2 className="font-title text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {member.name}
              </h2>
              <p className="mt-8 font-body font-medium text-justify text-[16px] md:text-[21px] leading-[1.6] text-white/80">
                {member.bio}
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end items-end lg:pt-16">
              <div className="relative h-[400px] w-full max-w-md sm:h-[480px] lg:h-[560px] lg:max-w-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,250,227,0.2)_0%,rgba(28,68,71,0)_60%)] bg-contain bg-bottom bg-no-repeat" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
