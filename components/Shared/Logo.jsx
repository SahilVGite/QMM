import Link from "next/link";
import Image from "next/image";

const sizeClasses = {
  small: "h-7 w-auto",
  default: "h-8 w-auto sm:h-10 md:h-14",
  compact: "h-7 w-auto sm:h-8 md:h-9",
  large: "h-16 w-auto sm:h-20 md:h-[92px]",
};

export default function Logo({ className = "", size = "default" }) {
  const sizeClass = sizeClasses[size] || sizeClasses.default;

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 ${className}`}
      aria-label="QMM Home"
    >
      <Image
        src="/images/siteLogo.png"
        alt="QMM — Your Key to Liquidity"
        width={284}
        height={112}
        className={`${sizeClass} transition-[height] duration-300`}
        priority
        unoptimized
      />
    </Link>
  );
}
