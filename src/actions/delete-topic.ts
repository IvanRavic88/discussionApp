"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import paths from "@/paths";

interface DeleteTopicFormState {
  errors: { _form?: string[] };
}

export async function deleteTopic(
  slug: string,
  formState: DeleteTopicFormState,
  formData: FormData
): Promise<DeleteTopicFormState> {
  const topicForDelete = await db.topic.findFirst({
    where: { slug },
  });

  // TODO: Maybe this check we don't need?
  if (!topicForDelete) {
    return {
      errors: { _form: ["Topic not found"] },
    };
  }

  await db.post.deleteMany({
    where: { topicId: topicForDelete.id },
  });

  await db.topic.delete({
    where: { id: topicForDelete.id },
  });

  revalidatePath(paths.home());
  redirect(paths.home());
}
