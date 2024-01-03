import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { getPostsByTopicSlug } from "@/db/queries/posts";
import DeleteTopic from "@/components/topics/delete-topic";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2 inline-block">{slug}</h1>
        <div className="inline-block w-2">
          <DeleteTopic slug={slug} />
        </div>
        <PostList fetchData={() => getPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
