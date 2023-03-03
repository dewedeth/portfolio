"use client"
import "../styles/globals.css";

import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading)
    return
  },[isLoading])

  return (
    <html lang="en">
      <head />
      <body className="bg-fill bg-[url('/background.png')] bg-fixed bg-no-repeat">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {children}
          </>
        )}
      </body>
    </html>
  )
}
