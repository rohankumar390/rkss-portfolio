"use client";

import { useState } from "react";
import { CalendarDays, FileText } from "lucide-react";

export const metadata = {
  title: "Tax Calendar | RKSS Consultants",
  description:
    "Track important tax compliance dates for TDS, GST, Income Tax, and corporate filings.",
};

type Category = "gst" | "income" | "labour" | "tds" | "internal";
type TabId = "may" | "june" | "itr";

interface CalendarRow {
  date: string;
  compliance: string;
  category: Category;
  details: string;
}
const mayCalendar: CalendarRow[] = [
  {
    date: "07-May-2026",
    compliance: "TDS/TCS Payment",
    category: "tds",
    details: "Deposit of TDS/TCS deducted or collected for April 2026",
  },
  {
    date: "07-May-2026",
    compliance: "Form 27C",
    category: "tds",
    details: "Uploading declarations received in Form 27C for April 2026",
  },
  {
    date: "10-May-2026",
    compliance: "GSTR-7",
    category: "gst",
    details: "GST TDS Return for April 2026",
  },
  {
    date: "10-May-2026",
    compliance: "GSTR-8",
    category: "gst",
    details: "GST TCS Return for April 2026",
  },
  {
    date: "11-May-2026",
    compliance: "GSTR-1",
    category: "gst",
    details: "Monthly GSTR-1 Return for April 2026",
  },
  {
    date: "13-May-2026",
    compliance: "GSTR-5",
    category: "gst",
    details: "Return for Non-Resident Taxable Person",
  },
  {
    date: "13-May-2026",
    compliance: "GSTR-6",
    category: "gst",
    details: "Return for Input Service Distributor (ISD)",
  },
  {
    date: "13-May-2026",
    compliance: "IFF (Optional)",
    category: "gst",
    details: "Invoice Furnishing Facility for QRMP taxpayers",
  },
  {
    date: "15-May-2026",
    compliance: "PF Contribution",
    category: "labour",
    details: "EPF payment for April 2026",
  },
  {
    date: "15-May-2026",
    compliance: "ESIC Contribution",
    category: "labour",
    details: "ESIC payment for April 2026",
  },
  {
    date: "15-May-2026",
    compliance: "Form 27EQ",
    category: "tds",
    details: "Quarterly TCS Return for Q4 FY 2025–26",
  },
  {
    date: "15-May-2026",
    compliance: "TDS Certificates",
    category: "tds",
    details: "Issue of Form 16B / 16C / 16D for March 2026 deductions",
  },
  {
    date: "20-May-2026",
    compliance: "GSTR-3B",
    category: "gst",
    details: "Monthly GST Return for April 2026",
  },
  {
    date: "20-May-2026",
    compliance: "GSTR-5A",
    category: "gst",
    details: "Return for OIDAR service providers",
  },
  {
    date: "25-May-2026",
    compliance: "PMT-06",
    category: "gst",
    details: "GST payment under QRMP Scheme for April 2026",
  },
  {
    date: "30-May-2026",
    compliance: "Challan-cum-Statement",
    category: "tds",
    details: "Filing under Sections 194-IA, 194-IB, 194M & 194S",
  },
  {
    date: "31-May-2026",
    compliance: "TDS Return",
    category: "tds",
    details: "Quarterly TDS Returns – Forms 24Q, 26Q & 27Q",
  },
  {
    date: "31-May-2026",
    compliance: "Form 61A",
    category: "tds",
    details: "Statement of Financial Transactions (where applicable)",
  },
  {
    date: "31-May-2026",
    compliance: "ITC-03",
    category: "gst",
    details: "ITC reversal for persons opting for composition scheme",
  },
];

