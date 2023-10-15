import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About us",
  description: "Static page about us",
};

export default async function About() {
  return (
    <>
      <h1 className="text-3xl">About us</h1>
      <p className="mt-4">This is a forced static page from NextJS</p>
    </>
  );
}
