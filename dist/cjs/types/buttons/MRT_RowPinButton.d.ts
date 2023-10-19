import { type RowPinningPosition } from '@tanstack/react-table';
import { type MRT_Row, type MRT_TableInstance } from '../types';
interface Props<TData extends Record<string, any>> {
    pinningPosition: RowPinningPosition;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
export declare const MRT_RowPinButton: <TData extends Record<string, any>>({ pinningPosition, row, table, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
