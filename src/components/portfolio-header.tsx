import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

export function PortfolioHeader() {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-12'>
      <div className='max-w-4xl w-full'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='shrink-0'>
            <Image
              src='/professional-headshot.png'
              alt='Viktor Vasylkovskyi'
              width={160}
              height={160}
              className='w-40 h-40 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/20'
            />
          </div>

          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
              Viktor Vasylkovskyi
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground mb-4'>
              Senior Software Engineer | AI Agents & LLM Systems
            </p>

            {/* Contact Info */}
            <div className='flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground'>
              <a
                href='tel:+351931435462'
                className='flex items-center gap-2 hover:text-primary transition-colors'
              >
                <Phone className='w-4 h-4' />
                <span>+351 931 435 462</span>
              </a>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4' />
                <span>Lisbon, Portugal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
