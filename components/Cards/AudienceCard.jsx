import { HandCoins, Clock } from "lucide-react";

const iconMap = {
  lender: HandCoins,
  borrower: Clock,
};

export default function AudienceCard({ title, items, icon, clip }) {
  const Icon = iconMap[icon] || HandCoins;

  const clipClass =
    clip === "left"
      ? "clip-path-left"
      : clip === "right"
        ? "clip-path-right"
        : "";

  return (
    <div
      className={`relative bg-gray-light p-8 shadow-sm sm:p-10 ${clipClass}`}
      style={{
        clipPath:
          clip === "left"
            ? "polygon(0 8%, 100% 0, 100% 100%, 0 100%)"
            : clip === "right"
              ? "polygon(0 0, 100% 8%, 100% 100%, 0 100%)"
              : undefined,
      }}
    >
      <Icon className="mb-6 h-10 w-10 text-green" strokeWidth={1.5} />
      <h3 className="mb-5 font-title text-2xl font-bold text-navy">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 font-body text-sm leading-relaxed text-gray-body sm:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
