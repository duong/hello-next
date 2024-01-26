import prisma from "../../../lib/prisma";

export default async function Posts({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <div>
      {feed.map((row) => (
        <div key={row.id}>
          {row.id} - {row.title}
        </div>
      ))}
    </div>
  );
}

