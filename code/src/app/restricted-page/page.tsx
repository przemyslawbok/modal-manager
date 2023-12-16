'use client';

import { ModalManager } from '@/components/modal-manager';
import { UserSelect } from '@/components/user-select/user-select';
import { restrictedPageConfig } from '@/configs/configs';
import { UserProvider } from '@/contexts/use-user';

export default function RestrictedPage() {
  return (
    <UserProvider>
      <UserSelect />
      <ModalManager config={restrictedPageConfig} />
    </UserProvider>
  );
}
