import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Abhishek TM | Full Stack Developer",
  description:
    "Portfolio of Abhishek TM, a Computer Science student and full stack developer building modern web applications with Next.js, React, and FastAPI.",
  keywords: [
    "Abhishek TM",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Abhishek TM" }],
  creator: "Abhishek TM",
  metadataBase: new URL("https://abhishektm.vercel.app/"),

  verification: {
    google: "Wc2XA2lZzY-MKvNkPnObX51i7W9XhEH3LwMLIefSHNk"
  },

  openGraph: {
    title: "Abhishek TM | Portfolio",
    description:
      "Modern developer portfolio built with Next.js and React.",
    url: "https://abhishektm.vercel.app/",
    siteName: "Abhishek TM Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Abhishek TM Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek TM | Portfolio",
    description:
      "Modern developer portfolio built with Next.js and React.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
