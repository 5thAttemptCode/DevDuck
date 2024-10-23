import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "const quack = querySelector.DevDuck",
  description: "The coolest 3D rubber duck ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <header>
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
