export const metadata = {
  title: "Common Mistakes in Income Tax Return Filing & How to Avoid Them",
  description:
    "Avoid common errors in ITR filing such as wrong ITR form selection, AIS mismatches, TDS discrepancies, and reporting mistakes. Learn how to file your tax return correctly.",
};

export default function IncomeTaxMistakesBlog() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-[#0E3655]">
      <div className="max-w-4xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#0A2238] leading-tight">
          Common Mistakes in Income Tax Return Filing & How to Avoid Them
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          INCOME TAX • Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="h-[2px] w-24 bg-blue-200 mt-6 mb-10 rounded-full" />

        {/* INTRO */}
        <p className="text-lg leading-relaxed mb-8">
          Filing your Income Tax Return (ITR) may seem simple, but even a small
          mistake can trigger mismatches, delays, defective return notices, or
          scrutiny. Here are the most common errors taxpayers make—and how you
          can avoid them.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          1. Selecting the Wrong ITR Form
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Using an incorrect ITR form can lead to a{" "}
          <strong>defective return notice (u/s 139(9))</strong>. Each form is
          meant for a specific type of taxpayer.
        </p>
        <p className="font-semibold mb-2">Fix:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>
            <strong>ITR-1</strong> → Salaried individuals
          </li>
          <li>
            <strong>ITR-2</strong> → Capital gains / more than one house
          </li>
          <li>
            <strong>ITR-3</strong> → Business or profession
          </li>
          <li>
            <strong>ITR-4</strong> → Presumptive income (44AD/44ADA/44AE)
          </li>
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          2. Ignoring AIS/TIS Mismatches
        </h2>
        <p className="text-lg leading-relaxed mb-2">
          AIS (Annual Information Statement) now tracks almost everything:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>Property transactions</li>
          <li>Mutual fund purchases/redemptions</li>
          <li>Rent received</li>
          <li>FD interest, dividends, securities transactions</li>
        </ul>

        <p className="font-semibold mt-4 mb-2">Fix:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>Download AIS & TIS before filing.</li>
          <li>Reconcile with Form 26AS, bank statements, and books.</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          3. Not Reporting All Bank Accounts
        </h2>
        <p className="text-lg leading-relaxed">
          From FY 2025–26, taxpayers must declare all active savings and current
          accounts.
        </p>
        <p className="font-semibold mt-4">Fix:</p>
        <p className="text-lg leading-relaxed">
          Update your list of bank accounts annually before filing ITR.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          4. Missing Out on TDS Credits
        </h2>
        <p className="text-lg leading-relaxed">
          Many taxpayers forget TDS deducted under:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>Salary (Form 16)</li>
          <li>Rent u/s 194-IB</li>
          <li>Property sale/purchase u/s 194-IA</li>
          <li>Bank FD interest</li>
        </ul>

        <p className="font-semibold mt-4">Fix:</p>
        <p className="text-lg leading-relaxed">
          Reconcile TDS with <strong>Form 26AS</strong> before filing.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          5. Wrong Reporting of Capital Gains
        </h2>
        <p className="text-lg leading-relaxed mb-2">Common mistakes include:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>Not reporting mutual fund switch gains</li>
          <li>Incorrect indexed cost calculation</li>
          <li>Ignoring STT applicability</li>
        </ul>

        <p className="font-semibold mt-4 mb-2">Fix:</p>
        <p className="text-lg leading-relaxed">
          Use broker statements, CAS reports, and capital gains summaries to
          ensure accuracy.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold mt-12 mb-4">
          6. Not Verifying Return After Filing
        </h2>
        <p className="text-lg leading-relaxed mb-2">
          An unverified return is treated as <strong>NOT filed</strong>.
        </p>
        <p className="font-semibold">Fix:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
          <li>Verify within 30 days of filing.</li>
          <li>Use Aadhaar OTP, net-banking, or EVC.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed mb-10">
          Filing an accurate ITR requires proper documentation, reconciliation,
          and attention to detail. Avoiding these common mistakes ensures smooth
          processing and reduces the chances of scrutiny or notices.
        </p>
      </div>
    </section>
  );
}
