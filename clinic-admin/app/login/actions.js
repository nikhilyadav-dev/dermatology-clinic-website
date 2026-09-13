"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";

export async function login(previousState, formData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required.",
    };
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        success: false,
        error: "Invalid email or password.",
      };
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);

    if (!passwordValid) {
      return {
        success: false,
        error: "Invalid email or password.",
      };
    }

    if (user.role !== "ADMIN") {
      return {
        success: false,
        error: "You are not authorized to access the admin panel.",
      };
    }

    await createSession(user);
  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      error: "Unable to sign in. Please try again.",
    };
  }

  redirect("/dashboard");
}
