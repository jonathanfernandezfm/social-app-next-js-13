import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FollowClient from "./follow-client";

interface Props {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions);

  if(!session) {
    return (
      <FollowClient
        currentUserId={null}
        targetUserId={targetUserId}
        isFollowing={null}
      />
    );
  }
  const currentUserId = await prisma.user
    .findUnique({ where: { email: session?.user?.email! } })
    .then((user) => user?.id!);

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });

  return (
    <FollowClient
      currentUserId={currentUserId}
      targetUserId={targetUserId}
      isFollowing={!!isFollowing}
    />
  );
}
