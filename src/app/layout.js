import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navber/navber";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata = {
  title: "HOSTMIN - Hosting Solutions",
  description: "Professional hosting and domain services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
