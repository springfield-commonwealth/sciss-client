import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCISS - Payload CMS",
  description:
    "Springfield Commonwealth International Summer School Content Management",
};

export default function PayloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
