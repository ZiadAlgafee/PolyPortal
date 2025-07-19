import type { Metadata } from "next";
import "@fontsource/montserrat/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/inter/400.css";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export const metadata: Metadata = {
  title: "PolyPortal: The Gateway to 3D Creativity",
  description: "Upload, view, share, and sell 3D models in a vibrant creative marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-night text-smoke font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
