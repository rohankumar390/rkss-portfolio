export const metadata = {
  title: "Tax Calendar | RKSS Consultants",
  description:
    "Track important tax compliance dates for TDS, GST, Income Tax, and corporate filings.",
};

export default function TaxCalendar() {
  const calendar = [
    {
      date: "7 Nov 2025",
      compliance: "TDS/TCS Payment",
      details: "Deposit TDS/TCS for October 2025",
    },
    {
      date: "",
      compliance: "Form 27C",
      details: "Submission of TCS declarations for October 2025",
    },
    {
      date: "10 Nov 2025",
      compliance: "Tax Audit Reports",
      details:
        "44AB & other audit reports (10B/10BB/3CE etc.) for AY 2025-26 where ITR due date is 10 Dec 2025",
    },
    {
      date: "14 Nov 2025",
      compliance: "TDS Certificates",
      details: "Issue Form 16B/16C/16D/16E for TDS deducted in September 2025",
    },
    {
      date: "15 Nov 2025",
      compliance: "Quarterly TDS Certificates",
      details: "For Q2 FY 2025-26 (Non-salary payments)",
    },
    {
      date: "",
      compliance: "Form 24G",
      details: "For Govt. deductors for October 2025",
    },
    {
      date: "",
      compliance: "Form 3BB",
      details: "By stock exchange / recognised association for October 2025",
    },
    {
      date: "30 Nov 2025",
      compliance: "Property/Contract TDS Statement",
      details:
        "Challan-cum-statement for TDS u/s 194-IA, 194-IB, 194M, 194S for October 2025",
    },
    {
      date: "",
      compliance: "Income Tax Return",
      details:
        "ITR for AY 2025-26 for assessees covered under Form 92E (Transfer Pricing)",
    },
    {
      date: "",
      compliance: "Form 3CEAA",
      details:
        "Master File submission for eligible international group entities",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white text-[#0E3655]">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0A2238] font-serif">
          Tax Calendar
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Stay updated with important tax and compliance deadlines for
          businesses and professionals.
        </p>
        <div className="h-[2px] w-20 bg-blue-200 mx-auto mt-6 rounded-full" />
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block max-w-6xl mx-auto bg-white shadow-md rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-blue-50/50 text-[#0A2238]">
            <tr>
              <th className="py-4 px-6 text-left font-semibold">Date</th>
              <th className="py-4 px-6 text-left font-semibold">Compliance</th>
              <th className="py-4 px-6 text-left font-semibold">
                Details / Period Covered
              </th>
            </tr>
          </thead>

          <tbody>
            {calendar.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-blue-50/40 transition"
              >
                <td className="py-4 px-6">{row.date || "-"}</td>
                <td className="py-4 px-6 font-medium">{row.compliance}</td>
                <td className="py-4 px-6">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden max-w-xl mx-auto space-y-6 mt-6">
        {calendar.map((row, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-4"
          >
            <p className="text-sm text-gray-500">📅 {row.date || "-"}</p>

            <p className="text-lg font-semibold text-[#0A2238] mt-1">
              {row.compliance}
            </p>

            <p className="text-gray-700 mt-2 leading-relaxed">{row.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
