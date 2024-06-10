import {
  JetBrains_Mono,
  Poppins,
  Major_Mono_Display,
  Londrina_Outline,
  Outfit,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/mycomp/Header";
import PageTransition from "@/components/mycomp/PageTransition";
import Stairtransition from "@/components/mycomp/StairTransition";
import { Toaster } from "sonner";
import Footer from "@/components/mycomp/Footer";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const londrina = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-londrina",
});
const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorMono",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});
export const metadata = {
  title: "Issam Kharbache",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} ${majorMono.variable} ${londrina.variable} ${outfit.variable} mt-24 xl:mt-4`}
      >
        <Toaster richColors position="top-center" />

        <Header />

        <Stairtransition />
        <PageTransition>
          <NextTopLoader />
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
