import { type RefObject } from 'react';
import { type MRT_Cell, type MRT_TableInstance, type MRT_VirtualItem } from '../types';
interface Props<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    isStriped?: boolean | 'odd' | 'even';
    measureElement?: (element: HTMLTableCellElement) => void;
    numRows?: number;
    rowIndex: number;
    rowRef: RefObject<HTMLTableRowElement>;
    table: MRT_TableInstance<TData>;
    virtualCell?: MRT_VirtualItem;
}
export declare const MRT_TableBodyCell: <TData extends Record<string, any> = {}>({ cell, isStriped, measureElement, numRows, rowIndex, rowRef, table, virtualCell, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export declare const Memo_MRT_TableBodyCell: <TData extends Record<string, any> = {}>({ cell, isStriped, measureElement, numRows, rowIndex, rowRef, table, virtualCell, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
