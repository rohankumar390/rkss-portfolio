export const metadata = {
  title: "Common Mistakes in Income Tax Return Filing & How to Avoid Them",
  description:
    "Avoid common errors in ITR filing such as wrong ITR form selection, AIS mismatches, TDS discrepancies, and reporting mistakes.",
};

export default function IncomeTaxMistakesBlog() {
  return (
    <section className="bg-[#0E3655] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Common Mistakes in Income Tax Return Filing
          </h1>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-300 mt-5 text-lg">
            INCOME TAX • Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl max-w-5xl mx-auto">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-9 tracking-wide">
            Filing your Income Tax Return (ITR) may seem simple, but even a
            small mistake can trigger mismatches, delays, defective return
            notices, or scrutiny. Here are the most common errors taxpayers
            make—and how you can avoid them.
          </p>

          {/* Reusable Section */}
          {[
            {
              title: "1. Selecting the Wrong ITR Form",
              content:
                "Using an incorrect ITR form can lead to a defective return notice (u/s 139(9)). Each form is meant for a specific taxpayer category.",
              fix: [
                "ITR-1 → Salaried individuals",
                "ITR-2 → Capital gains / multiple house properties",
                "ITR-3 → Business or profession",
                "ITR-4 → Presumptive income",
              ],
            },
            {
              title: "2. Ignoring AIS/TIS Mismatches",
              content:
                "AIS now tracks property transactions, mutual funds, dividends, rent, FD interest, and more.",
              fix: [
                "Download AIS & TIS before filing",
                "Reconcile with Form 26AS",
                "Check bank statements",
              ],
            },
            {
              title: "3. Missing Out on TDS Credits",
              content:
                "Many taxpayers forget TDS deducted from salary, rent, property transactions, and bank interest.",
              fix: [
                "Verify Form 26AS",
                "Check Form 16",
                "Reconcile all TDS entries",
              ],
            },
            {
              title: "4. Wrong Reporting of Capital Gains",
              content:
                "Errors in reporting mutual funds, stock gains, or indexed cost calculations are common.",
              fix: [
                "Use broker statements",
                "Check CAS reports",
                "Verify gain calculations",
              ],
            },
            {
              title: "5. Not Verifying Return After Filing",
              content:
                "An unverified return is treated as not filed.",
              fix: [
                "Verify within 30 days",
                "Use Aadhaar OTP",
                "Use Net Banking or EVC",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="mt-12 border-t border-gray-200 pt-10"
            >
              <h2 className="text-2xl font-bold text-[#0E3655] mb-4">
                {section.title}
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                {section.content}
              </p>

              <div className="mt-6 bg-[#0E3655]/5 rounded-2xl p-6">
                <h3 className="font-bold text-[#0E3655] mb-4">
                  Recommended Action
                </h3>

                <ul className="space-y-3">
                  {section.fix.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D4AF37] font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-[#0E3655] mb-4">
              Conclusion
            </h2>

            <p className="text-gray-700 text-lg leading-9 tracking-wide">
              Filing an accurate ITR requires proper documentation,
              reconciliation, and attention to detail. Avoiding these
              common mistakes ensures smoother processing and reduces
              the chances of notices or scrutiny.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}