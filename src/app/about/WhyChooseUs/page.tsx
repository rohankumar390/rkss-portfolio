import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-[#0E3655]">
      <div className="max-w-4xl mx-auto text-center">

        {/* Vision Section */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0A2238]">
          Our Vision
        </h2>

        <div className="h-[2px] w-20 bg-blue-200 mx-auto mb-10 rounded-full" />

        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
          To be India’s most trusted and technology-driven consultancy, empowering
          businesses to stay compliant, financially efficient, and future-ready
          in an evolving regulatory environment.
        </p>

        {/* Mission Section */}
        <h2 className="pt-10 text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0A2238]">
          Our Mission
        </h2>

        <div className="h-[2px] w-20 bg-blue-200 mx-auto rounded-full" />

        <div className="bg-blue-50/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-sm max-w-3xl mx-auto">

          <div className="space-y-5 text-left">
            <div className="flex gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                To deliver reliable, timely, and ethical advisory services.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                To help organizations focus on growth by simplifying statutory and financial complexities.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                To integrate technology and expertise for smarter, data-backed decision-making.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                To create measurable impact for clients and the communities we serve.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                To nurture long-term relationships built on trust, transparency, and performance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}