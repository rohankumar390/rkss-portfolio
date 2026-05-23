export default function OurTeam() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 text-left">
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our firm is driven by a distinguished team of professionals whose
            collective expertise spans{" "}
            <span className="font-semibold text-gray-900">
              taxation, accounting, assurance, and strategic advisory
            </span>.
            With a shared commitment to excellence, integrity, and precision,
            our people bring deep technical knowledge together with a practical
            understanding of today’s dynamic regulatory and business environment.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our team comprises highly qualified{" "}
            <span className="font-semibold text-gray-900">
              Chartered Accountants, Cost & Management Accountants,
              Company Secretaries, and Legal Professionals
            </span>,
            each bringing extensive domain knowledge, multidisciplinary
            expertise, and rich practical experience. This diverse professional
            strength enables us to deliver comprehensive, well-integrated,
            and legally robust solutions tailored to complex business
            and regulatory needs.
          </p>

        </div>
      </div>
    </section>
  );
}