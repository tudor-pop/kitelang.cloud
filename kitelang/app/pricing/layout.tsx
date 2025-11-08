import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Kite pricing plans for teams of all sizes. Free for small teams, Pro at $20/month, and custom Enterprise solutions. Fair and transparent pricing.",
  keywords: ["kite pricing", "iac pricing", "infrastructure as code cost", "free tier", "enterprise pricing"],
  openGraph: {
    title: "Kite Pricing - Plans for Every Team",
    description: "Free for small teams, Pro at $20/month, and custom Enterprise solutions. Fair and transparent pricing.",
    url: 'https://kitelang.cloud/pricing',
  },
  twitter: {
    title: "Kite Pricing - Plans for Every Team",
    description: "Free for small teams, Pro at $20/month, and custom Enterprise solutions. Fair and transparent pricing.",
  },
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
