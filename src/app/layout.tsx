import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loginfoaccess from "@/component/loginforaccess";
import Head from "@/component/Head";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
import Loading from "@/component/loading";
import Headvitri from "@/component/Headvitri";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Mon ngon ne',
    default: 'Mon ngon ne'
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Loginfoaccess />

      <body className={inter.className}>
        <div className="container">
          {/* <Suspense fallback={<Loading />}>
            <Head vitri={3}></Head>
          </Suspense> */}
          <Headvitri />
          {children}
        </div>
      </body>
    </html>
  );
}
