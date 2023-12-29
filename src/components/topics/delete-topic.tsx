"use client";
import { useFormState } from "react-dom";
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

interface DeleteTopicProps {
  slug: string;
}

export default function DeleteTopic({ slug }: DeleteTopicProps) {
  const [formState, action] = useFormState(
    actions.deleteTopic.bind(null, slug),
    { errors: {} }
  );

  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <Button className="max-w-fit h-auto" type="submit" color="danger">
          Delete
        </Button>
        {formState.errors._form ? (
          <div>{formState.errors._form.join(", ")}</div>
        ) : null}
      </div>
    </form>
  );
}
