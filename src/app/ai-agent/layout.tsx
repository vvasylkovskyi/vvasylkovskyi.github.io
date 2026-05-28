import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agent — Viktor Vasylkovskyi',
  description: 'Chat with an AI assistant that knows everything about Viktor Vasylkovskyi.',
};

export default function AiAgentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
