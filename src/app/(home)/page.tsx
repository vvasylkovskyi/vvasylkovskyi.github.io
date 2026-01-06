"use client"
import { Footer } from "@/components/footer"
import { PortfolioContent } from "@/components/portfolio-content"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </div>
  )
}
