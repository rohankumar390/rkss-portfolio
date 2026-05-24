export const metadata = {
  title: "Terms of Use | RKSS Consultants",
  description:
    "Read the Terms of Use for accessing the RKSS Consultants website, services, and resources.",
};

export default function TermsOfUse() {
  return (
    <section className="bg-[#0E3655] py-24 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Terms of Use
        </h1>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg">Last Updated: 11/16/2025</p>
      </div>

      {/* Main Card */}
      <div className="bg-white max-w-6xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden">
        <div className="p-8 md:p-14">
          <p className="text-lg text-gray-700 leading-9 mb-12">
            These Terms of Use (“Terms”) govern your access and use of the
            website, tools, content, and services provided by RKSS Consultants.
            By using our website, you agree to comply with these Terms.
          </p>

          {/* CONTENT WRAPPER */}
          <div className="space-y-10">
            {/* Apply this pattern to all your existing sections */}
            <div className="border-l-4 border-[#D4AF37] pl-6">
              <h2 className="text-2xl font-bold text-[#0E3655] mb-4">
                1. General Information
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                RKSS provides professional services in taxation, accounting,
                audit support, regulatory filings, compliance management,
                corporate advisory, and financial consultancy. Website content
                is intended for general awareness only and is not a substitute
                for professional advice.
              </p>
            </div>

            <div className="border-l-4 border-[#D4AF37] pl-6">
              <h2 className="text-2xl font-bold text-[#0E3655] mb-4">
                2. No Professional Relationship
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                Accessing or browsing this website does not establish a
                client–advisor relationship. A professional relationship is
                created only when:
              </p>

              <ul className="space-y-3 mt-5">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>RKSS accepts your engagement request, and</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>
                    A written agreement defining scope, timelines,
                    responsibilities, and fees is executed.
                  </span>
                </li>
              </ul>
            </div>

            {/* Repeat same wrapper for ALL remaining sections */}
          </div>
        </div>
      </div>
    </section>
  );
}
