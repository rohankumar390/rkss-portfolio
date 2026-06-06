interface BlogSection {
  heading: string;
  content: string;
  image?: string;
}

interface Blog {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage: string;
  sections: BlogSection[];
}

export const blog: Blog = {
  slug: "companies-csr-policy-amendment-rules-2026",

  title: "Companies (CSR Policy) Amendment Rules, 2026",

  description:
    "MCA has introduced significant reforms in CSR implementation through the Companies (CSR Policy) Amendment Rules, 2026.",

  publishedAt: "2026-05-27",

  coverImage: "/blogs/csr-rule-1.png",

  sections: [
    {
      heading: "Introduction",
      content: `
The Ministry of Corporate Affairs (MCA) has notified the Companies (Corporate Social Responsibility Policy) Amendment Rules, 2026.

The amendment introduces a significant reform in CSR implementation by allowing companies to undertake CSR activities through Zero Coupon Zero Principal (ZCZP) Instruments issued by eligible Not-for-Profit Organizations listed on the Social Stock Exchange.
      `,
    },

    {
      heading: "Key Amendments",
      image: "/blogs/csr-rule-2.png",

      content: `
The amendment introduces Zero Coupon Zero Principal (ZCZP) Instruments into the CSR framework.

Companies can now deploy CSR funds through investments in ZCZP instruments issued by eligible NPOs.

The rules also introduce new definitions for Not-for-Profit Organizations (NPOs) and ZCZP Instruments, providing better regulatory clarity.

Additionally, expenditure through ZCZP instruments cannot exceed 10% of the company's total CSR expenditure for the relevant financial year.
      `,
    },

    {
      heading: "Compliance & Impact",
      image: "/blogs/csr-rule-3.png",

      content: `
Companies subscribing to ZCZP instruments are exempt from undertaking impact assessments for projects funded through such instruments.

Funds raised through ZCZP instruments must be utilized within three succeeding financial years.

In case of termination of listing, unspent funds must be transferred to a Schedule VII fund and reported to SEBI.

Existing CSR provisions continue to apply except where specifically modified under the amendment.
      `,
    },

    {
      heading: "Why This Matters",

      content: `
The amendment opens a new avenue for CSR deployment through Social Stock Exchanges.

It improves transparency, accountability, and efficiency in CSR spending while strengthening funding opportunities for eligible Not-for-Profit Organizations.

This reform is expected to enhance access to social capital and support large-scale social initiatives through regulated instruments.
      `,
    },
  ],
};
