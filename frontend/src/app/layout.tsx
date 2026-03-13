import type { Metadata } from "next";
import { AppLayout } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: 'Ironlight - %s',
    default: 'Ironlight - Homepage',
  },
  description: 'From WooCommerce migrations to custom Laravel platforms and AI-powered workflows — Ironlight delivers software that scales. Estonian quality, global reach.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
