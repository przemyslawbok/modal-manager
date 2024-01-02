import { FC } from 'react';
import { Section, SectionRow } from './inspiration-view.styled';
import { useModalContext } from '@/contexts/use-modal';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/components/modal-manager/buttons';

export const InspirationView: FC = () => {
  const { currentView } = useModalContext();

  return (
    <Section>
      Inspiration Modal
      <SectionRow>
        Moodboards
        <AddMoodboardsButton />
      </SectionRow>
      <SectionRow>
        Resources
        <AddResourcesButton />
      </SectionRow>
    </Section>
  );
};
