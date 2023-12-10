import { FC } from 'react';

export enum ModalType {
  Edit,
  Inspiration,
  Developments,
}

export enum ModalVariant {
  Centered,
  Right,
  Bottom
}

export enum InspirationViews {
  Inspiration = "INSPIRATION",
  AddMoodboards = "ADD_MOODBOARDS",
  AddResources = "ADD_RESOURCES"
}

export interface ViewParams {
  title?: string,
  view: string,
  variant: ModalVariant
}

export interface ModalParams {
  title?: string,
  type?: ModalType,
  variant?: ModalVariant
  currentView?: string;
  views?: ViewParams[]
}