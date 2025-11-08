import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparison",
  description: "Compare Kite vs Terraform, Pulumi, and Bicep. Detailed feature comparison across language syntax, multi-cloud support, developer experience, and enterprise features.",
  keywords: ["kite vs terraform", "kite vs pulumi", "kite vs bicep", "iac comparison", "infrastructure as code comparison", "terraform alternative comparison"],
  openGraph: {
    title: "Kite vs Terraform, Pulumi & Bicep - Feature Comparison",
    description: "Detailed comparison of Kite against Terraform, Pulumi, and Bicep across 20+ features.",
    url: 'https://kitelang.cloud/comparison',
  },
  twitter: {
    title: "Kite vs Terraform, Pulumi & Bicep - Feature Comparison",
    description: "Detailed comparison of Kite against Terraform, Pulumi, and Bicep across 20+ features.",
  },
  alternates: {
    canonical: '/comparison',
  },
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
