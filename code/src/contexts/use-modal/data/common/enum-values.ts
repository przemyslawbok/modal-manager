import { EnumObject } from './enum-object';

export type EnumValues<T extends EnumObject> = T[keyof T];