import "@/styles/global.css";
import ProjectContextProvider from "@/utils/projectContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s — Grant Imbo",
    default: "Grant Imbo — Designer / Developer",
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
      <body>
        <ProjectContextProvider>{children}</ProjectContextProvider>
      </body>
    </html>
  );
}
