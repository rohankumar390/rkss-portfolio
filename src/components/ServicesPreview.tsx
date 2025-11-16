import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Direct Tax & Income Tax Advisory",
    desc: "Expert guidance for Income Tax, TDS, and assessments with accuracy and compliance.",
    link: "/services",
  },
  {
    title: "GST & Indirect Tax Services",
    desc: "End-to-end GST registration, filing, audit, and refund support for businesses.",
    link: "/services",
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "Comprehensive accounting, cloud bookkeeping, MIS reporting, and finalization support.",
    link: "/services",
  },
  {
    title: "Corporate & Statutory Compliance",
    desc: "ROC/LLP filings, annual returns, and secretarial compliance made simple.",
    link: "/services",
  },
  {
    title: "Payroll & HR Compliance",
    desc: "Payroll processing, salary structuring, and PF/ESI/labour compliance.",
    link: "/services",
  },
  {
    title: "Startup & Business Setup",
    desc: "Company registration, MSME & Startup India support, and strategic business advisory.",
    link: "/services",
  },
  {
    title: "Audit & Assurance",
    desc: "Internal, statutory, tax, and due diligence audits for transparent financial management.",
    link: "/services",
  },
  {
    title: "Virtual CFO & Financial Advisory",
    desc: "Budgeting, cash flow planning, and investor reporting with strategic financial insight.",
    link: "/services",
  },
];

export default function ServicesPreview() {
  return (
      <section className="bg-gray-50 text-gray-900 sm:py-14 md:py-20 lg:py-24 font-[Inter]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We deliver comprehensive financial, tax, and compliance solutions that help businesses operate smoothly and grow confidently.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.link}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-700 leading-snug">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 mt-6 text-blue-600 font-medium group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
