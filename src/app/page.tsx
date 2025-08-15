import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import DownloadSection from '@/components/DownloadSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import InteractiveDemoSection from '@/components/InteractiveDemoSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InteractiveDemoSection />
      <DownloadSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
