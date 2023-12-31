import { type DragEventHandler } from 'react';
import { type ActionIconProps } from '@mantine/core';
import { type HTMLPropsRef, type MRT_TableInstance } from '../types';
interface Props<TData extends Record<string, any> = {}> {
    actionIconProps?: ActionIconProps & HTMLPropsRef<HTMLButtonElement>;
    onDragStart: DragEventHandler<HTMLButtonElement>;
    onDragEnd: DragEventHandler<HTMLButtonElement>;
    table: MRT_TableInstance<TData>;
}
export declare const MRT_GrabHandleButton: <TData extends Record<string, any> = {}>({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal }, localization: { move }, }, }, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
