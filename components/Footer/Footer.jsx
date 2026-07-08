import Link from "next/link";
import Container from "@/components/Shared/Container";
import Logo from "@/components/Shared/Logo";
import Button from "@/components/Buttons/Button";
import LinkedInIcon from "@/components/Shared/LinkedInIcon";
import { footerNav } from "@/data/navigation";
import { regulatoryText } from "@/data/footer";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-navy text-white">
            {/* <div
                className="diagonal-lines diagonal-lines-footer"
                aria-hidden="true"
            /> */}
            <div className="absolute inset-0 bg-[url('/images/footBg.png')] bg-cover bg-[100% 100%] bg-center bg-no-repeat" />
            <Container className="relative py-12 sm:py-16">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <Logo size="large" className="shrink-0" />

                    <div className="flex flex-col gap-6 lg:items-start">
                        <nav
                            className="flex flex-wrap gap-6 sm:gap-10"
                            aria-label="Footer navigation"
                        >
                            {footerNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="font-body text-[16px] font-medium uppercase underline opacity-70 tracking-wider text-white underline-offset-4 hover:underline"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        <p className="max-w-xl font-body leading-relaxed text-white/60 text-[19px]">
                            {regulatoryText}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button href="/contact" variant="outline" size="sm">
                            Contact Us
                        </Button>
                        <LinkedInIcon />
                    </div>
                </div>
            </Container>
        </footer>
    );
}
