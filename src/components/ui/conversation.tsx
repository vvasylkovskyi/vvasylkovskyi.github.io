'use client';

import * as React from 'react';
import { useStickToBottom } from 'use-stick-to-bottom';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Conversation = React.forwardRef<HTMLDivElement, ConversationProps>(
  ({ className, children, ...props }, ref) => {
    const { scrollRef, contentRef, isAtBottom, scrollToBottom } = useStickToBottom();

    return (
      <div ref={ref} className={cn('relative flex-1 overflow-hidden', className)} {...props}>
        <div ref={scrollRef} className='h-full overflow-y-auto'>
          <div ref={contentRef} className='min-h-full'>
            {children}
          </div>
        </div>

        {/* Scroll to bottom button */}
        {!isAtBottom && (
          <Button
            size='icon'
            variant='secondary'
            className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-lg'
            onClick={() => scrollToBottom()}
          >
            <ArrowDown className='h-4 w-4' />
            <span className='sr-only'>Scroll to bottom</span>
          </Button>
        )}
      </div>
    );
  },
);
Conversation.displayName = 'Conversation';

// Conversation content wrapper
interface ConversationContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ConversationContent = React.forwardRef<HTMLDivElement, ConversationContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('max-w-3xl mx-auto py-6 px-4 space-y-6', className)} {...props}>
        {children}
      </div>
    );
  },
);
ConversationContent.displayName = 'ConversationContent';

// Empty state for when there are no messages
interface ConversationEmptyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ConversationEmpty = React.forwardRef<HTMLDivElement, ConversationEmptyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center h-full px-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
ConversationEmpty.displayName = 'ConversationEmpty';

export { Conversation, ConversationContent, ConversationEmpty };
