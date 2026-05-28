'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PortfolioHeader } from './portfolio-header';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';

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
          <Suspense>
            <PortfolioSections />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
