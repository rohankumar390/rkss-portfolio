// src/components/about/LeadershipTeam.tsx
"use client";
import Image from "next/image";

const leaders = [
  {
    name: "CA Raman Khanna, Founder",
    location: "NEW DELHI, INDIA",
    description:
      "Raman brings over 25 years of expertise in Corporate Finance, Taxation, Accounting, and Management Consultancy. As the Founder, he leads strategy, innovation, and growth, driving RKSS Consultants toward sustained excellence and client impact.",
    image: "/r.png",
  },
  {
    name: "CA Suresh Sethi, Lead Consultant | Chartered Accountant",
    location: "NEW DELHI, INDIA",
    description:
      "With over 40 years of experience, Suresh leads financial and regulatory advisory at RKSS Consultants. He specializes in Auditing, Taxation, Financial Planning, Business Restructuring, Corporate Compliance, and Portfolio Management.",
    image: "/s.png",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#0E3655] py-16 px-6 md:px-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
        Leadership Team
      </h2>

      <div className="space-y-16">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 text-white"
          >
            <div className="w-[120px] h-[120px] flex-shrink-0">
              <img
                src={leader.image}
                alt={leader.name}
                width={120}
                height={120}
                className="rounded-full w-[120px] h-[120px] object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='100%25' height='100%25' fill='%230b2b3a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='%23ffffff'%3E%F0%9F%91%A4%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-sm font-semibold mt-1 opacity-80">
                {leader.location}
              </p>
              <p className="mt-3 leading-relaxed opacity-90 max-w-3xl">
                {leader.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
