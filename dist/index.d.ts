/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { HTMLProps, MutableRefObject, Dispatch, SetStateAction, ReactNode, RefObject, DragEventHandler, MouseEvent } from 'react';
import { PaginationProps, ActionIconProps, UnstyledButtonProps, MultiSelectProps, TextInputProps, AutocompleteProps, RangeSliderProps, SelectProps, BoxProps, ModalProps, CheckboxProps, HighlightProps, LoadingOverlayProps, ProgressProps, PaperProps, RadioProps, SwitchProps, SkeletonProps, TableProps, BadgeProps, AlertProps, MantineTheme } from '@mantine/core';
import { DateInputProps } from '@mantine/dates';
import * as _tanstack_react_table from '@tanstack/react-table';
import { Row, Table, TableState, ColumnDef, DeepKeys, Column, Header, HeaderGroup, Cell, AggregationFn, SortingFn, FilterFn, TableOptions, OnChangeFn, ColumnOrderState, GroupingState, Renderable } from '@tanstack/react-table';
export { ColumnFiltersState as MRT_ColumnFiltersState, ColumnOrderState as MRT_ColumnOrderState, ColumnPinningState as MRT_ColumnPinningState, ColumnSizingInfoState as MRT_ColumnSizingInfoState, ColumnSizingState as MRT_ColumnSizingState, ExpandedState as MRT_ExpandedState, GroupingState as MRT_GroupingState, PaginationState as MRT_PaginationState, RowSelectionState as MRT_RowSelectionState, SortingState as MRT_SortingState, Updater as MRT_Updater, VisibilityState as MRT_VisibilityState } from '@tanstack/react-table';
import { Virtualizer, VirtualizerOptions, VirtualItem } from '@tanstack/react-virtual';
export { VirtualItem as MRT_VirtualItem, Virtualizer as MRT_Virtualizer, VirtualizerOptions as MRT_VirtualizerOptions } from '@tanstack/react-virtual';
import * as _tanstack_match_sorter_utils from '@tanstack/match-sorter-utils';
import { RankingInfo } from '@tanstack/match-sorter-utils';
import * as _tabler_icons_react from '@tabler/icons-react';

declare const MRT_AggregationFns: {
    sum: _tanstack_react_table.AggregationFn<any>;
    min: _tanstack_react_table.AggregationFn<any>;
    max: _tanstack_react_table.AggregationFn<any>;
    extent: _tanstack_react_table.AggregationFn<any>;
    mean: _tanstack_react_table.AggregationFn<any>;
    median: _tanstack_react_table.AggregationFn<any>;
    unique: _tanstack_react_table.AggregationFn<any>;
    uniqueCount: _tanstack_react_table.AggregationFn<any>;
    count: _tanstack_react_table.AggregationFn<any>;
};

declare const MRT_FilterFns: {
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
    includesString: _tanstack_react_table.FilterFn<any>;
    includesStringSensitive: _tanstack_react_table.FilterFn<any>;
    equalsString: _tanstack_react_table.FilterFn<any>;
    arrIncludes: _tanstack_react_table.FilterFn<any>;
    arrIncludesAll: _tanstack_react_table.FilterFn<any>;
    arrIncludesSome: _tanstack_react_table.FilterFn<any>;
    weakEquals: _tanstack_react_table.FilterFn<any>;
    inNumberRange: _tanstack_react_table.FilterFn<any>;
};
declare function localizedFilterOption(localization: MRT_Localization, option: MRT_FilterOption): string;

declare const MRT_SortingFns: {
    fuzzy: <TData extends Record<string, any> = {}>(rowA: Row<TData>, rowB: Row<TData>, columnId: string) => number;
    alphanumeric: _tanstack_react_table.SortingFn<any>;
    alphanumericCaseSensitive: _tanstack_react_table.SortingFn<any>;
    text: _tanstack_react_table.SortingFn<any>;
    textCaseSensitive: _tanstack_react_table.SortingFn<any>;
    datetime: _tanstack_react_table.SortingFn<any>;
    basic: _tanstack_react_table.SortingFn<any>;
};
declare const rankGlobalFuzzy: <TData extends Record<string, any> = {}>(rowA: MRT_Row<TData>, rowB: MRT_Row<TData>) => number;

declare const MRT_Default_Icons: {
    readonly IconArrowAutofitContent: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconArrowsSort: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconBaselineDensityLarge: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconBaselineDensityMedium: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconBaselineDensitySmall: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconBoxMultiple: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronDown: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronLeft: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronLeftPipe: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronRight: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronRightPipe: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconChevronsDown: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconCircleX: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconClearAll: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconColumns: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconDeviceFloppy: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconDots: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconDotsVertical: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconEdit: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconEyeOff: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconFilter: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconFilterCog: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconFilterOff: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconGripHorizontal: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconMaximize: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconMinimize: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconPinned: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconPinnedOff: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconSearch: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconSearchOff: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconSortAscending: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconSortDescending: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
    readonly IconX: (props: _tabler_icons_react.TablerIconsProps) => JSX.Element;
};
type MRT_Icons = Record<keyof typeof MRT_Default_Icons, any>;

type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown;
type Xor<A, B> = Prettify<A & {
    [k in keyof B]?: never;
}> | Prettify<B & {
    [k in keyof A]?: never;
}>;
type HTMLPropsRef<T extends HTMLElement> = Omit<HTMLProps<T>, 'color' | 'size' | 'type' | 'ref' | 'data' | 'label' | 'style'> & {
    ref?: MutableRefObject<T | null> | null;
};
type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ColumnAlignment = {
    align?: 'left' | 'center' | 'right';
};
type MRT_PaginationProps = Partial<PaginationProps> & {
    rowsPerPageOptions?: string[];
    showRowsPerPage?: boolean;
};
type MRT_DensityState = 'xs' | 'md' | 'xl';
type MRT_ColumnFilterFnsState = Record<string, MRT_FilterOption>;

