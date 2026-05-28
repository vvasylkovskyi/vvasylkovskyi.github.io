'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

// Context for sharing state between components
interface PromptInputContextValue {
  value: string;
  setValue: (value: string) => void;
  disabled: boolean;
  onSubmit: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  focus: () => void;
}

const PromptInputContext = React.createContext<PromptInputContextValue | null>(null);

function usePromptInput() {
  const context = React.useContext(PromptInputContext);
  if (!context) {
    throw new Error('PromptInput components must be used within a PromptInput provider');
  }
  return context;
}

// Main container
interface PromptInputProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  ({ className, value, onValueChange, onSubmit, disabled = false, children, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const focus = React.useCallback(() => {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }, []);

    const contextValue = React.useMemo(
      () => ({
        value,
        setValue: onValueChange,
        disabled,
        onSubmit,
        textareaRef,
        focus,
      }),
      [value, onValueChange, disabled, onSubmit, focus],
    );

    return (
      <PromptInputContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'flex flex-col gap-2 rounded-2xl border border-border bg-card p-2',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </PromptInputContext.Provider>
    );
  },
);
PromptInput.displayName = 'PromptInput';

// Textarea component
interface PromptInputTextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange'
> {
  maxHeight?: number;
}

const PromptInputTextarea = React.forwardRef<HTMLTextAreaElement, PromptInputTextareaProps>(
  ({ className, maxHeight = 200, onKeyDown, ...props }, ref) => {
    const { value, setValue, disabled, onSubmit, textareaRef, focus } = usePromptInput();
    const internalRef = React.useRef<HTMLTextAreaElement>(null);

    // Merge refs
    React.useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);
    React.useImperativeHandle(textareaRef, () => internalRef.current as HTMLTextAreaElement);

    // Auto-resize
    React.useEffect(() => {
      const textarea = internalRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      }
    }, [value, maxHeight]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
        focus();
      }
      onKeyDown?.(e);
    };

    return (
      <textarea
        ref={internalRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={1}
        className={cn(
          'w-full resize-none border-0 bg-transparent py-3 px-2 text-base',
          'placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);
PromptInputTextarea.displayName = 'PromptInputTextarea';

// Actions container (for buttons at the bottom)
interface PromptInputActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PromptInputActions = React.forwardRef<HTMLDivElement, PromptInputActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between gap-2', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
PromptInputActions.displayName = 'PromptInputActions';

// Submit button with slot pattern for custom buttons
interface PromptInputSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const PromptInputSubmit = React.forwardRef<HTMLButtonElement, PromptInputSubmitProps>(
  ({ className, asChild = false, disabled, onClick, ...props }, ref) => {
    const { value, disabled: contextDisabled, onSubmit, focus } = usePromptInput();
    const Comp = asChild ? Slot : 'button';

    const isDisabled = disabled ?? (!value.trim() || contextDisabled);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) {
        onSubmit();
        focus();
      }
    };

    return (
      <Comp
        ref={ref}
        type='button'
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          'inline-flex items-center justify-center rounded-xl h-10 w-10 shrink-0',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none',
          isDisabled
            ? 'bg-muted text-muted-foreground'
            : 'bg-primary text-primary-foreground hover:bg-primary/90',
          className,
        )}
        {...props}
      />
    );
  },
);
PromptInputSubmit.displayName = 'PromptInputSubmit';

export { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputSubmit, usePromptInput };
