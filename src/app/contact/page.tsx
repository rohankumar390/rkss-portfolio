import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10">

        {/* Left Heading */}
        <div className="flex items-start gap-3">
          <ArrowRight className="text-blue-600 w-6 h-6 mt-1" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Get in Touch
          </h2>
        </div>

        {/* Right Contact Details */}
        <div className="space-y-6 text-gray-700">
          <div className="flex flex-col">
            <span className="font-semibold text-blue-700">Office</span>
            <span className="text-gray-800">
              India
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-blue-700">Email</span>
            <span className="text-gray-800">Khanna1975@yahoo.co.in</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-blue-700">Phone</span>
            <span className="text-gray-800">
              (+91) 99584 55662
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Full-Width Image */}
<div className="w-full max-h-[343.5px] overflow-hidden">
  <Image
    src="/contact-bg.png"
    alt="Contact Background"
    width={1920}
    height={1080}
    className="object-cover w-full h-full"
  />
</div>
    </section>
  );
}
