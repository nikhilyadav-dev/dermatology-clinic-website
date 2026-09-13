"use server";

import { prisma } from "@/lib/prisma";

export async function createConsultation(data) {
  try {
    const consultation = await prisma.consultation.create({
      data: {
        concern: data.concern || null,
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        preferredDate: data.preferredDate || null,
        preferredTime: data.preferredTime || null,
        status: "NEW",
        source: "website",
      },
    });

    return {
      success: true,
      consultationId: consultation.id,
    };
  } catch (error) {
    console.error("Create consultation error:", error);

    return {
      success: false,
      error: "Unable to submit your consultation request.",
    };
  }
}
