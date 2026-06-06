import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | RKSS Consultants",
  description:
    "Latest updates on taxation, compliance, corporate law, GST, income tax, and regulatory changes.",
};

export default function BlogPage() {
  const blogs = [
    {
      slug: "gst-blocked-credits-under-section-17-5",
      title:
        "GST Blocked Credits Under Section 17(5) — What You Cannot Claim as ITC",
      description:
        "Not all GST paid can be claimed as Input Tax Credit. Section 17(5) blocks ITC on specific goods and services. Know what you cannot claim and stay compliant.",
      image: "/blogs/gst-blocked-credits.png",
      date: "06 Jun 2026",
      category: "GST Compliance",
    },
    {
      slug: "companies-csr-policy-amendment-rules-2026",
      title: "Companies (CSR Policy) Amendment Rules, 2026",
      description:
        "MCA introduces significant reforms in CSR implementation through Zero Coupon Zero Principal Instruments and Social Stock Exchange participation.",
      image: "/blogs/csr-rule.png",
      date: "27 May 2026",
      category: "Corporate Compliance",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0E3655]">
            Resources & Insights
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full" />
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Stay updated with the latest developments in taxation, corporate
            compliance, GST, income tax, and regulatory changes.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/resources/blog/${blog.slug}`}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={500}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium bg-[#0E3655]/10 text-[#0E3655] px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0E3655] mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="font-semibold text-[#0E3655]">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
