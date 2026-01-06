import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const IST_URL = "https://tecnico.ulisboa.pt/"
const PEACOCK_URL = "https://www.peacocktv.com/"
const PAGERDUTY_URL = "https://www.pagerduty.com/"

export function PortfolioHeader() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <Image
            src="/professional-headshot.png"
            alt="Viktor Vasylkovskyi"
            width={192}
            height={192}
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl shadow-primary/20"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Viktor Vasylkovskyi
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Senior Software Engineer | AI Agents & LLM Systems
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
          <a href="tel:+351931435462" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+351 931 435 462</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Lisbon, Portugal</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {/* IST Logo */}
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-lg hover:scale-110 transition-transform bg-transparent"
            aria-label="Instituto Superior Técnico"
          >
            <a href={IST_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/ist-logo.jpg" alt="IST Logo" width={48} height={48} className="rounded" />
            </a>
          </Button>

          {/* PeacockTV Logo with black background */}
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-lg bg-[#000000] hover:bg-[#1a1a1a] border-[#000000] hover:scale-110 transition-transform"
            aria-label="Peacock TV"
          >
            <a href={PEACOCK_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/peacocktv-logo.svg" alt="PeacockTV Logo" width={48} height={48} />
            </a>
          </Button>

          {/* PagerDuty Logo with green background */}
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-16 w-16 rounded-lg bg-[#06AC38] hover:bg-[#059230] border-[#06AC38] hover:scale-110 transition-transform"
            aria-label="PagerDuty"
          >
            <a href={PAGERDUTY_URL} target="_blank" rel="noopener noreferrer">
              <Image src="/pagerduty-icon.svg" alt="PagerDuty Logo" width={48} height={48} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
