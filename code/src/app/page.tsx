'use client';

import { ModalManager } from '@/components/modal-manager';
import { UserProvider } from '@/contexts/use-user';

export default function Home() {
  return (
    <UserProvider>
      <ModalManager />
    </UserProvider>
  );
}
