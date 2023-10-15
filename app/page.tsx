import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  console.log(session);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex h-screen">
      <section className="flex-1 p-12"></section>
    </main>
  );
}
