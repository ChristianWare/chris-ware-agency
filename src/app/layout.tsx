import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Staatliches } from "next/font/google";
import styles from "./layout.module.css";
import Nav from "./components/Nav/Nav";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--roboto",
});

const staatliches = Staatliches({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--staatliches",
});

export const metadata: Metadata = {
  title: "Chris Ware Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${staatliches.variable} ${styles.layout}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
