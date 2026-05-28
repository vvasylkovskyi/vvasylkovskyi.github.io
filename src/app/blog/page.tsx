import Link from 'next/link';
import { blog } from '@/lib/source';

export default function BlogPage() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date as string).getTime() - new Date(a.data.date as string).getTime(),
  );

  return (
    <main className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-foreground mb-2'>Blog</h1>
      <p className='text-muted-foreground mb-10'>Thoughts, tutorials, and notes on engineering.</p>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className='flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground'
          >
            <p className='text-lg font-semibold text-foreground mb-1'>{post.data.title}</p>
            <p className='text-sm text-muted-foreground flex-1'>{post.data.description}</p>
            <p className='mt-4 text-xs text-muted-foreground'>
              {new Date(post.data.date as string).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
