import Image from "next/image";

export default function Hero() {
  return (
    <section className="
  relative w-full
  h-[39vh]
  sm:h-[55vh]
  md:h-[80vh]
  lg:h-[100vh]
  flex items-center justify-center
  overflow-hidden 
  pt-24
  z-[1]
">

      {/* Background Image */}
      <Image
        src="/banner_3.png"
        alt="RKSS Consultants Building"
        fill
        className="
          object-contain
          md:object-cover
          pointer-events-none
        "
        priority
      />
    </section>
  );
}
