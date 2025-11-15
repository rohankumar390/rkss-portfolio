import Image from "next/image";

export default function OurFirm() {
  return (
    <section
      className="w-full h-[380px] bg-[#0B2331] md:h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
    >
      <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          What We Offer
        </h1>
        <p className="max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
          We provide expert advisory in Corporate Finance, Taxation, Auditing,
          and Business Consultancy. Our goal is to empower businesses with
          strategic insights and solutions that deliver long-term growth.
        </p>
      </div>
    </section>
  );
}
