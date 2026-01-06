import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      {/* PagerDuty Experience */}
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Senior Product Engineer</CardTitle>
              <CardDescription className="text-primary">Rely.io - Remote</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              May 2023 — Present
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Rely.io Engineering intelligence IDP with AI-powered insights. as a Senior Product Engineer – A hands-on
            full-stack generalist who delivers results. Led the frontend team, built and owned a BFF service in
            Express/Node.js from scratch, contributed to core backend services, and designed and deployed AI-driven
            experiences—driving full-stack solutions from product conception to scalable deployment.
          </p>
          <ul className="list-disc list-inside space-y-2 text-card-foreground ml-2">
            <li>Led the frontend team, driving the development of scalable and high-performance web applications</li>
            <li>
              Acted as a full-stack engineer, contributing across the tech stack from backend APIs to frontend UI/UX
            </li>
            <li>
              Owned product conception from lo-fi wireframes to hi-fi designs, ensuring a seamless user experience
            </li>
            <li>
              Proposed and led the implementation and deployment of AI-powered services, integrating them into the
              product
            </li>
            <li>Established and maintained CI/CD pipelines, improving deployment efficiency and system reliability</li>
            <li>
              As an AI Engineer, designed, built, and deployed AI-driven user experiences, enhancing product
              capabilities
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Sky Senior Engineer */}
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Senior Software Engineer</CardTitle>
              <CardDescription className="text-primary">Sky - Lisbon</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              September 2021 — May 2023
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            As a Senior Software Engineer specializing in video player technology and embedded systems for platforms
            like set-top boxes and game consoles, I lead architectural initiatives and design robust solutions in
            JavaScript/TypeScript.
          </p>
          <ul className="list-disc list-inside space-y-2 text-card-foreground ml-2">
            <li>
              Specialization in Video Player Technology and Embedded Systems and WebGL client apps: Proficient in the
              development and optimization of software for a diverse range of platforms including set-top boxes and game
              consoles, ensuring high performance and user-centric functionality
            </li>
            <li>
              Architectural Leadership: Act as the primary driver of architectural initiatives across multiple teams,
              leading the charge in identifying, planning, and implementing effective solutions that align with both
              technical and business objectives
            </li>
            <li>
              Expertise in JavaScript/TypeScript Projects: Skilled in designing and building robust solutions using
              JavaScript and TypeScript, with a focus on scalability, maintainability, and cross-platform compatibility
            </li>
            <li>
              Problem-Solving and Innovation: Continuously engage in problem-solving, contributing to the advancement of
              technology within the company. Instrumental in introducing innovative approaches and techniques to improve
              product quality and team efficiency
            </li>
            <li>
              Collaboration and Mentorship: Collaborate with cross-functional teams to achieve project goals, and mentor
              junior engineers, fostering a culture of technical excellence and continuous learning
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* PeacockTV Frontend Developer */}
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Frontend Developer</CardTitle>
              <CardDescription className="text-primary">Sky - Lisbon</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              February 2020 — September 2021
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            PeacockTV - Amazing streaming platform available in the USA and Skyshowtime in Europe where the users can
            watch movies, tv shows, and live sports events or news.
          </p>
          <ul className="list-disc list-inside space-y-2 text-card-foreground ml-2">
            <li>
              Collaborating with stakeholders: during development processes to confirm creative proposals and design
              best practices, beginning of conception of feature up to public showcasing of working feature
            </li>
            <li>
              Improving performance: improved performance of app by up to 30% while measuring app performance with New
              Relic and Google Lighthouse core web vitals and Identifying key points in code where performance can be
              optimized (Optimize Bundle Size, Parallelize network requests, dynamic importing, lazy load of components,
              and many more)
            </li>
            <li>
              Leading security projects: HMAC signature on client and Whitebox cryptography to obfuscate code from
              attackers. Whitebox cryptography is achieved using Emscripten and Arxan technologies
            </li>
            <li>
              Development of most critical features in ReactJS, Javascript, Typescript, NodeJS and CSS (SCSS) and
              Accessibility in mind and best SEO practices
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Roff Software Engineer */}
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Software Engineer</CardTitle>
              <CardDescription className="text-primary">Roff - Lisbon</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              July 2018 — February 2020
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            Work as a Full-Stack web developer for different projects using React and Redux as a Front-end framework and
            Python with Django as the Rest API. Maintained current React application and developed new features and made
            sure that everything stays clean and maintainable using the testing framework Jest.
          </p>
          <ul className="list-disc list-inside space-y-2 text-card-foreground ml-2">
            <li>
              Maintained current ReactJS/Redux application and developed new features, maintained clean and maintainable
              code base using Jest/Enzyme testing frameworks
            </li>
            <li>Developed Rest API using Python and Django with Rest Framework, using API Views and Serializers</li>
            <li>
              Worked with multiple well-known technologies such as Kubernetes, Docker, PostgreSQL, Redis, RabbitMQ,
              Google Cloud services, Azure
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* WIT Software */}
      <Card className="bg-card backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl">Software Engineer</CardTitle>
              <CardDescription className="text-primary">WIT-Software - Leiria</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              July 2016 — July 2018
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-card-foreground leading-relaxed">
            WebRTC Communications Platform that allows users to make real-time video and audio calls.
          </p>
          <ul className="list-disc list-inside space-y-2 text-card-foreground ml-2">
            <li>
              Building applications with ReactJS to deliver user interface components, complete front-end applications,
              or high-level design patterns for others to follow
            </li>
            <li>Working with WebRTC Protocol (PeerConnection, MediaStream, DataChannels, etc.)</li>
            <li>
              Development of SIP User Agent Protocol (UAC/UAS) with Javascript language in order to provide the network
              signaling that SIP protocol provides during WebRTC signaling call setup
            </li>
            <li>Implemented E2E testing in applications using Protractor as testing framework</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
