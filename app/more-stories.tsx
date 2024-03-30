import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  date,
  mile,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  mile: number;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div className="flex gap-5">
      <div style={{ width: "250px" }}>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <h4 className="text-lg mb-4">
          <DateComponent dateString={date} />
          {mile && (
            <>
              &nbsp;&mdash;&nbsp;Mile <span>{mile}</span>
            </>
          )}
        </h4>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <div className="flex flex-col gap-20">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            mile={post.mile}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}

        {!morePosts.length && (
          <div>&#128064; Noch ist er keinen Schritt gelaufen</div>
        )}
      </div>
    </section>
  );
}
