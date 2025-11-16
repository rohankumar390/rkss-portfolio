export const metadata = {
  title: "Disclaimer | RKSS Consultants",
  description:
    "Official Disclaimer for RKSS Consultants regarding accuracy, liability, professional advice, and system limitations.",
};

export default function DisclaimerPage() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-[#0E3655]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0A2238]">
          Disclaimer
        </h1>
        <p className="mt-2 text-gray-500">Last Updated: 11/16/2025</p>

        <div className="h-[2px] w-24 bg-blue-200 mt-6 mb-10 rounded-full" />

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-8">
          This Disclaimer outlines the limitations of liability, accuracy,
          professional scope, and technology-related constraints related to the
          use of the RKSS Consultants (“RKSS”, “we”, “our”, “us”) website,
          content, and services.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          1. General Disclaimer
        </h2>
        <p className="text-lg leading-relaxed">
          All content on this website—articles, tools, resources, guides,
          calculators, examples, and regulatory updates—is provided strictly on
          an <strong>“as-is”</strong> basis.  
          While RKSS strives for accuracy, we make no warranties, guarantees,
          or representations regarding:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-lg leading-relaxed">
          <li>Accuracy, completeness, or reliability of information</li>
          <li>Whether information is current with the latest laws</li>
          <li>Applicability of content to your personal or business situation</li>
          <li>Any errors, omissions, or outdated materials</li>
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          2. Professional Disclaimer
        </h2>
        <p className="text-lg leading-relaxed">
          All tax, GST, accounting, corporate compliance, and financial
          information on this website is for <strong>general educational
          purposes only</strong>.  
          It should not be considered:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg leading-relaxed">
          <li>Professional tax advice</li>
          <li>Legal advice</li>
          <li>Financial planning advice</li>
          <li>Compliance or regulatory consultation</li>
        </ul>

        <p className="text-lg leading-relaxed mt-4">
          A formal client–advisor relationship is established only when RKSS
          accepts your engagement and a written agreement is executed.
        </p>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          3. No Guarantee of Outcomes
        </h2>
        <p className="text-lg leading-relaxed">
          RKSS does not guarantee any outcomes related to:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg leading-relaxed">
          <li>Regulatory approvals or certifications</li>
          <li>Refund or claim processing timelines</li>
          <li>Assessment or scrutiny resolutions</li>
          <li>Relief, exemptions, or tax benefits</li>
          <li>Speed or acceptance of government filings</li>
        </ul>

        <p className="text-lg leading-relaxed mt-4">
          Government processing, department decisions, and portal behavior are
          outside our control.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          4. Technology & System Disclaimer
        </h2>
        <p className="text-lg leading-relaxed">
          RKSS is not liable for disruptions arising from:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg leading-relaxed">
          <li>Server downtime or hosting issues</li>
          <li>Internet connectivity problems</li>
          <li>Software glitches or system failures</li>
          <li>Third-party tools (GST, MCA, Income Tax portals)</li>
          <li>Browser or device compatibility issues</li>
        </ul>

        <p className="text-lg leading-relaxed mt-4">
          Government portals frequently experience downtime, slow response,
          and technical glitches—these are not within RKSS’s control.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          5. External Links Disclaimer
        </h2>
        <p className="text-lg leading-relaxed">
          Our website may include links to third-party websites.  
          RKSS does not endorse, control, or guarantee:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg leading-relaxed">
          <li>Accuracy of third-party content</li>
          <li>Security or data protection</li>
          <li>Privacy practices</li>
          <li>Integrity of downloads or resources</li>
        </ul>

        <p className="text-lg leading-relaxed mt-4">
          Users access third-party sites at their own risk.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          6. No Liability
        </h2>
        <p className="text-lg leading-relaxed">
          To the fullest extent permitted by law, RKSS Consultants shall not be
          liable for any:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg leading-relaxed">
          <li>Direct or indirect losses</li>
          <li>Data loss or corruption</li>
          <li>Financial losses or penalties</li>
          <li>Loss of profits, revenue, or opportunities</li>
          <li>Consequences of relying on website information</li>
        </ul>

        <p className="text-lg leading-relaxed mt-4">
          Your sole remedy is to discontinue use of the website.
        </p>

        {/* SECTION 7 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          7. Contact Information
        </h2>
        <p className="text-lg leading-relaxed pb-10">
          For any concerns or clarification regarding this Disclaimer, contact:
          <br /><br />
          <strong>RKSS Consultants</strong>  
          <br />42, GF, WTC, Babar Rd, Office  
          <br />New Delhi – 110 001  
          <br />Email: rkssconsultants@gmail.com  
          <br />Phone: (+91) 9958455662, 9810117603, 011-456711616
        </p>
      </div>
    </section>
  );
}
