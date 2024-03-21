import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "RentFast",
  description: "Discover the best cars in the world and then rent them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
