'use client';
import { Header } from '@/components/header';
// import { Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { PortfolioContent } from '@/components/portfolio-content';

export default function Portfolio() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <PortfolioContent />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
