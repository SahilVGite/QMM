import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
    primary: "bg-green text-white border border-green hover:bg-green/90",
    outline: "bg-transparent text-white border border-white hover:bg-white/10",
    ghost: "bg-transparent text-white border border-white/60 hover:border-white",
};

const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-3.5 text-sm",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    type = "button",
    className = "",
    disabled = false,
    loading = false,
    onClick,
    rounded = true,
}) {
    const classes = cn(
        "inline-flex items-center justify-center font-body font-semibold uppercase tracking-wider transition-colors",
        variants[variant],
        sizes[size],
        rounded && "rounded-full",
        disabled && "cursor-not-allowed opacity-50",
        className,
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}
