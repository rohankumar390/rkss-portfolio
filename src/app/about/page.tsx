// src/app/about/page.tsx
import OurFirm from "./our-firm/page";
import LeadershipTeam from "@/src/app/about/leadership-team/page";
import WhyChooseUs from "./WhyChooseUs/page";

export const metadata = {
  title: "About Us | RKSS Consultants",
  description:
    "Know more about RKSS Consultants, our leadership, and our values.",
};

export default function AboutPage() {
  return (
    <div>
      <OurFirm />
      <LeadershipTeam />
      <WhyChooseUs />
    </div>
  );
}
