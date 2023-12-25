"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  const [formState, setFormState] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary" variant="shadow">
          Create Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={setFormState}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
            />
            <Input
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            <Button type="submit" color="success" variant="solid">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
