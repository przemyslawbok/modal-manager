'use client';
import Image from 'next/image';
import { ModalProvider } from './use-modal/use-modal.context';
import { EditModal } from './components/modals/edit-modal/edit-modal';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ModalProvider>
        <EditModal />
      </ModalProvider>
    </main>
  );
}
