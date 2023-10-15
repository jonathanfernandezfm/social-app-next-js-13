export const revalidate = 420;

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json(),
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json(),
  );

  const post = posts.find((post) => post.slug === params.slug);
  return (
    <div>
      <h1 className="text-4xl font-bold">{post?.title}</h1>
      <p className="mt-4 text-lg">{post?.content}</p>
    </div>
  );
}
