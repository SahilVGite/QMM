import RichHeading from "@/components/Shared/RichHeading";

export default function SectionHeading({
  children,
  html,
  align = "center",
  className = "",
  as: Tag = "h2",
}) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  const content =
    html != null ? html : typeof children === "string" ? children : null;

  if (content != null) {
    return (
      <RichHeading
        as={Tag}
        html={content}
        className={`font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem] ${alignClass} ${className}`}
      />
    );
  }

  return (
    <Tag
      className={`font-title text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem] ${alignClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
