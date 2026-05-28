'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';
import { PortfolioHeader } from './portfolio-header';

function PortfolioSections() {
  const searchParams = useSearchParams();
  const activeSection = searchParams.get('section') ?? 'about';

  return (
    <>
      <div className='md:hidden flex gap-2 mb-8'>
        <Link
          href='/?section=about'
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-center ${
            activeSection === 'about'
              ? 'bg-primary/20 text-primary border border-primary'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          About & Education
        </Link>
        <Link
          href='/?section=experience'
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-center ${
            activeSection === 'experience'
              ? 'bg-primary/20 text-primary border border-primary'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          Professional Experience
        </Link>
      </div>

      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'experience' && <ExperienceSection />}
    </>
  );
}

export const PortfolioContent = () => {
  return (
    <div className='min-h-screen bg-background text-foreground relative overflow-hidden'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

      <div className='relative z-10'>
        <PortfolioHeader />

        <div className='max-w-4xl mx-auto px-6 pb-20'>
          {/* Viktor's AI Assistant Teaser Card */}
          <Card className='bg-card mb-4 backdrop-blur-sm border-border hover:border-primary/50 transition-colors'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Bot className='w-5 h-5 text-primary' />
                Viktor&apos;s AI Assistant
              </CardTitle>
              <CardDescription>
                Have a conversation with an AI that knows Viktor&apos;s background, projects, and
                experience. Ask it anything a recruiter might want to know.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant='default' size='sm' className='h-9'>
                <Link href='/ai-agent'>
                  <MessageCircle className='w-4 h-4 mr-2' />
                  Start a Conversation
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Suspense>
            <PortfolioSections />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
