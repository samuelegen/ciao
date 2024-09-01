import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sevillana } from "next/font/google";
import "./globals.css";

export const sevillana = Sevillana({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
