import type { Metadata } from "next";
import {
  Ubuntu,
  Bellota,
  Geist,
  Geist_Mono,
  Open_Sans,
} from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { siteAuthors, siteConfig, siteKeywords } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

const bellota = Bellota({
  variable: "--font-bellota",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  keywords: siteKeywords,
  authors: siteAuthors,
  creator: siteConfig.author,
  publisher: siteConfig.author,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.links.twitter,
    card: "summary_large_image",
    images: [`${siteConfig.url}/og`],
    creator: siteConfig.handlers.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} ${bellota.variable} ${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
