import localFont from "next/font/local";
import "./globals.css";
import { dmSans } from "@/font";
import Footer from "./_component/Footer";
import Header from "./_component/Header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PrintS",
  description: "Printing Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} text-black bg-white antialiased`}
      ><Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
