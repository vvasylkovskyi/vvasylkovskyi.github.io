'use client';

import { useStickToBottom } from 'use-stick-to-bottom';
import { MessageBubble } from './message';
import type { Message } from './message';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const { scrollRef, contentRef } = useStickToBottom({ initial: 'instant' });

  return (
    <div ref={scrollRef} className='flex-1 overflow-y-auto min-h-0'>
      <div ref={contentRef} className='px-4 py-6 max-w-3xl mx-auto space-y-4'>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className='flex justify-start'>
            <div className='bg-muted text-foreground rounded-2xl rounded-tl-sm px-4 py-2 text-sm'>
              <span className='inline-flex gap-1'>
                <span className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]' />
                <span className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]' />
                <span className='w-2 h-2 bg-muted-foreground rounded-full animate-bounce' />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
