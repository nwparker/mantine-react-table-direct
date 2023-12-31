import { type ActionIconProps } from '@mantine/core';
import { type HTMLPropsRef, type MRT_TableInstance } from '../types';
interface Props<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
export declare const MRT_ToggleFiltersButton: <TData extends Record<string, any> = {}>({ table: { getState, options: { icons: { IconFilter, IconFilterOff }, localization: { showHideFilters }, }, setShowColumnFilters, }, title, ...rest }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
