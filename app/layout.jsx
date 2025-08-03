import { Inter, Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Navigation } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Transform Your Digital Vision | Visqode - Premium Digital Excellence",
  description:
    "Where innovation meets artistry. We craft ultra-premium digital experiences that transform brands and elevate businesses to extraordinary heights. 5+ years of proven expertise in web development, brand building, and AI-powered solutions.",
  keywords: [
    "premium web development",
    "luxury brand building",
    "digital transformation",
    "AI-powered solutions",
    "ultra-premium design",
    "high-end digital agency",
    "custom web applications",
    "brand strategy",
    "digital innovation",
    "visqode",
  ].join(", "),
  authors: [{ name: "Visqode Team", url: "https://visqode.com" }],
  creator: "Visqode",
  publisher: "Visqode",
  openGraph: {
    title: "Transform Your Digital Vision | Visqode",
    description:
      "Crafting ultra-premium digital experiences that transform brands and elevate businesses to extraordinary heights. 5+ years of proven expertise.",
    type: "website",
    locale: "en_US",
    url: "https://visqode.com",
    siteName: "Visqode",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visqode - Transform Your Digital Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transform Your Digital Vision | Visqode",
    description:
      "Crafting ultra-premium digital experiences that transform brands and elevate businesses.",
    images: ["/twitter-image.jpg"],
    creator: "@visqode",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${plusJakarta.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#B4E8DB" />
      </head>
      <body
        className="font-sora antialiased bg-night text-white min-h-screen"
        style={{ backgroundColor: "#101315", color: "#ffffff" }}
      >
        <div className="bg-night min-h-screen">
          {/* navigation */}
          <Navbar />
          <main className="relative bg-night">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
