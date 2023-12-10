import { ModalParams, ModalType, ModalVariant, InspirationViews } from '../data';

export const PAGE_CONFIG: ModalParams[] = [
  { type: ModalType.Edit, variant: ModalVariant.Centered },
  { type: ModalType.Developments, variant: ModalVariant.Bottom },
  { type: ModalType.Inspiration, variant: ModalVariant.Right, 
    views: [ 
      { view: InspirationViews.Inspiration, variant: ModalVariant.Right }, 
      { view: InspirationViews.AddMoodboards, variant: ModalVariant.Right }, 
      { view: InspirationViews.AddResources, variant: ModalVariant.Right }
    ],
    currentView: InspirationViews.Inspiration
  },
]