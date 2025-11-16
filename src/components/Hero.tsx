import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative w-full 
        h-[39vh]            /* mobile height */
        sm:h-[55vh]         /* small devices */
        md:h-[80vh]         /* tablets */
        lg:h-[100vh]        /* desktop */
        flex items-center justify-center 
        overflow-hidden pt-16
      "
    >
      {/* Background Image */}
      <Image
        src="/banner_3.png"
        alt="RKSS Consultants Building"
        fill
        className="
          object-contain     /* default on mobile */
          md:object-cover    /* cover on tablet+ */
        "
        priority
      />
    </section>
  );
}
