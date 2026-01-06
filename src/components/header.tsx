'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState } from 'react';

// URLs
const GITHUB_URL = 'https://github.com/Ship-Infra/ship-infra-project';

// Text content
const BRAND_NAME = 'Viktor Vasylkovskyi';
const STAR_BUTTON_TEXT = 'Star on GitHub';

export function Header() {

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <span className='font-bold text-lg'>{BRAND_NAME}</span>
        </Link>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Button asChild className='hidden sm:flex gap-2 min-h-[44px]'>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Star className='h-4 w-4' />
              {STAR_BUTTON_TEXT}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
