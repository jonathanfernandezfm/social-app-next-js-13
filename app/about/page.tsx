import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About us",
  description: "Static page about the project",
};

export default async function About() {
  return (
    <>
      <h1 className="text-3xl">About us</h1>
      <p className="mt-4">This is a forced static page from NextJS</p>
      <p>This project has been build to experiment NextJS 13 features</p>
      <p>Stack:</p>
      <ul className="list-disc">
        <li className="ml-10">Next.js</li>
        <li className="ml-10">Neon.tech (PostgreSQL)</li>
        <li className="ml-10">Prisma</li>
        <li className="ml-10">NextAuth.js</li>
        <li className="ml-10">TailwindCSS</li>
        <li className="ml-10">ShadcnUI</li>
      </ul>
    </>
  );
}
