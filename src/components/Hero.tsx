import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[120vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="/banner_3.png"
        alt="RKSS Consultants Building"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
