import Link from "next/link";
import { cn, isActivePath } from "@/lib/utils";

export default function NavLink({ href, label, pathname, light = true }) {
  const active = isActivePath(pathname, href);
  const isAnchor = href.startsWith("/#");

  const className = cn(
    "font-body text-sm transition-colors sm:text-base",
    active ? "font-bold" : "font-medium",
    light ? "text-white" : "text-navy",
    !active && light && "hover:text-white/80",
    !active && !light && "hover:text-navy/70"
  );

  if (isAnchor) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
