"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function follow(currentUserId: string, targetUserId: string) {
  await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    }
  })

  revalidatePath(`/users/${currentUserId}`)
}

export async function unfollow(currentUserId: string, targetUserId: string) {
  await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId!,
      },
    }
  })

  revalidatePath(`/users/${currentUserId}`)
} 