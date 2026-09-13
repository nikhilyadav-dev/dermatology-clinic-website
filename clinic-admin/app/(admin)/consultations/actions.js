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
      error: "Unable to load consultations.",
    };
  }
}

export async function getConsultationById(id) {
  try {
    const consultation = await prisma.consultation.findUnique({
      where: {
        id,
      },
    });

    if (!consultation) {
      return {
        success: false,
        error: "Consultation not found.",
      };
    }

    return {
      success: true,
      consultation,
    };
  } catch (error) {
    console.error("Get consultation error:", error);

    return {
      success: false,
      error: "Unable to load consultation.",
    };
  }
}

export async function updateConsultationStatus(id, status) {
  const allowedStatuses = [
    "NEW",
    "CONTACTED",
    "CONFIRMED",
    "COMPLETED",
    "CANCELLED",
  ];

  if (!allowedStatuses.includes(status)) {
    return {
      success: false,
      error: "Invalid consultation status.",
    };
  }

  try {
    const consultation = await prisma.consultation.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return {
      success: true,
      consultation,
    };
  } catch (error) {
    console.error("Update consultation status error:", error);

    return {
      success: false,
      error: "Unable to update consultation status.",
    };
  }
}