const juneCalendar: CalendarRow[] = [
  {
    date: "07-Jun-2026",
    compliance: "TDS/TCS Payment",
    category: "tds",
    details: "Deposit of TDS/TCS deducted or collected during May 2026",
  },
  {
    date: "10-Jun-2026",
    compliance: "GSTR-7 & GSTR-8",
    category: "gst",
    details: "GST TDS Return & GST TCS Return for May 2026",
  },
  {
    date: "11-Jun-2026",
    compliance: "GSTR-1",
    category: "gst",
    details: "Monthly GSTR-1 Return for May 2026",
  },
  {
    date: "13-Jun-2026",
    compliance: "GSTR-6 & IFF",
    category: "gst",
    details: "ISD Return & Invoice Furnishing Facility under QRMP Scheme",
  },
  {
    date: "15-Jun-2026",
    compliance: "Advance Tax",
    category: "income",
    details:
      "1st Instalment of Advance Tax (15% of tax liability) for FY 2026–27",
  },
  {
    date: "15-Jun-2026",
    compliance: "Form 16",
    category: "income",
    details: "Issue of Form 16 for FY 2025–26",
  },
  {
    date: "15-Jun-2026",
    compliance: "Form 16A",
    category: "income",
    details: "Issue of Form 16A for Q4 FY 2025–26",
  },
  {
    date: "15-Jun-2026",
    compliance: "PF Contribution",
    category: "labour",
    details: "Deposit of EPF Contribution for May 2026",
  },
  {
    date: "15-Jun-2026",
    compliance: "ESIC Contribution",
    category: "labour",
    details: "Deposit of ESI Contribution for May 2026",
  },
  {
    date: "20-Jun-2026",
    compliance: "GSTR-3B",
    category: "gst",
    details: "Monthly GST Return for May 2026",
  },
  {
    date: "20-Jun-2026",
    compliance: "GSTR-5 & GSTR-5A",
    category: "gst",
    details: "Returns for Non-Resident & OIDAR service providers",
  },
  {
    date: "25-Jun-2026",
    compliance: "PMT-06",
    category: "gst",
    details: "GST payment under QRMP Scheme for May 2026",
  },
  {
    date: "30-Jun-2026",
    compliance: "Quarter-end Review",
    category: "internal",
    details: "Quarter-end review of GST, TDS, books & statutory records",
  },
];

const itrDueDates = [
  {
    particulars: "Individuals/HUFs (ITR-1 & ITR-2) not liable for audit",
    date: "31 July 2026",
  },
  {
    particulars:
      "Businesses/Professionals filing ITR-3 or ITR-4 where audit is not required",
    date: "31 August 2026",
  },
  {
    particulars: "Tax Audit Report (Form 3CA/3CB-3CD)",
    date: "30 September 2026",
  },
  {
    particulars: "Tax Audit Cases under Section 44AB",
    date: "31 October 2026",
  },
  {
    particulars:
      "Assessees having International or Specified Domestic Transactions (Transfer Pricing)",
    date: "30 November 2026",
  },
  {
    particulars: "Belated Return under Section 139(4)",
    date: "31 December 2026",
  },
  { particulars: "Revised Return under Section 139(5)", date: "31 March 2027" },
  { particulars: "Updated Return (ITR-U)", date: "31 March 2031" },
];

const categoryStyles: Record<
  Category,
  { label: string; bg: string; text: string }
> = {
  gst: { label: "GST", bg: "bg-green-100", text: "text-green-800" },
  income: { label: "Income Tax", bg: "bg-amber-100", text: "text-amber-800" },
  labour: { label: "Labour Law", bg: "bg-blue-100", text: "text-blue-800" },
  tds: { label: "TDS/TCS", bg: "bg-red-100", text: "text-red-800" },
  internal: { label: "Internal", bg: "bg-gray-100", text: "text-gray-600" },
};

