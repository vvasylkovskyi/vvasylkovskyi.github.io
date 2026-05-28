import { blog as blogCollection } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';

export const blog = loader({
  baseUrl: '/blog',
  source: blogCollection.toFumadocsSource(),
});
