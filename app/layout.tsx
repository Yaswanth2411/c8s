import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Collabr8",
  description: "Bridging Brands and Influencers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="vKQd2RzgI_V8snlOKTNokpGfRdzxxS8A0BQgivtcECE" />
        <GoogleAnalytics measurementId="G-60RQVQLSHE" />
      </head>
      <body className={`${inter.className} min-w-full`}>
        <div className="w-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  )
}

