import Announcement from "@/components/layout/Announcement";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { montserrat, inter } from "./font";
import "./globals.css";

export const metadata = {
  title: "Dermatology Clinic",
  description: "Professional dermatology and skin care services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Announcement />
        <Navbar className="sticky z-100 top-0" />

        {children}
        <Footer />
      </body>
    </html>
  );
}
