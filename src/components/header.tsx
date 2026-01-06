'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const LINKEDIN_URL = 'https://www.linkedin.com/in/viktor-vasylkovskyi-708b1712b/';
const GITHUB_URL = 'https://github.com/vvasylkovskyi';

const BRAND_NAME = 'Viktor Vasylkovskyi';

interface HeaderProps {
  activeSection?: 'about' | 'experience';
  onSectionChange?: (section: 'about' | 'experience') => void;
}

export function Header({ activeSection = 'about', onSectionChange }: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <span className='font-bold text-lg'>{BRAND_NAME}</span>
        </Link>

        <nav className='hidden md:flex items-center gap-1'>
          <Button
            variant={activeSection === 'about' ? 'secondary' : 'ghost'}
            size='sm'
            onClick={() => onSectionChange?.('about')}
            className='h-9'
          >
            About & Education
          </Button>
          <Button
            variant={activeSection === 'experience' ? 'secondary' : 'ghost'}
            size='sm'
            onClick={() => onSectionChange?.('experience')}
            className='h-9'
          >
            Professional Experience
          </Button>
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
