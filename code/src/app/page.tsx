'use client';

import { ModalManager } from '@/components/modal-manager';
import { pageConfig } from '@/configs/configs';
import { UserProvider } from '@/contexts/use-user';

export default function Home() {
  return (
    <UserProvider>
      <ModalManager config={pageConfig} />
    </UserProvider>
  );
}
