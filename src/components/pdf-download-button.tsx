'use client';

import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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

      await html2pdf().set(opt).from(element).save();
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
