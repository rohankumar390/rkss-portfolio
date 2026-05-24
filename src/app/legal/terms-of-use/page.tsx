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
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white mb-6">
          RKSS Legal Information
        </div>

        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Terms of Use
        </h1>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg">Last Updated: 11/16/2025</p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="p-8 md:p-14">
          {/* Intro */}
          <div className="bg-[#0E3655]/5 rounded-xl p-8 border-l-4 border-[#D4AF37] mb-12">
            <p className="text-lg text-gray-700 leading-9">
              These Terms of Use (“Terms”) govern your access and use of the
              website, tools, content, and services provided by RKSS
              Consultants. By using our website, you agree to comply with these
              Terms.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Wrap every section */}
            <div className="border-l-4 border-[#D4AF37] pl-8">
              {/* Keep all your ORIGINAL sections from below exactly the same */}
              {/* Starting from 1. General Information through 13. Contact Information */}

              <h2 className="text-2xl font-bold text-[#0E3655] mt-10 mb-5">
                1. General Information
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                RKSS provides professional services in taxation, accounting,
                audit support, regulatory filings, compliance management,
                corporate advisory, and financial consultancy. Website content
                is intended for general awareness only and is not a substitute
                for professional advice.
              </p>

              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                2. No Professional Relationship
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                Accessing or browsing this website does not establish a
                client–advisor relationship. A professional relationship is
                created only when:
              </p>

              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">1.</span>
                  <span>RKSS accepts your engagement request, and</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">2.</span>
                  <span>
                    A written agreement defining scope, timelines,
                    responsibilities, and fees is executed.
                  </span>
                </li>
              </ul>

              {/* Continue pasting ALL remaining sections exactly as-is */}
              {/* SECTION 3 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                3. Website Content & Accuracy
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                While we endeavour to keep content updated, financial, tax, and
                legal regulations change frequently. RKSS makes no
                representation or warranty regarding:
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Accuracy or completeness",
                  "Applicability to your situation",
                  "Errors, omissions, outdated content",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* SECTION 4 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                4. Use of Website
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                You agree not to:
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Disrupt website security or functionality",
                  "Attempt unauthorized access",
                  "Modify, copy, extract, or use content without permission",
                  "Use the website for unlawful activity",
                  "Introduce malware, bots, or harmful code",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg leading-9 text-gray-600 mt-5">
                RKSS may suspend or block access without notice for misuse.
              </p>

              {/* SECTION 5 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                5. Intellectual Property
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                All content including text, graphics, layout, logo, and
                resources is the exclusive property of RKSS Consultants. No
                content may be copied, modified, or redistributed without
                written permission.
              </p>

              {/* SECTION 6 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                6. Third-Party Links
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                Our website may include links to third-party websites. RKSS is
                not responsible for:
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Accuracy of third-party content",
                  "Privacy practices",
                  "Security issues or data loss",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* SECTION 7 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                7. Privacy & Data Usage
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                Information submitted through forms or emails will be used only
                as per our Privacy Policy.
              </p>

              {/* SECTION 8 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                8. Engagement Terms
              </h2>

              <h3 className="font-semibold text-xl mt-5 mb-4 text-[#0E3655]">
                8.1 Client Responsibilities
              </h3>

              <ul className="mt-4 space-y-4">
                {[
                  "Provide complete & accurate information",
                  "Respond promptly to queries",
                  "Review drafts and filings",
                  "Inform RKSS of business or ownership changes",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-xl mt-8 mb-4 text-[#0E3655]">
                8.2 Scope of Work
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                Services will be defined in the engagement letter with clear
                deliverables, timelines, and fees.
              </p>

              <h3 className="font-semibold text-xl mt-8 mb-4 text-[#0E3655]">
                8.3 Fees & Payment Terms
              </h3>

              <ul className="mt-4 space-y-4">
                {[
                  "Fees must be paid as agreed",
                  "Delays may suspend services",
                  "Government fees excluded unless stated",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-xl mt-8 mb-4 text-[#0E3655]">
                8.4 Reliance on Client Information
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                Work is prepared based on client-provided data. RKSS is not
                responsible for consequences of incorrect inputs.
              </p>

              <h3 className="font-semibold text-xl mt-8 mb-4 text-[#0E3655]">
                8.5 Confidentiality
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                RKSS maintains strict confidentiality unless disclosure is
                required by law.
              </p>

              <h3 className="font-semibold text-xl mt-8 mb-4 text-[#0E3655]">
                8.6 Termination
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                Either party may terminate in writing. Fees for completed work
                remain payable.
              </p>

              {/* SECTION 9 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                9. Limitation of Liability
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                RKSS is not liable for loss of data, revenue, opportunities,
                indirect damages, or consequences arising from website use.
              </p>

              {/* SECTION 10 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                10. Indemnity
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                You agree to indemnify RKSS and its team from claims arising
                from misuse or breach of these Terms.
              </p>

              {/* SECTION 11 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                11. Amendments
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                RKSS may update these Terms at any time. Continued use indicates
                acceptance.
              </p>

              {/* SECTION 12 */}
              <h2 className="text-2xl font-bold text-[#0E3655] mt-12 mb-5">
                12. Governing Law & Jurisdiction
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                These Terms are governed by Indian law. All disputes fall under
                New Delhi jurisdiction.
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="mt-14 bg-[#0E3655] rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-2 text-gray-300">
              <p>
                <strong>RKSS Consultants</strong>
              </p>
              <p>42, GF, WTC, Babar Rd, New Delhi – 110001</p>
              <p>Email: rkssconsultantsindia@gmail.com</p>
              <p>Phone: (+91) 9289860204</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
