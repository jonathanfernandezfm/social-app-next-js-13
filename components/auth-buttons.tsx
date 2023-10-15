"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-4 justify-normal">
        <Link href={`/dashboard`}>
          <Avatar>
            <AvatarImage src={session.user?.image ?? "/mememan.webp"} />
            <AvatarFallback>
              {session.user?.name?.substring(0, 1)}
            </AvatarFallback>
          </Avatar>
        </Link>
        <SignOutButton></SignOutButton>
      </div>
    );
  }

  return (
    <Button disabled={status === "loading"} onClick={() => signIn()}>
      {status === "loading" ? "Loading..." : "Sign in"}
    </Button>
  );
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
