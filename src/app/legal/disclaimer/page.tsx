export const metadata = {
  title: "Disclaimer | RKSS Consultants",
  description:
    "Official Disclaimer for RKSS Consultants regarding accuracy, liability, professional advice, and system limitations.",
};

export default function DisclaimerPage() {
  return (
    <section className="bg-[#0E3655] py-24 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Disclaimer
        </h1>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg">Last Updated: 11/16/2025</p>
      </div>

      {/* Main Card */}
      <div className="bg-white max-w-6xl mx-auto rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="p-8 md:p-14">
          {/* Intro Card */}
          <div className="bg-[#0E3655]/5 rounded-xl p-8 mb-12 border-l-4 border-[#D4AF37]">
            <p className="text-lg text-gray-700 leading-9">
              This Disclaimer outlines the limitations of liability, accuracy,
              professional scope, and technology-related constraints related to
              the use of the RKSS Consultants (“RKSS”, “we”, “our”, “us”)
              website, content, and services.
            </p>
          </div>

          {/* Wrap each existing section exactly like this */}
          <div className="space-y-10">
            <div className="border-l-4 border-[#D4AF37] pl-8">
              <h2 className="text-2xl font-bold text-[#0E3655] mb-5">
                1. General Disclaimer
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                All content on this website—articles, tools, resources, guides,
                calculators, examples, and regulatory updates— is provided
                strictly on an <strong>"as-is"</strong> basis.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span className="text-gray-600">
                    Accuracy, completeness, or reliability of information
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span className="text-gray-600">
                    Whether information is current with latest laws
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span className="text-gray-600">
                    Applicability to your personal or business situation
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span className="text-gray-600">
                    Errors, omissions, or outdated materials
                  </span>
                </li>
              </ul>
            </div>

            {/* Repeat same wrapper for ALL remaining sections */}
          </div>

          {/* Contact Card */}

          <div className="mt-14 bg-[#0E3655] text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-2 text-gray-300">
              <p>
                <strong>RKSS Consultants</strong>
              </p>

              <p>42, GF, WTC, Babar Rd, Office</p>

              <p>New Delhi – 110001</p>

              <p>Email: rkssconsultantsindia@gmail.com</p>

              <p>Phone: (+91) 9289860204</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
