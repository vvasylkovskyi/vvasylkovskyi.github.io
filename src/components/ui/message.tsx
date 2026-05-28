'use client';

import * as React from 'react';
import { FileIcon, Heart } from 'lucide-react';
import { BotAvatar } from '@/components/ai-agent/bot-avatar';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

interface MessageContextValue {
  from: 'user' | 'assistant';
}

const MessageContext = React.createContext<MessageContextValue | null>(null);

function useMessageContext() {
  const context = React.useContext(MessageContext);
  if (!context) {
    throw new Error('Message components must be used within a Message');
  }
  return context;
}

// Main Message container
interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  from: 'user' | 'assistant';
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, from, children, ...props }, ref) => {
    return (
      <MessageContext.Provider value={{ from }}>
        <div
          ref={ref}
          className={cn(
            'flex gap-3 w-full',
            from === 'user' ? 'flex-row-reverse' : 'flex-row',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </MessageContext.Provider>
    );
  },
);
Message.displayName = 'Message';

// Message Avatar
interface MessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: React.ReactNode;
  isPetted?: boolean;
}

const MessageAvatar = React.forwardRef<HTMLDivElement, MessageAvatarProps>(
  ({ className, src, fallback, isPetted, ...props }, ref) => {
    const { from } = useMessageContext();

    if (from === 'user') {
      return null;
    }

    const defaultAssistantAvatar = <BotAvatar />;

    const showPetAnimation = isPetted;

    return (
      <div className='relative'>
        <div
          ref={ref}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden border border-border transition-transform',
            showPetAnimation && 'animate-wiggle',
            className,
          )}
          {...props}
        >
          {src ? (
            <Image
              src={src || '/placeholder.svg'}
              alt='Avatar'
              className='w-full h-full rounded-full object-cover'
              width={32}
              height={32}
            />
          ) : (
            fallback || defaultAssistantAvatar
          )}
        </div>
        {showPetAnimation && (
          <Heart className='absolute -top-2 -right-2 w-4 h-4 text-red-500 fill-red-500 animate-float-up' />
        )}
      </div>
    );
  },
);
MessageAvatar.displayName = 'MessageAvatar';

interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageContent = React.forwardRef<HTMLDivElement, MessageContentProps>(
  ({ className, children, ...props }, ref) => {
    const { from } = useMessageContext();
    const isUser = from === 'user';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl px-4 py-3 max-w-[80%] min-w-0 overflow-hidden',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground',
          className,
        )}
        {...props}
      >
        <div className='text-sm break-words overflow-wrap-anywhere'>{children}</div>
      </div>
    );
  },
);
MessageContent.displayName = 'MessageContent';

interface MessageResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

const MessageResponse = React.forwardRef<HTMLDivElement, MessageResponseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'prose prose-sm max-w-none dark:prose-invert',
          'prose-p:my-1 prose-p:leading-relaxed',
          'prose-pre:my-2 prose-pre:overflow-x-auto',
          'prose-code:break-words',
          '[word-break:break-word] [overflow-wrap:anywhere]',
          className,
        )}
        {...props}
      >
        <ReactMarkdown
          components={{
            pre: ({ children }) => (
              <pre className='bg-muted rounded-lg p-3 overflow-x-auto my-2 text-sm'>{children}</pre>
            ),
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              return isInline ? (
                <code
                  className='bg-muted px-1.5 py-0.5 rounded text-sm font-mono break-words'
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
          {children}
        </ReactMarkdown>
      </div>
    );
  },
);
MessageResponse.displayName = 'MessageResponse';

interface MessageToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageToolbar = React.forwardRef<HTMLDivElement, MessageToolbarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center gap-1 mt-2', className)} {...props}>
        {children}
      </div>
    );
  },
);
MessageToolbar.displayName = 'MessageToolbar';

interface MessageActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageActions = React.forwardRef<HTMLDivElement, MessageActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center gap-1', className)} {...props}>
        {children}
      </div>
    );
  },
);
MessageActions.displayName = 'MessageActions';

interface MessageActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  tooltip?: string;
}

const MessageAction = React.forwardRef<HTMLButtonElement, MessageActionProps>(
  ({ className, children, label, tooltip, ...props }, ref) => {
    const button = (
      <Button
        ref={ref}
        variant='ghost'
        size='icon'
        className={cn('h-7 w-7 text-muted-foreground hover:text-foreground', className)}
        aria-label={label}
        {...props}
      >
        {children}
      </Button>
    );

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side='bottom' className='text-xs'>
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  },
);
MessageAction.displayName = 'MessageAction';

interface MessageAttachmentsProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageAttachments = React.forwardRef<HTMLDivElement, MessageAttachmentsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-wrap gap-2', className)} {...props}>
        {children}
      </div>
    );
  },
);
MessageAttachments.displayName = 'MessageAttachments';

interface AttachmentData {
  type: 'file';
  url: string;
  mediaType?: string;
  filename?: string;
}

interface MessageAttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  data: AttachmentData;
}

const MessageAttachment = React.forwardRef<HTMLDivElement, MessageAttachmentProps>(
  ({ className, data, ...props }, ref) => {
    const isImage = data.mediaType?.startsWith('image/');

    if (isImage && data.url) {
      return (
        <div
          ref={ref}
          className={cn('rounded-lg overflow-hidden border border-border', className)}
          {...props}
        >
          <Image
            src={data.url || '/placeholder.svg'}
            alt={data.filename || 'Attachment'}
            className='max-w-[200px] max-h-[200px] object-cover'
            width={32}
            height={32}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-sm', className)}
        {...props}
      >
        <FileIcon className='h-4 w-4 shrink-0' />
        <span className='truncate max-w-[150px]'>{data.filename || 'File'}</span>
      </div>
    );
  },
);
MessageAttachment.displayName = 'MessageAttachment';

// Loading indicator for streaming
const MessageLoading = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-block w-2 h-4 bg-foreground animate-pulse ml-1', className)}
        {...props}
      />
    );
  },
);
MessageLoading.displayName = 'MessageLoading';

export {
  Message,
  MessageAvatar,
  MessageContent,
  MessageResponse,
  MessageToolbar,
  MessageActions,
  MessageAction,
  MessageAttachments,
  MessageAttachment,
  MessageLoading,
};
