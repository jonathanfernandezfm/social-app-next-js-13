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
      <div className="flex items-center justify-between space-x-4 rounded-sm border-[1px] p-4">
        <div className="flex items-center justify-center space-x-4">
          <Avatar>
            <AvatarImage src={user.image ?? "/zmememan.webp"} />
            <AvatarFallback>{user.name?.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
