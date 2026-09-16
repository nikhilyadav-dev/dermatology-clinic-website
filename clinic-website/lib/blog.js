import { prisma } from "./prisma";

export async function getPublishedBlogs() {
  const blogs = await prisma.blog.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      imageAlt: true,
      publishedAt: true,

      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },

      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return blogs;
}

export async function getPublishedBlogBySlug(slug) {
  const blog = await prisma.blog.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      content: true,
      featuredImage: true,
      imageAlt: true,
      publishedAt: true,

      seoTitle: true,
      metaDescription: true,
      keywords: true,
      canonicalUrl: true,
      ogTitle: true,
      ogDescription: true,
      ogImage: true,

      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },

      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return blog;
}
