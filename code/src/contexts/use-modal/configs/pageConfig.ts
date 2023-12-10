import { InspirationView, ModalType, ModalVariant } from '@/data/enums';
import { Modal } from '@/data/modal';

export const PAGE_CONFIG: Modal[] = [
  { title: "Edit modal", type: ModalType.Edit, variant: ModalVariant.Centered },
  { title: "Developments modal", type: ModalType.Developments, variant: ModalVariant.Bottom },
  { type: ModalType.Inspiration, variant: ModalVariant.Right, 
    views: [ 
      { title: "Inspiration modal", view: InspirationView.Inspiration, variant: ModalVariant.Right }, 
      { title: "AddMoodboards modal", view: InspirationView.AddMoodboards, variant: ModalVariant.Right }, 
      { title: "AddResources modal", view: InspirationView.AddResources, variant: ModalVariant.Right }
    ],
    currentView: InspirationView.Inspiration
  },
]