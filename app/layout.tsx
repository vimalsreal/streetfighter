import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { SoundProvider } from "@/components/sound-context"
import { MuteButton } from "@/components/mute-button"

export const metadata: Metadata = {
  title: "Street Fighter",
  description: "A 90s-style fighting game",
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SoundProvider>
            <MuteButton />
            <main className="flex min-h-screen flex-col items-center justify-center">{children}</main>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
