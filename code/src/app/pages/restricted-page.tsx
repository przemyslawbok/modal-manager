'use client';

import { ModalManager } from '@/components/modal-manager';
import { UserProvider } from '@/contexts/use-user';

export default function RestrictedPage() {
  return (
    <UserProvider>
      <ModalManager />
    </UserProvider>
  );
}
