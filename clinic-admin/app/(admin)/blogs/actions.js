"use server";

import { prisma } from "@/lib/prisma";

export async function createBlog(data) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,

        featuredImage: data.featuredImage || null,
        imageAlt: data.imageAlt || null,

        status: data.status || "DRAFT",
        publishedAt: data.status === "PUBLISHED" ? new Date() : null,

        seoTitle: data.seoTitle || null,
        metaDescription: data.metaDescription || null,
        keywords: data.keywords || null,
        canonicalUrl: data.canonicalUrl || null,

        ogTitle: data.ogTitle || null,
        ogDescription: data.ogDescription || null,
        ogImage: data.ogImage || null,

        author: {
          connect: {
            email: "admin@shineskincare.com",
          },
        },

        category: {
          connect: {
            id: data.categoryId,
          },
        },
      },
    });

    return {
      success: true,
      blog,
    };
  } catch (error) {
    console.error("Create blog error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
