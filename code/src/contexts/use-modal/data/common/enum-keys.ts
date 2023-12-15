import { EnumObject } from './enum-object';

export type EnumKeys<T extends EnumObject | undefined> = keyof T;