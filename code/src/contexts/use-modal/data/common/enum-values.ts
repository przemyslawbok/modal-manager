import { EnumObject } from './enum-object';

export type EnumValues<T extends EnumObject | undefined> = T[keyof T];