import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Attention Trainer - Combat Doom Scrolling with Smart Interventions",
  description: "Transform your browsing habits with intelligent interventions and behavioral insights. Download our Chrome extension to break free from doom scrolling and regain control of your digital life.",
  keywords: ["attention trainer", "doom scrolling", "chrome extension", "productivity", "digital wellness", "focus", "browser habits", "scrolling intervention"],
  authors: [{ name: "Attention Trainer Team" }],
  creator: "Attention Trainer Team",
  publisher: "Attention Trainer",
  metadataBase: new URL('https://attentiontrainer.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Attention Trainer - Combat Doom Scrolling",
    description: "Transform your browsing habits with intelligent interventions. Download our Chrome extension for free.",
    type: "website",
    locale: "en_US",
    url: "https://attentiontrainer.app",
    siteName: "Attention Trainer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attention Trainer - Combat Doom Scrolling",
    description: "Transform your browsing habits with intelligent interventions. Download our Chrome extension for free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
