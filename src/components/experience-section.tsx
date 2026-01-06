import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Senior Software Engineer — AI First Team</CardTitle>
              <CardDescription className="text-primary">PagerDuty</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              May 2025 — Present
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Core contributor to LLM-based AI agent systems, leading MCP and agent-to-agent (A2A) integrations and
            designing LLM evaluation pipelines (LLM-as-Judge) to measure and improve classification accuracy, reasoning
            quality, and agent behavior in production.
          </p>
          <p className="text-card-foreground leading-relaxed">
            Participated in fine-tuning proof-of-concepts aimed at improving agent response quality and optimal tool
            selection, with hands-on work across the full stack (infrastructure to business logic) using LangGraph,
            FastAPI, FastMCP, Google A2A, and Claude/ChatGPT models.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Senior Product Engineer</CardTitle>
              <CardDescription className="text-primary">Rely.io</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              May 2023 — May 2025
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Full-stack engineer on an AI-powered engineering intelligence platform, leading frontend development and
            owning a BFF service (Node.js/Express) from design to production.
          </p>
          <p className="text-card-foreground leading-relaxed">
            Designed and deployed AI-driven product features, contributing across backend, frontend, and CI/CD in a
            fast-paced startup environment.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Senior Software Engineer</CardTitle>
              <CardDescription className="text-primary">Sky</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Sep 2021 — May 2023
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Led architecture and development of JavaScript/TypeScript systems for video player and embedded platforms
            (set-top boxes, game consoles).
          </p>
          <p className="text-card-foreground leading-relaxed">
            Drove cross-team technical initiatives, focusing on scalability, performance, and system reliability, while
            mentoring engineers.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Frontend Developer</CardTitle>
              <CardDescription className="text-primary">Sky</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Feb 2020 — Sep 2021
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Core contributor to large-scale streaming platforms (PeacockTV, SkyShowtime), developing critical features
            in React, TypeScript, and Node.js.
          </p>
          <p className="text-card-foreground leading-relaxed">
            Improved application performance by ~30% and led client-side security initiatives (HMAC, white-box
            cryptography), with strong focus on performance, accessibility, and SEO.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
