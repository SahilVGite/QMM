"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/Shared/Container";
import Logo from "@/components/Shared/Logo";
import NavLink from "@/components/Header/NavLink";
import { mainNav } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5 md:py-6"
        }`}
      >
        <Logo size={scrolled ? "compact" : "default"} />

        <nav
          className="hidden items-center gap-8 md:flex lg:gap-12"
          aria-label="Main navigation"
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
            />
          ))}
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
              />
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
