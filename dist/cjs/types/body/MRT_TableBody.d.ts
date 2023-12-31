import { type MRT_TableInstance, type MRT_VirtualItem, type MRT_Virtualizer } from '../types';
interface Props<TData extends Record<string, any> = {}> {
    columnVirtualizer?: MRT_Virtualizer<HTMLDivElement, HTMLTableCellElement>;
    enableHover?: boolean;
    isStriped?: boolean | 'odd' | 'even';
    table: MRT_TableInstance<TData>;
    virtualColumns?: MRT_VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
export declare const MRT_TableBody: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export declare const Memo_MRT_TableBody: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
