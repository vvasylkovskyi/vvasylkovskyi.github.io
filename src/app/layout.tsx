import './global.css';
import type { Metadata, Viewport } from 'next';
import './global.css';

import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import { SettingsProvider } from '@/contexts/settingsContext';

const montserratFont = localFont({
  src: [
    {
      path: './fonts/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Black.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Viktor Vasylkovskyi - Senior Software Engineer | AI Agents | LLM Systems',
  description:
    'Personal Portfolio of Viktor Vasylkovskyi, a Senior Software Engineer specializing in AI Agents and LLM Systems.',
  generator: 'Next.js',
  keywords: [],
  authors: [{ name: 'Viktor Vasylkovskyi' }],
  openGraph: {
    images: ['/opengraph-image.png'],
    type: 'website',
    url: 'https://www.viktorvasylkovskyi.com/',
    title: 'Viktor Vasylkovskyi - Senior Software Engineer | AI Agents | LLM Systems',
    description:
      'Personal Portfolio of Viktor Vasylkovskyi, a Senior Software Engineer specializing in AI Agents and LLM Systems.',
    siteName: 'Viktor Vasylkovskyi',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SettingsProvider>
        <html lang='en' className={montserratFont.className} suppressHydrationWarning>
          <body className='flex flex-col min-h-screen'>{children}</body>
        </html>
      </SettingsProvider>
    </ThemeProvider>
  );
}
