import {
  DollarSign,
  Handshake,
  Droplets,
  Monitor,
  Globe,
} from "lucide-react";

const iconMap = {
  dollar: DollarSign,
  handshake: Handshake,
  drops: Droplets,
  monitor: Monitor,
  globe: Globe,
};

export default function CapabilityCard({ title, icon }) {
  const Icon = iconMap[icon] || DollarSign;

  return (
    <div className="flex min-h-[180px] flex-col bg-green-sage p-6 sm:min-h-[200px] sm:p-8">
      <Icon className="mb-4 h-8 w-8 text-navy" strokeWidth={1.5} />
      <p className="font-title text-base font-bold leading-snug text-navy sm:text-lg">
        {title}
      </p>
    </div>
  );
}
