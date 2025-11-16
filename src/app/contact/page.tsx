import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-white">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: HEADING + TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2440] leading-tight">
            Let’s Connect
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-md">
            Have a question about tax, compliance, or setting up your business?  
            Our team is here to guide you with clarity and expert support.
          </p>

          {/* Optional CTA Box */}
          <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl max-w-md">
            <h3 className="text-xl font-semibold text-blue-800">
              Need a Consultation?
            </h3>
            <p className="text-gray-600 mt-2">
              Reach out to us and our experts will get back to you shortly.
            </p>
            <a
              href="https://wa.me/+919958455662?text=Hi%20RKSS%20Consultants,%20I’d%20like%20to%20schedule%20a%20call%20to%20discuss%20your%20services"
              className="inline-flex items-center gap-2 mt-4 text-blue-700 font-medium hover:underline"
            >
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT: CONTACT DETAILS */}
        <div className="space-y-6 text-gray-700 text-lg">

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0" />
            <div>
              <span className="font-semibold text-[#0A2440]">Our Office</span>
              <p className="mt-1">Office: 42, GF, WTC, Babar Rd, Office New Delhi - 110 001</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-blue-700 flex-shrink-0" />
            <div>
              <span className="font-semibold text-[#0A2440]">Email</span>
              <p className="mt-1">rkssconsultants@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-blue-700 flex-shrink-0" />
            <div>
              <span className="font-semibold text-[#0A2440]">Phone</span>
              <p className="mt-1">(+91) 9958455662, 9810117603, 011-456711616,</p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM IMAGE */}
      {/* BOTTOM IMAGE — Hidden on Mobile */}
      <div className="hidden sm:block w-full h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden">
        <Image
          src="/contact-bg.png"
          alt="Contact Background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>

    </section>
  );
}
