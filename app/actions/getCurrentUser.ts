import { getServerSession } from "next-auth/next";

import prisma from "@/app/libs/prismadb";

import { authoption } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authoption);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
