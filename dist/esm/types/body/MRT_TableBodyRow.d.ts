import { type MRT_Row, type MRT_TableInstance, type MRT_VirtualItem, type MRT_Virtualizer } from '../types';
interface Props<TData extends Record<string, any> = {}> {
    columnVirtualizer?: MRT_Virtualizer<HTMLDivElement, HTMLTableCellElement>;
    enableHover?: boolean;
    isStriped?: boolean | 'odd' | 'even';
    measureElement?: (element: HTMLTableRowElement) => void;
    numRows?: number;
    pinnedRowIds?: string[];
    row: MRT_Row<TData>;
    rowIndex: number;
    table: MRT_TableInstance<TData>;
    virtualColumns?: MRT_VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
    virtualRow?: MRT_VirtualItem;
}
export declare const MRT_TableBodyRow: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, measureElement, numRows, row, rowIndex, table, pinnedRowIds, virtualColumns, virtualPaddingLeft, virtualPaddingRight, virtualRow, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export declare const Memo_MRT_TableBodyRow: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, measureElement, numRows, row, rowIndex, table, pinnedRowIds, virtualColumns, virtualPaddingLeft, virtualPaddingRight, virtualRow, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
