import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rkssconsultants.com";

  const routes = [
    "",
    "/about",
    "/about/leadership-team",
    "/about/our-firm",
    "/about/WhyChooseUs",
    "/contact",
    "/legal/disclaimer",
    "/legal/privacy-policy",
    "/legal/terms-of-use",
    "/resources/blog",
    "/resources/blog/companies-csr-policy-amendment-rules-2026",
    "/resources/tax-calendar",
    "/services",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
