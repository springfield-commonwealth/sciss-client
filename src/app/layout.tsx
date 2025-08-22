import "@/styles/index.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SCISS",
  description: "Springfield Commonwealth International Summer School",
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
