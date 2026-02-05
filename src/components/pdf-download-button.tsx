'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PdfDownloadButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={handleDownload}
      className='print:hidden'
      title='Download as PDF'
    >
      <Download className='h-4 w-4' />
      <span className='sr-only'>Download as PDF</span>
    </Button>
  );
}
