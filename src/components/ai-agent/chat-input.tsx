'use client';

import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputSubmit,
} from '@/components/ui/prompt-input';
import Link from 'next/link';

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export function ChatInput({ input, onInputChange, onSend, isLoading }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading) {
      textareaRef.current?.focus();
    }
  }, [isLoading]);

  return (
    <div className='border-t border-border bg-background p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shrink-0'>
      <div className='max-w-3xl mx-auto'>
        <PromptInput
          value={input}
          onValueChange={onInputChange}
          onSubmit={onSend}
          disabled={isLoading}
        >
          <PromptInputTextarea
            ref={textareaRef}
            placeholder='Ask me about Viktor...'
            className='min-h-[44px] max-h-[200px]'
          />
          <PromptInputActions className='justify-end'>
            <PromptInputSubmit>
              <Send className='h-4 w-4' />
              <span className='sr-only'>Send message</span>
            </PromptInputSubmit>
          </PromptInputActions>
        </PromptInput>

        <p className='sm:hidden text-[10px] text-muted-foreground text-center mt-2'>
          By{' '}
          <Link
            href='https://github.com/vvasylkovskyi'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-foreground transition-colors'
          >
            Viktor Vasylkovskyi
          </Link>
          {' | '}
          <Link href='#' className='underline hover:text-foreground transition-colors'>
            About BarkGPT
          </Link>
        </p>

        <p className='hidden sm:block text-xs text-muted-foreground text-center mt-2'>
          Created by{' '}
          <Link
            href='https://github.com/vvasylkovskyi'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-foreground transition-colors'
          >
            Viktor Vasylkovskyi
          </Link>
          {' | '}
          <Link
            href='https://www.linkedin.com/in/viktor-vasylkovskyi-708b1712b/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-foreground transition-colors'
          >
            Send me a message
          </Link>
        </p>
      </div>
    </div>
  );
}
