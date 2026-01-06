import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioHeader } from "./portfolio-header"
import { AboutSection } from "./about-section"
import { ExperienceSection } from "./experience-section"

export const PortfolioContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10">
        <PortfolioHeader />

        <div className="max-w-4xl mx-auto px-6 pb-20">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-card backdrop-blur-sm border border-border">
              <TabsTrigger value="about" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                About & Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Professional Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <AboutSection />
            </TabsContent>

            <TabsContent value="experience">
              <ExperienceSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
