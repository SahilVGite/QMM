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

      <section className="relative overflow-hidden bg-teal">
        <div className="diagonal-lines" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="py-16 sm:py-20 lg:py-28 lg:pr-12">
              <h2 className="font-title text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {member.name}
              </h2>
              <p className="mt-8 font-body text-base leading-[1.8] text-white/85 sm:text-lg">
                {member.bio}
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[400px] w-full max-w-md sm:h-[480px] lg:h-[560px] lg:max-w-lg">
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
