import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "30+ Years of Proven Expertise",
    desc: "Decades of hands-on experience in taxation, finance, audit, and corporate compliance across diverse industries.",
  },
  {
    title: "Transparent, Ethical, and Reliable",
    desc: "Clear communication, honest advisory, and a zero-compromise approach to compliance and documentation.",
  },
  {
    title: "End-to-End Solutions",
    desc: "From Income Tax and GST to ROC filings and payroll, we manage every aspect of your financial governance.",
  },
  {
    title: "Tech-enabled, Cloud Accounting, Human-Centered",
    desc: "We combine automation tools with professional judgment to deliver accuracy and transparency.",
  },
  {
    title: "Client-First Philosophy",
    desc: "Personalized attention, proactive updates, and on-time deliverables — every time.",
  },
  {
    title: "Pan-India Presence",
    desc: "Serving clients across major cities with both on-site and virtual support capabilities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0C3051] text-white font-[Inter]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-blue-400">RKSS Consultants</span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Decades of excellence, innovation, and integrity — that’s what defines RKSS Consultants.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-600/20 text-blue-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
