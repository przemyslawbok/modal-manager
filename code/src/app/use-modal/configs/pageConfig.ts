import { ModalParams, ModalType, ModalVariant, InspirationViews } from '../data';

export const PAGE_CONFIG: ModalParams[] = [
  { title: "Edit modal", type: ModalType.Edit, variant: ModalVariant.Centered },
  { title: "Developments modal", type: ModalType.Developments, variant: ModalVariant.Bottom },
  { type: ModalType.Inspiration, variant: ModalVariant.Right, 
    views: [ 
      { title: "Inspiration modal", view: InspirationViews.Inspiration, variant: ModalVariant.Right }, 
      { title: "AddMoodboards modal", view: InspirationViews.AddMoodboards, variant: ModalVariant.Right }, 
      { title: "AddResources modal", view: InspirationViews.AddResources, variant: ModalVariant.Right }
    ],
    currentView: InspirationViews.Inspiration
  },
]