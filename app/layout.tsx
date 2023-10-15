import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AuthProvider from "@/components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard ITSM",
  description: "Dashboard ITSM",
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
            className={`${inter.className} overflow-hidden bg-zinc-950 text-white`}
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
