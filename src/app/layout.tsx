import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/NavigationBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate Image with AI",
  description:
    "An AI text-to-image model is a groundbreaking technology that uses artificial intelligence to generate images based on descriptive text input. This innovative tool has the capability to transform written prompts into stunning visual content, making it a valuable asset for various applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
