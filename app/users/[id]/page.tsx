import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

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
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-md border-[1px] bg-stone-950 p-4 py-10">
      <Avatar className="w-32 h-32">
        <AvatarImage src={user?.image ?? "/zmememan.webp"} />
        <AvatarFallback>{user?.name?.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="px-4 mt-4 text-4xl text-center">{user?.name}</div>
      <div className="mt-2 italic">{user?.bio}</div>
      <div className="mt-4 font-bold">{user?.email}</div>
      <Button className="mt-8">Follow</Button>
    </div>
  );
}
