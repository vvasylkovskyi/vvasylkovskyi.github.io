import '../fumadocs.css';
import './blog.css';

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <HomeLayout className='blog-page items-center' {...baseOptions()}>
        {children}
      </HomeLayout>
    </RootProvider>
  );
}
