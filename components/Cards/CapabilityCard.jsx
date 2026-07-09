import Image from "next/image";

export default function CapabilityCard({ title, image }) {
  return (
    <div className="flex h-full flex-col bg-[#7EA863]/30 p-5 sm:p-6 lg:p-8">
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className="mb-3 h-auto w-fit max-h-12 object-contain sm:mb-4 sm:max-h-16 lg:max-h-[72px]"
        aria-hidden="true"
      />
      <p className="font-body text-base font-bold leading-snug text-[#323232] sm:text-lg lg:text-xl xl:text-[24px]">
        {title}
      </p>
    </div>
  );
}
