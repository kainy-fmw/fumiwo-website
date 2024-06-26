import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContactUs from "@/src/components/home/ContactUs";
import Footer from "@/src/components/home/Footer";

const inter = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fumiwo",
  description: "Fumiwo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollba overflow-x-hidden">
      <body className={inter.className + '  overflow-x-hidden'}>
        {children}

        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
