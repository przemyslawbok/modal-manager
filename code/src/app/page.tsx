'use client';

import { ModalManager } from '@/components/modal-manager';
import { HOME_PAGE_CONFIG } from '@/configs/pageConfig';
import { UserProvider } from '@/contexts/use-user';

export default function Home() {
  return (
    <UserProvider>
      <ModalManager config={HOME_PAGE_CONFIG} />
    </UserProvider>
  );
}
