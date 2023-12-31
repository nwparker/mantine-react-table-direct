import { type RankingInfo } from '@tanstack/match-sorter-utils';
import { type Row } from '@tanstack/react-table';
import type { MRT_FilterOption, MRT_Localization } from './types';
export declare const MRT_FilterFns: {
    between: {
        <TData extends Record<string, any> = {}>(row: Row<TData>, id: string, filterValues: [string | number, string | number]): boolean;
        autoRemove(val: any): boolean;
    };
    betweenInclusive: {
        <TData_1 extends Record<string, any> = {}>(row: Row<TData_1>, id: string, filterValues: [string | number, string | number]): boolean;
        autoRemove(val: any): boolean;
    };
    contains: {
        <TData_2 extends Record<string, any> = {}>(row: Row<TData_2>, id: string, filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    empty: {
        <TData_3 extends Record<string, any> = {}>(row: Row<TData_3>, id: string, _filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    endsWith: {
        <TData_4 extends Record<string, any> = {}>(row: Row<TData_4>, id: string, filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    equals: {
        <TData_5 extends Record<string, any> = {}>(row: Row<TData_5>, id: string, filterValue: string | number | null): boolean;
        autoRemove(val: any): boolean;
    };
    fuzzy: {
        <TData_6 extends Record<string, any> = {}>(row: Row<TData_6>, columnId: string, filterValue: string | number, addMeta: (item: RankingInfo) => void): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThan: {
        <TData_7 extends Record<string, any> = {}>(row: Row<TData_7>, id: string, filterValue: string | number | null): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThanOrEqualTo: {
        <TData_8 extends Record<string, any> = {}>(row: Row<TData_8>, id: string, filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    lessThan: {
        <TData_9 extends Record<string, any> = {}>(row: Row<TData_9>, id: string, filterValue: string | number | null): boolean;
        autoRemove(val: any): boolean;
    };
    lessThanOrEqualTo: {
        <TData_10 extends Record<string, any> = {}>(row: Row<TData_10>, id: string, filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    notEmpty: {
        <TData_11 extends Record<string, any> = {}>(row: Row<TData_11>, id: string, _filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    notEquals: {
        <TData_12 extends Record<string, any> = {}>(row: Row<TData_12>, id: string, filterValue: string | number): boolean;
        autoRemove(val: any): boolean;
    };
    startsWith: {
        <TData_13 extends Record<string, any> = {}>(row: Row<TData_13>, id: string, filterValue: string | number): boolean;
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
};
export declare function localizedFilterOption(localization: MRT_Localization, option: MRT_FilterOption): string;
