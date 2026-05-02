import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Navigation from '@/components/Navigation'
import Hero from '@/sections/Hero'
import Availability from '@/sections/Availability'
import Facility from '@/sections/Facility'
import WhyUs from '@/sections/WhyUs'
import Courts from '@/sections/Courts'
import HoursPricing from '@/sections/HoursPricing'
import CTABanner from '@/sections/CTABanner'
import VisitUs from '@/sections/VisitUs'
import Footer from '@/sections/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const raw = location.hash.replace(/^#/, '')
    if (!raw) return
    window.setTimeout(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-primary font-body text-text-primary scrollbar-custom">
      <Navigation />
      <main>
        <Hero />
        <Availability />
        <Facility />
        <WhyUs />
        <Courts />
        <HoursPricing />
        <CTABanner />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}