interface MRT_Localization {
    actions: string;
    and: string;
    cancel: string;
    changeFilterMode: string;
    changeSearchMode: string;
    clearFilter: string;
    clearSearch: string;
    clearSort: string;
    clickToCopy: string;
    collapse: string;
    collapseAll: string;
    columnActions: string;
    copiedToClipboard: string;
    create?: string;
    dropToGroupBy: string;
    edit: string;
    expand: string;
    expandAll: string;
    filterArrIncludes: string;
    filterArrIncludesAll: string;
    filterArrIncludesSome: string;
    filterBetween: string;
    filterBetweenInclusive: string;
    filterByColumn: string;
    filterContains: string;
    filterEmpty: string;
    filterEndsWith: string;
    filterEquals: string;
    filterEqualsString: string;
    filterFuzzy: string;
    filterGreaterThan: string;
    filterGreaterThanOrEqualTo: string;
    filterIncludesString: string;
    filterIncludesStringSensitive: string;
    filteringByColumn: string;
    filterInNumberRange: string;
    filterLessThan: string;
    filterLessThanOrEqualTo: string;
    filterMode: string;
    filterNotEmpty: string;
    filterNotEquals: string;
    filterStartsWith: string;
    filterWeakEquals: string;
    goToFirstPage: string;
    goToLastPage: string;
    goToNextPage: string;
    goToPreviousPage: string;
    grab: string;
    groupByColumn: string;
    groupedBy: string;
    hideAll: string;
    hideColumn: string;
    max: string;
    min: string;
    move: string;
    noRecordsToDisplay: string;
    noResultsFound: string;
    of: string;
    or: string;
    pin: string;
    pinToLeft: string;
    pinToRight: string;
    resetColumnSize: string;
    resetOrder: string;
    rowActions: string;
    rowNumber: string;
    rowNumbers: string;
    rowsPerPage: string;
    save: string;
    search: string;
    select: string;
    selectedCountOfRowCountRowsSelected: string;
    showAll: string;
    showAllColumns: string;
    showHideColumns: string;
    showHideFilters: string;
    showHideSearch: string;
    sortByColumnAsc: string;
    sortByColumnDesc: string;
    sortedByColumnAsc: string;
    sortedByColumnDesc: string;
    thenBy: string;
    toggleDensity: string;
    toggleFullScreen: string;
    toggleSelectAll: string;
    toggleSelectRow: string;
    toggleVisibility: string;
    ungroupByColumn: string;
    unpin: string;
    unpinAll: string;
}
interface MRT_RowModel<TData extends Record<string, any> = {}> {
    flatRows: MRT_Row<TData>[];
    rows: MRT_Row<TData>[];
    rowsById: {
        [key: string]: MRT_Row<TData>;
    };
}
type MRT_TableInstance<TData extends Record<string, any> = {}> = Omit<Table<TData>, 'getAllColumns' | 'getAllFlatColumns' | 'getAllLeafColumns' | 'getBottomRows' | 'getCenterLeafColumns' | 'getCenterRows' | 'getColumn' | 'getExpandedRowModel' | 'getFlatHeaders' | 'getHeaderGroups' | 'getLeftLeafColumns' | 'getPaginationRowModel' | 'getPreFilteredRowModel' | 'getPrePaginationRowModel' | 'getRightLeafColumns' | 'getRowModel' | 'getSelectedRowModel' | 'getState' | 'getTopRows' | 'options'> & {
    getAllColumns: () => MRT_Column<TData>[];
    getAllFlatColumns: () => MRT_Column<TData>[];
    getAllLeafColumns: () => MRT_Column<TData>[];
    getBottomRows: () => MRT_Row<TData>[];
    getCenterLeafColumns: () => MRT_Column<TData>[];
    getCenterRows: () => MRT_Row<TData>[];
    getColumn: (columnId: string) => MRT_Column<TData>;
    getExpandedRowModel: () => MRT_RowModel<TData>;
    getFlatHeaders: () => MRT_Header<TData>[];
    getHeaderGroups: () => MRT_HeaderGroup<TData>[];
    getLeftLeafColumns: () => MRT_Column<TData>[];
    getPaginationRowModel: () => MRT_RowModel<TData>;
    getPreFilteredRowModel: () => MRT_RowModel<TData>;
    getPrePaginationRowModel: () => MRT_RowModel<TData>;
    getRightLeafColumns: () => MRT_Column<TData>[];
    getRowModel: () => MRT_RowModel<TData>;
    getSelectedRowModel: () => MRT_RowModel<TData>;
    getState: () => MRT_TableState<TData>;
    getTopRows: () => MRT_Row<TData>[];
    options: MRT_DefinedTableOptions<TData>;
    refs: {
        bottomToolbarRef: MutableRefObject<HTMLDivElement>;
        editInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
        filterInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
        searchInputRef: MutableRefObject<HTMLInputElement>;
        tableContainerRef: MutableRefObject<HTMLDivElement>;
        tableHeadCellRefs: MutableRefObject<Record<string, HTMLTableCellElement>>;
        tablePaperRef: MutableRefObject<HTMLDivElement>;
        topToolbarRef: MutableRefObject<HTMLDivElement>;
        tableFooterRef: MutableRefObject<HTMLTableSectionElement>;
        tableHeadRef: MutableRefObject<HTMLTableSectionElement>;
    };
    setCreatingRow: Dispatch<SetStateAction<MRT_Row<TData> | null | true>>;
    setColumnFilterFns: Dispatch<SetStateAction<MRT_ColumnFilterFnsState>>;
    setDensity: Dispatch<SetStateAction<MRT_DensityState>>;
    setDraggingColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
    setDraggingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
    setEditingCell: Dispatch<SetStateAction<MRT_Cell<TData> | null>>;
    setEditingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
    setGlobalFilterFn: Dispatch<SetStateAction<MRT_FilterOption>>;
    setHoveredColumn: Dispatch<SetStateAction<MRT_Column<TData> | {
        id: string;
    } | null>>;
    setHoveredRow: Dispatch<SetStateAction<MRT_Row<TData> | {
        id: string;
    } | null>>;
    setIsFullScreen: Dispatch<SetStateAction<boolean>>;
    setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
    setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
    setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
    setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
};
type MRT_DefinedTableOptions<TData extends Record<string, any> = {}> = MRT_TableOptions<TData> & {
    localization: MRT_Localization;
    icons: MRT_Icons;
};
type MRT_TableState<TData extends Record<string, any> = {}> = Prettify<TableState & {
    columnFilterFns: MRT_ColumnFilterFnsState;
    creatingRow: MRT_Row<TData> | null;
    density: MRT_DensityState;
    draggingColumn: MRT_Column<TData> | null;
    draggingRow: MRT_Row<TData> | null;
    editingCell: MRT_Cell<TData> | null;
    editingRow: MRT_Row<TData> | null;
    globalFilterFn: MRT_FilterOption;
    hoveredColumn: MRT_Column<TData> | {
        id: string;
    } | null;
    hoveredRow: MRT_Row<TData> | {
        id: string;
    } | null;
    isFullScreen: boolean;
    isLoading: boolean;
    isSaving: boolean;
    showAlertBanner: boolean;
    showColumnFilters: boolean;
    showGlobalFilter: boolean;
    showLoadingOverlay: boolean;
    showProgressBars: boolean;
    showSkeletons: boolean;
    showToolbarDropZone: boolean;
}>;
type MRT_ColumnDef<TData extends Record<string, any> = {}> = Omit<ColumnDef<TData, unknown>, 'accessorKey' | 'aggregatedCell' | 'aggregationFn' | 'cell' | 'columns' | 'filterFn' | 'footer' | 'header' | 'id' | 'sortingFn'> & {
    AggregatedCell?: (props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    Cell?: (props: {
        cell: MRT_Cell<TData>;
        renderedCellValue: number | string | ReactNode;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        rowRef?: RefObject<HTMLTableRowElement>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    Edit?: (props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    Filter?: (props: {
        column: MRT_Column<TData>;
        header: MRT_Header<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    Footer?: ReactNode | ((props: {
        column: MRT_Column<TData>;
        footer: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode);
    GroupedCell?: (props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    Header?: ReactNode | ((props: {
        column: MRT_Column<TData>;
        header: MRT_Header<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode);
    PlaceholderCell?: (props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     * Specify a function here to point to the correct property in the data object.
     *
     * @example accessorFn: (row) => row.username
     */
    accessorFn?: (originalRow: TData) => any;
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     * Specify which key in the row this column should use to access the correct data.
     * Also supports Deep Key Dot Notation.
     *
     * @example accessorKey: 'username' //simple
     * @example accessorKey: 'name.firstName' //deep key dot notation
     */
    accessorKey?: (string & {}) | DeepKeys<TData>;
    aggregationFn?: MRT_AggregationFn<TData> | Array<MRT_AggregationFn<TData>>;
    /**
     * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
     * Leave this blank if you are just creating a normal data column.
     *
     * @default 'data'
     *
     * @example columnDefType: 'display'
     */
    columnDefType?: 'data' | 'display' | 'group';
    columnFilterModeOptions?: Array<LiteralUnion<string & MRT_FilterOption>> | null;
    columns?: MRT_ColumnDef<TData>[];
    editVariant?: 'text' | 'select';
    enableClickToCopy?: boolean;
    enableColumnActions?: boolean;
    enableColumnDragging?: boolean;
    enableColumnFilterModes?: boolean;
    enableColumnOrdering?: boolean;
    enableEditing?: boolean | ((row: MRT_Row<TData>) => boolean);
    enableFilterMatchHighlighting?: boolean;
    filterFn?: MRT_FilterFn<TData>;
    filterVariant?: 'autocomplete' | 'checkbox' | 'date' | 'date-range' | 'multi-select' | 'range' | 'range-slider' | 'select' | 'text';
    /**
     * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
     */
    footer?: string;
    /**
     * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
     */
    header: string;
    /**
     * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
     *
     * If you have also specified an `accessorFn`, MRT still needs to have a valid `id` to be able to identify the column uniquely.
     *
     * `id` defaults to the `accessorKey` or `header` if not specified.
     *
     * @default gets set to the same value as `accessorKey` by default
     */
    id?: LiteralUnion<string & keyof TData>;
    mantineColumnActionsButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineEditSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineEditTextInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineFilterAutocompleteProps?: (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineFilterDateInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | ((props: {
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineTableBodyCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    mantineTableFooterCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    mantineTableHeadCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    renderColumnActionsMenuItems?: (props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        internalColumnMenuItems: ReactNode;
    }) => ReactNode;
    renderColumnFilterModeMenuItems?: (props: {
        column: MRT_Column<TData>;
        internalFilterOptions: MRT_InternalFilterOption[];
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    sortingFn?: MRT_SortingFn<TData>;
};
type MRT_DefinedColumnDef<TData extends Record<string, any> = {}> = Omit<MRT_ColumnDef<TData>, 'id' | 'defaultDisplayColumn'> & {
    defaultDisplayColumn: Partial<MRT_ColumnDef<TData>>;
    id: string;
    cell: ColumnDef<TData, unknown>['cell'];
    header: ColumnDef<TData, unknown>['header'];
    _filterFn: MRT_FilterOption;
};
type MRT_Column<TData extends Record<string, any> = {}> = Omit<Column<TData, unknown>, 'header' | 'footer' | 'columns' | 'columnDef' | 'filterFn'> & {
    columnDef: MRT_DefinedColumnDef<TData>;
    columns?: MRT_Column<TData>[];
    filterFn?: MRT_FilterFn<TData>;
    footer: string;
    header: string;
};
type MRT_Header<TData extends Record<string, any> = {}> = Omit<Header<TData, unknown>, 'column'> & {
    column: MRT_Column<TData>;
};
type MRT_HeaderGroup<TData extends Record<string, any> = {}> = Omit<HeaderGroup<TData>, 'headers'> & {
    headers: MRT_Header<TData>[];
};
type MRT_Row<TData extends Record<string, any> = {}> = Omit<Row<TData>, 'getVisibleCells' | 'getAllCells' | 'subRows' | '_valuesCache'> & {
    getAllCells: () => MRT_Cell<TData>[];
    getVisibleCells: () => MRT_Cell<TData>[];
    subRows?: MRT_Row<TData>[];
    _valuesCache: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
};
type MRT_Cell<TData extends Record<string, any> = {}> = Omit<Cell<TData, unknown>, 'column' | 'row'> & {
    column: MRT_Column<TData>;
    row: MRT_Row<TData>;
};
type MRT_AggregationOption = string & keyof typeof MRT_AggregationFns;
type MRT_AggregationFn<TData extends Record<string, any> = {}> = AggregationFn<TData> | MRT_AggregationOption;
type MRT_SortingOption = LiteralUnion<string & keyof typeof MRT_SortingFns>;
type MRT_SortingFn<TData extends Record<string, any> = {}> = SortingFn<TData> | MRT_SortingOption;
type MRT_FilterOption = LiteralUnion<string & keyof typeof MRT_FilterFns>;
type MRT_FilterFn<TData extends Record<string, any> = {}> = FilterFn<TData> | MRT_FilterOption;
type MRT_InternalFilterOption = {
    divider: boolean;
    label: string;
    option: string;
    symbol: string;
};
type MRT_DisplayColumnIds = 'mrt-row-actions' | 'mrt-row-drag' | 'mrt-row-expand' | 'mrt-row-numbers' | 'mrt-row-pin' | 'mrt-row-select';
type MRT_CreateTableFeature<TData extends Record<string, any> = {}, TFeature = any> = (table: MRT_TableInstance<TData>) => TFeature;
/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 *
 * See more info on creating columns and data on the official docs site:
 * @link https://www.mantine-react-table.com/docs/getting-started/usage
 *
 * See the full props list on the official docs site:
 * @link https://www.mantine-react-table.com/docs/api/table-options
 */
type MRT_TableOptions<TData extends Record<string, any> = {}> = Omit<Partial<TableOptions<TData>>, 'columns' | 'data' | 'defaultColumn' | 'enableRowSelection' | 'expandRowsFn' | 'getRowId' | 'globalFilterFn' | 'initialState' | 'onStateChange' | 'state'> & {
    columnFilterModeOptions?: Array<LiteralUnion<string & MRT_FilterOption>> | null;
    /**
     * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
     *
     * See more info on creating columns on the official docs site:
     * @link https://www.mantine-react-table.com/docs/guides/data-columns
     * @link https://www.mantine-react-table.com/docs/guides/display-columns
     *
     * See all Columns Options on the official docs site:
     * @link https://www.mantine-react-table.com/docs/api/column-options
     */
    columns: MRT_ColumnDef<TData>[];
    columnVirtualizerInstanceRef?: MutableRefObject<Virtualizer<HTMLDivElement, HTMLTableCellElement> | null>;
    columnVirtualizerOptions?: Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>> | ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>);
    /**
     * Pass your data as an array of objects. Objects can theoretically be any shape, but it's best to keep them consistent.
     *
     * See the usage guide for more info on creating columns and data:
     * @link https://www.mantine-react-table.com/docs/getting-started/usage
     */
    data: TData[];
    /**
     * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` prop to change a default option for all columns.
     */
    defaultColumn?: Partial<MRT_ColumnDef<TData>>;
    /**
     * Change the default options for display columns.
     */
    defaultDisplayColumn?: Partial<MRT_ColumnDef<TData>>;
    displayColumnDefOptions?: Partial<{
        [key in MRT_DisplayColumnIds]: Partial<MRT_ColumnDef<TData>>;
    }>;
    createDisplayMode?: 'modal' | 'row' | 'custom';
    editDisplayMode?: 'modal' | 'row' | 'cell' | 'table' | 'custom';
    columnFilterDisplayMode?: 'subheader' | 'popover' | 'custom';
    paginationDisplayMode?: 'default' | 'pages' | 'custom';
    selectDisplayMode?: 'checkbox' | 'radio' | 'switch';
    enableBottomToolbar?: boolean;
    enableClickToCopy?: boolean;
    enableColumnActions?: boolean;
    enableColumnDragging?: boolean;
    enableColumnFilterModes?: boolean;
    enableColumnOrdering?: boolean;
    enableColumnVirtualization?: boolean;
    enableDensityToggle?: boolean;
    enableEditing?: boolean | ((row: MRT_Row<TData>) => boolean);
    enableExpandAll?: boolean;
    enableFacetedValues?: boolean;
    enableFilterMatchHighlighting?: boolean;
    enableFullScreenToggle?: boolean;
    enableGlobalFilterModes?: boolean;
    enableGlobalFilterRankedResults?: boolean;
    enablePagination?: boolean;
    enableRowActions?: boolean;
    enableRowDragging?: boolean;
    enableRowNumbers?: boolean;
    enableRowOrdering?: boolean;
    enableRowSelection?: boolean | ((row: MRT_Row<TData>) => boolean);
    enableRowVirtualization?: boolean;
    enableSelectAll?: boolean;
    enableStickyFooter?: boolean;
    enableStickyHeader?: boolean;
    enableTableFooter?: boolean;
    enableTableHead?: boolean;
    enableToolbarInternalActions?: boolean;
    enableTopToolbar?: boolean;
    expandRowsFn?: (dataRow: TData) => TData[];
    getRowId?: (originalRow: TData, index: number, parentRow: MRT_Row<TData>) => string | undefined;
    globalFilterFn?: MRT_FilterOption;
    globalFilterModeOptions?: MRT_FilterOption[] | null;
    icons?: Partial<MRT_Icons>;
    initialState?: Partial<MRT_TableState<TData>>;
    /**
     * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
     */
    layoutMode?: 'semantic' | 'grid' | 'grid-no-grow';
    /**
     * Pass in either a locale imported from `mantine-react-table/locales/*` or a custom locale object.
     *
     * See the localization (i18n) guide for more info:
     * @link https://www.mantine-react-table.com/docs/guides/localization
     */
    localization?: Partial<MRT_Localization>;
    mantineBottomToolbarProps?: (HTMLPropsRef<HTMLDivElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & BoxProps);
    mantineColumnActionsButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineCreateRowModalProps?: (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineDetailPanelProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps);
    mantineEditRowModalProps?: (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineEditSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineEditTextInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineExpandAllButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineExpandButtonProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineFilterAutocompleteProps?: (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>) | ((props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
    mantineFilterDateInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | ((props: {
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
        rangeFilterIndex?: number;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineHighlightProps?: (HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>);
    mantineLoadingOverlayProps?: (HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>);
    mantineProgressProps?: (HTMLPropsRef<HTMLDivElement> & ProgressProps) | ((props: {
        isTopToolbar: boolean;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & ProgressProps);
    mantinePaginationProps?: Partial<HTMLPropsRef<HTMLDivElement> & MRT_PaginationProps> | ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<HTMLPropsRef<HTMLDivElement> & MRT_PaginationProps>);
    mantinePaperProps?: (HTMLPropsRef<HTMLDivElement> & PaperProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & PaperProps);
    mantineRowDragHandleProps?: (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineSearchTextInputProps?: (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineSelectAllCheckboxProps?: (HTMLPropsRef<HTMLInputElement> & (CheckboxProps | RadioProps | SwitchProps)) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & (CheckboxProps | RadioProps | SwitchProps));
    mantineSelectCheckboxProps?: (HTMLPropsRef<HTMLInputElement> & (CheckboxProps | RadioProps | SwitchProps)) | ((props: {
        table: MRT_TableInstance<TData>;
        row: MRT_Row<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & (CheckboxProps | RadioProps | SwitchProps));
    mantineSkeletonProps?: (HTMLPropsRef<HTMLDivElement> & SkeletonProps) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & SkeletonProps);
    mantineTableBodyCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        cell: MRT_Cell<TData>;
        column: MRT_Column<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    mantineTableBodyProps?: (HTMLPropsRef<HTMLTableSectionElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & BoxProps);
    mantineTableBodyRowProps?: (HTMLPropsRef<HTMLTableRowElement> & BoxProps) | ((props: {
        isDetailPanel?: boolean;
        row: MRT_Row<TData>;
        staticRowIndex: number;
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & BoxProps);
    mantineTableContainerProps?: (HTMLPropsRef<HTMLDivElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & BoxProps);
    mantineTableFooterCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    mantineTableFooterProps?: (HTMLPropsRef<HTMLTableSectionElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & BoxProps);
    mantineTableFooterRowProps?: (HTMLPropsRef<HTMLTableRowElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
        footerGroup: MRT_HeaderGroup<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & BoxProps);
    mantineTableHeadCellProps?: (HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment) | ((props: {
        table: MRT_TableInstance<TData>;
        column: MRT_Column<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & BoxProps & ColumnAlignment);
    mantineTableHeadProps?: (HTMLPropsRef<HTMLTableSectionElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & BoxProps);
    mantineTableHeadRowProps?: (HTMLPropsRef<HTMLTableRowElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
        headerGroup: MRT_HeaderGroup<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & BoxProps);
    mantineTableProps?: (HTMLPropsRef<HTMLTableElement> & TableProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableElement> & TableProps);
    mantineToolbarAlertBannerBadgeProps?: (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
    mantineToolbarAlertBannerProps?: (HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>);
    mantineTopToolbarProps?: (HTMLPropsRef<HTMLDivElement> & BoxProps) | ((props: {
        table: MRT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & BoxProps);
    /**
     * Memoize cells, rows, or the entire table body to potentially improve render performance.
     *
     * @warning This will break some dynamic rendering features. See the memoization guide for more info:
     * @link https://www.mantine-react-table.com/docs/guides/memoize-components
     */
    memoMode?: 'cells' | 'rows' | 'table-body';
    onCreatingRowCancel?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => void;
    onCreatingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onCreatingRowSave?: (props: {
        exitCreatingMode: () => void;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
        values: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
    }) => void;
    onColumnFilterFnsChange?: OnChangeFn<{
        [key: string]: MRT_FilterOption;
    }>;
    onDensityChange?: OnChangeFn<MRT_DensityState>;
    onDraggingColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
    onDraggingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onEditingCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
    onEditingRowCancel?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => void;
    onEditingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
    onEditingRowSave?: (props: {
        exitEditingMode: () => void;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
        values: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
    }) => Promise<void> | void;
    onGlobalFilterFnChange?: OnChangeFn<MRT_FilterOption>;
    onHoveredColumnChange?: OnChangeFn<MRT_Column<TData> | {
        id: string;
    } | null>;
    onHoveredRowChange?: OnChangeFn<MRT_Row<TData> | {
        id: string;
    } | null>;
    onIsFullScreenChange?: OnChangeFn<boolean>;
    onShowAlertBannerChange?: OnChangeFn<boolean>;
    onShowColumnFiltersChange?: OnChangeFn<boolean>;
    onShowGlobalFilterChange?: OnChangeFn<boolean>;
    onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
    positionActionsColumn?: 'first' | 'last';
    positionExpandColumn?: 'first' | 'last';
    positionGlobalFilter?: 'left' | 'right' | 'none';
    positionPagination?: 'bottom' | 'top' | 'both' | 'none';
    positionToolbarAlertBanner?: 'bottom' | 'top' | 'head-overlay' | 'none';
    positionToolbarDropZone?: 'bottom' | 'top' | 'none' | 'both';
    renderBottomToolbar?: ReactNode | ((props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode);
    renderBottomToolbarCustomActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderCreateRowModalContent?: (props: {
        internalEditComponents: ReactNode[];
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderColumnActionsMenuItems?: (props: {
        column: MRT_Column<TData>;
        table: MRT_TableInstance<TData>;
        internalColumnMenuItems: ReactNode;
    }) => ReactNode;
    renderColumnFilterModeMenuItems?: (props: {
        column: MRT_Column<TData>;
        internalFilterOptions: MRT_InternalFilterOption[];
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderDetailPanel?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderEditRowModalContent?: (props: {
        internalEditComponents: ReactNode[];
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderGlobalFilterModeMenuItems?: (props: {
        internalFilterOptions: MRT_InternalFilterOption[];
        onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderEmptyRowsFallback?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderRowActionMenuItems?: (props: {
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderRowActions?: (props: {
        cell: MRT_Cell<TData>;
        row: MRT_Row<TData>;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderToolbarAlertBannerContent?: (props: {
        groupedAlert: ReactNode | null;
        selectedAlert: ReactNode | null;
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderToolbarInternalActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    renderTopToolbar?: ReactNode | ((props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode);
    renderTopToolbarCustomActions?: (props: {
        table: MRT_TableInstance<TData>;
    }) => ReactNode;
    rowCount?: number;
    rowNumberMode?: 'original' | 'static';
    rowPinningDisplayMode?: 'bottom' | 'select-bottom' | 'select-sticky' | 'select-top' | 'sticky' | 'top' | 'top-and-bottom';
    rowVirtualizerInstanceRef?: MutableRefObject<Virtualizer<HTMLDivElement, HTMLTableRowElement> | null>;
    rowVirtualizerOptions?: Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>> | ((props: {
        table: MRT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>);
    selectAllMode?: 'all' | 'page';
    /**
     * Manage state externally any way you want, then pass it back into MRT.
     */
    state?: Partial<MRT_TableState<TData>>;
};

type TableInstanceProp<TData extends Record<string, any> = {}> = {
    table: MRT_TableInstance<TData>;
};
type Props$P<TData extends Record<string, any> = {}> = Xor<TableInstanceProp<TData>, MRT_TableOptions<TData>>;
declare const MantineReactTable: <TData extends Record<string, any> = {}>(props: Props$P<TData>) => react_jsx_runtime.JSX.Element;

interface Props$O<TData extends Record<string, any> = {}> {
    columnVirtualizer?: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
    enableHover?: boolean;
    isStriped?: boolean | 'odd' | 'even';
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
declare const MRT_TableBody: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$O<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MRT_TableBody: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$O<TData>) => react_jsx_runtime.JSX.Element;

interface Props$N<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    isStriped?: boolean | 'odd' | 'even';
    measureElement?: (element: HTMLTableCellElement) => void;
    numRows?: number;
    rowIndex: number;
    rowRef: RefObject<HTMLTableRowElement>;
    table: MRT_TableInstance<TData>;
    virtualCell?: VirtualItem;
}
declare const MRT_TableBodyCell: <TData extends Record<string, any> = {}>({ cell, isStriped, measureElement, numRows, rowIndex, rowRef, table, virtualCell, }: Props$N<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MRT_TableBodyCell: <TData extends Record<string, any> = {}>({ cell, isStriped, measureElement, numRows, rowIndex, rowRef, table, virtualCell, }: Props$N<TData>) => react_jsx_runtime.JSX.Element;

interface Props$M<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableBodyCellValue: <TData extends Record<string, any> = {}>({ cell, table, }: Props$M<TData>) => react.ReactNode;

interface Props$L<TData extends Record<string, any> = {}> {
    columnVirtualizer?: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
    enableHover?: boolean;
    isStriped?: boolean | 'odd' | 'even';
    measureElement?: (element: HTMLTableRowElement) => void;
    numRows?: number;
    pinnedRowIds?: string[];
    row: MRT_Row<TData>;
    rowIndex: number;
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
    virtualRow?: VirtualItem;
}
declare const MRT_TableBodyRow: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, measureElement, numRows, row, rowIndex, table, pinnedRowIds, virtualColumns, virtualPaddingLeft, virtualPaddingRight, virtualRow, }: Props$L<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MRT_TableBodyRow: <TData extends Record<string, any> = {}>({ columnVirtualizer, enableHover, isStriped, measureElement, numRows, row, rowIndex, table, pinnedRowIds, virtualColumns, virtualPaddingLeft, virtualPaddingRight, virtualRow, }: Props$L<TData>) => react_jsx_runtime.JSX.Element;

interface Props$K<TData extends Record<string, any> = {}> {
    row: MRT_Row<TData>;
    rowRef: RefObject<HTMLTableRowElement>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableBodyRowGrabHandle: <TData extends Record<string, any> = {}>({ row, rowRef, table, }: Props$K<TData>) => react_jsx_runtime.JSX.Element;

interface Props$J<TData extends Record<string, any> = {}> {
    parentRowRef: React.RefObject<HTMLTableRowElement>;
    row: MRT_Row<TData>;
    rowIndex: number;
    table: MRT_TableInstance<TData>;
    virtualRow?: VirtualItem;
}
declare const MRT_TableDetailPanel: <TData extends Record<string, any> = {}>({ parentRowRef, row, rowIndex, table, virtualRow, }: Props$J<TData>) => react_jsx_runtime.JSX.Element;

interface Props$I<TData extends Record<string, any> = {}> {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ColumnPinningButtons: <TData extends Record<string, any> = {}>({ column, table: { options: { icons: { IconPinned, IconPinnedOff }, localization, }, }, }: Props$I<TData>) => react_jsx_runtime.JSX.Element;

interface Props$H<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    children: ReactNode;
    table: MRT_TableInstance<TData>;
}
declare const MRT_CopyButton: <TData extends Record<string, any> = {}>({ cell, children, table, }: Props$H<TData>) => react_jsx_runtime.JSX.Element;

interface Props$G<TData extends Record<string, any> = {}> {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
    variant?: 'icon' | 'text';
}
declare const MRT_EditActionButtons: <TData extends Record<string, any> = {}>({ row, table, variant, }: Props$G<TData>) => react_jsx_runtime.JSX.Element;

interface Props$F<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ExpandAllButton: <TData extends Record<string, any> = {}>({ table, }: Props$F<TData>) => react_jsx_runtime.JSX.Element;

interface Props$E<TData extends Record<string, any> = {}> {
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ExpandButton: <TData extends Record<string, any> = {}>({ row, table, }: Props$E<TData>) => react_jsx_runtime.JSX.Element;

interface Props$D<TData extends Record<string, any> = {}> {
    actionIconProps?: ActionIconProps & HTMLPropsRef<HTMLButtonElement>;
    onDragStart: DragEventHandler<HTMLButtonElement>;
    onDragEnd: DragEventHandler<HTMLButtonElement>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_GrabHandleButton: <TData extends Record<string, any> = {}>({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal }, localization: { move }, }, }, }: Props$D<TData>) => react_jsx_runtime.JSX.Element;

interface Props$C<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsButton: <TData extends Record<string, any> = {}>({ table, title, ...rest }: Props$C<TData>) => react_jsx_runtime.JSX.Element;

interface Props$B<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleDensePaddingButton: <TData extends Record<string, any> = {}>({ table: { getState, options: { icons: { IconBaselineDensityLarge, IconBaselineDensityMedium, IconBaselineDensitySmall, }, localization: { toggleDensity }, }, setDensity, }, title, ...rest }: Props$B<TData>) => react_jsx_runtime.JSX.Element;

interface Props$A<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleFiltersButton: <TData extends Record<string, any> = {}>({ table: { getState, options: { icons: { IconFilter, IconFilterOff }, localization: { showHideFilters }, }, setShowColumnFilters, }, title, ...rest }: Props$A<TData>) => react_jsx_runtime.JSX.Element;

interface Props$z<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleFullScreenButton: <TData extends Record<string, any> = {}>({ table: { getState, options: { icons: { IconMinimize, IconMaximize }, localization: { toggleFullScreen }, }, setIsFullScreen, }, title, ...rest }: Props$z<TData>) => react_jsx_runtime.JSX.Element;

interface Props$y<TData extends Record<string, any> = {}> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleGlobalFilterButton: <TData extends Record<string, any> = {}>({ table: { getState, options: { icons: { IconSearch, IconSearchOff }, localization: { showHideSearch }, }, refs: { searchInputRef }, setShowGlobalFilter, }, title, ...rest }: Props$y<TData>) => react_jsx_runtime.JSX.Element;

interface Props$x<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToggleRowActionMenuButton: <TData extends Record<string, any> = {}>({ cell, row, table, }: Props$x<TData>) => react_jsx_runtime.JSX.Element;

declare const getColumnId: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => string;
declare const getAllLeafColumnDefs: <TData extends Record<string, any> = {}>(columns: MRT_ColumnDef<TData>[]) => MRT_ColumnDef<TData>[];
declare const prepareColumns: <TData extends Record<string, any> = {}>({ aggregationFns, columnDefs, columnFilterFns, defaultDisplayColumn, filterFns, sortingFns, }: {
    aggregationFns: {
        sum: _tanstack_react_table.AggregationFn<any>;
        min: _tanstack_react_table.AggregationFn<any>;
        max: _tanstack_react_table.AggregationFn<any>;
        extent: _tanstack_react_table.AggregationFn<any>;
        mean: _tanstack_react_table.AggregationFn<any>;
        median: _tanstack_react_table.AggregationFn<any>;
        unique: _tanstack_react_table.AggregationFn<any>;
        uniqueCount: _tanstack_react_table.AggregationFn<any>;
        count: _tanstack_react_table.AggregationFn<any>;
    } & Record<string, _tanstack_react_table.AggregationFn<any>>;
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
            <TData_7 extends Record<string, any> = {}>(row: Row<TData_7>, columnId: string, filterValue: string | number, addMeta: (item: _tanstack_match_sorter_utils.RankingInfo) => void): boolean;
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
        includesString: _tanstack_react_table.FilterFn<any>;
        includesStringSensitive: _tanstack_react_table.FilterFn<any>;
        equalsString: _tanstack_react_table.FilterFn<any>;
        arrIncludes: _tanstack_react_table.FilterFn<any>;
        arrIncludesAll: _tanstack_react_table.FilterFn<any>;
        arrIncludesSome: _tanstack_react_table.FilterFn<any>;
        weakEquals: _tanstack_react_table.FilterFn<any>;
        inNumberRange: _tanstack_react_table.FilterFn<any>;
    } & Record<string, _tanstack_react_table.FilterFn<any>>;
    sortingFns: {
        fuzzy: <TData_15 extends Record<string, any> = {}>(rowA: Row<TData_15>, rowB: Row<TData_15>, columnId: string) => number;
        alphanumeric: _tanstack_react_table.SortingFn<any>;
        alphanumericCaseSensitive: _tanstack_react_table.SortingFn<any>;
        text: _tanstack_react_table.SortingFn<any>;
        textCaseSensitive: _tanstack_react_table.SortingFn<any>;
        datetime: _tanstack_react_table.SortingFn<any>;
        basic: _tanstack_react_table.SortingFn<any>;
    } & Record<string, _tanstack_react_table.SortingFn<any>>;
}) => MRT_DefinedColumnDef<TData>[];
declare const reorderColumn: <TData extends Record<string, any> = {}>(draggedColumn: MRT_Column<TData>, targetColumn: MRT_Column<TData>, columnOrder: ColumnOrderState) => ColumnOrderState;
declare const showExpandColumn: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>, grouping?: GroupingState) => boolean;
declare const getLeadingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => MRT_DisplayColumnIds[];
declare const getTrailingDisplayColumnIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => MRT_DisplayColumnIds[];
declare const getDefaultColumnOrderIds: <TData extends Record<string, any> = {}>(props: MRT_TableOptions<TData>) => string[];
declare const getDefaultColumnFilterFn: <TData extends Record<string, any> = {}>(columnDef: MRT_ColumnDef<TData>) => MRT_FilterOption;
declare const getIsFirstColumn: <TData extends Record<string, any>>(column: MRT_Column<TData>, table: MRT_TableInstance<TData>) => boolean;
declare const getIsLastColumn: <TData extends Record<string, any>>(column: MRT_Column<TData>, table: MRT_TableInstance<TData>) => boolean;
declare const getIsLastLeftPinnedColumn: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, column: MRT_Column<TData>) => boolean;
declare const getIsFirstRightPinnedColumn: <TData extends Record<string, any> = {}>(column: MRT_Column<TData>) => boolean;
declare const getTotalRight: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, column: MRT_Column<TData>) => number;
declare const getCanRankRows: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>) => boolean | undefined;
declare const MRT_DefaultColumn: {
    readonly filterVariant: "text";
    readonly minSize: 40;
    readonly maxSize: 1000;
    readonly size: 180;
};
declare const MRT_DefaultDisplayColumn: {
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
declare function parseFromValuesOrFunc<T, U>(fn: T | ((arg: U) => T) | undefined, arg: U): T | undefined;
declare const parseCSSVarId: (id: string) => string;
declare const getPrimaryShade: (theme: MantineTheme) => number;
declare const getPrimaryColor: (theme: MantineTheme, shade?: MantineShade) => string;
declare const flexRender: (Comp: Renderable<any>, props: any) => ReactNode | JSX.Element;
declare const createRow: <TData extends Record<string, any> = {}>(table: MRT_TableInstance<TData>, originalRow?: TData | undefined) => MRT_Row<TData>;

interface Props$w<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
declare const MRT_TableFooter: <TData extends Record<string, any> = {}>({ table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$w<TData>) => react_jsx_runtime.JSX.Element;

interface Props$v<TData extends Record<string, any> = {}> {
    footer: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableFooterCell: <TData extends Record<string, any> = {}>({ footer, table, }: Props$v<TData>) => react_jsx_runtime.JSX.Element;

interface Props$u<TData extends Record<string, any> = {}> {
    footerGroup: MRT_HeaderGroup<TData>;
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
declare const MRT_TableFooterRow: <TData extends Record<string, any> = {}>({ footerGroup, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$u<TData>) => react_jsx_runtime.JSX.Element | null;

interface Props$t<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
declare const MRT_TableHead: <TData extends Record<string, any> = {}>({ table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$t<TData>) => react_jsx_runtime.JSX.Element;

interface Props$s<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCell: <TData extends Record<string, any> = {}>({ header, table, }: Props$s<TData>) => react_jsx_runtime.JSX.Element;

interface Props$r<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellFilterContainer: <TData extends Record<string, any> = {}>({ header, table, }: Props$r<TData>) => react_jsx_runtime.JSX.Element;

interface Props$q<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellFilterLabel: <TData extends Record<string, any> = {}>({ header, table, }: Props$q<TData>) => react_jsx_runtime.JSX.Element;

interface Props$p<TData extends Record<string, any> = {}> {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
    tableHeadCellRef: RefObject<HTMLTableCellElement>;
}
declare const MRT_TableHeadCellGrabHandle: <TData extends Record<string, any> = {}>({ column, table, tableHeadCellRef, }: Props$p<TData>) => react_jsx_runtime.JSX.Element;

interface Props$o<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellResizeHandle: <TData extends Record<string, any> = {}>({ header, table, }: Props$o<TData>) => react_jsx_runtime.JSX.Element;

interface Props$n<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableHeadCellSortLabel: <TData extends Record<string, any> = {}>({ header, table: { getState, options: { icons: { IconSortDescending, IconSortAscending, IconArrowsSort }, localization, }, }, }: Props$n<TData>) => react_jsx_runtime.JSX.Element;

interface Props$m<TData extends Record<string, any> = {}> {
    headerGroup: MRT_HeaderGroup<TData>;
    table: MRT_TableInstance<TData>;
    virtualColumns?: VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
}
declare const MRT_TableHeadRow: <TData extends Record<string, any> = {}>({ headerGroup, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }: Props$m<TData>) => react_jsx_runtime.JSX.Element;

interface Props$l<TData extends Record<string, any> = {}> {
    cell: MRT_Cell<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_EditCellTextInput: <TData extends Record<string, any> = {}>({ cell, table, }: Props$l<TData>) => string | number | boolean | Iterable<react.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;

interface Props$k<TData extends Record<string, any> = {}> {
    column: MRT_Column<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterCheckbox: <TData extends Record<string, any> = {}>({ column, table, }: Props$k<TData>) => react_jsx_runtime.JSX.Element;

interface Props$j<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterRangeFields: <TData extends Record<string, any> = {}>({ header, table, }: Props$j<TData>) => react_jsx_runtime.JSX.Element;

interface Props$i<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    rangeFilterIndex?: number;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterTextInput: <TData extends Record<string, any> = {}>({ header, rangeFilterIndex, table, }: Props$i<TData>) => react_jsx_runtime.JSX.Element;

interface Props$h<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_GlobalFilterTextInput: <TData extends Record<string, any> = {}>({ table, }: Props$h<TData>) => react_jsx_runtime.JSX.Element;

interface Props$g<TData extends Record<string, any> = {}> {
    row?: MRT_Row<TData>;
    selectAll?: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_SelectCheckbox: <TData extends Record<string, any> = {}>({ row, selectAll, table, }: Props$g<TData>) => react_jsx_runtime.JSX.Element;

interface Props$f<TData extends Record<string, any> = {}> {
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ColumnActionMenu: <TData extends Record<string, any> = {}>({ header, table, }: Props$f<TData>) => react_jsx_runtime.JSX.Element;

declare const mrtFilterOptions: (localization: MRT_Localization) => MRT_InternalFilterOption[];
interface Props$e<TData extends Record<string, any> = {}> {
    header?: MRT_Header<TData>;
    onSelect?: () => void;
    table: MRT_TableInstance<TData>;
}
declare const MRT_FilterOptionMenu: <TData extends Record<string, any> = {}>({ header, onSelect, table, }: Props$e<TData>) => react_jsx_runtime.JSX.Element;

interface Props$d<TData extends Record<string, any> = {}> {
    handleEdit: (event: MouseEvent) => void;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_RowActionMenu: <TData extends Record<string, any> = {}>({ handleEdit, row, table, }: Props$d<TData>) => react_jsx_runtime.JSX.Element;

interface Props$c<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsMenu: <TData extends Record<string, any> = {}>({ table, }: Props$c<TData>) => react_jsx_runtime.JSX.Element;

interface Props$b<TData extends Record<string, any> = {}> {
    allColumns: MRT_Column<TData>[];
    column: MRT_Column<TData>;
    hoveredColumn: MRT_Column<TData> | null;
    setHoveredColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ShowHideColumnsMenuItems: <TData extends Record<string, any> = {}>({ allColumns, hoveredColumn, setHoveredColumn, column, table, }: Props$b<TData>) => react_jsx_runtime.JSX.Element;

interface Props$a<TData extends Record<string, any> = {}> {
    open: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_EditRowModal: <TData extends Record<string, any> = {}>({ open, table, }: Props$a<TData>) => react_jsx_runtime.JSX.Element;

interface Props$9<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_Table: <TData extends Record<string, any> = {}>({ table, }: Props$9<TData>) => react_jsx_runtime.JSX.Element;

interface Props$8<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TableContainer: <TData extends Record<string, any> = {}>({ table, }: Props$8<TData>) => react_jsx_runtime.JSX.Element;

interface Props$7<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TablePaper: <TData extends Record<string, any> = {}>({ table, }: Props$7<TData>) => react_jsx_runtime.JSX.Element;

interface Props$6<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_BottomToolbar: <TData extends Record<string, any> = {}>({ table, }: Props$6<TData>) => react_jsx_runtime.JSX.Element;

interface Props$5<TData extends Record<string, any> = {}> {
    isTopToolbar: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ProgressBar: <TData extends Record<string, any> = {}>({ isTopToolbar, table, }: Props$5<TData>) => react_jsx_runtime.JSX.Element;

interface Props$4<TData extends Record<string, any> = {}> {
    position?: 'top' | 'bottom';
    table: MRT_TableInstance<TData>;
}
declare const MRT_TablePagination: <TData extends Record<string, any> = {}>({ table, position, }: Props$4<TData>) => react_jsx_runtime.JSX.Element;

interface Props$3<TData extends Record<string, any> = {}> {
    stackAlertBanner?: boolean;
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarAlertBanner: <TData extends Record<string, any> = {}>({ stackAlertBanner, table, }: Props$3<TData>) => react_jsx_runtime.JSX.Element;

interface Props$2<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarDropZone: <TData extends Record<string, any> = {}>({ table, }: Props$2<TData>) => react_jsx_runtime.JSX.Element;

interface Props$1<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_ToolbarInternalButtons: <TData extends Record<string, any> = {}>({ table, }: Props$1<TData>) => react_jsx_runtime.JSX.Element;

interface Props<TData extends Record<string, any> = {}> {
    table: MRT_TableInstance<TData>;
}
declare const MRT_TopToolbar: <TData extends Record<string, any> = {}>({ table, }: Props<TData>) => react_jsx_runtime.JSX.Element;

declare const useMantineReactTable: <TData extends Record<string, any> = {}>(tableOptions: MRT_TableOptions<TData>) => MRT_TableInstance<TData>;

export { type ColumnAlignment, type HTMLPropsRef, type LiteralUnion, type MRT_AggregationFn, MRT_AggregationFns, type MRT_AggregationOption, MRT_BottomToolbar, type MRT_Cell, type MRT_Column, MRT_ColumnActionMenu, type MRT_ColumnDef, type MRT_ColumnFilterFnsState, MRT_ColumnPinningButtons, MRT_CopyButton, type MRT_CreateTableFeature, MRT_DefaultColumn, MRT_DefaultDisplayColumn, type MRT_DefinedColumnDef, type MRT_DefinedTableOptions, type MRT_DensityState, type MRT_DisplayColumnIds, MRT_EditActionButtons, MRT_EditCellTextInput, MRT_EditRowModal, MRT_ExpandAllButton, MRT_ExpandButton, MRT_FilterCheckbox, type MRT_FilterFn, MRT_FilterFns, type MRT_FilterOption, MRT_FilterOptionMenu, MRT_FilterRangeFields, MRT_FilterTextInput, MRT_GlobalFilterTextInput, MRT_GrabHandleButton, type MRT_Header, type MRT_HeaderGroup, type MRT_Icons, type MRT_InternalFilterOption, type MRT_Localization, type MRT_PaginationProps, MRT_ProgressBar, type MRT_Row, MRT_RowActionMenu, type MRT_RowModel, MRT_SelectCheckbox, MRT_ShowHideColumnsButton, MRT_ShowHideColumnsMenu, MRT_ShowHideColumnsMenuItems, type MRT_SortingFn, MRT_SortingFns, type MRT_SortingOption, MRT_Table, MRT_TableBody, MRT_TableBodyCell, MRT_TableBodyCellValue, MRT_TableBodyRow, MRT_TableBodyRowGrabHandle, MRT_TableContainer, MRT_TableDetailPanel, MRT_TableFooter, MRT_TableFooterCell, MRT_TableFooterRow, MRT_TableHead, MRT_TableHeadCell, MRT_TableHeadCellFilterContainer, MRT_TableHeadCellFilterLabel, MRT_TableHeadCellGrabHandle, MRT_TableHeadCellResizeHandle, MRT_TableHeadCellSortLabel, MRT_TableHeadRow, type MRT_TableInstance, type MRT_TableOptions, MRT_TablePagination, MRT_TablePaper, type MRT_TableState, MRT_ToggleDensePaddingButton, MRT_ToggleFiltersButton, MRT_ToggleFullScreenButton, MRT_ToggleGlobalFilterButton, MRT_ToggleRowActionMenuButton, MRT_ToolbarAlertBanner, MRT_ToolbarDropZone, MRT_ToolbarInternalButtons, MRT_TopToolbar, MantineReactTable, type MantineShade, Memo_MRT_TableBody, Memo_MRT_TableBodyCell, Memo_MRT_TableBodyRow, type Prettify, type Xor, createRow, flexRender, getAllLeafColumnDefs, getCanRankRows, getColumnId, getDefaultColumnFilterFn, getDefaultColumnOrderIds, getIsFirstColumn, getIsFirstRightPinnedColumn, getIsLastColumn, getIsLastLeftPinnedColumn, getLeadingDisplayColumnIds, getPrimaryColor, getPrimaryShade, getTotalRight, getTrailingDisplayColumnIds, localizedFilterOption, mrtFilterOptions, parseCSSVarId, parseFromValuesOrFunc, prepareColumns, rankGlobalFuzzy, reorderColumn, showExpandColumn, useMantineReactTable };
