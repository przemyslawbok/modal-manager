import { ModalParams, ModalType, ModalVariant } from '../data';

export const PAGE_CONFIG: ModalParams[] = [
  { type: ModalType.Edit, variant: ModalVariant.Centered },
  { type: ModalType.Developments, variant: ModalVariant.Bottom },
  { type: ModalType.Inspiration, variant: ModalVariant.Right },
  { type: ModalType.AddMoodboards, variant: ModalVariant.Right },
  { type: ModalType.AddResources, variant: ModalVariant.Right }
]