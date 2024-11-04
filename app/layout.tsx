import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes'
import "./globals.css"
import Nav from "./components/nav"
import Footer from "./components/footer"
import { ColorProvider } from "@/context/colorContext"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "const quack = querySelector.DevDuck",
  description: "The coolest 3D rubber duck ever!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#4400ff",
          borderRadius: "5px"
        }
      }}
    >
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ColorProvider>
          <header>
            <Nav />
          </header>
          {children}
          <Footer />
        </ColorProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}