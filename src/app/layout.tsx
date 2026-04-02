import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Grant Imbo",
    default: "Grant Imbo | Senior Creative & Full-Stack Developer",
  },
  description:
    "Crafting web and beyond experiences, I engineer products with pixel-perfect precision and accessibility in mind.",
  icons: {
    icon: "/imgs/favicon.png",
    shortcut: "/imgs/favicon.png",
    apple: "/imgs/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/imgs/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} relative antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
