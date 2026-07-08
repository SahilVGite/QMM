import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, image, href }) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden bg-[#1C4447] transition-colors duration-300 hover:bg-[#96C975] sm:aspect-[16/11]"
    >
      <Image
        src={image}
        alt={title}
        fill
        unoptimized
        className="object-cover opacity-30"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h3 className="font-body text-2xl font-bold leading-tight text-[#FDFAE3] sm:text-3xl md:text-4xl lg:text-[50px]">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#FDFAE3]/60" />
          <ArrowRight className="h-5 w-5 text-[#FDFAE3] transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
