import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dr. Johnson Clinic - Compassionate Care, Expert Treatment",
  description: "Dr. Sarah Johnson, MD - Board-certified Internal Medicine physician with 15 years of experience. Offering comprehensive healthcare services in Mumbai.",
  keywords: "doctor, clinic, healthcare, internal medicine, Mumbai, medical consultation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
