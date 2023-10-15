"use client";

import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="flex flex-col items-center justify-center gap-2 p-12 bg-zinc-900">
        <Avatar>
          <AvatarImage src={user.image ?? "/mememan.webp"} />
          <AvatarFallback>{user.name?.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </Link>
  );
}
