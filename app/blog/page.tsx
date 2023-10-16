import { Montserrat } from "next/font/google";
import Link from "next/link";

export const revalidate = 420;

interface Post {
  title: string;
  slug: string;
  content: string;
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function BlogPost() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json(),
  );

  return (
    <div className="grid h-full gap-4 overflow-auto">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="rounded-md border-[1px] px-4 py-4">
            <h1 className={`${montserrat.className} text-2xl font-bold`}>{post?.title}</h1>
            <p className="mt-4 text-lg">{post?.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
