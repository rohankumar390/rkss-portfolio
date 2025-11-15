// src/app/resources/page.tsx
import Link from "next/link";
import { BookOpen, CalendarDays, FileDown, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Knowledge Hub | RKSS Consultants",
  description:
    "Access articles, tax calendars, FAQs, and downloadable forms from RKSS Consultants’ knowledge hub.",
};

const resources = [
  {
    icon: <BookOpen className="w-10 h-10 text-blue-700" />,
    title: "Blog & Updates",
    desc: "Stay informed with expert insights on taxation, compliance, and business finance.",
    link: "/resources/blog",
  },
  {
    icon: <CalendarDays className="w-10 h-10 text-blue-700" />,
    title: "Tax Calendar",
    desc: "Track all key due dates for income tax, GST, and ROC filings.",
    link: "/resources/tax-calendar",
  },
  {
    icon: <FileDown className="w-10 h-10 text-blue-700" />,
    title: "Downloads",
    desc: "Access useful checklists, document templates, and forms for quick reference.",
    link: "/resources/downloads",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-blue-700" />,
    title: "FAQs",
    desc: "Find answers to frequently asked questions on taxation and compliance.",
    link: "/resources/faqs",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Knowledge Hub
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore curated insights, compliance tools, and educational content
          from RKSS Consultants — helping you stay informed and compliant.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="bg-white shadow-sm hover:shadow-md rounded-xl p-6 transition flex flex-col items-center text-center border border-gray-100 hover:border-blue-100"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              <span className="mt-4 text-blue-700 text-sm font-medium hover:underline">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
