import { ModalConfig } from '@/contexts/use-modal';
import {  ContentType, ModalVariant, Permission } from '../enums';

export type CustomModalConfig = ModalConfig<typeof ContentType, typeof ModalVariant, typeof Permission>;