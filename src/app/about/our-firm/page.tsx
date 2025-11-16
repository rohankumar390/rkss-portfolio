import Image from "next/image";

export default function OurFirm() {
  return (
    <section
      className="w-full h-auto py-20 bg-[#0B2331] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Who We Are
        </h1>

        <p className="max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
          RKSS Consultants is a professional advisory firm specializing in Corporate
          Finance, Auditing, Taxation, Business Restructuring, and Management
          Consultancy. With decades of combined experience, our mission is to
          empower businesses with strategic insights, reliable advisory, and
          long-term growth solutions.
        </p>

        <p className="max-w-2xl text-base md:text-lg opacity-90 leading-relaxed mt-4">
          We believe in integrity, client-first execution, and innovation. Our
          leadership team brings deep domain expertise to every engagement,
          ensuring measurable outcomes and sustainable success for our clients.
        </p>
      </div>
    </section>
  );
}
