export enum ModalType {
  Edit,
  Inspiration,
  AddResources,
  AddMoodboards,
  Developments,
}

export enum ModalVariant {
  Centered,
  Right,
  Bottom
}

export interface ModalParams {
  type?: ModalType,
  variant?: ModalVariant
}