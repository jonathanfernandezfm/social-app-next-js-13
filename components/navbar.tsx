import React from "react";
import { Button } from "./ui/button";
import { Settings, User } from "lucide-react";
import { ModeToggle } from "./ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "./auth-buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  return (
    <section className="flex h-full w-96 shrink-0 flex-col justify-between border-r-[1px] border-r-zinc-300 px-10 py-6 dark:border-r-zinc-800">
      <div>
        <Link href="/">
          <Image
            className="hidden dark:block"
            src="/logo1.svg"
            alt="Company logo"
            width={300}
            height={0}
          ></Image>

          <Image
            className="block dark:hidden"
            src="/logo2.svg"
            alt="Company logo"
            width={300}
            height={0}
          ></Image>
        </Link>
        <nav className="text-lg">
          <ul>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/dashboard" className="block px-6 py-3">
                Dashboard
              </Link>
            </li>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/projects" className="block px-6 py-3">
                Projects
              </Link>
            </li>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/users" className="block px-6 py-3">
                Users
              </Link>
            </li>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/blog" className="block px-6 py-3">
                Blog
              </Link>
            </li>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/help" className="block px-6 py-3">
                Help
              </Link>
            </li>
            <div className="mt-4 w-full border-t-[1px] border-r-zinc-300 dark:border-t-zinc-800"></div>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/settings" className="block px-6 py-3">
                Settings
              </Link>
            </li>
            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/about" className="block px-6 py-3">
                About us
              </Link>
            </li>
            <li className="px-6 py-2 mt-4 rounded-sm">
              <SignInButton></SignInButton>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="flex gap-4 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href={`/users/${user?.id}`}>
              <User className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
              <span className="sr-only">My profile</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={"/settings"}>
              <Settings className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <ModeToggle></ModeToggle>
        </div>
        <div className="w-full text-left">Copyright @ 2023. Version v0.1</div>
      </div>
    </section>
  );
}
