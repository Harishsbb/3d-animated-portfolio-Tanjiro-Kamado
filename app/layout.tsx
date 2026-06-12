import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Harish K | Full Stack Developer",
  description: "Personal portfolio of Harish K - Full Stack Developer and Computer Science Engineering student. Experienced in building scalable applications using React, Go, Spring Boot, AWS, and modern web frameworks.",
  keywords: ["Harish K", "Full Stack Developer", "Developer Portfolio", "Go Developer", "React Developer", "Spring Boot", "Software Engineer Intern", "Dindigul", "India"],
  authors: [{ name: "Harish K" }],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased text-white selection:bg-fireOrange-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
