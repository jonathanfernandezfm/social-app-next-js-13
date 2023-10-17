"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-4 justify-normal">
        <Link href={`/dashboard`}>
          <Avatar>
            <AvatarImage src={session.user?.image ?? "/mememan.webp"} />
            <AvatarFallback>
              {session.user?.name?.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </Link>
        <SignOutButton></SignOutButton>
      </div>
    );
  }

  // <Button disabled={status === "loading"} onClick={() => signIn()}>
  //    {status === "loading" ? "Loading..." : "Sign in"}
  // </Button>

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>Sign in</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign in disabled</AlertDialogTitle>
          <AlertDialogDescription>
            This sign in uses NextAuth.js to authenticate using Github. For data
            safety reasons, this project has sign in disabled so no data from
            users is stored. All the data shown in /users is fake.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
