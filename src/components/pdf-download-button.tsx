'use client';

import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Convert modern CSS color functions to RGB
function getComputedColorAsRgb(element: Element, property: string): string {
  const computed = window.getComputedStyle(element);
  const value = computed.getPropertyValue(property);
  
  // If it's already rgb/rgba or hex, return as-is
  if (value.startsWith('rgb') || value.startsWith('#')) {
    return value;
  }
  
  // For lab/oklch/etc, we need to get the computed value through canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = value;
    return ctx.fillStyle; // Returns as hex
  }
  
  return value;
}

// Clone element and convert all colors to RGB-compatible formats
function cloneWithConvertedColors(element: Element): HTMLElement {
  const clone = element.cloneNode(true) as HTMLElement;
  
  // Apply computed styles with converted colors
  const applyComputedStyles = (original: Element, cloned: Element) => {
    const computed = window.getComputedStyle(original);
    const clonedEl = cloned as HTMLElement;
    
    // Set explicit colors using computed RGB values
    clonedEl.style.color = getComputedColorAsRgb(original, 'color');
    clonedEl.style.backgroundColor = getComputedColorAsRgb(original, 'background-color');
    clonedEl.style.borderColor = getComputedColorAsRgb(original, 'border-color');
    
    // Process children
    const originalChildren = original.children;
    const clonedChildren = cloned.children;
    
    for (let i = 0; i < originalChildren.length; i++) {
      if (clonedChildren[i]) {
        applyComputedStyles(originalChildren[i], clonedChildren[i]);
      }
    }
  };
  
  applyComputedStyles(element, clone);
  return clone;
}

export function PdfDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Get the CV content (the main content area)
      const element = document.querySelector('.max-w-4xl');
      
      if (!element) {
        console.error('CV content not found');
        return;
      }

      // Clone and convert colors to RGB
      const clonedElement = cloneWithConvertedColors(element);
      
      // Temporarily add to DOM for rendering
      clonedElement.style.position = 'absolute';
      clonedElement.style.left = '-9999px';
      clonedElement.style.top = '0';
      clonedElement.style.width = element.getBoundingClientRect().width + 'px';
      document.body.appendChild(clonedElement);

      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Viktor_Vasylkovskyi_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().set(opt).from(clonedElement).save();
      
      // Clean up
      document.body.removeChild(clonedElement);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handleDownload}
      disabled={isGenerating}
      className='print:hidden'
      title='Download as PDF'
    >
      {isGenerating ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : (
        <Download className='h-4 w-4' />
      )}
      <span className='sr-only'>Download as PDF</span>
    </Button>
  );
}
