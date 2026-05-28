'use client';

import { useState, useCallback } from 'react';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { EmptyState } from './empty-state';
import type { Message } from './message';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.message || 'Something went wrong. Please try again.',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (_) {
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleClear = useCallback(() => {
    setMessages([]);
    setInput('');
  }, []);

  return (
    <div className='flex flex-col h-dvh overflow-hidden'>
      <ChatHeader onClear={handleClear} hasMessages={messages.length > 0} />

      {messages.length === 0 ? (
        <EmptyState onSuggestionClick={(text) => setInput(text)} />
      ) : (
        <ChatMessages messages={messages} isLoading={isLoading} />
      )}

      <ChatInput
        input={input}
        onInputChange={setInput}
        onSend={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
}
