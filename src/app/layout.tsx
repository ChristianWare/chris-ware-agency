import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--roboto",
});

const bebasneue = localFont({
  src: "../../public/fonts/bebasneue.woff2",
  variable: "--bebasneue",
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
        className={`${roboto.variable} ${bebasneue.variable} ${styles.layout}`}
      >
        <Toaster
          position='top-right'
          toastOptions={{
            className: "toastFont",
          }}
        />
        <Nav />

        

        {children}
        <Footer />
      </body>
    </html>
  );
}
