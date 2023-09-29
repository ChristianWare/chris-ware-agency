import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Azeret_Mono, Outfit, Chakra_Petch } from "next/font/google";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import Nav from "../components/Nav/Nav";

import Footer from "@/components/Footer/Footer";

import { Toaster } from "react-hot-toast";

// const roboto = Roboto({
//   weight: ["400", "500"],
//   style: ["normal"],
//   subsets: ["latin"],
//   variable: "--roboto",
// });

// const bebasneue = localFont({
//   src: "../../public/fonts/bebasneue.woff2",
//   variable: "--bebasneue",
// });

const azeretMono = Azeret_Mono({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--azeretMono",
});

const chakraPetch = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--chakraPetch",
});

const outfit = Outfit({
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--outfit",
});

export const metadata: Metadata = {
  title: "Chris Ware Agency | Web Design & Development in Phoenix, AZ",
  description:
    "Chris Ware Agency – Your partner for web solutions. Expert in SEO audits, keyword research, e-commerce, and more. Boost your online presence today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.variable} ${azeretMono.variable} ${chakraPetch.variable}`}
      >
        <Toaster
          position='top-right'
          toastOptions={{
            className: "toastFont",
          }}
        />
        <Nav />
        <div className={styles.layout}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
