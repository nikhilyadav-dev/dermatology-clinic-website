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
            slug: data.categoryId,
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

export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        category: true,
      },
    });

    return {
      success: true,
      blogs,
    };
  } catch (error) {
    console.error("Get blogs error:", error);

    return {
      success: false,
      blogs: [],
      error: error.message,
    };
  }
}

export async function getBlogById(id) {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        category: true,
      },
    });

    if (!blog) {
      return {
        success: false,
        error: "Blog not found",
      };
    }

    return {
      success: true,
      blog,
    };
  } catch (error) {
    console.error("Get blog error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateBlog(id, data) {
  try {
    const blog = await prisma.blog.update({
      where: {
        id,
      },
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
        category: {
          connect: {
            slug: data.categoryId,
          },
        },
      },
    });

    return {
      success: true,
      blog,
    };
  } catch (error) {
    console.error("Update blog error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}

export async function deleteBlog(id) {
  try {
    await prisma.blog.delete({
      where: {
        id,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Delete blog error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
