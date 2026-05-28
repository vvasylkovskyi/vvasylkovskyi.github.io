'use client';

import { useEffect, useRef } from 'react';
import type { Message as MessageType } from './chat';
import { Conversation, ConversationContent } from '@/components/ui/conversation';
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageResponse,
  MessageLoading,
} from '@/components/ui/message';

interface ChatMessagesProps {
  messages: MessageType[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Conversation>
      <ConversationContent>
        {messages.map((message, index) => {
          const isUser = message.role === 'user';
          const isLastAssistantMessage = !isUser && index === messages.length - 1 && isLoading;

          return (
            <Message key={message.id} from={isUser ? 'user' : 'assistant'}>
              {!isUser && <MessageAvatar />}
              <MessageContent>
                {isUser ? message.content : <MessageResponse>{message.content}</MessageResponse>}
                {isLastAssistantMessage && <MessageLoading />}
              </MessageContent>
              {isUser && <MessageAvatar />}
            </Message>
          );
        })}
      </ConversationContent>
      <div ref={scrollRef} />
    </Conversation>
  );
}
