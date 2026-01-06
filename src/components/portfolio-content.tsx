
import { Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const PortfolioContent = ({}) => {
    return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10">
        {/* Hero Section - Centered layout from v4 */}
        <section className="flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full text-center">
            <div className="mb-8">
              <img
                src="/foto.jpg"
                alt="Viktor Vasylkovskyi"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Viktor Vasylkovskyi
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Senior Software Engineer | AI Agents & LLM Systems
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-300">
              <a href="tel:+351931435462" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+351 931 435 462</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lisbon, Portugal</span>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-700">
                  IST
                </div>
                <span className="text-xs text-slate-400">Instituto Superior Técnico</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-700">
                  Peacock
                </div>
                <span className="text-xs text-slate-400">PeacockTV</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-700">
                  PD
                </div>
                <span className="text-xs text-slate-400">PagerDuty</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-700">
                  Sky
                </div>
                <span className="text-xs text-slate-400">Sky UK</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                About & Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
              >
                Professional Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              {/* About Me - v3 content */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Senior Software Engineer with 9 years of professional experience including 2+ years of hands-on work
                    in AI systems, specializing in LLM-based AI agents. Currently part of the AI team at PagerDuty,
                    where I design and evaluate production-grade AI agents using state-of-the-art LLMs, lead MCP and
                    agent-to-agent (A2A) integrations, and develop LLM evaluation pipelines (LLM-as-Judge for
                    classification and reasoning tasks), as well as some of our core AI Agents.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    My academic background includes a Master's in Computer Science and Engineering in IST, and have
                    published peer-reviewed research on privacy-preserving architectures for human-robot interaction
                    using blockchain, demonstrating experience in research, system design, and experimental validation.
                    I am seeking to deepen my research contributions in large language models, LLMs learning and
                    training through PhD study.
                  </p>
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 bg-transparent"
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
                      className="border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 bg-transparent"
                    >
                      <a href="https://github.com/vvasylkovskyi" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Background - v3 content */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">Academic Background</CardTitle>
                  <CardDescription className="text-slate-400">
                    Instituto Superior Tecnico (IST), Av. Rovisco Pais 1, 1049-001 Lisboa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">
                      Master of Computer Science and Engineering
                    </h3>
                    <p className="text-cyan-400 mb-3">
                      Blockchain, Distributed Systems and Privacy in Human Robot Interactions
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      The recent interactions between humans and robots appear to have problems regarding humans
                      privacy. The project's aim is to improve privacy in interaction between robots and humans using
                      Blockchain technology. In other words, project is developed with Privacy by Design in mind. Health
                      Care environment - IPO - Portuguese Institute of Oncology Technologies.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-300">Published Papers:</p>
                      <div className="space-y-2">
                        <a
                          href="https://www.researchgate.net/publication/347779499_BlockRobot_Increasing_Privacy_in_Human_Robot_Interaction_by_Using_Blockchain"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>BlockRobot: Increasing Privacy in Human Robot Interaction by Using Blockchain</span>
                        </a>
                        <a
                          href="https://www.researchgate.net/publication/349152707_Designing_and_Validating_a_Blockchain-based_Architecture_to_Enforce_Privacy_in_Human_Robot_Interaction"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
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
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">Senior Product Engineer</CardTitle>
                      <CardDescription className="text-cyan-400">Rely.io - Remote</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      May 2023 — Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Rely.io Engineering intelligence IDP with AI-powered insights. as a Senior Product Engineer – A
                    hands-on full-stack generalist who delivers results. Led the frontend team, built and owned a BFF
                    service in Express/Node.js from scratch, contributed to core backend services, and designed and
                    deployed AI-driven experiences—driving full-stack solutions from product conception to scalable
                    deployment.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                    <li>
                      Led the frontend team, driving the development of scalable and high-performance web applications
                    </li>
                    <li>
                      Acted as a full-stack engineer, contributing across the tech stack from backend APIs to frontend
                      UI/UX
                    </li>
                    <li>
                      Owned product conception from lo-fi wireframes to hi-fi designs, ensuring a seamless user
                      experience
                    </li>
                    <li>
                      Proposed and led the implementation and deployment of AI-powered services, integrating them into
                      the product
                    </li>
                    <li>
                      Established and maintained CI/CD pipelines, improving deployment efficiency and system reliability
                    </li>
                    <li>
                      As an AI Engineer, designed, built, and deployed AI-driven user experiences, enhancing product
                      capabilities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">Senior Software Engineer</CardTitle>
                      <CardDescription className="text-cyan-400">Sky - Lisbon</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      September 2021 — May 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    As a Senior Software Engineer specializing in video player technology and embedded systems for
                    platforms like set-top boxes and game consoles, I lead architectural initiatives and design robust
                    solutions in JavaScript/TypeScript.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                    <li>
                      Specialization in Video Player Technology and Embedded Systems and WebGL client apps: Proficient
                      in the development and optimization of software for a diverse range of platforms including set-top
                      boxes and game consoles, ensuring high performance and user-centric functionality
                    </li>
                    <li>
                      Architectural Leadership: Act as the primary driver of architectural initiatives across multiple
                      teams, leading the charge in identifying, planning, and implementing effective solutions that
                      align with both technical and business objectives
                    </li>
                    <li>
                      Expertise in JavaScript/TypeScript Projects: Skilled in designing and building robust solutions
                      using JavaScript and TypeScript, with a focus on scalability, maintainability, and cross-platform
                      compatibility
                    </li>
                    <li>
                      Problem-Solving and Innovation: Continuously engage in problem-solving, contributing to the
                      advancement of technology within the company. Instrumental in introducing innovative approaches
                      and techniques to improve product quality and team efficiency
                    </li>
                    <li>
                      Collaboration and Mentorship: Collaborate with cross-functional teams to achieve project goals,
                      and mentor junior engineers, fostering a culture of technical excellence and continuous learning
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">Frontend Developer</CardTitle>
                      <CardDescription className="text-cyan-400">Sky - Lisbon</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      February 2020 — September 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    PeacockTV - Amazing streaming platform available in the USA and Skyshowtime in Europe where the
                    users can watch movies, tv shows, and live sports events or news.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                    <li>
                      Collaborating with stakeholders: during development processes to confirm creative proposals and
                      design best practices, beginning of conception of feature up to public showcasing of working
                      feature
                    </li>
                    <li>
                      Improving performance: improved performance of app by up to 30% while measuring app performance
                      with New Relic and Google Lighthouse core web vitals and Identifying key points in code where
                      performance can be optimized (Optimize Bundle Size, Parallelize network requests, dynamic
                      importing, lazy load of components, and many more)
                    </li>
                    <li>
                      Leading security projects: HMAC signature on client and Whitebox cryptography to obfuscate code
                      from attackers. Whitebox cryptography is achieved using Emscripten and Arxan technologies
                    </li>
                    <li>
                      Development of most critical features in ReactJS, Javascript, Typescript, NodeJS and CSS (SCSS)
                      and Accessibility in mind and best SEO practices
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">Frontend Developer</CardTitle>
                      <CardDescription className="text-cyan-400">Indra - Lisbon</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      January 2018 — February 2020
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    The project aims to optimize and harmonize workflow of the information between all the ports of
                    Portugal which involves maritime, railway and highway transports management and control.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
                    <li>Responsible for development of most of web pages that project required</li>
                    <li>
                      Further due to increased complexity of project, managed to distribute frontend monolith into micro
                      frontends intercommunicating
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}