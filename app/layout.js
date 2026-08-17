import Announcement from "@/components/layout/announcement";
import { Navbar } from "@/components/layout/Navbar";
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
        <Navbar />

        {children}
      </body>
    </html>
  );
}
