'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface MessageProps {
  message: Message;
}

export function MessageBubble({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] px-4 py-2 text-sm',
          isUser
            ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
            : 'bg-muted text-foreground rounded-2xl rounded-tl-sm',
        )}
      >
        {isUser ? (
          <span className='break-words'>{message.content}</span>
        ) : (
          <div className='prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-p:leading-relaxed [word-break:break-word] [overflow-wrap:anywhere]'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => (
                  <pre className='bg-background rounded-lg p-3 overflow-x-auto my-2 text-sm border border-border'>
                    {children}
                  </pre>
                ),
                code: ({ className, children, ...props }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code
                      className='bg-background px-1.5 py-0.5 rounded text-sm font-mono break-words border border-border'
                      {...props}
                    >
                      {children}
                    </code>
                  ) : (
                    <code className={cn('font-mono text-sm', className)} {...props}>
                      {children}
                    </code>
                  );
                },
                p: ({ children }) => <p className='my-1 break-words'>{children}</p>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
