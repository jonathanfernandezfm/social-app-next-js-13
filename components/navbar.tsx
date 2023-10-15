import React from "react";
import { Button } from "./ui/button";
import { Settings, User } from "lucide-react";
import { ModeToggle } from "./ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="flex h-full max-w-sm flex-col justify-between border-r-[1px] border-r-zinc-800 px-10 py-6">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={300}
            height={0}
          ></Image>
        </Link>
        <nav className="text-lg">
          <ul>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/dashboard" className="block px-6 py-3">
                Dashboard
              </Link>
            </li>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/projects" className="block px-6 py-3">
                Projects
              </Link>
            </li>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/invoices" className="block px-6 py-3">
                Invoices
              </Link>
            </li>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/tickets" className="block px-6 py-3">
                Tickets
              </Link>
            </li>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/help" className="block px-6 py-3">
                Help
              </Link>
            </li>
            <div className="mt-4 w-full border-t-[1px] border-t-zinc-800"></div>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/settings" className="block px-6 py-3">
                Settings
              </Link>
            </li>
            <li className="mt-4 rounded-md cursor-pointer outline-1 hover:bg-zinc-900 hover:outline hover:outline-zinc-700">
              <Link href="/about" className="block px-6 py-3">
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="flex gap-4 mb-6">
          <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <ModeToggle></ModeToggle>
        </div>
        <div className="w-full text-left">Copyright @ 2023. Version v0.1</div>
      </div>
    </section>
  );
}
