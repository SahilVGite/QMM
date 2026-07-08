import PageHero from "@/components/Hero/PageHero";
import ContactForm from "@/components/Forms/ContactForm";
import { hero, heading, subheading, fields, submitLabel } from "@/data/careers";

export const metadata = {
    title: "Careers | QMM",
    description: "Join QMM — career inquiries and opportunities.",
};

export default function CareersPage() {
    return (
        <>
            <PageHero image={hero.image} tall />
            <ContactForm
                heading={heading}
                subheading={subheading}
                fields={fields}
                submitLabel={submitLabel}
                pgColor="#F1F2F2"
            />
        </>
    );
}
