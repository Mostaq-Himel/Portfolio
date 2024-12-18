import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "min-h-screen bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
