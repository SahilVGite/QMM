import Image from "next/image";

export default function CollaborationItem({ title, image, showDivider = false }) {
  return (
    <div
      className={`flex h-full flex-col gap-4 px-4 py-6 [@media(min-width:1280px)]::px-12 sm:py-8 ${
        showDivider
          ? "lg:border-l lg:border-[#96C975] lg:[border-left-width:0.52px]"
          : ""
      }`}
    >
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className="h-auto w-fit max-h-[72px] object-contain"
        aria-hidden="true"
      />
      <p className="font-body text-lg font-medium leading-relaxed tracking-[-2px] text-[#F1F2F2] sm:text-xl lg:text-[29px]">
        {title}
      </p>
    </div>
  );
}
