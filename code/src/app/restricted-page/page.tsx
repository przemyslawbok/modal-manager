"use client";

import { ModalManager } from "@/components/modal-manager";
import { RESTRICTED_PAGE_CONFIG } from "@/configs/pageConfig";
import { UserProvider } from "@/contexts/use-user";

export default function RestrictedPage() {
  return (
    <UserProvider>
      <ModalManager config={RESTRICTED_PAGE_CONFIG} />
    </UserProvider>
  );
}
