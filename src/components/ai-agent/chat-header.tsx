'use client';

import Link from 'next/link';
import { Bot, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface ChatHeaderProps {
  onClear: () => void;
  hasMessages: boolean;
}

export function ChatHeader({ onClear, hasMessages }: ChatHeaderProps) {
  return (
    <header className='border-b border-border bg-background/95 backdrop-blur h-16 px-4 shrink-0 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Link href='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-border'>
            <Bot className='w-4 h-4 text-primary' />
          </div>
        </Link>
        <div className='flex flex-col'>
          <h1 className='text-base font-semibold text-foreground leading-tight'>
            Viktor&apos;s AI Assistant
          </h1>
          <p className='text-xs text-muted-foreground leading-tight'>Ask me anything about Viktor</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        {hasMessages && (
          <Button
            variant='ghost'
            size='sm'
            onClick={onClear}
            className='h-8 text-muted-foreground hover:text-foreground'
          >
            <Trash2 className='h-4 w-4 mr-1' />
            Clear
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
