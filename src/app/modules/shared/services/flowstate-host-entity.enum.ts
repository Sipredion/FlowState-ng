export enum FlowStateHostEntity {
  RENDERS = 'renders',

  // Blog Posts
  BLOG_POST_META = 'post-meta',
  BLOG_FEATURED_META = 'featured-post-meta',
  BLOG_ALL_POSTS = 'all-posts',
  BLOG_FEATURED = 'featured-posts',
  BLOG_CATEGORY_FEATURED = 'featured-by-category',
  BLOG_SINGLE_POST = 'post-by-id',

  // Artwork
  ART_META = 'art-meta',
  ART_FEATURED_META = 'featured-meta',
  ART_ALL = 'all-artwork',
  ART_FEATURED = 'featured-artwork',
  ART_CATEGORY_FEATURED = 'featured-by-category',
  ART_SINGLE_ARTWORK = 'art-by-id',
}
