'use client';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PortfolioContent } from '@/components/portfolio-content';

export default function Portfolio() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </div>
  );
}
