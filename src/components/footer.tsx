// URLs
const GITHUB_URL = 'https://github.com/vvasylkovskyi';
const BRAND_NAME = 'Viktor Vasylkovskyi';

export function Footer() {
  return (
    <footer className='border-t border-border py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-center'>
          <div className='flex items-center gap-4'>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors min-h-[44px]'
            ></a>
          </div>
        </div>

        <div className='mt-8 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
