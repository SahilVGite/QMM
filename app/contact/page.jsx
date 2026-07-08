import PageHero from "@/components/Hero/PageHero";
import ContactForm from "@/components/Forms/ContactForm";
import { hero, heading, subheading, fields, submitLabel } from "@/data/contact";

export const metadata = {
    title: "Contact Us | QMM",
    description: "Get in touch with QMM for inquiries and partnerships.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero image={hero.image} tall />
            <ContactForm
                heading={heading}
                subheading={subheading}
                fields={fields}
                submitLabel={submitLabel}
                pgColor="#FDFAE3"
            />
        </>
    );
}
