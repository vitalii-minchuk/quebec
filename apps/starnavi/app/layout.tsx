import { Header } from "@/components/layouts/header";
import { inter } from "../styles/fonts";
import "../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SW",
    template: `%s | SW`,
  },
  description: "starnavi turbo",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
