import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/app/components/modal-manager/buttons';
import { InspirationViews } from '@/app/use-modal/data';
import { Section, SectionRow } from './inspiration-view.styled';

export const InspirationView: FC = () => {
  const { currentView } = useModalContext();

  const isInspirationViewOpen = currentView === InspirationViews.Inspiration;

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
