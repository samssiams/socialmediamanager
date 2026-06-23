import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import LenisProvider from "@/components/LenisProvider";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
