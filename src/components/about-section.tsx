import { Github, Linkedin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <div className="space-y-8">
      {/* About Me Card */}
      <Card className="bg-card backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Senior Software Engineer with 9 years of professional experience including 2+ years of hands-on work in AI
            systems, specializing in LLM-based AI agents. Currently part of the AI team at PagerDuty, where I design and
            evaluate production-grade AI agents using state-of-the-art LLMs, lead MCP and agent-to-agent (A2A)
            integrations, and develop LLM evaluation pipelines (LLM-as-Judge for classification and reasoning tasks), as
            well as some of our core AI Agents.
          </p>
          <p className="text-card-foreground leading-relaxed">
            My academic background includes a Master's in Computer Science and Engineering in IST, and have published
            peer-reviewed research on privacy-preserving architectures for human-robot interaction using blockchain,
            demonstrating experience in research, system design, and experimental validation. I am seeking to deepen my
            research contributions in large language models, LLMs learning and training through PhD study.
          </p>
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <a
                href="https://www.linkedin.com/in/viktor-vasylkovskyi-708b1712b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <a href="https://github.com/vvasylkovskyi" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Academic Background Card */}
      <Card className="bg-card backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Academic Background</CardTitle>
          <CardDescription className="text-muted-foreground">
            Instituto Superior Tecnico (IST), Av. Rovisco Pais 1, 1049-001 Lisboa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Master of Computer Science and Engineering</h3>
            <p className="text-primary mb-3">Blockchain, Distributed Systems and Privacy in Human Robot Interactions</p>
            <p className="text-card-foreground leading-relaxed mb-4">
              The recent interactions between humans and robots appear to have problems regarding humans privacy. The
              project's aim is to improve privacy in interaction between robots and humans using Blockchain technology.
              In other words, project is developed with Privacy by Design in mind. Health Care environment - IPO -
              Portuguese Institute of Oncology Technologies.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-card-foreground">Published Papers:</p>
              <div className="space-y-2">
                <a
                  href="https://www.researchgate.net/publication/347779499_BlockRobot_Increasing_Privacy_in_Human_Robot_Interaction_by_Using_Blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>BlockRobot: Increasing Privacy in Human Robot Interaction by Using Blockchain</span>
                </a>
                <a
                  href="https://www.researchgate.net/publication/349152707_Designing_and_Validating_a_Blockchain-based_Architecture_to_Enforce_Privacy_in_Human_Robot_Interaction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Designing and Validating a Blockchain-based Architecture to Enforce Privacy in Human Robot
                    Interaction
                  </span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
