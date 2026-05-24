import { CalendarDays } from "lucide-react";

export const metadata = {
  title: "Tax Calendar | RKSS Consultants",
  description:
    "Track important tax compliance dates for TDS, GST, Income Tax, and corporate filings.",
};

export default function TaxCalendar() {
  const calendar = [
    {
      date: "07-May-2026",
      compliance: "TDS/TCS Payment",
      details: "Deposit of TDS/TCS deducted or collected for April 2026",
    },
    {
      date: "07-May-2026",
      compliance: "Form 27C",
      details: "Uploading declarations received in Form 27C for April 2026",
    },
    {
      date: "10-May-2026",
      compliance: "GSTR-7",
      details: "GST TDS Return for April 2026",
    },
    {
      date: "10-May-2026",
      compliance: "GSTR-8",
      details: "GST TCS Return for April 2026",
    },
    {
      date: "11-May-2026",
      compliance: "GSTR-1",
      details: "Monthly GSTR-1 Return for April 2026",
    },
    {
      date: "13-May-2026",
      compliance: "GSTR-5",
      details: "Return for Non-Resident Taxable Person",
    },
    {
      date: "13-May-2026",
      compliance: "GSTR-6",
      details: "Return for Input Service Distributor (ISD)",
    },
    {
      date: "13-May-2026",
      compliance: "IFF (Optional)",
      details: "Invoice Furnishing Facility for QRMP taxpayers",
    },
    {
      date: "15-May-2026",
      compliance: "PF Contribution",
      details: "EPF payment for April 2026",
    },
    {
      date: "15-May-2026",
      compliance: "ESIC Contribution",
      details: "ESIC payment for April 2026",
    },
    {
      date: "15-May-2026",
      compliance: "Form 27EQ",
      details: "Quarterly TCS Return for Q4 FY 2025–26",
    },
    {
      date: "15-May-2026",
      compliance: "TDS Certificates",
      details: "Issue of Form 16B / 16C / 16D for March 2026 deductions",
    },
    {
      date: "20-May-2026",
      compliance: "GSTR-3B",
      details: "Monthly GST Return for April 2026",
    },
    {
      date: "20-May-2026",
      compliance: "GSTR-5A",
      details: "Return for OIDAR service providers",
    },
    {
      date: "25-May-2026",
      compliance: "PMT-06",
      details: "GST payment under QRMP Scheme for April 2026",
    },
    {
      date: "30-May-2026",
      compliance: "Challan-cum-Statement",
      details: "Filing under Sections 194-IA, 194-IB, 194M & 194S",
    },
    {
      date: "31-May-2026",
      compliance: "TDS Return",
      details: "Quarterly TDS Returns – Forms 24Q, 26Q & 27Q",
    },
    {
      date: "31-May-2026",
      compliance: "Form 61A",
      details: "Statement of Financial Transactions (where applicable)",
    },
    {
      date: "31-May-2026",
      compliance: "ITC-03",
      details: "ITC reversal for persons opting for composition scheme",
    },
  ];

  return (
    <section className="bg-[#0E3655] py-24 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 mb-6">
          <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-white font-medium">Compliance Schedule</span>
        </div>

        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Tax Calendar
        </h1>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
          Track key compliance deadlines and stay ahead of statutory
          requirements.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden max-w-7xl mx-auto">
        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto max-h-[800px]">
          <table className="w-full">
            <thead className="bg-[#0E3655] text-white sticky top-0">
              <tr>
                <th className="py-6 px-8 text-left">Due Date</th>

                <th className="py-6 px-8 text-left">Compliance</th>

                <th className="py-6 px-8 text-left">Particulars</th>
              </tr>
            </thead>

            <tbody>
              {calendar.map((row, i) => (
                <tr
                  key={i}
                  className={`
                    border-b border-gray-100
                    hover:bg-[#F8FAFC]
                    transition-all duration-300
                    ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  `}
                >
                  <td className="py-6 px-8">
                    <div className="inline-flex items-center justify-center min-w-[150px] h-12 rounded-full bg-[#0E3655]/10 text-[#0E3655] font-semibold">
                      {row.date}
                    </div>
                  </td>

                  <td className="py-6 px-8">
                    <span className="font-semibold text-[#0E3655]">
                      {row.compliance}
                    </span>
                  </td>

                  <td className="py-6 px-8 text-gray-600 leading-8">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden p-6 space-y-5">
          {calendar.map((row, i) => (
            <div
              key={i}
              className="
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-md
                hover:shadow-xl
                transition-all
              "
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0E3655]/10 text-[#0E3655] font-semibold">
                📅 {row.date}
              </div>

              <h3 className="text-[#0E3655] text-lg font-bold mt-5">
                {row.compliance}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">{row.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
