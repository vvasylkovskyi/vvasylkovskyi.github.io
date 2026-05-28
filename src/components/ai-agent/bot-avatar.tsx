import { Bot } from 'lucide-react';

export function BotAvatar() {
  return (
    <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-border'>
      <Bot className='w-4 h-4 text-primary' />
    </div>
  );
}
