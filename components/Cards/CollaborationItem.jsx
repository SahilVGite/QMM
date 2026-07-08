import {
  ArrowLeftRight,
  Landmark,
  Building2,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  arrows: ArrowLeftRight,
  safe: Landmark,
  bank: Building2,
  chart: TrendingUp,
};

export default function CollaborationItem({ title, icon, showDivider = false }) {
  const Icon = iconMap[icon] || ArrowLeftRight;

  return (
    <div
      className={`flex flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 ${
        showDivider ? "border-l border-white/20" : ""
      }`}
    >
      <Icon className="h-8 w-8 text-orange" strokeWidth={1.5} />
      <p className="font-body text-sm leading-relaxed text-white sm:text-base">
        {title}
      </p>
    </div>
  );
}
