"use client";

import { NextUIProvider } from "@nextui-org/react"; // Import the type of NextUIProvider
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <SessionProvider>
      {" "}
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
