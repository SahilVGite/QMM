import Image from "next/image";

export default function CapabilityCard({ title, image }) {
  return (
    <div className="flex h-full flex-col bg-[#7EA863]/30 p-6 sm:p-8">
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className="mb-4 h-auto w-fit max-h-[72px] object-contain"
        aria-hidden="true"
      />
      <p className="font-body text-[24px] font-bold leading-snug text-[#323232]">
        {title}
      </p>
    </div>
  );
}
