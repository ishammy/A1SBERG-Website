
"use client"

import { useState, useEffect } from "react"

/**
 * This is the use Mobile Hook.
 * Returns true if the screen width is less than the given breakpoint (default 768px)
 */

export function useIsMobile(breakpoint = 850) {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    handleResize() 
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}
