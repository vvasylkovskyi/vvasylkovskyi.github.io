'use client';

import { Bot, BrainCircuit, Layers, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onSuggestionClick: (text: string) => void;
}

const suggestions = [
  {
    title: "What is Viktor's technical background?",
    icon: BrainCircuit,
  },
  {
    title: "Tell me about Viktor's experience with AI and LLMs",
    icon: Bot,
  },
  {
    title: 'What projects has Viktor built?',
    icon: Layers,
  },
  {
    title: 'What makes Viktor a strong engineering candidate?',
    icon: UserCheck,
  },
];

export function EmptyState({ onSuggestionClick }: EmptyStateProps) {
  return (
    <div className='flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-0 overflow-hidden'>
      <div className='max-w-lg w-full text-center space-y-6'>
        <div className='space-y-3'>
          <div className='w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-3 border border-border'>
            <Bot className='w-8 h-8 text-primary' />
          </div>
          <h1 className='text-2xl font-semibold text-foreground'>Viktor&apos;s AI Assistant</h1>
          <p className='text-muted-foreground text-sm'>
            Ask me anything about Viktor&apos;s background, experience, and projects.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-1.5 sm:gap-2 items-stretch'>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.title}
              variant='outline'
              className='h-full p-2 sm:p-3 flex flex-col items-start gap-0.5 sm:gap-1 hover:bg-secondary transition-all bg-background'
              onClick={() => onSuggestionClick(suggestion.title)}
            >
              <suggestion.icon className='h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-foreground' />
              <p className='font-medium text-xs sm:text-sm text-foreground text-left whitespace-normal break-words w-full'>
                {suggestion.title}
              </p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