function CalendarTable({ data }: { data: CalendarRow[] }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto max-h-[800px]">
        <table className="w-full">
          <thead className="bg-[#0E3655] text-white sticky top-0">
            <tr>
              <th className="py-5 px-6 text-left text-sm font-medium">
                Due Date
              </th>
              <th className="py-5 px-6 text-left text-sm font-medium">
                Compliance
              </th>
              <th className="py-5 px-6 text-left text-sm font-medium">
                Particulars
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              const cat =
                categoryStyles[row.category] || categoryStyles.internal;
              return (
                <tr
                  key={i}
                  className={`border-b border-gray-100 hover:bg-[#F8FAFC] transition-all duration-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="py-5 px-6">
                    <div className="inline-flex items-center justify-center min-w-[140px] h-10 rounded-full bg-[#0E3655]/10 text-[#0E3655] text-sm font-semibold">
                      {row.date}
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <p className="font-semibold text-[#0E3655] text-sm">
                      {row.compliance}
                    </p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${cat.bg} ${cat.text}`}
                    >
                      {cat.label}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-gray-600 text-sm leading-6">
                    {row.details}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden p-5 space-y-4">
        {data.map((row, i) => {
          const cat = categoryStyles[row.category] || categoryStyles.internal;
          return (
            <div
              key={i}
              className="rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0E3655]/10 text-[#0E3655] text-xs font-semibold">
                  📅 {row.date}
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${cat.bg} ${cat.text}`}
                >
                  {cat.label}
                </span>
              </div>
              <h3 className="text-[#0E3655] text-base font-bold">
                {row.compliance}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-6">
                {row.details}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

function ItrTable() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0E3655] text-white sticky top-0">
            <tr>
              <th className="py-5 px-6 text-left text-sm font-medium">
                Particulars
              </th>
              <th className="py-5 px-6 text-left text-sm font-medium w-48">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {itrDueDates.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 hover:bg-[#F8FAFC] transition-all duration-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="py-5 px-6 text-gray-700 text-sm leading-6">
                  {row.particulars}
                </td>
                <td className="py-5 px-6">
                  <div className="inline-flex items-center justify-center min-w-[150px] h-10 rounded-full bg-[#D4AF37]/15 text-[#8B6B00] text-sm font-semibold">
                    {row.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden p-5 space-y-4">
        {itrDueDates.map((row, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 border border-gray-100 shadow-sm"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#8B6B00] text-xs font-semibold mb-3">
              📅 {row.date}
            </div>
            <p className="text-gray-700 text-sm leading-6">{row.particulars}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TaxCalendar() {
  const [activeTab, setActiveTab] = useState<TabId>("may");

  const tabs = [
    {
      id: "may",
      label: "May 2026",
      icon: <CalendarDays className="w-4 h-4" />,
    },
    {
      id: "june",
      label: "June 2026",
      icon: <CalendarDays className="w-4 h-4" />,
    },
    {
      id: "itr",
      label: "ITR Due Dates",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const tabMeta: Record<TabId, { title: string; sub: string }> = {
    may: {
      title: "May 2026 — Compliance Calendar",
      sub: "Track key deadlines for TDS, GST, Income Tax & Labour Law",
    },
    june: {
      title: "June 2026 — Compliance Calendar",
      sub: "Track key deadlines for TDS, GST, Income Tax & Labour Law",
    },
    itr: {
      title: "Income Tax Return (ITR) — Due Dates",
      sub: "Financial Year (FY) 2025–26 / Assessment Year (AY) 2026–27",
    },
  };

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

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === tab.id
                  ? "bg-[#D4AF37] text-[#0E3655] border-[#D4AF37] shadow-md"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden max-w-7xl mx-auto rounded-none md:rounded-lg">
        {/* Card Header */}
        <div className="bg-[#0E3655] px-8 py-6 border-b border-white/10">
          <h2 className="text-white text-xl font-bold">
            {tabMeta[activeTab].title}
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-2 text-sm">{tabMeta[activeTab].sub}</p>
        </div>

        {/* Tab Content */}
        {activeTab === "may" && <CalendarTable data={mayCalendar} />}
        {activeTab === "june" && <CalendarTable data={juneCalendar} />}
        {activeTab === "itr" && <ItrTable />}
      </div>
    </section>
  );
}
