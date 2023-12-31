/// <reference types="react" />
import { type MRT_Row, type MRT_TableInstance, type MRT_VirtualItem } from '../types';
interface Props<TData extends Record<string, any> = {}> {
    parentRowRef: React.RefObject<HTMLTableRowElement>;
    row: MRT_Row<TData>;
    rowIndex: number;
    table: MRT_TableInstance<TData>;
    virtualRow?: MRT_VirtualItem;
}
export declare const MRT_TableDetailPanel: <TData extends Record<string, any> = {}>({ parentRowRef, row, rowIndex, table, virtualRow, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
