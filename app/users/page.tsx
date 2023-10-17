import UserCard from "@/components/user-card";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-wrap gap-10 justify-evenly">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
