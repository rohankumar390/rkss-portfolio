import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-[#0E3655]">

      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 text-white border border-white/10 mb-6">
            Contact RKSS Consultants
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let’s Connect
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mt-6 rounded-full"></div>

          <p className="mt-6 text-gray-300 text-lg leading-9 max-w-lg">
            Have a question about tax, compliance, or setting up your business?
            Our team is here to guide you with clarity and expert support.
          </p>

          {/* CTA CARD */}
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-xl max-w-lg">

            <h3 className="text-2xl font-bold text-[#0E3655]">
              Need a Consultation?
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Reach out to us and our experts will get back to you shortly.
            </p>

            <a
              href="https://wa.me/+919958455662?text=Hi%20RKSS%20Consultants,%20I’d%20like%20to%20schedule%20a%20call%20to%20discuss%20your%20services"
              className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-[#0E3655]
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-[#154b73]
              transition
              "
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {[
            {
              icon: MapPin,
              title: "Our Office",
              value:
                "Office: 42, GF, WTC, Babar Rd, New Delhi - 110001",
            },
            {
              icon: Mail,
              title: "Email",
              value: "rkssconsultantsindia@gmail.com",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "(+91) 9289860204",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-start gap-5">

                  <div className="bg-[#0E3655]/10 p-4 rounded-xl">
                    <Icon className="w-6 h-6 text-[#0E3655]" />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#0E3655]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {item.value}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Bottom Image */}
      <div className="hidden sm:block w-full h-[350px] md:h-[450px] overflow-hidden">

        <Image
          src="/contact-bg.png"
          alt="Contact Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

      </div>

    </section>
  );
}