import Image from "next/image";

export default function PerformanceChart() {
  return (
    <div className="relative mx-auto w-full">
      <Image
        src="/images/HmPerformance-driven.png"
        alt="Independent. Principal-based. Performance-driven chart"
        width={1200}
        height={400}
        className="h-auto w-full"
        unoptimized
      />
    </div>
  );
}
