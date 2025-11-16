import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#0C3051] to-[#114B8C] text-white py-24 font-[Inter]">
      <div className="container mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to Simplify Your Financial Operations?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Let’s discuss how RKSS Consultants can help streamline your business
          with tailored tax, audit, and compliance solutions.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-14">
          <div className="flex items-center space-x-3 text-gray-200">
            <Phone className="w-5 h-5 text-blue-300" />
            <span className="text-base md:text-lg font-medium">
              (+91) 9958455662, 9810117603, 011-011-456711616,
            </span>
          </div>
          <div className="flex items-center space-x-3 text-gray-200">
            <Mail className="w-5 h-5 text-blue-300" />
            <span className="text-base md:text-lg font-medium">
              rkssconsultants@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-3 text-gray-200">
            <MapPin className="w-5 h-5 text-blue-300" />
            <span className="text-base md:text-lg font-medium">Office: 42, GF, WTC, Babar Rd, Office New Delhi - 110 001</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="https://wa.me/+919958455662?text=Hi%20RKSS%20Consultants,%20I’d%20like%20to%20schedule%20a%20call%20to%20discuss%20your%20services."
          target="_blank"
          className="inline-block bg-white text-[#0C3051] font-semibold text-lg px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 hover:scale-[1.02] transition-transform duration-300"
        >
          Schedule a Call
        </Link>
      </div>
    </section>
  );
}
