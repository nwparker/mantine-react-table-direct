import { type ReactNode } from 'react';
import { type Renderable, type Row } from '@tanstack/react-table';
import { type MRT_AggregationFns } from './aggregationFns';
import { type MRT_FilterFns } from './filterFns';
import { type MRT_SortingFns } from './sortingFns';
import { type MantineTheme } from '@mantine/core';
import { type MantineShade, type MRT_Column, type MRT_ColumnDef, type MRT_ColumnOrderState, type MRT_DefinedColumnDef, type MRT_DisplayColumnIds, type MRT_FilterOption, type MRT_GroupingState, type MRT_Row, type MRT_TableInstance, type MRT_TableOptions } from './types';
export declare const getColumnId: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => string;
export declare const getAllLeafColumnDefs: <TData extends Record<string, any> = {}>(columns: MRT_ColumnDef<TData>[]) => MRT_ColumnDef<TData>[];
export declare const prepareColumns: <TData extends Record<string, any> = {}>({ aggregationFns, columnDefs, columnFilterFns, defaultDisplayColumn, filterFns, sortingFns, }: {
    aggregationFns: {
        sum: import("@tanstack/react-table").AggregationFn<any>;
        min: import("@tanstack/react-table").AggregationFn<any>;
        max: import("@tanstack/react-table").AggregationFn<any>;
        extent: import("@tanstack/react-table").AggregationFn<any>;
        mean: import("@tanstack/react-table").AggregationFn<any>;
        median: import("@tanstack/react-table").AggregationFn<any>;
        unique: import("@tanstack/react-table").AggregationFn<any>;
        uniqueCount: import("@tanstack/react-table").AggregationFn<any>;
        count: import("@tanstack/react-table").AggregationFn<any>;
    } & Record<string, import("@tanstack/react-table").AggregationFn<any>>;
    columnDefs: MRT_ColumnDef<TData>[];
    columnFilterFns: {
        [key: string]: MRT_FilterOption;
    };
    defaultDisplayColumn: Partial<MRT_ColumnDef<TData>>;
    filterFns: {
        between: {
            <TData_1 extends Record<string, any> = {}>(row: Row<TData_1>, id: string, filterValues: [string | number, string | number]): boolean;
            autoRemove(val: any): boolean;
        };
        betweenInclusive: {
            <TData_2 extends Record<string, any> = {}>(row: Row<TData_2>, id: string, filterValues: [string | number, string | number]): boolean;
            autoRemove(val: any): boolean;
        };
        contains: {
            <TData_3 extends Record<string, any> = {}>(row: Row<TData_3>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        empty: {
            <TData_4 extends Record<string, any> = {}>(row: Row<TData_4>, id: string, _filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        endsWith: {
            <TData_5 extends Record<string, any> = {}>(row: Row<TData_5>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        equals: {
            <TData_6 extends Record<string, any> = {}>(row: Row<TData_6>, id: string, filterValue: string | number | null): boolean;
            autoRemove(val: any): boolean;
        };
        fuzzy: {
            <TData_7 extends Record<string, any> = {}>(row: Row<TData_7>, columnId: string, filterValue: string | number, addMeta: (item: import("@tanstack/match-sorter-utils").RankingInfo) => void): boolean;
            autoRemove(val: any): boolean;
        };
        greaterThan: {
            <TData_8 extends Record<string, any> = {}>(row: Row<TData_8>, id: string, filterValue: string | number | null): boolean;
            autoRemove(val: any): boolean;
        };
        greaterThanOrEqualTo: {
            <TData_9 extends Record<string, any> = {}>(row: Row<TData_9>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        lessThan: {
            <TData_10 extends Record<string, any> = {}>(row: Row<TData_10>, id: string, filterValue: string | number | null): boolean;
            autoRemove(val: any): boolean;
        };
        lessThanOrEqualTo: {
            <TData_11 extends Record<string, any> = {}>(row: Row<TData_11>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        notEmpty: {
            <TData_12 extends Record<string, any> = {}>(row: Row<TData_12>, id: string, _filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        notEquals: {
            <TData_13 extends Record<string, any> = {}>(row: Row<TData_13>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        startsWith: {
            <TData_14 extends Record<string, any> = {}>(row: Row<TData_14>, id: string, filterValue: string | number): boolean;
            autoRemove(val: any): boolean;
        };
        includesString: import("@tanstack/react-table").FilterFn<any>;
        includesStringSensitive: import("@tanstack/react-table").FilterFn<any>;
        equalsString: import("@tanstack/react-table").FilterFn<any>;
        arrIncludes: import("@tanstack/react-table").FilterFn<any>;
        arrIncludesAll: import("@tanstack/react-table").FilterFn<any>;
        arrIncludesSome: import("@tanstack/react-table").FilterFn<any>;
        weakEquals: import("@tanstack/react-table").FilterFn<any>;
        inNumberRange: import("@tanstack/react-table").FilterFn<any>;
    } & Record<string, import("@tanstack/react-table").FilterFn<any>>;
    sortingFns: {
        fuzzy: <TData_15 extends Record<string, any> = {}>(rowA: Row<TData_15>, rowB: Row<TData_15>, columnId: string) => number;
        alphanumeric: import("@tanstack/react-table").SortingFn<any>;
        alphanumericCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
        text: import("@tanstack/react-table").SortingFn<any>;
        textCaseSensitive: import("@tanstack/react-table").SortingFn<any>;
        datetime: import("@tanstack/react-table").SortingFn<any>;
        basic: import("@tanstack/react-table").SortingFn<any>;
    } & Record<string, import("@tanstack/react-table").SortingFn<any>>;
}) => MRT_DefinedColumnDef<TData>[];
export declare const reorderColumn: <TData extends Record<string, any> = {}>(draggedColumn: MRT_Column<TData>, targetColumn: MRT_Column<TData>, columnOrder: MRT_ColumnOrderState) => MRT_ColumnOrderState;
export declare const showExpandColumn: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>, grouping?: MRT_GroupingState) => boolean;
export declare const getLeadingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => MRT_DisplayColumnIds[];
export declare const getTrailingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => MRT_DisplayColumnIds[];
export declare const getDefaultColumnOrderIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => string[];
export declare const getDefaultColumnFilterFn: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => MRT_FilterOption;
export declare const getIsFirstColumn: <TData extends Record<string, any>>(column: MRT_Column<TData>, table: MRT_TableInstance<TData>) => boolean;
export declare const getIsLastColumn: <TData extends Record<string, any>>(column: MRT_Column<TData>, table: MRT_TableInstance<TData>) => boolean;
export declare const getIsLastLeftPinnedColumn: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, column: MRT_Column<TData>) => boolean;
export declare const getIsFirstRightPinnedColumn: <TData extends Record<string, any> = {}>(column: MRT_Column<TData>) => boolean;
export declare const getTotalRight: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, column: MRT_Column<TData>) => number;
export declare const getCanRankRows: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>) => boolean | undefined;
export declare const MRT_DefaultColumn: {
    readonly filterVariant: "text";
    readonly minSize: 40;
    readonly maxSize: 1000;
    readonly size: 180;
};
export declare const MRT_DefaultDisplayColumn: {
    readonly columnDefType: "display";
    readonly enableClickToCopy: false;
    readonly enableColumnActions: false;
    readonly enableColumnDragging: false;
    readonly enableColumnFilter: false;
    readonly enableColumnOrdering: false;
    readonly enableEditing: false;
    readonly enableGlobalFilter: false;
    readonly enableGrouping: false;
    readonly enableHiding: false;
    readonly enableResizing: false;
    readonly enableSorting: false;
};
export declare function parseFromValuesOrFunc<T, U>(fn: T | ((arg: U) => T) | undefined, arg: U): T | undefined;
export declare const parseCSSVarId: (id: string) => string;
export declare const getPrimaryShade: (theme: MantineTheme) => number;
export declare const getPrimaryColor: (theme: MantineTheme, shade?: MantineShade) => string;
export declare const flexRender: (Comp: Renderable<any>, props: any) => ReactNode | JSX.Element;
export declare const createRow: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, originalRow?: TData | undefined) => MRT_Row<TData>;
