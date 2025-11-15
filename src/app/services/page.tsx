import {
  ArrowRight,
  Building2,
  Receipt,
  Briefcase,
  FileCheck2,
  Users2,
  Gauge,
  Layers,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Direct Tax & Income Tax Advisory",
    desc: "Personal and corporate tax planning, TDS/TCS compliance, expert representation in assessments, and smart tax optimization.",
    icon: Receipt,
  },
  {
    title: "GST & Indirect Tax Services",
    desc: "GST registration, monthly/quarterly filings, audits, refund claims, and assistance with notices or departmental queries.",
    icon: FileCheck2,
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "End-to-end bookkeeping, MIS reports, cloud accounting setup, year-end financial statements and ledger clean-up.",
    icon: Layers,
  },
  {
    title: "Corporate & Statutory Compliance",
    desc: "ROC filings, director compliance, AGM support, share allotment, annual returns, and secretarial governance.",
    icon: Building2,
  },
  {
    title: "Payroll & HR Compliance",
    desc: "Payroll outsourcing, PF/ESI registration, returns, salary structuring and complete HR statutory support.",
    icon: Users2,
  },
  {
    title: "Startup & Business Setup Services",
    desc: "Company incorporation, LLP/OPC formation, MSME, Startup India, GST/PAN/TAN onboarding and business documentation.",
    icon: Briefcase,
  },
  {
    title: "Audit & Assurance",
    desc: "Internal audits, statutory audits, tax audits, due diligence and risk-focused financial evaluations.",
    icon: BarChart3,
  },
  {
    title: "Virtual CFO & Financial Advisory",
    desc: "Budgeting, cash flow strategy, investor reporting, fundraising support and long-term financial planning.",
    icon: Gauge,
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#0B2B45] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Services
          </h2>

          <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-xl">
            Comprehensive financial, regulatory, audit and business advisory,
            engineered to support modern organizations and long-term growth.
          </p>

          {/* Detailed Service List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group flex gap-4 items-start">
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition">
                    <Icon className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-100 transition">
                      {service.title}
                    </h3>
                    <p className="text-sm opacity-80 mt-1 max-w-md leading-relaxed">
                      {service.desc}
                    </p>
                    {/* <Link
                      href="/services"
                      className="flex items-center gap-2 text-blue-200 mt-3 text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              className="inline-block bg-white text-[#0B2B45] font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
              href="/contact"
            >
              Speak with an Expert
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE SECTION */}
        <div className="hidden lg:flex flex-col gap-20 justify-center">
          {/* TOP IMAGE */}
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl shadow-black/30">
            <Image
              src="/s1.png"
              alt="Professional team working"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* BOTTOM IMAGE */}
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl shadow-black/30">
            <Image
              src="/s2.png"
              alt="Professional team working"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
