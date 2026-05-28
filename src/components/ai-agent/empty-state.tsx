'use client';

import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onSuggestionClick: (text: string) => void;
}

const suggestions = [
  "What is Viktor's technical background?",
  "Tell me about Viktor's experience with AI and LLMs",
  "What projects has Viktor built?",
  "What makes Viktor a strong engineering candidate?",
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

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg mx-auto'>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              variant='outline'
              size='sm'
              className='h-auto py-3 px-4 text-left justify-start whitespace-normal text-sm'
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
