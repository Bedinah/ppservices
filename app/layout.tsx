import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";



const tajawal_init = Tajawal({
  subsets: ["latin"],
  weight: ['200', '300','400','500', '700','800', '900'],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: "(*_*) <bedina/>",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tajawal_init.variable}>{children}</body>
    </html>
  );
}


