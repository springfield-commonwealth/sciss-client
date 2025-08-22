import "@/styles/index.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "SCISS - Springfield Commonwealth International Summer School",
    template: "%s | SCISS",
  },
  description:
    "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
  keywords: [
    "summer school",
    "international",
    "academics",
    "activities",
    "SCISS",
  ],
  authors: [{ name: "SCISS" }],
  creator: "SCISS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sciss.org",
    title: "SCISS - Springfield Commonwealth International Summer School",
    description:
      "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
    siteName: "SCISS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCISS - Springfield Commonwealth International Summer School",
    description:
      "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
