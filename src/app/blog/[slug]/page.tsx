import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blog } from '@/lib/source';
import { getMDXComponents } from '../../../../mdx-components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    notFound();
  }

  const date = new Date(page.data.date as string);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const MDX = page.data.body;

  return (
    <main className='container mx-auto px-4 py-12'>
      <Link
        href='/blog'
        className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors'
      >
        &larr; Back to Blog
      </Link>

      <article className='prose prose-neutral dark:prose-invert max-w-3xl mx-auto'>
        <header className='mb-8 not-prose'>
          <h1 className='text-4xl font-bold text-foreground mb-4'>{page.data.title}</h1>
          <div className='flex items-center gap-2 text-muted-foreground text-sm'>
            <span>{page.data.author as string}</span>
            <span>&bull;</span>
            <time dateTime={page.data.date as string}>{formattedDate}</time>
          </div>
          {page.data.description && (
            <p className='mt-3 text-muted-foreground'>{page.data.description}</p>
          )}
        </header>

        {page.data.toc && page.data.toc.length > 0 && (
          <div className='mb-8 not-prose'>
            <InlineTOC items={page.data.toc} />
          </div>
        )}

        <MDX components={getMDXComponents()} />
      </article>
    </main>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return blog.generateParams().map((params) => ({
    slug: params.slug.join('/'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    return {};
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
