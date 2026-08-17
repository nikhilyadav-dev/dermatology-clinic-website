import { Montserrat, Inter } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // only the weights you actually use
  variable: "--font-montserrat", // creates a CSS variable
  display: "swap", // shows fallback font while loading, avoids invisible text
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});
