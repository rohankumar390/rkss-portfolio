// src/components/about/LeadershipTeam.tsx
"use client";

export default function LeadershipTeam() {
  return (
    <section className="bg-[#0E3655] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Our Team
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-300 mt-5 text-lg">
            Excellence driven by expertise, integrity, and strategic insight
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <p className="text-gray-700 text-lg leading-9 tracking-wide">
            Our firm is driven by a distinguished team of professionals whose
            collective expertise spans taxation, accounting, assurance, and
            strategic advisory. With a shared commitment to excellence,
            integrity, and precision, our people bring deep technical knowledge
            together with a practical understanding of today’s dynamic
            regulatory and business environment.
          </p>

          <p className="text-gray-700 text-lg leading-9 tracking-wide mt-6">
            Our team comprises highly qualified Chartered Accountants,
            Cost & Management Accountants, Company Secretaries, and Legal
            Professionals, each bringing extensive domain knowledge,
            multidisciplinary expertise, and rich practical experience.
          </p>

          <p className="text-gray-700 text-lg leading-9 tracking-wide mt-6">
            This diverse professional strength enables us to deliver
            comprehensive, well-integrated, and legally robust solutions
            tailored to complex business and regulatory needs.
          </p>
        </div>
      </div>
    </section>
  );
}