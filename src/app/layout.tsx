import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import MiniNav from "../components/MiniNav";

import "./globals.css";
import { CartProvider } from "./context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children,}: Readonly<
  {
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Navbar />
          <MiniNav />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
