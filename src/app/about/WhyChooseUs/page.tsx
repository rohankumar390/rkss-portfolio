import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const missions = [
    "To deliver reliable, timely, and ethical advisory services.",
    "To help organizations focus on growth by simplifying statutory and financial complexities.",
    "To integrate technology and expertise for smarter, data-backed decision-making.",
    "To create measurable impact for clients and the communities we serve.",
    "To nurture long-term relationships built on trust, transparency, and performance.",
  ];

  return (
    <section className="bg-[#0E3655] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Vision & Mission
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-300 mt-5 text-lg">
            Guided by purpose, driven by excellence
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-10">
          <h3 className="text-[#0E3655] text-3xl font-bold mb-6">Our Vision</h3>

          <p className="text-gray-700 text-lg leading-9 tracking-wide">
            To be India’s most trusted and technology-driven consultancy,
            empowering businesses to stay compliant, financially efficient, and
            future-ready in an evolving regulatory environment.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-[#0E3655] text-3xl font-bold mb-8">
            Our Mission
          </h3>

          <div className="space-y-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-gray-100 pb-5 last:border-0"
              >
                <div className="bg-[#0E3655]/10 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#0E3655]" />
                </div>

                <p className="text-gray-700 text-lg leading-8">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}