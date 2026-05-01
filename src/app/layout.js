import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: " SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${OutfitFont.className} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="max-w-7xl mx-auto w-full flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
