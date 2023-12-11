"use client";

import { Header } from "@/components/common/header";
import { ModalManager } from "@/components/modal-manager";
import { UserProvider } from "@/contexts/use-user";

export default function Home() {
  return (
    <UserProvider>
      <Header />
      <ModalManager />
    </UserProvider>
  );
}
