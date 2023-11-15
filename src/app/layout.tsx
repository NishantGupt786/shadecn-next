import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadecn Experiment",
  description: "This is an experiment website made using shadecn as a ui library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="mx-8 md:mx-auto">
          <h1>Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
