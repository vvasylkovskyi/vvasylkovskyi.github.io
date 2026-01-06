"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"about" | "experience">("about")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <img
              src="/foto.jpg"
              alt="Viktor Vasylkovskyi"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Viktor Vasylkovskyi
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">Software Engineer & Full-Stack Developer</p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-300">
            <a href="tel:+351931435462" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+351 931 435 462</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Lisbon, Portugal</span>
            </div>
          </div>

          {/* Institution & Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-600">
                IST
              </div>
              <span className="text-xs text-slate-400">Instituto Superior Técnico</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-600">
                Peacock
              </div>
              <span className="text-xs text-slate-400">PeacockTV</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-600">
                PD
              </div>
              <span className="text-xs text-slate-400">PagerDuty</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-semibold text-slate-300 border border-slate-600">
                Sky
              </div>
              <span className="text-xs text-slate-400">Sky UK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="flex gap-2 border-b border-slate-700">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "about" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            About & Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === "experience"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Work Experience
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {activeTab === "about" && (
          <div className="space-y-12 animate-fade-in">
            {/* About Me */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
              <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I am a passionate software engineer with expertise in full-stack development, specializing in building
                  scalable web applications and innovative solutions. With a strong foundation in computer science and
                  hands-on experience across various technologies, I thrive on solving complex problems and creating
                  impactful digital experiences.
                </p>
              </div>
            </section>

            {/* Academic Background */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Academic Background</h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-100">Master of Science in Computer Science</h3>
                    <span className="text-slate-400 text-sm">2020 - 2022</span>
                  </div>
                  <p className="text-blue-400 mb-2">Instituto Superior Técnico</p>
                  <p className="text-slate-300">
                    Focus on distributed systems, machine learning, and software engineering.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-100">Bachelor of Science in Computer Science</h3>
                    <span className="text-slate-400 text-sm">2016 - 2020</span>
                  </div>
                  <p className="text-blue-400 mb-2">Instituto Superior Técnico</p>
                  <p className="text-slate-300">
                    Strong foundation in algorithms, data structures, and software development.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Work Experience</h2>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Senior Software Engineer</h3>
                  <p className="text-blue-400">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Led development of scalable web applications using React and Node.js</li>
                <li>Architected microservices infrastructure serving millions of users</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">Software Engineer</h3>
                  <p className="text-blue-400">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm">2020 - 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Developed full-stack features for e-commerce platform</li>
                <li>Optimized database queries improving performance by 40%</li>
                <li>Implemented CI/CD pipelines using GitHub Actions</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Viktor Vasylkovskyi. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
