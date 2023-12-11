import { FC } from 'react';
import { Section, SectionRow } from './inspiration-view.styled';
import { useModalContext } from '@/contexts/use-modal';
import { ViewForInspiration } from '@/data/enums';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/components/modal-manager/buttons';

export const InspirationView: FC = () => {
  const { currentView } = useModalContext();

  const isInspirationViewOpen = currentView === ViewForInspiration.Inspiration;

  if (!isInspirationViewOpen) return null;

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
