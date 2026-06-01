'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';

const LINKEDIN_URL = 'https://www.linkedin.com/in/viktor-vasylkovskyi-708b1712b/';
const GITHUB_URL = 'https://github.com/vvasylkovskyi';

const BRAND_NAME = 'Viktor Vasylkovskyi';

function NavLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSection = searchParams.get('section') ?? 'about';
  const isHome = pathname === '/';

  return (
    <>
      <Button
        asChild
        variant={isHome && activeSection === 'about' ? 'secondary' : 'ghost'}
        size='sm'
        className='h-9'
      >
        <Link href='/?section=about'>About & Education</Link>
      </Button>
      <Button
        asChild
        variant={isHome && activeSection === 'experience' ? 'secondary' : 'ghost'}
        size='sm'
        className='h-9'
      >
        <Link href='/?section=experience'>Professional Experience</Link>
      </Button>
      <Button
        asChild
        variant={pathname.startsWith('/blog') ? 'secondary' : 'ghost'}
        size='sm'
        className='h-9'
      >
        <Link href='/blog'>Blog</Link>
      </Button>
      <Button
        asChild
        variant={pathname.startsWith('/ai-agent') ? 'secondary' : 'ghost'}
        size='sm'
        className='h-9'
      >
        <Link href='/ai-agent'>AI Agent</Link>
      </Button>
    </>
  );
}

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <span className='font-bold text-lg'>{BRAND_NAME}</span>
        </Link>

        <nav className='hidden md:flex items-center gap-1'>
          <Suspense>
            <NavLinks />
          </Suspense>
        </nav>

        <div className='flex items-center gap-3'>
          {/* Social Links */}
          <div className='flex items-center gap-2'>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='h-9 w-9'
              aria-label='LinkedIn Profile'
            >
              <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
                <Linkedin className='h-4 w-4' />
              </a>
            </Button>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='h-9 w-9'
              aria-label='GitHub Profile'
            >
              <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
                <Github className='h-4 w-4' />
              </a>
            </Button>
          </div>

          {/* Separator */}
          <div className='h-6 w-px bg-border' />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
