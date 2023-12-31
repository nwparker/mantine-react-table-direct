import { type Row } from '@tanstack/react-table';
import { type MRT_Row } from './types';
export declare const MRT_SortingFns: {
    fuzzy: <TData extends Record<string, any> = {}>(rowA: Row<TData>, rowB: Row<TData>, columnId: string) => number;
    alphanumeric: import("@tanstack/react-table").SortingFn<any>;
    alphanumericCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
    text: import("@tanstack/react-table").SortingFn<any>;
    textCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
    datetime: import("@tanstack/react-table").SortingFn<any>;
    basic: import("@tanstack/react-table").SortingFn<any>;
};
export declare const rankGlobalFuzzy: <TData extends Record<string, any> = {}>(rowA: MRT_Row<TData>, rowB: MRT_Row<TData>) => number;
