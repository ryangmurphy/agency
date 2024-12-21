import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Digital Agency",
  description: "Digital Agency powering innovation in the maritimes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
