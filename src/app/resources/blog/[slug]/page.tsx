import Image from "next/image";
import { notFound } from "next/navigation";

import { blog as csrBlog } from "../../../../content/blogs/companies-csr-policy-amendment-rules-2026";
import { blog as gstBlog } from "../../../../content/blogs/gst-blocked-credits-under-section-17-5";

const allBlogs = [csrBlog, gstBlog];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.description,
  };
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <section className="bg-[#0E3655] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-300 mt-5 text-lg">
            Updated:{" "}
            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl max-w-5xl mx-auto">
          {/* Cover Image */}
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={1200}
            height={700}
            className="w-full rounded-2xl object-cover mb-12"
            priority
          />

          {/* Description */}
          <p className="text-gray-700 text-lg leading-9 tracking-wide mb-12">
            {blog.description}
          </p>

          {/* Sections */}
          {blog.sections.map((section, index) => (
            <div
              key={index}
              className={`${
                index !== 0 ? "border-t border-gray-200 pt-10 mt-12" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#0E3655] mb-6">
                {section.heading}
              </h2>

              <div className="space-y-5">
                {section.content
                  .trim()
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-700 text-lg leading-9 tracking-wide"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>

              {section.image && (
                <div className="mt-10">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    width={1200}
                    height={700}
                    className="w-full rounded-2xl border border-gray-200 shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Footer CTA */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h3 className="text-2xl font-bold text-[#0E3655] mb-4">
              Need Professional Assistance?
            </h3>
            <p className="text-gray-700 text-lg leading-8">
              If you have questions regarding GST compliance, ITC eligibility,
              corporate governance, or any other tax and regulatory matters, our
              team can help you navigate the latest requirements and ensure full
              compliance with applicable laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
