import type { Metadata } from "next";
import Script from "next/script";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { metadata as metadataConfig } from "@/config/metadata";
import { socials } from "@/config/socials";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
  icons: {
    icon: metadataConfig.iconUrl,
    shortcut: metadataConfig.iconUrl,
  },
  openGraph: {
    title: metadataConfig.title,
    description: metadataConfig.description,
    url: metadataConfig.websiteUrl,
    siteName: metadataConfig.title,
    images: [
      {
        url: metadataConfig.websiteUrl + metadataConfig.iconUrl,
        width: 678,
        height: 750,
        alt: `${metadataConfig.shortName} Logo`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataConfig.title,
    description: metadataConfig.description,
    images: [metadataConfig.websiteUrl + metadataConfig.iconUrl],
  },
  alternates: {
    canonical: metadataConfig.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: metadataConfig.shortName,
              url: metadataConfig.websiteUrl,
              logo: metadataConfig.websiteUrl + metadataConfig.iconUrl,
              sameAs: socials.map((social) => social.name),
            }),
          }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`min-h-screen ${gabarito.className} flex flex-col dark relative`}
      >
        <div
          className="fixed inset-0 -z-10 h-screen w-screen bg-fixed bg-center bg-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/dust.png)",
          }}
        />
        <Navbar />
        <div className="flex-grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
