import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kite - Infrastructure as Code. Actually Simple.",
    template: "%s | Kite"
  },
  description: "Kite is a modern Infrastructure as Code language for multi-cloud deployments. Define your cloud infrastructure with precision and clarity. Deploy anywhere. Scale effortlessly.",
  keywords: ["infrastructure as code", "IaC", "multi-cloud", "cloud infrastructure", "terraform alternative", "pulumi alternative", "devops", "cloud deployment", "AWS", "GCP", "Azure"],
  authors: [{ name: "EchoStream SRL" }],
  creator: "EchoStream SRL",
  publisher: "EchoStream SRL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kitelang.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kitelang.cloud',
    title: 'Kite - Infrastructure as Code. Actually Simple.',
    description: 'Modern Infrastructure as Code language for multi-cloud deployments. Deploy anywhere. Scale effortlessly.',
    siteName: 'Kite',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kite - Infrastructure as Code',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kite - Infrastructure as Code. Actually Simple.',
    description: 'Modern Infrastructure as Code language for multi-cloud deployments. Deploy anywhere. Scale effortlessly.',
    images: ['/og-image.png'],
    creator: '@kitelang',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kite',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    description: 'Modern Infrastructure as Code language for multi-cloud deployments',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'EchoStream SRL',
      url: 'https://kitelang.cloud',
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
