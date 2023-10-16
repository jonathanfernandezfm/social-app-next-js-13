import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AuthProvider from "@/components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social App",
  description: "Social App to try out lates NextJS features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <body
            className={`${inter.className} overflow-hidden bg-zinc-50  text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50`}
          >
            <main className="flex h-screen">
              <Navbar></Navbar>
              <section className="flex-1 p-12">{children}</section>
            </main>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
