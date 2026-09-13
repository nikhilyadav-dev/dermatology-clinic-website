"use server";

import { prisma } from "@/lib/prisma";

export async function getConsultations() {
  try {
    const consultations = await prisma.consultation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      consultations,
    };
  } catch (error) {
    console.error("Get consultations error:", error);

    return {
      success: false,
      consultations: [],
      error: error.message,
    };
  }
}
