import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#112240",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Illuminati Lodge of New York | Enlightenment Through Knowledge",
  description: "The Illuminati Lodge of New York - A distinguished brotherhood dedicated to the pursuit of knowledge, enlightenment, and the betterment of humanity through ancient wisdom and modern understanding.",
  keywords: ["Illuminati", "New York", "enlightenment", "brotherhood", "freemasonry", "esoteric knowledge", "secret society", "ancient wisdom", "philosophy", "occult"],
  authors: [{ name: "Illuminati Lodge of New York" }],
  icons: {
    icon: "/images/illuminati-logo.png",
    apple: "/images/illuminati-logo.png",
  },
  openGraph: {
    title: "Illuminati Lodge of New York",
    description: "Enlightenment Through Knowledge - Join the distinguished brotherhood dedicated to ancient wisdom and modern understanding.",
    url: "https://illuminati-ny.org",
    siteName: "Illuminati Lodge of New York",
    type: "website",
    images: [
      {
        url: "/images/parallax-bg.png",
        width: 1200,
        height: 800,
        alt: "Illuminati Lodge of New York - Enlightenment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illuminati Lodge of New York",
    description: "Enlightenment Through Knowledge - Join the distinguished brotherhood",
    images: ["/images/parallax-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
