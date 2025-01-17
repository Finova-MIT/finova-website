import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finova",
  description: "Finova - Innovation in Finance",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen ${gabarito.className} flex flex-col dark`}
      >
        <Navbar />
        <div className="flex-grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
