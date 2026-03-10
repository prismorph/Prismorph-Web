import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteConfig = {
  name: "Prismorph",
  description:
    "Transform your photos into stunning art with AI-powered filters. Apply magical effects like Cyberpunk, Oil Painting, Anime, Watercolor and 50+ artistic styles in seconds.",
  url: "https://prismorph.com",
  ogImage: "https://prismorph.com/opengraph-image",
  creator: "Prismorph Team",
  keywords: [
    "AI photo editor",
    "AI photo filter",
    "photo transformation",
    "AI art generator",
    "photo to art",
    "artistic filters",
    "AI image effects",
    "photo editing app",
    "cyberpunk filter",
    "anime filter",
    "oil painting effect",
    "watercolor effect",
    "AI portrait",
    "photo art generator",
    "mobile photo editor",
    "AI powered filters",
    "transform photos",
    "artistic photo effects",
    "digital art from photos",
    "AI image transformation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Transform Your Photos with AI`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Transform Your Photos with AI`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Prismorph - AI Photo Transformation App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Transform Your Photos with AI`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@prismorph",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Photo Editing, AI Art, Mobile App",
  referrer: "origin-when-cross-origin",
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/prismorph",
      app_store_id: "coming-soon",
    },
    android: {
      package: "com.prismorph.app",
      app_name: "Prismorph",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/icon`,
          width: 32,
          height: 32,
        },
      },
      {
        "@type": "MobileApplication",
        "@id": `${siteConfig.url}/#app`,
        name: siteConfig.name,
        operatingSystem: "iOS, Android",
        applicationCategory: "PhotographyApplication",
        description: siteConfig.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free to download with in-app purchases",
        },
        featureList: [
          "AI-powered photo transformation",
          "50+ artistic filters",
          "Cyberpunk, Anime, Oil Painting effects",
          "High resolution exports",
          "Fast processing",
          "Privacy-first approach",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "2.99",
          highPrice: "79.99",
          priceCurrency: "USD",
          offerCount: "7",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Prismorph?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prismorph is an AI-powered photo transformation app that converts your photos into stunning art using filters like Cyberpunk, Oil Painting, Anime, Watercolor, and 50+ other artistic styles.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Prismorph cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prismorph offers flexible pricing: Credit packs start at $2.99 for 10 credits, and subscriptions start at $3.99/week. Annual subscription is $79.99/year (best value at $6.67/month).",
            },
          },
          {
            "@type": "Question",
            name: "Is Prismorph available on iOS and Android?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prismorph mobile apps for iOS and Android are coming soon. Sign up for our newsletter to be notified when we launch.",
            },
          },
          {
            "@type": "Question",
            name: "How does the credit system work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "1 credit = 1 photo transformation. Credits never expire. You can buy credit packs or subscribe for monthly credits with additional benefits.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* iOS Safari status bar styling */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Theme color for browser chrome - matches site background */}
        <meta name="theme-color" content="#0a0a14" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#0a0a14" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-navbutton-color" content="#0a0a14" />
        <meta name="msapplication-TileColor" content="#0a0a14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
