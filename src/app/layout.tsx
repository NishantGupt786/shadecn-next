import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { ModeToggle } from "@/components/Toggle-Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadecn Experiment",
  description:
    "This is an experiment website made using shadecn as a ui library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="mx-8 md:mx-auto flex justify-between">
            <h1>Navbar</h1><ModeToggle />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
