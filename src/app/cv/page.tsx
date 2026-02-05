import Image from 'next/image';
import { Phone, MapPin, Linkedin, Github, Mail, ExternalLink, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata = {
  title: 'CV - Viktor Vasylkovskyi',
  description: 'Curriculum Vitae of Viktor Vasylkovskyi - Software Engineer',
};

export default function CVPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header with theme toggle */}
      <div className='fixed top-4 right-4 z-50 print:hidden'>
        <ThemeToggle />
      </div>

      <div className='max-w-4xl mx-auto px-6 py-8 print:px-4 print:py-4'>
        {/* Section 1: Photo left, Contacts right */}
        <header className='flex flex-col sm:flex-row gap-6 pb-6 border-b border-border'>
          <div className='shrink-0'>
            <Image
              src='/professional-headshot.png'
              alt='Viktor Vasylkovskyi'
              width={120}
              height={120}
              className='w-28 h-28 rounded-lg object-cover border-2 border-primary/30'
            />
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl font-bold text-foreground mb-1'>Viktor Vasylkovskyi</h1>
            <p className='text-lg text-primary font-medium mb-3'>
              Software Engineer | Full-Stack & AI Systems
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground'>
              <a
                href='tel:+351931435462'
                className='flex items-center gap-2 hover:text-primary transition-colors'
              >
                <Phone className='w-3.5 h-3.5' />
                <span>+351 931 435 462</span>
              </a>
              <a
                href='mailto:viktor.vasylkovskyi@gmail.com'
                className='flex items-center gap-2 hover:text-primary transition-colors'
              >
                <Mail className='w-3.5 h-3.5' />
                <span>viktor.vasylkovskyi@gmail.com</span>
              </a>
              <div className='flex items-center gap-2'>
                <MapPin className='w-3.5 h-3.5' />
                <span>Lisbon, Portugal</span>
              </div>
              <a
                href='https://www.linkedin.com/in/viktor-vasylkovskyi-708b1712b/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-primary transition-colors'
              >
                <Linkedin className='w-3.5 h-3.5' />
                <span>linkedin.com/in/viktor-vasylkovskyi</span>
              </a>
              <a
                href='https://github.com/vvasylkovskyi'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-primary transition-colors'
              >
                <Github className='w-3.5 h-3.5' />
                <span>github.com/vvasylkovskyi</span>
              </a>
            </div>
          </div>
        </header>

        {/* Section 2: About */}
        <section className='py-5 border-b border-border'>
          <h2 className='text-lg font-bold text-primary mb-3 uppercase tracking-wide'>About</h2>
          <p className='text-sm text-foreground leading-relaxed'>
            Software Engineer with 10+ years of commercial experience in frontend engineering 
            and 3+ years of hands-on full-stack experience in AI systems. Proven track record of leading 
            large-scale distributed systems design, mentoring engineering teams, and driving cross-functional initiatives. 
            Deep expertise in TypeScript, React, Next.js, Node.js, and modern build tools (Webpack, Vite). 
            Strong background in cloud-native architectures (AWS, Kubernetes, Docker) and infrastructure-as-code. 
            Active open-source contributor with published peer-reviewed research. Passionate about code quality, 
            security-first development, and building high-performing engineering cultures.
          </p>
        </section>

        {/* Section 3: Professional Experience */}
        <section className='py-5 border-b border-border'>
          <h2 className='text-lg font-bold text-primary mb-4 uppercase tracking-wide'>
            Professional Experience
          </h2>
          <div className='space-y-5'>
            {/* PagerDuty */}
            <div>
              <div className='flex justify-between items-start gap-2 mb-1'>
                <div>
                  <h3 className='font-semibold text-foreground'>
                    Senior Software Engineer — AI First Team
                  </h3>
                  <p className='text-sm text-primary'>PagerDuty</p>
                </div>
                <span className='text-xs text-muted-foreground whitespace-nowrap'>
                  May 2025 — Present
                </span>
              </div>
              <ul className='text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside'>
                <li>
                  Lead and design distributed architecture for Agent-to-Agent (A2A) and Web-AI chat experiences using SSE, Webhooks, and Kafka async messaging
                </li>
                <li>
                  Drive consensus across AI domain teams to align all AI systems on common distributed architecture
                </li>
                <li>
                  Design LLM evaluation pipelines (LLM-as-Judge) for classification tasks
                </li>
                <li>
                  Tech: LangGraph, FastAPI, FastMCP, Google A2A, Python, TypeScript, Kafka, AWS
                </li>
              </ul>
            </div>

            {/* Rely.io */}
            <div>
              <div className='flex justify-between items-start gap-2 mb-1'>
                <div>
                  <h3 className='font-semibold text-foreground'>Senior Product Engineer — Frontend</h3>
                  <p className='text-sm text-primary'>Rely.io</p>
                </div>
                <span className='text-xs text-muted-foreground whitespace-nowrap'>
                  May 2023 — May 2025
                </span>
              </div>
              <ul className='text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside'>
                <li>
                  Led frontend team of 4 engineers, establishing design system consistency and code quality standards
                </li>
                <li>
                  Led RBAC design and implementation, collaborating closely with third-party vendors for software integrations
                </li>
                <li>
                  Regularly engaged with customers to understand pain points and inform product direction
                </li>
                <li>
                  Owned all frontend apps (frontend, BFF); collaborated on building backend apps with backend product engineers
                </li>
              </ul>
            </div>

            {/* Sky Senior */}
            <div>
              <div className='flex justify-between items-start gap-2 mb-1'>
                <div>
                  <h3 className='font-semibold text-foreground'>Senior Software Engineer — PeacockTV, SkyShowtime, Showmax</h3>
                  <p className='text-sm text-primary'>Sky</p>
                </div>
                <span className='text-xs text-muted-foreground whitespace-nowrap'>
                  Sep 2021 — May 2023
                </span>
              </div>
              <ul className='text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside'>
                <li>
                  Led multi-device onboarding for video platform across set-top boxes, Xbox, PlayStation, smart TVs, and web
                </li>
                <li>
                  Deep expertise in headless TypeScript video technology — in-house video player library and Google Shaka Player
                </li>
                <li>
                  Drove device integration initiatives, collaborating with cross-department engineering teams
                </li>
                <li>
                  Owned technical workshops to onboard client teams on video player technology and best practices
                </li>
              </ul>
            </div>

            {/* Sky Frontend */}
            <div>
              <div className='flex justify-between items-start gap-2 mb-1'>
                <div>
                  <h3 className='font-semibold text-foreground'>Frontend Developer</h3>
                  <p className='text-sm text-primary'>Sky</p>
                </div>
                <span className='text-xs text-muted-foreground whitespace-nowrap'>
                  Feb 2020 — Sep 2021
                </span>
              </div>
              <ul className='text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside'>
                <li>
                  Built core web app features including hero image and video player integration for video playback page (web and mobile)
                </li>
                <li>
                  Tech: React, TypeScript, Node.js, HMAC, Web Vitals, performance optimization
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Academic Background & Open Source */}
        <section className='py-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Academic Background */}
            <div>
              <h2 className='text-lg font-bold text-primary mb-4 uppercase tracking-wide'>
                Education
              </h2>
              <div className='mb-4'>
                <h3 className='font-semibold text-foreground'>MSc Computer Science & Engineering</h3>
                <p className='text-sm text-primary'>Instituto Superior Técnico (IST)</p>
                <p className='text-xs text-muted-foreground mb-2'>Lisbon, Portugal</p>
                <p className='text-xs text-muted-foreground'>
                  Focus: Blockchain, Distributed Systems, Network Security, Privacy in HRI
                </p>
              </div>

              <h3 className='text-sm font-semibold text-foreground mb-2'>Publications</h3>
              <div className='space-y-2'>
                <a
                  href='https://www.researchgate.net/publication/347779499_BlockRobot_Increasing_Privacy_in_Human_Robot_Interaction_by_Using_Blockchain'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-start gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors'
                >
                  <ExternalLink className='w-3 h-3 mt-0.5 flex-shrink-0' />
                  <span>BlockRobot: Increasing Privacy in Human Robot Interaction</span>
                </a>
                <a
                  href='https://www.researchgate.net/publication/349152707_Designing_and_Validating_a_Blockchain-based_Architecture_to_Enforce_Privacy_in_Human_Robot_Interaction'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-start gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors'
                >
                  <ExternalLink className='w-3 h-3 mt-0.5 flex-shrink-0' />
                  <span>Blockchain-based Architecture for Privacy in Human Robot Interaction</span>
                </a>
              </div>

              <div className='flex gap-2 mt-3'>
                <a
                  href='/documents/thesis.pdf'
                  download
                  className='inline-flex items-center gap-1 text-xs text-primary hover:underline'
                >
                  <FileText className='w-3 h-3' />
                  Thesis
                </a>
                <a
                  href='/documents/thesis-abstract.pdf'
                  download
                  className='inline-flex items-center gap-1 text-xs text-primary hover:underline'
                >
                  <FileText className='w-3 h-3' />
                  Abstract
                </a>
              </div>
            </div>

            {/* Open Source Projects */}
            <div>
              <h2 className='text-lg font-bold text-primary mb-4 uppercase tracking-wide'>
                Open Source
              </h2>
              <div className='space-y-4'>
                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <h3 className='font-semibold text-foreground text-sm'>BarkGPT</h3>
                    <a
                      href='https://www.bark-slm.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                    <a
                      href='https://github.com/vvasylkovskyi/barkgpt'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary'
                    >
                      <Github className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    Educational GPT-style language model built from scratch to explore transformer
                    internals, training loops, and inference mechanics.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-2 mb-1'>
                    <h3 className='font-semibold text-foreground text-sm'>IaC Toolbox</h3>
                    <a
                      href='https://www.iac-toolbox.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                    <a
                      href='https://github.com/Iac-Toolbox/iac-toolbox-project'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary'
                    >
                      <Github className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    Open-source tutorials for deploying modern applications securely on AWS using
                    Terraform and infrastructure-as-code best practices.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <h2 className='text-lg font-bold text-primary mt-6 mb-3 uppercase tracking-wide'>
                Skills
              </h2>
              <div className='text-xs text-muted-foreground space-y-1'>
                <p>
                  <span className='font-medium text-foreground'>Languages:</span> TypeScript, Python, JavaScript, Elixir
                </p>
                <p>
                  <span className='font-medium text-foreground'>Frontend:</span> React, Next.js, shadcn/ui, Webpack, Vite, Node.js
                </p>
                <p>
                  <span className='font-medium text-foreground'>AI/ML:</span> LangGraph, LLM Evaluation, AI Agents, MCP, A2A, Kafka
                </p>
                <p>
                  <span className='font-medium text-foreground'>Infrastructure:</span> AWS, Kubernetes, Docker, Terraform, CI/CD
                </p>
                <p>
                  <span className='font-medium text-foreground'>Leadership:</span> Team mentorship, Technical design, Cross-functional collaboration
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
