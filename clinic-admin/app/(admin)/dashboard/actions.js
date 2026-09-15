"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  try {
    const [
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalConsultations,
      newConsultations,
      recentConsultations,
      recentBlogs,
    ] = await Promise.all([
      prisma.blog.count(),

      prisma.blog.count({
        where: {
          status: "PUBLISHED",
        },
      }),

      prisma.blog.count({
        where: {
          status: "DRAFT",
        },
      }),

      prisma.consultation.count(),

      prisma.consultation.count({
        where: {
          status: "NEW",
        },
      }),

      prisma.consultation.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),

      prisma.blog.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
        include: {
          category: true,
        },
      }),
    ]);

    return {
      success: true,
      stats: {
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        totalConsultations,
        newConsultations,
      },
      recentConsultations,
      recentBlogs,
    };
  } catch (error) {
    console.error("Dashboard stats error:", error);

    return {
      success: false,
      stats: {
        totalBlogs: 0,
        publishedBlogs: 0,
        draftBlogs: 0,
        totalConsultations: 0,
        newConsultations: 0,
      },
      recentConsultations: [],
      recentBlogs: [],
      error: "Unable to load dashboard data.",
    };
  }
}
