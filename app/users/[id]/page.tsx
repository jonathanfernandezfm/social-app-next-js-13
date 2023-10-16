import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FollowButton from "@/components/follow/follow-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function User({ params }: Props) {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const following = await prisma.follows.findMany({
    where: { followerId: user?.id },
  });
  const followers = await prisma.follows.findMany({
    where: { followingId: user?.id },
  });

  return (
    <div className="m-auto flex w-96 flex-col items-center justify-center rounded-md border-[1px] bg-zinc-50 p-4 py-10 dark:bg-zinc-950">
      <Avatar className="w-32 h-32">
        <AvatarImage src={user?.image ?? "/zmememan.webp"} />
        <AvatarFallback>{user?.name?.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="px-4 mt-4 text-4xl text-center">{user?.name}</div>
      <div className="mt-2 italic">{user?.bio}</div>
      <div className="mt-4 font-bold">{user?.email}</div>
      {session?.user?.email !== user?.email && (
        <div className="mt-6">
          <FollowButton targetUserId={user?.id!} />
        </div>
      )}
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col items-center justify-center rounded-md border-[1px] p-2">
          <div>{following.length}</div>
          <div>Following</div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-md border-[1px] p-2">
          <div>{followers.length}</div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  );
}
