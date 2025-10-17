"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={cn(
              "text-xl font-serif transition-colors duration-300",
              isScrolled ? "text-black" : "text-white",
            )}
          >
            {"{{business_name}}"}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("culinary-mastery")}
              className={cn(
                "text-sm transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-black" : "text-white",
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("culinary-journey")}
              className={cn(
                "text-sm transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-black" : "text-white",
              )}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("private-events")}
              className={cn(
                "text-sm transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-black" : "text-white",
              )}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "text-sm transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-black" : "text-white",
              )}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "text-sm transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-black" : "text-white",
              )}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100",
            )}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  )
}
