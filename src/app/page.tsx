import { Button } from "@nextui-org/react";
import * as action from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return <div></div>;
}
