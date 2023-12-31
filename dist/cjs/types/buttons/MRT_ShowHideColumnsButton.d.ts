import { type ActionIconProps } from '@mantine/core';
import { type HTMLPropsRef, type MRT_TableInstance } from '../types';
interface Props<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
export declare const MRT_ShowHideColumnsButton: <TData extends Record<string, any> = {}>({ table, title, ...rest }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
