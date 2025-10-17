"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { CulinaryMastery } from "@/components/culinary-mastery"
import { CulinaryJourney } from "@/components/culinary-journey"
import { FlavorsSymphony } from "@/components/flavors-symphony"
import { PrivateEvents } from "@/components/private-events"
import { NatureFrames } from "@/components/nature-frames"
import { Testimonials } from "@/components/testimonials"
import { ExperienceCascades } from "@/components/experience-cascades"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CookieBanner } from "@/components/cookie-banner"

export default function RestaurantTemplate() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowCookieBanner(true)
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    setShowCookieBanner(false)
  }

  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    localStorage.setItem("cookieConsentDate", new Date().toISOString())
    setShowCookieBanner(false)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CulinaryMastery />
        <CulinaryJourney />
        <FlavorsSymphony />
        <PrivateEvents />
        <NatureFrames />
        <Testimonials />
        <ExperienceCascades />
      </main>
      <Footer />
      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />}
    </>
  )
}
