export const metadata = {
  title: "Privacy Policy | RKSS Consultants",
  description:
    "Read the Privacy Policy of RKSS Consultants to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Name",
        "Email address",
        "Phone number",
        "Company name & business details",
        "PAN, GSTIN & statutory identifiers",
        "Financial documents shared for compliance work",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Provide tax, accounting & compliance services",
        "Process registrations and documentation",
        "Communicate regarding deadlines & updates",
        "Improve website security and performance",
        "Maintain statutory records",
      ],
    },
    {
      title: "3. Legal Basis for Processing",
      content: [
        "Your consent",
        "Contractual necessity",
        "Legitimate interests",
        "Legal obligations",
      ],
    },
    {
      title: "4. Sharing of Information",
      content: [
        "Authorized personnel",
        "Government authorities",
        "Third-party service providers",
        "Legal requirements",
      ],
    },
    {
      title: "5. Data Storage & Security",
      content: [
        "Encrypted storage",
        "Restricted access controls",
        "Secure servers and firewalls",
        "Regular monitoring and backups",
      ],
    },
    {
      title: "6. Your Rights",
      content: [
        "Access your data",
        "Correct inaccuracies",
        "Request deletion",
        "Withdraw consent",
      ],
    },
  ];

  return (
    <section className="bg-[#0E3655] py-24 px-6 md:px-16">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">

        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Privacy Policy
        </h1>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg">
          Last Updated: 16 Nov 2025
        </p>

      </div>

      {/* Intro Card */}
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl mx-auto p-10 mb-10">

        <p className="text-gray-700 text-lg leading-9">
          RKSS Consultants (“RKSS”, “we”, “our”, “us”) is committed
          to protecting your privacy. This Privacy Policy explains
          how we collect, use, store, and safeguard your information
          when you visit our website or engage our services.
        </p>

        <p className="text-gray-700 text-lg leading-9 mt-6">
          By using our website, you consent to the practices
          described in this Privacy Policy.
        </p>

      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-[#0E3655] text-2xl font-bold mb-6">
              {section.title}
            </h2>

            <ul className="space-y-4">
              {section.content.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start"
                >
                  <span className="text-[#D4AF37] font-bold text-lg">
                    ✓
                  </span>

                  <span className="text-gray-600 leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

      {/* Contact Card */}
      <div className="max-w-6xl mx-auto mt-12">

        <div className="bg-white rounded-xl shadow-2xl p-10 border-l-4 border-[#D4AF37]">

          <h2 className="text-[#0E3655] text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="text-gray-700 space-y-3 leading-8">
            <p><strong>RKSS Consultants</strong></p>
            <p>42, GF, WTC, Babar Rd, New Delhi – 110001</p>
            <p>Email: rkssconsultantsindia@gmail.com</p>
            <p>Phone: (+91) 9289860204</p>
          </div>

        </div>

      </div>

    </section>
  );
}