import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Complete documentation for Kite Infrastructure as Code language. Learn syntax, concepts, resources, components, mixins, and advanced features.",
  keywords: ["kite documentation", "iac docs", "infrastructure as code tutorial", "kite language guide", "cloud infrastructure docs"],
  openGraph: {
    title: "Kite Documentation - Complete Guide",
    description: "Complete documentation for Kite Infrastructure as Code language. Learn syntax, concepts, and advanced features.",
    url: 'https://kitelang.cloud/docs',
  },
  twitter: {
    title: "Kite Documentation - Complete Guide",
    description: "Complete documentation for Kite Infrastructure as Code language. Learn syntax, concepts, and advanced features.",
  },
  alternates: {
    canonical: '/docs',
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
