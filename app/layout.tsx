import type { Metadata } from "next";
import Script from "next/script";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

const WEBSITE_URL = "https://finovamanipal.org";

export const metadata: Metadata = {
  title: "Finova - Manipal",
  description:
    "Official FinTech club of Manipal Institute of Technology (MIT), Manipal. We aim to bridge the gap between finance and technology.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Finova - Manipal",
    description: "Explore financial strategies and tools with Finova.",
    url: WEBSITE_URL,
    siteName: "Finova",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Finova - Manipal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finova - Manipal",
    description: "Explore financial strategies and tools with Finova.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: WEBSITE_URL,
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
              name: "Finova",
              url: WEBSITE_URL,
              logo: `${WEBSITE_URL}/logo.png`,
              sameAs: [
                "https://www.instagram.com/finova.manipal/",
                "https://www.linkedin.com/company/finova-mit-manipal/",
                "https://github.com/Finova-MIT",
              ],
            }),
          }}
        />
      </head>
      <body className={`min-h-screen ${gabarito.className} flex flex-col dark`}>
        <Navbar />
        <div className="flex-grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
