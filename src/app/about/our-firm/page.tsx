export default function OurFirm() {
  return (
    <section
      className="relative py-24 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0E3655]/85"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Who We Are
          </h1>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-300 mt-5 text-lg">
            Building trust through expertise and innovation
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto">

          <p className="text-gray-700 text-lg leading-9 tracking-wide">
            RKSS Consultants is a professional advisory firm specializing
            in <span className="font-semibold text-[#0E3655]">
              Corporate Finance, Auditing, Taxation, Business Restructuring,
              and Management Consultancy
            </span>.
            With decades of combined experience, our mission is to empower
            businesses with strategic insights, reliable advisory, and
            long-term growth solutions.
          </p>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          <p className="text-gray-700 text-lg leading-9 tracking-wide">
            We believe in
            <span className="font-semibold text-[#0E3655]">
              {" "}integrity, client-first execution, and innovation
            </span>.
            Our leadership team brings deep domain expertise to every
            engagement, ensuring measurable outcomes and sustainable
            success for our clients.
          </p>

        </div>
      </div>
    </section>
  );
}