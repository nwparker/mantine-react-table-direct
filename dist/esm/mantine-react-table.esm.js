import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, memo, useEffect, useRef, Fragment as Fragment$1, useCallback, createElement, useLayoutEffect } from 'react';
import { aggregationFns, filterFns, sortingFns, flexRender as flexRender$1, createRow as createRow$1, useReactTable, getCoreRowModel, getExpandedRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getGroupedRowModel, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
import { rankItem, rankings, compareItems } from '@tanstack/match-sorter-utils';
import { IconArrowAutofitContent, IconArrowsSort, IconBaselineDensityLarge, IconBaselineDensityMedium, IconBaselineDensitySmall, IconBoxMultiple, IconChevronDown, IconChevronLeft, IconChevronLeftPipe, IconChevronRight, IconChevronRightPipe, IconChevronsDown, IconCircleX, IconClearAll, IconColumns, IconDeviceFloppy, IconDots, IconDotsVertical, IconEdit, IconEyeOff, IconFilter, IconFilterCog, IconFilterOff, IconGripHorizontal, IconMaximize, IconMinimize, IconPinned, IconPinnedOff, IconSearch, IconSearchOff, IconSortAscending, IconSortDescending, IconX } from '@tabler/icons-react';
import { Tooltip, ActionIcon, Box, Select, TextInput, CopyButton, UnstyledButton, Highlight, TableTd, Skeleton, Collapse, TableTr, TableTbody, Text, Menu, Button, Switch, Radio, Checkbox, Progress, Group, Pagination, Badge, MultiSelect, Autocomplete, CloseButton, Combobox, Flex, Alert, Stack, useMantineTheme, rem, Divider, Transition, RangeSlider, Popover, Indicator, TableThead, TableTh, TableTfoot, Table, Modal, LoadingOverlay, Paper } from '@mantine/core';
import { useVirtualizer, defaultRangeExtractor } from '@tanstack/react-virtual';
import clsx from 'clsx';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const MRT_AggregationFns = Object.assign({}, aggregationFns);

const fuzzy$1 = (row, columnId, filterValue, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), filterValue, {
        threshold: rankings.MATCHES,
    });
    addMeta(itemRank);
    return itemRank.passed;
};
fuzzy$1.autoRemove = (val) => !val;
const contains = (row, id, filterValue) => row
    .getValue(id)
    .toString()
    .toLowerCase()
    .trim()
    .includes(filterValue.toString().toLowerCase().trim());
contains.autoRemove = (val) => !val;
const startsWith = (row, id, filterValue) => row
    .getValue(id)
    .toString()
    .toLowerCase()
    .trim()
    .startsWith(filterValue.toString().toLowerCase().trim());
startsWith.autoRemove = (val) => !val;
const endsWith = (row, id, filterValue) => row
    .getValue(id)
    .toString()
    .toLowerCase()
    .trim()
    .endsWith(filterValue.toString().toLowerCase().trim());
endsWith.autoRemove = (val) => !val;
const equals = (row, id, filterValue) => filterValue === null
    ? true
    : row.getValue(id).toString().toLowerCase().trim() ===
        filterValue.toString().toLowerCase().trim();
equals.autoRemove = (val) => !val;
const notEquals = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim() !==
    filterValue.toString().toLowerCase().trim();
notEquals.autoRemove = (val) => !val;
const greaterThan = (row, id, filterValue) => filterValue === null
    ? true
    : !isNaN(+filterValue) && !isNaN(+row.getValue(id))
        ? +row.getValue(id) > +filterValue
        : row.getValue(id).toString().toLowerCase().trim() >
            filterValue.toString().toLowerCase().trim();
greaterThan.autoRemove = (val) => !val;
const greaterThanOrEqualTo = (row, id, filterValue) => equals(row, id, filterValue) || greaterThan(row, id, filterValue);
greaterThanOrEqualTo.autoRemove = (val) => !val;
const lessThan = (row, id, filterValue) => filterValue === null
    ? true
    : !isNaN(+filterValue) && !isNaN(+row.getValue(id))
        ? +row.getValue(id) < +filterValue
        : row.getValue(id).toString().toLowerCase().trim() <
            filterValue.toString().toLowerCase().trim();
lessThan.autoRemove = (val) => !val;
const lessThanOrEqualTo = (row, id, filterValue) => equals(row, id, filterValue) || lessThan(row, id, filterValue);
lessThanOrEqualTo.autoRemove = (val) => !val;
const between = (row, id, filterValues) => (['', undefined].includes(filterValues[0]) ||
    greaterThan(row, id, filterValues[0])) &&
    ((!isNaN(+filterValues[0]) &&
        !isNaN(+filterValues[1]) &&
        +filterValues[0] > +filterValues[1]) ||
        ['', undefined].includes(filterValues[1]) ||
        lessThan(row, id, filterValues[1]));
between.autoRemove = (val) => !val;
const betweenInclusive = (row, id, filterValues) => (['', undefined].includes(filterValues[0]) ||
    greaterThanOrEqualTo(row, id, filterValues[0])) &&
    ((!isNaN(+filterValues[0]) &&
        !isNaN(+filterValues[1]) &&
        +filterValues[0] > +filterValues[1]) ||
        ['', undefined].includes(filterValues[1]) ||
        lessThanOrEqualTo(row, id, filterValues[1]));
betweenInclusive.autoRemove = (val) => !val;
const empty = (row, id, _filterValue) => !row.getValue(id).toString().trim();
empty.autoRemove = (val) => !val;
const notEmpty = (row, id, _filterValue) => !!row.getValue(id).toString().trim();
notEmpty.autoRemove = (val) => !val;
const MRT_FilterFns = Object.assign(Object.assign({}, filterFns), { between,
    betweenInclusive,
    contains,
    empty,
    endsWith,
    equals,
    fuzzy: fuzzy$1,
    greaterThan,
    greaterThanOrEqualTo,
    lessThan,
    lessThanOrEqualTo,
    notEmpty,
    notEquals,
    startsWith });
function localizedFilterOption(localization, option) {
    var _a;
    if (!option) {
        return '';
    }
    const key = `filter${option[0].toUpperCase()}${option.slice(1)}`;
    return (_a = localization[key]) !== null && _a !== void 0 ? _a : '';
}

const fuzzy = (rowA, rowB, columnId) => {
    let dir = 0;
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(rowA.columnFiltersMeta[columnId], rowB.columnFiltersMeta[columnId]);
    }
    // Provide a fallback for when the item ranks are equal
    return dir === 0
        ? sortingFns.alphanumeric(rowA, rowB, columnId)
        : dir;
};
const MRT_SortingFns = Object.assign(Object.assign({}, sortingFns), { fuzzy });
const rankGlobalFuzzy = (rowA, rowB) => Math.max(...Object.values(rowB.columnFiltersMeta).map((v) => v.rank)) -
    Math.max(...Object.values(rowA.columnFiltersMeta).map((v) => v.rank));

const getColumnId = (columnDef) => { var _a, _b, _c, _d; return (_d = (_a = columnDef.id) !== null && _a !== void 0 ? _a : (_c = (_b = columnDef.accessorKey) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : columnDef.header; };
const getAllLeafColumnDefs = (columns) => {
    const allLeafColumnDefs = [];
    const getLeafColumns = (cols) => {
        cols.forEach((col) => {
            if (col.columns) {
                getLeafColumns(col.columns);
            }
            else {
                allLeafColumnDefs.push(col);
            }
        });
    };
    getLeafColumns(columns);
    return allLeafColumnDefs;
};
const prepareColumns = ({ aggregationFns, columnDefs, columnFilterFns, defaultDisplayColumn, filterFns, sortingFns, }) => columnDefs.map((columnDef) => {
    var _a, _b;
    //assign columnId
    if (!columnDef.id)
        columnDef.id = getColumnId(columnDef);
    if (process.env.NODE_ENV !== 'production' && !columnDef.id) {
        console.error('Column definitions must have a valid `accessorKey` or `id` property');
    }
    //assign columnDefType
    if (!columnDef.columnDefType)
        columnDef.columnDefType = 'data';
    if ((_a = columnDef.columns) === null || _a === void 0 ? void 0 : _a.length) {
        columnDef.columnDefType = 'group';
        //recursively prepare columns if this is a group column
        columnDef.columns = prepareColumns({
            aggregationFns,
            columnDefs: columnDef.columns,
            columnFilterFns,
            defaultDisplayColumn,
            filterFns,
            sortingFns,
        });
    }
    else if (columnDef.columnDefType === 'data') {
        //assign aggregationFns if multiple aggregationFns are provided
        if (Array.isArray(columnDef.aggregationFn)) {
            const aggFns = columnDef.aggregationFn;
            columnDef.aggregationFn = (columnId, leafRows, childRows) => aggFns.map((fn) => { var _a; return (_a = aggregationFns[fn]) === null || _a === void 0 ? void 0 : _a.call(aggregationFns, columnId, leafRows, childRows); });
        }
        //assign filterFns
        if (Object.keys(filterFns).includes(columnFilterFns[columnDef.id])) {
            columnDef.filterFn =
                (_b = filterFns[columnFilterFns[columnDef.id]]) !== null && _b !== void 0 ? _b : filterFns.fuzzy;
            columnDef._filterFn =
                columnFilterFns[columnDef.id];
        }
        //assign sortingFns
        if (Object.keys(sortingFns).includes(columnDef.sortingFn)) {
            // @ts-ignore
            columnDef.sortingFn = sortingFns[columnDef.sortingFn];
        }
    }
    else if (columnDef.columnDefType === 'display') {
        columnDef = Object.assign(Object.assign({}, defaultDisplayColumn), columnDef);
    }
    return columnDef;
});
const reorderColumn = (draggedColumn, targetColumn, columnOrder) => {
    if (draggedColumn.getCanPin()) {
        draggedColumn.pin(targetColumn.getIsPinned());
    }
    columnOrder.splice(columnOrder.indexOf(targetColumn.id), 0, columnOrder.splice(columnOrder.indexOf(draggedColumn.id), 1)[0]);
    return [...columnOrder];
};
const showExpandColumn = (props, grouping) => !!(props.enableExpanding ||
    (props.enableGrouping && (grouping === undefined || (grouping === null || grouping === void 0 ? void 0 : grouping.length))) ||
    props.renderDetailPanel);
const getLeadingDisplayColumnIds = (props) => {
    var _a, _b;
    return [
        props.enableRowPinning &&
            !((_a = props.rowPinningDisplayMode) === null || _a === void 0 ? void 0 : _a.startsWith('select')) &&
            'mrt-row-pin',
        (props.enableRowDragging || props.enableRowOrdering) && 'mrt-row-drag',
        props.positionActionsColumn === 'first' &&
            (props.enableRowActions ||
                (props.enableEditing &&
                    ['row', 'modal', 'custom'].includes((_b = props.editDisplayMode) !== null && _b !== void 0 ? _b : ''))) &&
            'mrt-row-actions',
        props.positionExpandColumn === 'first' &&
            showExpandColumn(props) &&
            'mrt-row-expand',
        props.enableRowSelection && 'mrt-row-select',
        props.enableRowNumbers && 'mrt-row-numbers',
    ].filter(Boolean);
};
const getTrailingDisplayColumnIds = (props) => {
    var _a;
    return [
        props.positionActionsColumn === 'last' &&
            (props.enableRowActions ||
                (props.enableEditing &&
                    ['row', 'modal'].includes((_a = props.editDisplayMode) !== null && _a !== void 0 ? _a : ''))) &&
            'mrt-row-actions',
        props.positionExpandColumn === 'last' &&
            showExpandColumn(props) &&
            'mrt-row-expand',
    ].filter(Boolean);
};
const getDefaultColumnOrderIds = (props) => {
    const leadingDisplayCols = getLeadingDisplayColumnIds(props);
    const trailingDisplayCols = getTrailingDisplayColumnIds(props);
    const allLeafColumnDefs = getAllLeafColumnDefs(props.columns)
        .map((columnDef) => getColumnId(columnDef))
        .filter((columnId) => !leadingDisplayCols.includes(columnId) &&
        !trailingDisplayCols.includes(columnId));
    return [...leadingDisplayCols, ...allLeafColumnDefs, ...trailingDisplayCols];
};
const getDefaultColumnFilterFn = (columnDef) => {
    const { filterVariant } = columnDef;
    if (filterVariant === 'multi-select')
        return 'arrIncludesSome';
    if (['range', 'date-range', 'range-slider'].includes(filterVariant || ''))
        return 'betweenInclusive';
    if (['select', 'checkbox', 'date'].includes(filterVariant || ''))
        return 'equals';
    return 'fuzzy';
};
const getIsFirstColumn = (column, table) => {
    const leftColumns = table.getLeftVisibleLeafColumns();
    return leftColumns.length
        ? leftColumns[0].id === column.id
        : table.getVisibleLeafColumns()[0].id === column.id;
};
const getIsLastColumn = (column, table) => {
    const rightColumns = table.getRightVisibleLeafColumns();
    const columns = table.getVisibleLeafColumns();
    return rightColumns.length
        ? rightColumns[rightColumns.length - 1].id === column.id
        : columns[columns.length - 1].id === column.id;
};
const getIsLastLeftPinnedColumn = (table, column) => {
    return (column.getIsPinned() === 'left' &&
        table.getLeftLeafHeaders().length - 1 === column.getPinnedIndex());
};
const getIsFirstRightPinnedColumn = (column) => {
    return column.getIsPinned() === 'right' && column.getPinnedIndex() === 0;
};
const getTotalRight = (table, column) => {
    return table
        .getRightLeafHeaders()
        .slice(column.getPinnedIndex() + 1)
        .reduce((acc, col) => acc + col.getSize(), 0);
};
const getCanRankRows = (table) => {
    const { options, getState } = table;
    const { manualExpanding, manualFiltering, manualGrouping, manualSorting, enableGlobalFilterRankedResults, } = options;
    const { globalFilterFn, expanded } = getState();
    return (!manualExpanding &&
        !manualFiltering &&
        !manualGrouping &&
        !manualSorting &&
        enableGlobalFilterRankedResults &&
        globalFilterFn === 'fuzzy' &&
        expanded !== true &&
        !Object.values(expanded).some(Boolean));
};
const MRT_DefaultColumn = {
    filterVariant: 'text',
    minSize: 40,
    maxSize: 1000,
    size: 180,
};
const MRT_DefaultDisplayColumn = {
    columnDefType: 'display',
    enableClickToCopy: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableColumnFilter: false,
    enableColumnOrdering: false,
    enableEditing: false,
    enableGlobalFilter: false,
    enableGrouping: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
};
function parseFromValuesOrFunc(fn, arg) {
    return fn instanceof Function ? fn(arg) : fn;
}
const parseCSSVarId = (id) => id.replace(/[^a-zA-Z0-9]/g, '_');
const getPrimaryShade = (theme) => {
    var _a, _b;
    return typeof theme.primaryShade === 'number'
        ? theme.primaryShade
        : (_b = (_a = theme.primaryShade) === null || _a === void 0 ? void 0 : _a.dark) !== null && _b !== void 0 ? _b : 7;
};
const getPrimaryColor = (theme, shade) => theme.colors[theme.primaryColor][shade !== null && shade !== void 0 ? shade : getPrimaryShade(theme)];
const flexRender = flexRender$1;
const createRow = (table, originalRow) => createRow$1(table, 'mrt-row-create', originalRow !== null && originalRow !== void 0 ? originalRow : Object.assign({}, ...getAllLeafColumnDefs(table.options.columns)
    .filter((c) => c.columnDefType === 'data')
    .map((col) => ({
    [getColumnId(col)]: '',
}))), -1, 0);

const MRT_Localization_EN = {
    actions: 'Actions',
    and: 'and',
    cancel: 'Cancel',
    changeFilterMode: 'Change filter mode',
    changeSearchMode: 'Change search mode',
    clearFilter: 'Clear filter',
    clearSearch: 'Clear search',
    clearSort: 'Clear sort',
    clickToCopy: 'Click to copy',
    collapse: 'Collapse',
    collapseAll: 'Collapse all',
    columnActions: 'Column Actions',
    copiedToClipboard: 'Copied to clipboard',
    dropToGroupBy: 'Drop to group by {column}',
    edit: 'Edit',
    expand: 'Expand',
    expandAll: 'Expand all',
    filterArrIncludes: 'Includes',
    filterArrIncludesAll: 'Includes all',
    filterArrIncludesSome: 'Includes',
    filterBetween: 'Between',
    filterBetweenInclusive: 'Between Inclusive',
    filterByColumn: 'Filter by {column}',
    filterContains: 'Contains',
    filterEmpty: 'Empty',
    filterEndsWith: 'Ends With',
    filterEquals: 'Equals',
    filterEqualsString: 'Equals',
    filterFuzzy: 'Fuzzy',
    filterGreaterThan: 'Greater Than',
    filterGreaterThanOrEqualTo: 'Greater Than Or Equal To',
    filterInNumberRange: 'Between',
    filterIncludesString: 'Contains',
    filterIncludesStringSensitive: 'Contains',
    filterLessThan: 'Less Than',
    filterLessThanOrEqualTo: 'Less Than Or Equal To',
    filterMode: 'Filter Mode: {filterType}',
    filterNotEmpty: 'Not Empty',
    filterNotEquals: 'Not Equals',
    filterStartsWith: 'Starts With',
    filterWeakEquals: 'Equals',
    filteringByColumn: 'Filtering by {column} - {filterType} {filterValue}',
    goToFirstPage: 'Go to first page',
    goToLastPage: 'Go to last page',
    goToNextPage: 'Go to next page',
    goToPreviousPage: 'Go to previous page',
    grab: 'Grab',
    groupByColumn: 'Group by {column}',
    groupedBy: 'Grouped by ',
    hideAll: 'Hide all',
    hideColumn: 'Hide {column} column',
    max: 'Max',
    min: 'Min',
    move: 'Move',
    noRecordsToDisplay: 'No records to display',
    noResultsFound: 'No results found',
    of: 'of',
    or: 'or',
    pin: 'Pin',
    pinToLeft: 'Pin to left',
    pinToRight: 'Pin to right',
    resetColumnSize: 'Reset column size',
    resetOrder: 'Reset order',
    rowActions: 'Row Actions',
    rowNumber: '#',
    rowNumbers: 'Row Numbers',
    rowsPerPage: 'Rows per page',
    save: 'Save',
    search: 'Search',
    selectedCountOfRowCountRowsSelected: '{selectedCount} of {rowCount} row(s) selected',
    select: 'Select',
    showAll: 'Show all',
    showAllColumns: 'Show all columns',
    showHideColumns: 'Show/Hide columns',
    showHideFilters: 'Show/Hide filters',
    showHideSearch: 'Show/Hide search',
    sortByColumnAsc: 'Sort by {column} ascending',
    sortByColumnDesc: 'Sort by {column} descending',
    sortedByColumnAsc: 'Sorted by {column} ascending',
    sortedByColumnDesc: 'Sorted by {column} descending',
    thenBy: ', then by ',
    toggleDensity: 'Toggle density',
    toggleFullScreen: 'Toggle full screen',
    toggleSelectAll: 'Toggle select all',
    toggleSelectRow: 'Toggle select row',
    toggleVisibility: 'Toggle visibility',
    ungroupByColumn: 'Ungroup by {column}',
    unpin: 'Unpin',
    unpinAll: 'Unpin all',
};

const MRT_Default_Icons = {
    IconArrowAutofitContent,
    IconArrowsSort,
    IconBaselineDensityLarge,
    IconBaselineDensityMedium,
    IconBaselineDensitySmall,
    IconBoxMultiple,
    IconChevronDown,
    IconChevronLeft,
    IconChevronLeftPipe,
    IconChevronRight,
    IconChevronRightPipe,
    IconChevronsDown,
    IconCircleX,
    IconClearAll,
    IconColumns,
    IconDeviceFloppy,
    IconDots,
    IconDotsVertical,
    IconEdit,
    IconEyeOff,
    IconFilter,
    IconFilterCog,
    IconFilterOff,
    IconGripHorizontal,
    IconMaximize,
    IconMinimize,
    IconPinned,
    IconPinnedOff,
    IconSearch,
    IconSearchOff,
    IconSortAscending,
    IconSortDescending,
    IconX,
};

const useMRT_TableOptions = (_a) => {
    var _b;
    var { aggregationFns, autoResetExpanded = false, columnFilterDisplayMode = 'subheader', columnResizeMode = 'onChange', createDisplayMode = 'modal', defaultColumn, defaultDisplayColumn, editDisplayMode = 'modal', enableBottomToolbar = true, enableColumnActions = true, enableColumnFilters = true, enableColumnOrdering = false, enableColumnResizing = false, enableDensityToggle = true, enableExpandAll = true, enableExpanding, enableFilterMatchHighlighting = true, enableFilters = true, enableFullScreenToggle = true, enableGlobalFilter = true, enableGlobalFilterRankedResults = true, enableGrouping = false, enableHiding = true, enableMultiRowSelection = true, enableMultiSort = true, enablePagination = true, enablePinning = false, enableRowSelection = false, enableSelectAll = true, enableSorting = true, enableStickyHeader = false, enableTableFooter = true, enableTableHead = true, enableToolbarInternalActions = true, enableTopToolbar = true, filterFns, icons, layoutMode = 'semantic', localization, manualFiltering, manualGrouping, manualPagination, manualSorting, paginationDisplayMode = 'default', positionActionsColumn = 'first', positionExpandColumn = 'first', positionGlobalFilter = 'right', positionPagination = 'bottom', positionToolbarAlertBanner = 'top', positionToolbarDropZone = 'top', rowNumberMode = 'static', rowPinningDisplayMode = 'sticky', selectAllMode = 'page', sortingFns } = _a, rest = __rest(_a, ["aggregationFns", "autoResetExpanded", "columnFilterDisplayMode", "columnResizeMode", "createDisplayMode", "defaultColumn", "defaultDisplayColumn", "editDisplayMode", "enableBottomToolbar", "enableColumnActions", "enableColumnFilters", "enableColumnOrdering", "enableColumnResizing", "enableDensityToggle", "enableExpandAll", "enableExpanding", "enableFilterMatchHighlighting", "enableFilters", "enableFullScreenToggle", "enableGlobalFilter", "enableGlobalFilterRankedResults", "enableGrouping", "enableHiding", "enableMultiRowSelection", "enableMultiSort", "enablePagination", "enablePinning", "enableRowSelection", "enableSelectAll", "enableSorting", "enableStickyHeader", "enableTableFooter", "enableTableHead", "enableToolbarInternalActions", "enableTopToolbar", "filterFns", "icons", "layoutMode", "localization", "manualFiltering", "manualGrouping", "manualPagination", "manualSorting", "paginationDisplayMode", "positionActionsColumn", "positionExpandColumn", "positionGlobalFilter", "positionPagination", "positionToolbarAlertBanner", "positionToolbarDropZone", "rowNumberMode", "rowPinningDisplayMode", "selectAllMode", "sortingFns"]);
    const _icons = useMemo(() => (Object.assign(Object.assign({}, MRT_Default_Icons), icons)), [icons]);
    const _localization = useMemo(() => (Object.assign(Object.assign({}, MRT_Localization_EN), localization)), [localization]);
    const _aggregationFns = useMemo(() => (Object.assign(Object.assign({}, MRT_AggregationFns), aggregationFns)), []);
    const _filterFns = useMemo(() => (Object.assign(Object.assign({}, MRT_FilterFns), filterFns)), []);
    const _sortingFns = useMemo(() => (Object.assign(Object.assign({}, MRT_SortingFns), sortingFns)), []);
    const _defaultColumn = useMemo(() => (Object.assign(Object.assign({}, MRT_DefaultColumn), defaultColumn)), [defaultColumn]);
    const _defaultDisplayColumn = useMemo(() => (Object.assign(Object.assign({}, MRT_DefaultDisplayColumn), defaultDisplayColumn)), [defaultDisplayColumn]);
    if (layoutMode === 'semantic') {
        if (rest.enableRowVirtualization || rest.enableColumnVirtualization) {
            layoutMode = 'grid';
        }
        if (enableColumnResizing) {
            layoutMode = 'grid-no-grow';
        }
    }
    if (rest.enableRowVirtualization) {
        enableStickyHeader = true;
    }
    if (enablePagination === false && manualPagination === undefined) {
        manualPagination = true;
    }
    if (!((_b = rest.data) === null || _b === void 0 ? void 0 : _b.length)) {
        manualFiltering = true;
        manualGrouping = true;
        manualPagination = true;
        manualSorting = true;
    }
    return Object.assign({ aggregationFns: _aggregationFns, autoResetExpanded,
        columnFilterDisplayMode,
        columnResizeMode,
        createDisplayMode, defaultColumn: _defaultColumn, defaultDisplayColumn: _defaultDisplayColumn, editDisplayMode,
        enableBottomToolbar,
        enableColumnActions,
        enableColumnFilters,
        enableColumnOrdering,
        enableColumnResizing,
        enableDensityToggle,
        enableExpandAll,
        enableExpanding,
        enableFilterMatchHighlighting,
        enableFilters,
        enableFullScreenToggle,
        enableGlobalFilter,
        enableGlobalFilterRankedResults,
        enableGrouping,
        enableHiding,
        enableMultiRowSelection,
        enableMultiSort,
        enablePagination,
        enablePinning,
        enableRowSelection,
        enableSelectAll,
        enableSorting,
        enableStickyHeader,
        enableTableFooter,
        enableTableHead,
        enableToolbarInternalActions,
        enableTopToolbar, filterFns: _filterFns, icons: _icons, layoutMode, localization: _localization, manualFiltering,
        manualGrouping,
        manualPagination,
        manualSorting,
        paginationDisplayMode,
        positionActionsColumn,
        positionExpandColumn,
        positionGlobalFilter,
        positionPagination,
        positionToolbarAlertBanner,
        positionToolbarDropZone,
        rowNumberMode,
        rowPinningDisplayMode,
        selectAllMode, sortingFns: _sortingFns }, rest);
};

const MRT_RowPinButton = ({ pinningPosition, row, table, }) => {
    const { options: { icons: { IconX, IconPinned }, localization, rowPinningDisplayMode, }, } = table;
    const isPinned = row.getIsPinned();
    const [tooltipOpened, setTooltipOpened] = useState(false);
    const handleTogglePin = (event) => {
        setTooltipOpened(false);
        event.stopPropagation();
        row.pin(isPinned ? false : pinningPosition);
    };
    return (jsx(Tooltip, { opened: tooltipOpened, openDelay: 1000, label: isPinned ? localization.unpin : localization.pin, children: jsx(ActionIcon, { "aria-label": localization.pin, color: "gray", onClick: handleTogglePin, onMouseEnter: () => setTooltipOpened(true), onMouseLeave: () => setTooltipOpened(false), size: "xs", variant: "transparent", style: {
                height: '24px',
                width: '24px',
            }, children: isPinned ? (jsx(IconX, {})) : (jsx(IconPinned, { fontSize: "small", style: {
                    transform: `rotate(${rowPinningDisplayMode === 'sticky'
                        ? 135
                        : pinningPosition === 'top'
                            ? 180
                            : 0}deg)`,
                } })) }) }));
};

const MRT_TableBodyRowPinButton = ({ row, table, }) => {
    const { getState, options: { enableRowPinning, rowPinningDisplayMode }, } = table;
    const { density } = getState();
    const canPin = parseFromValuesOrFunc(enableRowPinning, row);
    if (!canPin)
        return null;
    if (rowPinningDisplayMode === 'top-and-bottom' && !row.getIsPinned()) {
        return (jsxs(Box, { style: {
                display: 'flex',
                flexDirection: density === 'xs' ? 'row' : 'column',
            }, children: [jsx(MRT_RowPinButton, { pinningPosition: "top", row: row, table: table }), jsx(MRT_RowPinButton, { pinningPosition: "bottom", row: row, table: table })] }));
    }
    return (jsx(MRT_RowPinButton, { pinningPosition: rowPinningDisplayMode === 'bottom' ? 'bottom' : 'top', row: row, table: table }));
};

const MRT_EditCellTextInput = ({ cell, table, }) => {
    var _a;
    const { getState, options: { createDisplayMode, editDisplayMode, mantineEditTextInputProps, mantineEditSelectProps, }, refs: { editInputRefs }, setEditingCell, setEditingRow, setCreatingRow, } = table;
    const { column, row } = cell;
    const { columnDef } = column;
    const { creatingRow, editingRow } = getState();
    const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
    const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
    const isSelectEdit = columnDef.editVariant === 'select';
    const [value, setValue] = useState(() => cell.getValue());
    const arg = { cell, column, row, table };
    const textInputProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditTextInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineEditTextInputProps, arg));
    const selectProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineEditSelectProps, arg));
    const saveInputValueToRowCache = (newValue) => {
        //@ts-ignore
        row._valuesCache[column.id] = newValue;
        if (isCreating) {
            setCreatingRow(row);
        }
        else if (isEditing) {
            setEditingRow(row);
        }
    };
    const handleBlur = (event) => {
        var _a;
        (_a = textInputProps.onBlur) === null || _a === void 0 ? void 0 : _a.call(textInputProps, event);
        saveInputValueToRowCache(value);
        setEditingCell(null);
    };
    const handleEnterKeyDown = (event) => {
        var _a, _b;
        (_a = textInputProps.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(textInputProps, event);
        if (event.key === 'Enter') {
            (_b = editInputRefs.current[cell.id]) === null || _b === void 0 ? void 0 : _b.blur();
        }
    };
    if (columnDef.Edit) {
        return (_a = columnDef.Edit) === null || _a === void 0 ? void 0 : _a.call(columnDef, { cell, column, row, table });
    }
    const commonProps = {
        disabled: parseFromValuesOrFunc(columnDef.enableEditing, row) === false,
        label: ['modal', 'custom'].includes((isCreating ? createDisplayMode : editDisplayMode))
            ? column.columnDef.header
            : undefined,
        name: cell.id,
        placeholder: !['modal', 'custom'].includes((isCreating ? createDisplayMode : editDisplayMode))
            ? columnDef.header
            : undefined,
        value,
        variant: editDisplayMode === 'table' ? 'unstyled' : 'default',
        onClick: (e) => {
            var _a;
            e.stopPropagation();
            (_a = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.onClick) === null || _a === void 0 ? void 0 : _a.call(textInputProps, e);
        },
    };
    if (isSelectEdit) {
        return (
        // @ts-ignore
        jsx(Select, Object.assign({}, commonProps, { searchable: true, value: value }, selectProps, { onBlur: handleBlur, onChange: (value) => {
                var _a;
                (_a = selectProps.onChange) === null || _a === void 0 ? void 0 : _a.call(selectProps, value);
                setValue(value);
            }, onClick: (e) => {
                var _a;
                e.stopPropagation();
                (_a = selectProps === null || selectProps === void 0 ? void 0 : selectProps.onClick) === null || _a === void 0 ? void 0 : _a.call(selectProps, e);
            }, ref: (node) => {
                if (node) {
                    editInputRefs.current[cell.id] = node;
                    if (selectProps.ref) {
                        selectProps.ref.current = node;
                    }
                }
            } })));
    }
    return (jsx(TextInput, Object.assign({}, commonProps, { onKeyDown: handleEnterKeyDown, value: value !== null && value !== void 0 ? value : '' }, textInputProps, { onBlur: handleBlur, onChange: (event) => {
            var _a;
            (_a = textInputProps.onChange) === null || _a === void 0 ? void 0 : _a.call(textInputProps, event);
            setValue(event.target.value);
        }, onClick: (event) => {
            var _a;
            event.stopPropagation();
            (_a = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.onClick) === null || _a === void 0 ? void 0 : _a.call(textInputProps, event);
        }, ref: (node) => {
            if (node) {
                editInputRefs.current[cell.id] = node;
                if (textInputProps.ref) {
                    textInputProps.ref.current = node;
                }
            }
        } })));
};

var classes$C = {"root":"MRT_CopyButton-module_root__jmas-"};

const MRT_CopyButton = ({ cell, children, table, }) => {
    const { options: { localization: { copiedToClipboard, clickToCopy }, mantineCopyButtonProps, }, } = table;
    const { column, row } = cell;
    const { columnDef } = column;
    const arg = { cell, column, row, table };
    const buttonProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineCopyButtonProps, arg)), parseFromValuesOrFunc(columnDef.mantineCopyButtonProps, arg));
    return (jsx(CopyButton, { value: cell.getValue(), children: ({ copied, copy }) => {
            var _a;
            return (jsx(Tooltip, { color: copied ? 'green' : undefined, withinPortal: true, openDelay: 1000, label: (_a = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.title) !== null && _a !== void 0 ? _a : (copied ? copiedToClipboard : clickToCopy), children: jsx(UnstyledButton, Object.assign({}, buttonProps, { className: clsx('mrt-copy-button', classes$C.root, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), title: undefined, "aria-role": "presentation", onClick: (e) => {
                        e.stopPropagation();
                        copy();
                    }, children: children })) }));
        } }));
};

const allowedTypes = ['string', 'number'];
const allowedFilterVariants = ['text', 'autocomplete'];
const MRT_TableBodyCellValue = ({ cell, table, }) => {
    var _a, _b;
    const { getState, options: { enableFilterMatchHighlighting, mantineHighlightProps }, } = table;
    const { column, row } = cell;
    const { columnDef } = column;
    const { globalFilter, globalFilterFn } = getState();
    const filterValue = column.getFilterValue();
    const highlightProps = parseFromValuesOrFunc(mantineHighlightProps, {
        cell,
        column,
        row,
        table,
    });
    let renderedCellValue = cell.getIsAggregated() && columnDef.AggregatedCell
        ? columnDef.AggregatedCell({
            cell,
            column,
            row,
            table,
        })
        : row.getIsGrouped() && !cell.getIsGrouped()
            ? null
            : cell.getIsGrouped() && columnDef.GroupedCell
                ? columnDef.GroupedCell({
                    cell,
                    column,
                    row,
                    table,
                })
                : undefined;
    const isGroupedValue = renderedCellValue !== undefined;
    if (!isGroupedValue) {
        renderedCellValue = cell.renderValue();
    }
    if (enableFilterMatchHighlighting &&
        columnDef.enableFilterMatchHighlighting !== false &&
        renderedCellValue &&
        allowedTypes.includes(typeof renderedCellValue) &&
        ((filterValue &&
            allowedTypes.includes(typeof filterValue) &&
            allowedFilterVariants.includes(columnDef.filterVariant)) ||
            (globalFilter &&
                allowedTypes.includes(typeof globalFilter) &&
                column.getCanGlobalFilter()))) {
        let highlight = ((_b = (_a = column.getFilterValue()) !== null && _a !== void 0 ? _a : globalFilter) !== null && _b !== void 0 ? _b : '').toString();
        if ((filterValue ? columnDef._filterFn : globalFilterFn) === 'fuzzy') {
            highlight = highlight.split(' ');
        }
        renderedCellValue = (jsx(Highlight, Object.assign({ color: "yellow.3", highlight: highlight }, highlightProps, { children: renderedCellValue === null || renderedCellValue === void 0 ? void 0 : renderedCellValue.toString() })));
    }
    if (columnDef.Cell && !isGroupedValue) {
        renderedCellValue = columnDef.Cell({
            cell,
            renderedCellValue,
            column,
            row,
            table,
        });
    }
    return renderedCellValue;
};

var classes$B = {"root":"MRT_TableBodyCell-module_root__Pobyx","root-default-background":"MRT_TableBodyCell-module_root-default-background__uZLbT","root-inherit-background-color":"MRT_TableBodyCell-module_root-inherit-background-color__aqyHq","root-grid":"MRT_TableBodyCell-module_root-grid__O6-NK","root-data-col":"MRT_TableBodyCell-module_root-data-col__7jOUQ","root-nowrap":"MRT_TableBodyCell-module_root-nowrap__m62z6","root-cursor-pointer":"MRT_TableBodyCell-module_root-cursor-pointer__k4JUJ","root-editable-hover":"MRT_TableBodyCell-module_root-editable-hover__U29y5","root-virtualized":"MRT_TableBodyCell-module_root-virtualized__B3lV-","root-pinned-color":"MRT_TableBodyCell-module_root-pinned-color__G3es7","root-pinned":"MRT_TableBodyCell-module_root-pinned__mGPP6","root-pinned-left":"MRT_TableBodyCell-module_root-pinned-left__QVsHF","root-pinned-right":"MRT_TableBodyCell-module_root-pinned-right__PVC8z","root-pinned-left-last":"MRT_TableBodyCell-module_root-pinned-left-last__lcykV","root-pinned-right-first":"MRT_TableBodyCell-module_root-pinned-right-first__dtmfa","root-expand-depth":"MRT_TableBodyCell-module_root-expand-depth__Xri1r","dragging-column":"MRT_TableBodyCell-module_dragging-column__P2ynr","last-row":"MRT_TableBodyCell-module_last-row__UGl3c","hovered-column":"MRT_TableBodyCell-module_hovered-column__QXqfh","dragging-row":"MRT_TableBodyCell-module_dragging-row__kAFEx","last-column":"MRT_TableBodyCell-module_last-column__Y-71j","first-column":"MRT_TableBodyCell-module_first-column__miFMv","hovered-row":"MRT_TableBodyCell-module_hovered-row__doArj"};

const MRT_TableBodyCell = ({ cell, isStriped, measureElement, numRows, rowIndex, rowRef, table, virtualCell, }) => {
    var _a, _b, _c, _d;
    const { getState, options: { createDisplayMode, editDisplayMode, enableClickToCopy, enableColumnOrdering, enableColumnVirtualization, enableEditing, enableGrouping, enableRowNumbers, layoutMode, mantineSkeletonProps, mantineTableBodyCellProps, rowNumberMode, }, refs: { editInputRefs }, setEditingCell, setHoveredColumn, } = table;
    const { creatingRow, density, draggingColumn, draggingRow, editingCell, editingRow, hoveredColumn, hoveredRow, isLoading, showSkeletons, } = getState();
    const { column, row } = cell;
    const { columnDef } = column;
    const { columnDefType } = columnDef;
    const arg = { cell, column, row, table };
    const tableCellProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableBodyCellProps, arg)), parseFromValuesOrFunc(columnDef.mantineTableBodyCellProps, arg));
    const skeletonProps = parseFromValuesOrFunc(mantineSkeletonProps, arg);
    const [skeletonWidth, setSkeletonWidth] = useState(100);
    useEffect(() => {
        if ((!isLoading && !showSkeletons) || skeletonWidth !== 100)
            return;
        const size = column.getSize();
        setSkeletonWidth(columnDefType === 'display'
            ? size / 2
            : Math.round(Math.random() * (size - size / 3) + size / 3));
    }, [isLoading, showSkeletons]);
    const widthStyles = useMemo(() => {
        var _a;
        const styles = {
            minWidth: `max(calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px), ${(_a = column.columnDef.minSize) !== null && _a !== void 0 ? _a : 30}px)`,
            width: `calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px)`,
        };
        if (layoutMode === 'grid') {
            styles.flex = `${column.getSize()} 0 auto`;
        }
        else if (layoutMode === 'grid-no-grow') {
            styles.flex = '0 0 auto';
        }
        return styles;
    }, [column]);
    const isEditable = (parseFromValuesOrFunc(enableEditing, row) &&
        parseFromValuesOrFunc(columnDef.enableEditing, row)) !== false;
    const isEditing = isEditable &&
        !['modal', 'custom'].includes(editDisplayMode) &&
        (editDisplayMode === 'table' ||
            (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id ||
            (editingCell === null || editingCell === void 0 ? void 0 : editingCell.id) === cell.id) &&
        !row.getIsGrouped();
    const isCreating = isEditable && createDisplayMode === 'row' && (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
    const handleDoubleClick = (event) => {
        var _a;
        (_a = tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.onDoubleClick) === null || _a === void 0 ? void 0 : _a.call(tableCellProps, event);
        if (isEditable && editDisplayMode === 'cell') {
            setEditingCell(cell);
            setTimeout(() => {
                var _a;
                const textField = editInputRefs.current[cell.id];
                if (textField) {
                    textField.focus();
                    (_a = textField.select) === null || _a === void 0 ? void 0 : _a.call(textField);
                }
            }, 100);
        }
    };
    const handleDragEnter = (e) => {
        var _a;
        (_a = tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.onDragEnter) === null || _a === void 0 ? void 0 : _a.call(tableCellProps, e);
        if (enableGrouping && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === 'drop-zone') {
            setHoveredColumn(null);
        }
        if (enableColumnOrdering && draggingColumn) {
            setHoveredColumn(columnDef.enableColumnOrdering !== false ? column : null);
        }
    };
    return (jsxs(TableTd, Object.assign({ "data-index": virtualCell === null || virtualCell === void 0 ? void 0 : virtualCell.index, ref: (node) => {
            if (node) {
                measureElement === null || measureElement === void 0 ? void 0 : measureElement(node);
            }
        } }, tableCellProps, { __vars: Object.assign({ '--mrt-table-cell-justify': (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid'))
                ? tableCellProps.align === 'left'
                    ? 'flex-start'
                    : tableCellProps.align === 'right'
                        ? 'flex-end'
                        : tableCellProps.align
                : undefined, '--mrt-table-cell-left': column.getIsPinned() === 'left'
                ? `${column.getStart('left')}`
                : undefined, '--mrt-table-cell-right': column.getIsPinned() === 'right'
                ? `${getTotalRight(table, column)}`
                : undefined, '--mrt-row-depth': column.id === 'mrt-row-expand' ? `${row.depth}` : undefined }, tableCellProps.__vars), className: clsx(classes$B.root, isStriped || row.getIsSelected()
            ? classes$B['root-inherit-background-color']
            : classes$B['root-default-background'], (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$B['root-grid'], isEditable &&
            editDisplayMode === 'cell' &&
            classes$B['root-cursor-pointer'], isEditable &&
            ['table', 'cell'].includes(editDisplayMode !== null && editDisplayMode !== void 0 ? editDisplayMode : '') &&
            columnDefType !== 'display' &&
            classes$B['root-editable-hover'], enableColumnVirtualization && classes$B['root-virtualized'], column.getIsPinned() &&
            column.columnDef.columnDefType !== 'group' &&
            classes$B['root-pinned'], column.getIsPinned() &&
            column.columnDef.columnDefType !== 'group' &&
            !row.getIsSelected() &&
            classes$B['root-pinned-color'], column.getIsPinned() &&
            column.columnDef.columnDefType !== 'group' &&
            classes$B['root-pinned'], column.getIsPinned() === 'left' && classes$B['root-pinned-left'], column.getIsPinned() === 'right' && classes$B['root-pinned-right'], getIsLastLeftPinnedColumn(table, column) &&
            classes$B['root-pinned-left-last'], getIsFirstRightPinnedColumn(column) &&
            classes$B['root-pinned-right-first'], column.id === 'mrt-row-expand' && classes$B['root-expand-depth'], columnDefType === 'data' && classes$B['root-data-col'], density === 'xs' && classes$B['root-nowrap'], (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) === column.id && classes$B['dragging-column'], (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) !== column.id &&
            (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id &&
            classes$B['hovered-column'], (draggingRow === null || draggingRow === void 0 ? void 0 : draggingRow.id) === row.id && classes$B['dragging-row'], (draggingRow === null || draggingRow === void 0 ? void 0 : draggingRow.id) !== row.id &&
            (hoveredRow === null || hoveredRow === void 0 ? void 0 : hoveredRow.id) === row.id &&
            classes$B['hovered-row'], getIsFirstColumn(column, table) && classes$B['first-column'], getIsLastColumn(column, table) && classes$B['last-column'], numRows && rowIndex === numRows - 1 && classes$B['last-row'], rowIndex === 0 && classes$B['first-row'], tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.className), style: (theme) => (Object.assign(Object.assign({}, widthStyles), parseFromValuesOrFunc(tableCellProps.style, theme))), onDragEnter: handleDragEnter, onDoubleClick: handleDoubleClick, children: [jsx(Fragment, { children: cell.getIsPlaceholder() ? ((_b = (_a = columnDef.PlaceholderCell) === null || _a === void 0 ? void 0 : _a.call(columnDef, { cell, column, row, table })) !== null && _b !== void 0 ? _b : null) : (isLoading || showSkeletons) &&
                    [undefined, null].includes(cell.getValue()) ? (jsx(Skeleton, Object.assign({ height: 20, width: skeletonWidth }, skeletonProps))) : enableRowNumbers &&
                    rowNumberMode === 'static' &&
                    column.id === 'mrt-row-numbers' ? (rowIndex + 1) : columnDefType === 'display' &&
                    (['mrt-row-drag', 'mrt-row-expand', 'mrt-row-select'].includes(column.id) ||
                        !row.getIsGrouped()) ? ((_c = columnDef.Cell) === null || _c === void 0 ? void 0 : _c.call(columnDef, {
                    cell,
                    column,
                    row,
                    rowRef,
                    renderedCellValue: jsx(Fragment, { children: cell.getValue() }),
                    table,
                })) : isCreating || isEditing ? (jsx(MRT_EditCellTextInput, { cell: cell, table: table })) : (enableClickToCopy || columnDef.enableClickToCopy) &&
                    columnDef.enableClickToCopy !== false ? (jsx(MRT_CopyButton, { cell: cell, table: table, children: jsx(MRT_TableBodyCellValue, { cell: cell, table: table }) })) : (jsx(MRT_TableBodyCellValue, { cell: cell, table: table })) }), cell.getIsGrouped() && !columnDef.GroupedCell && (jsxs(Fragment, { children: [" (", (_d = row.subRows) === null || _d === void 0 ? void 0 : _d.length, ")"] }))] })));
};
const Memo_MRT_TableBodyCell = memo(MRT_TableBodyCell, (prev, next) => next.cell === prev.cell);

var classes$A = {"root":"MRT_TableDetailPanel-module_root__QOc-A","root-grid":"MRT_TableDetailPanel-module_root-grid__x81ws","root-virtual-row":"MRT_TableDetailPanel-module_root-virtual-row__gOdLd","inner":"MRT_TableDetailPanel-module_inner__Jt31u","inner-grid":"MRT_TableDetailPanel-module_inner-grid__Fx3MQ","inner-expanded":"MRT_TableDetailPanel-module_inner-expanded__sxlM1","inner-virtual":"MRT_TableDetailPanel-module_inner-virtual__-1POL"};

const MRT_TableDetailPanel = ({ parentRowRef, row, rowIndex, table, virtualRow, }) => {
    var _a, _b;
    const { getVisibleLeafColumns, getState, options: { layoutMode, mantineTableBodyRowProps, mantineDetailPanelProps, renderDetailPanel, }, } = table;
    const { isLoading } = getState();
    const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
        isDetailPanel: true,
        row,
        staticRowIndex: rowIndex,
        table,
    });
    const tableCellProps = parseFromValuesOrFunc(mantineDetailPanelProps, {
        row,
        table,
    });
    const parentRowHeight = virtualRow
        ? (_b = (_a = parentRowRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height
        : 0;
    return (jsx(Box, Object.assign({ component: "tr" }, tableRowProps, { __vars: Object.assign({ '--mrt-parent-row-height': virtualRow && parentRowHeight ? `${parentRowHeight}px` : undefined, '--mrt-virtual-row-start': virtualRow
                ? `${virtualRow.start}px`
                : undefined }, tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.__vars), className: clsx('mantine-Table-tr-detail-panel', classes$A.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$A['root-grid'], virtualRow && classes$A['root-virtual-row'], tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.className), children: jsx(Box, Object.assign({ component: "td", colSpan: getVisibleLeafColumns().length }, tableCellProps, { __vars: {
                '--mrt-inner-width': `${table.getTotalSize()}px`,
            }, className: clsx('mantine-Table-td-detail-panel', classes$A.inner, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$A['inner-grid'], row.getIsExpanded() && classes$A['inner-expanded'], virtualRow && classes$A['inner-virtual']), children: renderDetailPanel && (jsx(Collapse, { in: row.getIsExpanded(), children: !isLoading && renderDetailPanel({ row, table }) })) })) })));
};

var classes$z = {"root":"MRT_TableBodyRow-module_root__XFiaH","root-grid":"MRT_TableBodyRow-module_root-grid__O8---","root-hover":"MRT_TableBodyRow-module_root-hover__8i28-","root-pinned":"MRT_TableBodyRow-module_root-pinned__MDKin","root-sticky-pinned":"MRT_TableBodyRow-module_root-sticky-pinned__iWjBc","root-sticky-pinned-top":"MRT_TableBodyRow-module_root-sticky-pinned-top__euFae","root-sticky-pinned-bottom":"MRT_TableBodyRow-module_root-sticky-pinned-bottom__0cY2E","root-virtualized":"MRT_TableBodyRow-module_root-virtualized__U2ADn"};

const MRT_TableBodyRow = ({ columnVirtualizer, enableHover, isStriped, measureElement, numRows, row, rowIndex, table, pinnedRowIds, virtualColumns, virtualPaddingLeft, virtualPaddingRight, virtualRow, }) => {
    var _a, _b, _c;
    const { getState, options: { enableRowPinning, enableStickyFooter, enableStickyHeader, rowPinningDisplayMode, enableRowOrdering, layoutMode, memoMode, mantineTableBodyRowProps, renderDetailPanel, }, refs: { tableFooterRef, tableHeadRef }, setHoveredRow, } = table;
    const { density, draggingColumn, draggingRow, editingCell, editingRow, hoveredRow, isFullScreen, rowPinning, } = getState();
    const isPinned = enableRowPinning && row.getIsPinned();
    const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
        row,
        staticRowIndex: rowIndex,
        table,
    });
    const [bottomPinnedIndex, topPinnedIndex] = useMemo(() => {
        if (!enableRowPinning ||
            !(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) ||
            !pinnedRowIds ||
            !row.getIsPinned())
            return [];
        return [
            [...pinnedRowIds].reverse().indexOf(row.id),
            pinnedRowIds.indexOf(row.id),
        ];
    }, [pinnedRowIds, rowPinning]);
    const tableHeadHeight = ((enableStickyHeader || isFullScreen) &&
        ((_a = tableHeadRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight)) ||
        0;
    const tableFooterHeight = (enableStickyFooter && ((_b = tableFooterRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight)) || 0;
    const rowHeight = 
    // @ts-ignore
    parseInt((_c = tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.style) === null || _c === void 0 ? void 0 : _c.height, 10) ||
        (density === 'xs' ? 37 : density === 'md' ? 53 : 69);
    const handleDragEnter = (_e) => {
        if (enableRowOrdering && draggingRow) {
            setHoveredRow(row);
        }
    };
    const rowRef = useRef(null);
    return (jsxs(Fragment, { children: [jsxs(TableTr, Object.assign({ "data-index": virtualRow === null || virtualRow === void 0 ? void 0 : virtualRow.index, "data-selected": row.getIsSelected() || undefined, onDragEnter: handleDragEnter, ref: (node) => {
                    if (node) {
                        rowRef.current = node;
                        measureElement === null || measureElement === void 0 ? void 0 : measureElement(node);
                    }
                } }, tableRowProps, { __vars: Object.assign(Object.assign({}, tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.__vars), { '--mrt-virtual-row-start': virtualRow
                        ? `${virtualRow.start}`
                        : undefined, '--mrt-pinned-row-top': virtualRow
                        ? '0'
                        : topPinnedIndex !== undefined && isPinned
                            ? `${topPinnedIndex * rowHeight +
                                (enableStickyHeader || isFullScreen ? tableHeadHeight - 1 : 0)}`
                            : undefined, '--mrt-pinned-row-bottom': !virtualRow && bottomPinnedIndex !== undefined && isPinned
                        ? `${bottomPinnedIndex * rowHeight +
                            (enableStickyFooter ? tableFooterHeight - 1 : 0)}`
                        : undefined }), className: clsx(classes$z.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$z['root-grid'], virtualRow && classes$z['root-virtualized'], ((draggingRow === null || draggingRow === void 0 ? void 0 : draggingRow.id) === row.id || (hoveredRow === null || hoveredRow === void 0 ? void 0 : hoveredRow.id) === row.id) &&
                    classes$z['root-dragging'], enableHover !== false && classes$z['root-hover'], tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.className, isPinned && classes$z['root-pinned'], !virtualRow &&
                    isPinned &&
                    (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) &&
                    classes$z['root-sticky-pinned'], !virtualRow &&
                    isPinned &&
                    (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) &&
                    bottomPinnedIndex !== undefined &&
                    classes$z['root-sticky-pinned-top'], !virtualRow &&
                    isPinned &&
                    (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) &&
                    topPinnedIndex !== undefined &&
                    classes$z['root-sticky-pinned-bottom']), children: [virtualPaddingLeft ? (jsx(Box, { component: "td", display: "flex", w: virtualPaddingLeft })) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : row.getVisibleCells()).map((cellOrVirtualCell) => {
                        var _a, _b;
                        const cell = columnVirtualizer
                            ? row.getVisibleCells()[cellOrVirtualCell.index]
                            : cellOrVirtualCell;
                        const props = {
                            cell,
                            isStriped,
                            measureElement: columnVirtualizer === null || columnVirtualizer === void 0 ? void 0 : columnVirtualizer.measureElement,
                            numRows,
                            rowIndex,
                            rowRef,
                            table,
                            virtualCell: columnVirtualizer
                                ? cellOrVirtualCell
                                : undefined,
                        };
                        return memoMode === 'cells' &&
                            cell.column.columnDef.columnDefType === 'data' &&
                            !draggingColumn &&
                            !draggingRow &&
                            (editingCell === null || editingCell === void 0 ? void 0 : editingCell.id) !== cell.id &&
                            (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) !== row.id ? (jsx(Memo_MRT_TableBodyCell, Object.assign({}, props), cell.id + ((_a = cell.getValue()) === null || _a === void 0 ? void 0 : _a.toString()))) : (jsx(MRT_TableBodyCell, Object.assign({}, props), cell.id + ((_b = cell.getValue) === null || _b === void 0 ? void 0 : _b.toString())));
                    }), virtualPaddingRight ? (jsx(Box, { component: "td", display: "flex", w: virtualPaddingRight })) : null] })), renderDetailPanel && !row.getIsGrouped() && (jsx(MRT_TableDetailPanel, { parentRowRef: rowRef, row: row, rowIndex: rowIndex, table: table, virtualRow: virtualRow }))] }));
};
const Memo_MRT_TableBodyRow = memo(MRT_TableBodyRow, (prev, next) => prev.row === next.row && prev.rowIndex === next.rowIndex);

var classes$y = {"root":"MRT_TableBody-module_root__ZWGrL","root-grid":"MRT_TableBody-module_root-grid__Ndknv","root-no-rows":"MRT_TableBody-module_root-no-rows__sck1s","root-virtualized":"MRT_TableBody-module_root-virtualized__B5Pkm","empty-row-tr-grid":"MRT_TableBody-module_empty-row-tr-grid__itf-D","empty-row-td-grid":"MRT_TableBody-module_empty-row-td-grid__8zVhY","empty-row-td-content":"MRT_TableBody-module_empty-row-td-content__KF5fT"};

const MRT_TableBody = ({ columnVirtualizer, enableHover, isStriped, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }) => {
    var _a, _b, _c, _d;
    const { getCenterRows, getBottomRows, getTopRows, getIsSomeRowsPinned, getRowModel, getPrePaginationRowModel, getState, options: { createDisplayMode, enableGlobalFilterRankedResults, enablePagination, enableRowPinning, enableRowVirtualization, layoutMode, localization, mantineTableBodyProps, manualExpanding, manualFiltering, manualGrouping, manualPagination, manualSorting, memoMode, renderEmptyRowsFallback, rowPinningDisplayMode, rowVirtualizerInstanceRef, rowVirtualizerOptions, enableStickyFooter, enableStickyHeader, }, refs: { tableContainerRef, tablePaperRef, tableHeadRef, tableFooterRef }, } = table;
    const { creatingRow, columnFilters, density, expanded, globalFilter, pagination, rowPinning, isFullScreen, sorting, } = getState();
    const tableBodyProps = parseFromValuesOrFunc(mantineTableBodyProps, {
        table,
    });
    const rowVirtualizerProps = parseFromValuesOrFunc(rowVirtualizerOptions, {
        table,
    });
    const tableHeadHeight = ((enableStickyHeader || isFullScreen) &&
        ((_a = tableHeadRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight)) ||
        0;
    const tableFooterHeight = (enableStickyFooter && ((_b = tableFooterRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight)) || 0;
    const shouldRankRows = useMemo(() => getCanRankRows(table) &&
        !Object.values(sorting).some(Boolean) &&
        globalFilter, [
        enableGlobalFilterRankedResults,
        expanded,
        globalFilter,
        manualExpanding,
        manualFiltering,
        manualGrouping,
        manualSorting,
        sorting,
    ]);
    const pinnedRowIds = useMemo(() => getRowModel()
        .rows.filter((row) => row.getIsPinned())
        .map((r) => r.id), [rowPinning, table.getRowModel().rows]);
    const rows = useMemo(() => {
        let rows = [];
        if (!shouldRankRows) {
            rows =
                !enableRowPinning || (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky'))
                    ? getRowModel().rows
                    : getCenterRows();
        }
        else {
            rows = getPrePaginationRowModel().rows.sort((a, b) => rankGlobalFuzzy(a, b));
            if (enablePagination && !manualPagination) {
                const start = pagination.pageIndex * pagination.pageSize;
                rows = rows.slice(start, start + pagination.pageSize);
            }
        }
        if (enableRowPinning && (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky'))) {
            rows = [
                ...getTopRows().filter((row) => !pinnedRowIds.includes(row.id)),
                ...rows,
                ...getBottomRows().filter((row) => !pinnedRowIds.includes(row.id)),
            ];
        }
        return rows;
    }, [
        shouldRankRows,
        shouldRankRows ? getPrePaginationRowModel().rows : getRowModel().rows,
        pagination.pageIndex,
        pagination.pageSize,
        rowPinning,
    ]);
    const rowVirtualizer = enableRowVirtualization
        ? useVirtualizer(Object.assign({ count: rows.length, estimateSize: () => density === 'xs' ? 42.7 : density === 'md' ? 54.7 : 70.7, getScrollElement: () => tableContainerRef.current, measureElement: typeof window !== 'undefined' &&
                navigator.userAgent.indexOf('Firefox') === -1
                ? (element) => element === null || element === void 0 ? void 0 : element.getBoundingClientRect().height
                : undefined, overscan: 4 }, rowVirtualizerProps))
        : undefined;
    if (rowVirtualizerInstanceRef && rowVirtualizer) {
        rowVirtualizerInstanceRef.current = rowVirtualizer;
    }
    const virtualRows = rowVirtualizer
        ? rowVirtualizer.getVirtualItems()
        : undefined;
    return (jsxs(Fragment, { children: [!(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) &&
                getIsSomeRowsPinned('top') && (jsx(TableTbody, Object.assign({}, tableBodyProps, { style: (theme) => (Object.assign({ display: (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) ? 'grid' : undefined, position: 'sticky', top: tableHeadHeight - 1, zIndex: 1 }, parseFromValuesOrFunc(tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.style, theme))), children: getTopRows().map((row, rowIndex) => {
                    const props = {
                        columnVirtualizer,
                        measureElement: rowVirtualizer === null || rowVirtualizer === void 0 ? void 0 : rowVirtualizer.measureElement,
                        numRows: rows.length,
                        row,
                        rowIndex,
                        table,
                        virtualColumns,
                        virtualPaddingLeft,
                        virtualPaddingRight,
                    };
                    return memoMode === 'rows' ? (jsx(Memo_MRT_TableBodyRow, Object.assign({}, props), row.id)) : (jsx(MRT_TableBodyRow, Object.assign({}, props), row.id));
                }) }))), jsxs(TableTbody, Object.assign({}, tableBodyProps, { className: clsx(classes$y.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$y['root-grid'], !rows.length && classes$y['root-no-rows'], rowVirtualizer && classes$y['root-virtualized'], tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.className), __vars: Object.assign({ '--mrt-table-body-height': rowVirtualizer
                        ? `${rowVirtualizer.getTotalSize()}px`
                        : undefined }, tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.__vars), children: [creatingRow && createDisplayMode === 'row' && (jsx(MRT_TableBodyRow, { table: table, row: creatingRow, rowIndex: -1 })), !rows.length ? (jsx("tr", { className: clsx('mrt-table-body-row', (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$y['empty-row-tr-grid']), children: jsx("td", { colSpan: table.getVisibleLeafColumns().length, className: clsx('mrt-table-body-cell', (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$y['empty-row-td-grid']), children: (_c = renderEmptyRowsFallback === null || renderEmptyRowsFallback === void 0 ? void 0 : renderEmptyRowsFallback({ table })) !== null && _c !== void 0 ? _c : (jsx(Text, { className: clsx(classes$y['empty-row-td-content']), __vars: {
                                    '--mrt-paper-width': `${(_d = tablePaperRef.current) === null || _d === void 0 ? void 0 : _d.clientWidth}`,
                                }, children: globalFilter || columnFilters.length
                                    ? localization.noResultsFound
                                    : localization.noRecordsToDisplay })) }) })) : (jsx(Fragment, { children: (virtualRows !== null && virtualRows !== void 0 ? virtualRows : rows).map((rowOrVirtualRow, rowIndex) => {
                            const row = rowVirtualizer
                                ? rows[rowOrVirtualRow.index]
                                : rowOrVirtualRow;
                            const props = {
                                columnVirtualizer,
                                enableHover,
                                isStriped,
                                measureElement: rowVirtualizer === null || rowVirtualizer === void 0 ? void 0 : rowVirtualizer.measureElement,
                                numRows: rows.length,
                                pinnedRowIds,
                                row,
                                rowIndex: rowVirtualizer ? rowOrVirtualRow.index : rowIndex,
                                table,
                                virtualColumns,
                                virtualPaddingLeft,
                                virtualPaddingRight,
                                virtualRow: rowVirtualizer
                                    ? rowOrVirtualRow
                                    : undefined,
                            };
                            return memoMode === 'rows' ? (jsx(Memo_MRT_TableBodyRow, Object.assign({}, props), row.id || `mrt-${row.index}`)) : (jsx(MRT_TableBodyRow, Object.assign({}, props), row.id || `mrt-${row.index}`));
                        }) }))] })), !(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes('sticky')) &&
                getIsSomeRowsPinned('bottom') && (jsx(TableTbody, Object.assign({}, tableBodyProps, { style: (theme) => (Object.assign({ bottom: tableFooterHeight - 1, display: (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) ? 'grid' : undefined, position: 'sticky', zIndex: 1 }, parseFromValuesOrFunc(tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.style, theme))), children: getBottomRows().map((row, rowIndex) => {
                    const props = {
                        columnVirtualizer,
                        measureElement: rowVirtualizer === null || rowVirtualizer === void 0 ? void 0 : rowVirtualizer.measureElement,
                        numRows: rows.length,
                        row,
                        rowIndex,
                        table,
                        virtualColumns,
                        virtualPaddingLeft,
                        virtualPaddingRight,
                    };
                    return memoMode === 'rows' ? (jsx(Memo_MRT_TableBodyRow, Object.assign({}, props), row.id)) : (jsx(MRT_TableBodyRow, Object.assign({}, props), row.id));
                }) })))] }));
};
const Memo_MRT_TableBody = memo(MRT_TableBody, (prev, next) => prev.table.options.data === next.table.options.data);

var classes$x = {"grab-icon":"MRT_GrabHandleButton-module_grab-icon__9Yqqt"};

const MRT_GrabHandleButton = ({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal }, localization: { move }, }, }, }) => {
    var _a, _b;
    return (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _a !== void 0 ? _a : move, children: jsx(ActionIcon, Object.assign({ "aria-label": (_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _b !== void 0 ? _b : move, draggable: true }, actionIconProps, { onClick: (e) => {
                var _a;
                e.stopPropagation();
                (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onClick) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, e);
            }, onDragStart: onDragStart, onDragEnd: onDragEnd, className: clsx('mrt-grab-handle-button', classes$x['grab-icon'], actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className), title: undefined, children: jsx(IconGripHorizontal, {}) })) }));
};

const MRT_TableBodyRowGrabHandle = ({ row, rowRef, table, }) => {
    const { options: { mantineRowDragHandleProps }, } = table;
    const actionIconProps = parseFromValuesOrFunc(mantineRowDragHandleProps, {
        row,
        table,
    });
    const handleDragStart = (event) => {
        var _a;
        (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragStart) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, event);
        event.dataTransfer.setDragImage(rowRef.current, 0, 0);
        table.setDraggingRow(row);
    };
    const handleDragEnd = (event) => {
        var _a;
        (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragEnd) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, event);
        table.setDraggingRow(null);
        table.setHoveredRow(null);
    };
    return (jsx(MRT_GrabHandleButton, { actionIconProps: actionIconProps, onDragStart: handleDragStart, onDragEnd: handleDragEnd, table: table }));
};

var classes$w = {"root":"MRT_ExpandAllButton-module_root__QGaUK","chevron":"MRT_ExpandAllButton-module_chevron__xIAbV","up":"MRT_ExpandAllButton-module_up__ropcE","right":"MRT_ExpandAllButton-module_right__sj9hk"};

const MRT_ExpandAllButton = ({ table, }) => {
    var _a, _b;
    const { getIsAllRowsExpanded, getIsSomeRowsExpanded, getCanSomeRowsExpand, getState, options: { icons: { IconChevronsDown }, localization, mantineExpandAllButtonProps, renderDetailPanel, }, toggleAllRowsExpanded, } = table;
    const { density, isLoading } = getState();
    const actionIconProps = parseFromValuesOrFunc(mantineExpandAllButtonProps, {
        table,
    });
    const isAllRowsExpanded = getIsAllRowsExpanded();
    return (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: ((_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _a !== void 0 ? _a : isAllRowsExpanded)
            ? localization.collapseAll
            : localization.expandAll, children: jsx(ActionIcon, Object.assign({ "aria-label": localization.expandAll, color: "gray", variant: "transparent" }, actionIconProps, { disabled: isLoading || (!renderDetailPanel && !getCanSomeRowsExpand()), onClick: () => toggleAllRowsExpanded(!isAllRowsExpanded), className: clsx('mrt-expand-all-button', classes$w.root, actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className, density), title: undefined, children: (_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.children) !== null && _b !== void 0 ? _b : (jsx(IconChevronsDown, { className: clsx(classes$w.chevron, isAllRowsExpanded
                    ? classes$w.up
                    : getIsSomeRowsExpanded()
                        ? classes$w.right
                        : undefined) })) })) }));
};

var classes$v = {"root":"MRT_ExpandButton-module_root__bKd9j","chevron":"MRT_ExpandButton-module_chevron__ZwDsP","right":"MRT_ExpandButton-module_right__pR-Xm","up":"MRT_ExpandButton-module_up__DpQ1K"};

const MRT_ExpandButton = ({ row, table, }) => {
    var _a, _b;
    const { options: { icons: { IconChevronDown }, localization, mantineExpandButtonProps, renderDetailPanel, }, } = table;
    const actionIconProps = parseFromValuesOrFunc(mantineExpandButtonProps, {
        table,
        row,
    });
    const canExpand = row.getCanExpand();
    const isExpanded = row.getIsExpanded();
    const handleToggleExpand = (event) => {
        var _a;
        event.stopPropagation();
        row.toggleExpanded();
        (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onClick) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, event);
    };
    return (jsx(Tooltip, { withinPortal: true, disabled: !canExpand && !renderDetailPanel, openDelay: 1000, label: ((_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _a !== void 0 ? _a : isExpanded)
            ? localization.collapse
            : localization.expand, children: jsx(ActionIcon, Object.assign({ "aria-label": localization.expand, color: "gray", disabled: !canExpand && !renderDetailPanel, variant: "transparent" }, actionIconProps, { onClick: handleToggleExpand, className: clsx('mrt-expand-button', classes$v.root, actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className), title: undefined, children: (_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.children) !== null && _b !== void 0 ? _b : (jsx(IconChevronDown, { className: clsx('mrt-expand-button-chevron', classes$v.chevron, !canExpand && !renderDetailPanel
                    ? classes$v.right
                    : isExpanded
                        ? classes$v.up
                        : undefined) })) })) }));
};

const MRT_RowActionMenu = ({ handleEdit, row, table, }) => {
    const { options: { editDisplayMode, enableEditing, icons: { IconEdit, IconDots }, localization, positionActionsColumn, renderRowActionMenuItems, }, } = table;
    return (jsxs(Menu, { position: positionActionsColumn === 'first'
            ? 'bottom-start'
            : positionActionsColumn === 'last'
                ? 'bottom-end'
                : undefined, closeOnItemClick: true, withinPortal: true, children: [jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: localization.rowActions, children: jsx(Menu.Target, { children: jsx(ActionIcon, { "aria-label": localization.rowActions, color: "gray", onClick: (event) => event.stopPropagation(), size: "sm", variant: "transparent", children: jsx(IconDots, {}) }) }) }), jsxs(Menu.Dropdown, { onClick: (event) => event.stopPropagation(), children: [enableEditing && editDisplayMode !== 'table' && (jsx(Menu.Item, { leftSection: jsx(IconEdit, {}), onClick: handleEdit, children: localization.edit })), renderRowActionMenuItems === null || renderRowActionMenuItems === void 0 ? void 0 : renderRowActionMenuItems({
                        row,
                        table,
                    })] })] }));
};

var classes$u = {"root":"MRT_EditActionButtons-module_root__n1yv9"};

const MRT_EditActionButtons = ({ row, table, variant = 'icon', }) => {
    const { getState, options: { icons: { IconCircleX, IconDeviceFloppy }, localization, onCreatingRowCancel, onCreatingRowSave, onEditingRowSave, onEditingRowCancel, }, refs: { editInputRefs }, setCreatingRow, setEditingRow, } = table;
    const { creatingRow, editingRow, isSaving } = getState();
    const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
    const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
    const handleCancel = () => {
        if (isCreating) {
            onCreatingRowCancel === null || onCreatingRowCancel === void 0 ? void 0 : onCreatingRowCancel({ row, table });
            setCreatingRow(null);
        }
        else if (isEditing) {
            onEditingRowCancel === null || onEditingRowCancel === void 0 ? void 0 : onEditingRowCancel({ row, table });
            setEditingRow(null);
        }
        row._valuesCache = {}; //reset values cache
    };
    const handleSubmitRow = () => {
        var _a;
        //look for auto-filled input values
        (_a = Object.values(editInputRefs === null || editInputRefs === void 0 ? void 0 : editInputRefs.current)
            .filter((inputRef) => { var _a, _b; return row.id === ((_b = (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.name) === null || _a === void 0 ? void 0 : _a.split('_')) === null || _b === void 0 ? void 0 : _b[0]); })) === null || _a === void 0 ? void 0 : _a.forEach((input) => {
            if (input.value !== undefined &&
                Object.hasOwn(row === null || row === void 0 ? void 0 : row._valuesCache, input.name)) {
                // @ts-ignore
                row._valuesCache[input.name] = input.value;
            }
        });
        if (isCreating)
            onCreatingRowSave === null || onCreatingRowSave === void 0 ? void 0 : onCreatingRowSave({
                exitCreatingMode: () => setCreatingRow(null),
                row,
                table,
                values: row._valuesCache,
            });
        else if (isEditing) {
            onEditingRowSave === null || onEditingRowSave === void 0 ? void 0 : onEditingRowSave({
                exitEditingMode: () => setEditingRow(null),
                row,
                table,
                values: row === null || row === void 0 ? void 0 : row._valuesCache,
            });
        }
    };
    return (jsx(Box, { onClick: (e) => e.stopPropagation(), className: clsx('mrt-edit-action-buttons', classes$u.root), children: variant === 'icon' ? (jsxs(Fragment, { children: [jsx(Tooltip, { withinPortal: true, label: localization.cancel, children: jsx(ActionIcon, { color: "red", "aria-label": localization.cancel, onClick: handleCancel, variant: "subtle", children: jsx(IconCircleX, {}) }) }), jsx(Tooltip, { withinPortal: true, label: localization.save, children: jsx(ActionIcon, { "aria-label": localization.save, color: "blue", onClick: handleSubmitRow, loading: isSaving, variant: "subtle", children: jsx(IconDeviceFloppy, {}) }) })] })) : (jsxs(Fragment, { children: [jsx(Button, { onClick: handleCancel, variant: "subtle", children: localization.cancel }), jsx(Button, { onClick: handleSubmitRow, variant: "filled", loading: isSaving, children: localization.save })] })) }));
};

const MRT_ToggleRowActionMenuButton = ({ cell, row, table, }) => {
    const { getState, options: { createDisplayMode, editDisplayMode, enableEditing, icons: { IconEdit }, localization: { edit }, renderRowActionMenuItems, renderRowActions, }, setEditingRow, } = table;
    const { creatingRow, editingRow } = getState();
    const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
    const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
    const handleStartEditMode = (event) => {
        event.stopPropagation();
        setEditingRow(Object.assign({}, row));
    };
    const showEditActionButtons = (isCreating && createDisplayMode === 'row') ||
        (isEditing && editDisplayMode === 'row');
    return (jsx(Fragment, { children: renderRowActions && !showEditActionButtons ? (renderRowActions({ cell, row, table })) : showEditActionButtons ? (jsx(MRT_EditActionButtons, { row: row, table: table })) : !renderRowActionMenuItems &&
            parseFromValuesOrFunc(enableEditing, row) ? (jsx(Tooltip, { withinPortal: true, openDelay: 1000, position: "right", label: edit, children: jsx(ActionIcon, { "aria-label": edit, disabled: !!editingRow && editingRow.id !== row.id, onClick: handleStartEditMode, size: "md", variant: "default", children: jsx(IconEdit, {}) }) })) : renderRowActionMenuItems ? (jsx(MRT_RowActionMenu, { handleEdit: handleStartEditMode, row: row, table: table })) : null }));
};

const MRT_SelectCheckbox = ({ row, selectAll, table, }) => {
    var _a;
    const { getState, options: { enableMultiRowSelection, localization, mantineSelectAllCheckboxProps, mantineSelectCheckboxProps, selectAllMode, selectDisplayMode, }, } = table;
    const { density, isLoading } = getState();
    const checkboxProps = !row
        ? parseFromValuesOrFunc(mantineSelectAllCheckboxProps, { table })
        : parseFromValuesOrFunc(mantineSelectCheckboxProps, { row, table });
    const allRowsSelected = selectAll
        ? selectAllMode === 'page'
            ? table.getIsAllPageRowsSelected()
            : table.getIsAllRowsSelected()
        : undefined;
    const commonProps = Object.assign(Object.assign({ 'aria-label': selectAll
            ? localization.toggleSelectAll
            : localization.toggleSelectRow, checked: selectAll ? allRowsSelected : row === null || row === void 0 ? void 0 : row.getIsSelected(), disabled: isLoading || (row && !row.getCanSelect()), onChange: row
            ? row.getToggleSelectedHandler()
            : selectAllMode === 'all'
                ? table.getToggleAllRowsSelectedHandler()
                : table.getToggleAllPageRowsSelectedHandler(), size: density === 'xs' ? 'sm' : 'md' }, checkboxProps), { onClick: (e) => {
            var _a;
            e.stopPropagation();
            (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onClick) === null || _a === void 0 ? void 0 : _a.call(checkboxProps, e);
        }, title: undefined });
    return (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.title) !== null && _a !== void 0 ? _a : (selectAll
            ? localization.toggleSelectAll
            : localization.toggleSelectRow), children: jsx("span", { children: selectDisplayMode === 'switch' ? (jsx(Switch, Object.assign({}, commonProps))) : selectDisplayMode === 'radio' ||
                enableMultiRowSelection === false ? (jsx(Radio, Object.assign({}, commonProps))) : (jsx(Checkbox, Object.assign({ indeterminate: selectAll
                    ? table.getIsSomeRowsSelected() && !allRowsSelected
                    : row === null || row === void 0 ? void 0 : row.getIsSomeSelected() }, commonProps))) }) }));
};

const useMRT_DisplayColumns = ({ creatingRow, columnOrder, grouping, tableOptions, }) => {
    var _a, _b;
    return useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        return [
            ((_b = (_a = tableOptions.state) === null || _a === void 0 ? void 0 : _a.columnOrder) !== null && _b !== void 0 ? _b : columnOrder).includes('mrt-row-pin') && Object.assign(Object.assign(Object.assign({ Cell: ({ row, table }) => (jsx(MRT_TableBodyRowPinButton, { row: row, table: table })), header: tableOptions.localization.pin, size: 60 }, tableOptions.defaultDisplayColumn), (_c = tableOptions.displayColumnDefOptions) === null || _c === void 0 ? void 0 : _c['mrt-row-pin']), { id: 'mrt-row-pin' }),
            ((_e = (_d = tableOptions.state) === null || _d === void 0 ? void 0 : _d.columnOrder) !== null && _e !== void 0 ? _e : columnOrder).includes('mrt-row-drag') && Object.assign(Object.assign(Object.assign({ Cell: ({ row, rowRef, table }) => (jsx(MRT_TableBodyRowGrabHandle, { row: row, rowRef: rowRef, table: table })), header: tableOptions.localization.move, size: 60 }, tableOptions.defaultDisplayColumn), (_f = tableOptions.displayColumnDefOptions) === null || _f === void 0 ? void 0 : _f['mrt-row-drag']), { id: 'mrt-row-drag' }),
            (((_h = (_g = tableOptions.state) === null || _g === void 0 ? void 0 : _g.columnOrder) !== null && _h !== void 0 ? _h : columnOrder).includes('mrt-row-actions') ||
                (creatingRow && tableOptions.createDisplayMode === 'row')) && Object.assign(Object.assign(Object.assign({ Cell: ({ cell, row, table }) => (jsx(MRT_ToggleRowActionMenuButton, { cell: cell, row: row, table: table })), header: tableOptions.localization.actions, size: 70 }, tableOptions.defaultDisplayColumn), (_j = tableOptions.displayColumnDefOptions) === null || _j === void 0 ? void 0 : _j['mrt-row-actions']), { id: 'mrt-row-actions' }),
            ((_l = (_k = tableOptions.state) === null || _k === void 0 ? void 0 : _k.columnOrder) !== null && _l !== void 0 ? _l : columnOrder).includes('mrt-row-expand') &&
                showExpandColumn(tableOptions, (_o = (_m = tableOptions.state) === null || _m === void 0 ? void 0 : _m.grouping) !== null && _o !== void 0 ? _o : grouping) && Object.assign(Object.assign(Object.assign({ Cell: ({ row, table }) => (jsx(MRT_ExpandButton, { row: row, table: table })), Header: tableOptions.enableExpandAll
                    ? ({ table }) => jsx(MRT_ExpandAllButton, { table: table })
                    : null, header: tableOptions.localization.expand, size: 60 }, tableOptions.defaultDisplayColumn), (_p = tableOptions.displayColumnDefOptions) === null || _p === void 0 ? void 0 : _p['mrt-row-expand']), { id: 'mrt-row-expand' }),
            ((_r = (_q = tableOptions.state) === null || _q === void 0 ? void 0 : _q.columnOrder) !== null && _r !== void 0 ? _r : columnOrder).includes('mrt-row-select') && Object.assign(Object.assign(Object.assign({ Cell: ({ row, table }) => (jsx(MRT_SelectCheckbox, { row: row, table: table })), Header: tableOptions.enableSelectAll &&
                    tableOptions.enableMultiRowSelection
                    ? ({ table }) => jsx(MRT_SelectCheckbox, { selectAll: true, table: table })
                    : null, header: tableOptions.localization.select, size: 60 }, tableOptions.defaultDisplayColumn), (_s = tableOptions.displayColumnDefOptions) === null || _s === void 0 ? void 0 : _s['mrt-row-select']), { id: 'mrt-row-select' }),
            ((_u = (_t = tableOptions.state) === null || _t === void 0 ? void 0 : _t.columnOrder) !== null && _u !== void 0 ? _u : columnOrder).includes('mrt-row-numbers') && Object.assign(Object.assign(Object.assign({ Cell: ({ row }) => row.index + 1, Header: () => tableOptions.localization.rowNumber, header: tableOptions.localization.rowNumbers, size: 60 }, tableOptions.defaultDisplayColumn), (_v = tableOptions.displayColumnDefOptions) === null || _v === void 0 ? void 0 : _v['mrt-row-numbers']), { id: 'mrt-row-numbers' }),
        ].filter(Boolean);
    }, [
        columnOrder,
        grouping,
        tableOptions.displayColumnDefOptions,
        tableOptions.editDisplayMode,
        tableOptions.enableColumnDragging,
        tableOptions.enableColumnFilterModes,
        tableOptions.enableColumnOrdering,
        tableOptions.enableEditing,
        tableOptions.enableExpandAll,
        tableOptions.enableExpanding,
        tableOptions.enableGrouping,
        tableOptions.enableRowActions,
        tableOptions.enableRowDragging,
        tableOptions.enableRowNumbers,
        tableOptions.enableRowOrdering,
        tableOptions.enableRowSelection,
        tableOptions.enableSelectAll,
        tableOptions.localization,
        tableOptions.positionActionsColumn,
        tableOptions.renderDetailPanel,
        tableOptions.renderRowActionMenuItems,
        tableOptions.renderRowActions,
        (_a = tableOptions.state) === null || _a === void 0 ? void 0 : _a.columnOrder,
        (_b = tableOptions.state) === null || _b === void 0 ? void 0 : _b.grouping,
    ]);
};

const useMRT_Effects = (table) => {
    const { getState, options: { enablePagination, rowCount }, } = table;
    const { globalFilter, isFullScreen, pagination, sorting, isLoading, showSkeletons, } = getState();
    const isMounted = useRef(false);
    const initialBodyHeight = useRef();
    const previousTop = useRef();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            initialBodyHeight.current = document.body.style.height;
        }
    }, []);
    useEffect(() => {
        if (isMounted && typeof window !== 'undefined') {
            if (isFullScreen) {
                previousTop.current = document.body.getBoundingClientRect().top; //save scroll position
                document.body.style.height = '100vh'; //hide page scrollbars when table is in full screen mode
            }
            else {
                document.body.style.height = initialBodyHeight.current;
                if (!previousTop.current)
                    return;
                //restore scroll position
                window.scrollTo({
                    top: -1 * previousTop.current,
                    behavior: 'instant',
                });
            }
        }
        isMounted.current = true;
    }, [isFullScreen]);
    //if page index is out of bounds, set it to the last page
    useEffect(() => {
        if (!enablePagination || isLoading || showSkeletons)
            return;
        const { pageIndex, pageSize } = pagination;
        const totalRowCount = rowCount !== null && rowCount !== void 0 ? rowCount : table.getPrePaginationRowModel().rows.length;
        const firstVisibleRowIndex = pageIndex * pageSize;
        if (firstVisibleRowIndex > totalRowCount) {
            table.setPageIndex(Math.floor(totalRowCount / pageSize));
        }
    }, [rowCount, table.getPrePaginationRowModel().rows.length]);
    //turn off sort when global filter is looking for ranked results
    const appliedSort = useRef(sorting);
    useEffect(() => {
        if (sorting.length) {
            appliedSort.current = sorting;
        }
    }, [sorting]);
    useEffect(() => {
        if (!getCanRankRows(table))
            return;
        if (globalFilter) {
            table.setSorting([]);
        }
        else {
            table.setSorting(() => appliedSort.current || []);
        }
    }, [globalFilter]);
};

const useMRT_TableInstance = (tableOptions) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
    const bottomToolbarRef = useRef(null);
    const editInputRefs = useRef({});
    const filterInputRefs = useRef({});
    const searchInputRef = useRef(null);
    const tableContainerRef = useRef(null);
    const tableHeadCellRefs = useRef({});
    const tablePaperRef = useRef(null);
    const topToolbarRef = useRef(null);
    const tableHeadRef = useRef(null);
    const tableFooterRef = useRef(null);
    const initialState = useMemo(() => {
        var _a, _b, _c;
        const initState = (_a = tableOptions.initialState) !== null && _a !== void 0 ? _a : {};
        initState.columnOrder =
            (_b = initState.columnOrder) !== null && _b !== void 0 ? _b : getDefaultColumnOrderIds(tableOptions);
        initState.globalFilterFn = (_c = tableOptions.globalFilterFn) !== null && _c !== void 0 ? _c : 'fuzzy';
        return initState;
    }, []);
    const [creatingRow, _setCreatingRow] = useState((_a = initialState.creatingRow) !== null && _a !== void 0 ? _a : null);
    const [columnFilterFns, setColumnFilterFns] = useState(() => Object.assign({}, ...getAllLeafColumnDefs(tableOptions.columns).map((col) => {
        var _a, _b, _c, _d;
        return ({
            [getColumnId(col)]: col.filterFn instanceof Function
                ? (_a = col.filterFn.name) !== null && _a !== void 0 ? _a : 'custom'
                : (_d = (_b = col.filterFn) !== null && _b !== void 0 ? _b : (_c = initialState === null || initialState === void 0 ? void 0 : initialState.columnFilterFns) === null || _c === void 0 ? void 0 : _c[getColumnId(col)]) !== null && _d !== void 0 ? _d : getDefaultColumnFilterFn(col),
        });
    })));
    const [columnOrder, setColumnOrder] = useState((_b = initialState.columnOrder) !== null && _b !== void 0 ? _b : []);
    const [density, setDensity] = useState((_c = initialState === null || initialState === void 0 ? void 0 : initialState.density) !== null && _c !== void 0 ? _c : 'md');
    const [draggingColumn, setDraggingColumn] = useState((_d = initialState.draggingColumn) !== null && _d !== void 0 ? _d : null);
    const [draggingRow, setDraggingRow] = useState((_e = initialState.draggingRow) !== null && _e !== void 0 ? _e : null);
    const [editingCell, setEditingCell] = useState((_f = initialState.editingCell) !== null && _f !== void 0 ? _f : null);
    const [editingRow, setEditingRow] = useState((_g = initialState.editingRow) !== null && _g !== void 0 ? _g : null);
    const [globalFilterFn, setGlobalFilterFn] = useState((_h = initialState.globalFilterFn) !== null && _h !== void 0 ? _h : 'fuzzy');
    const [grouping, setGrouping] = useState((_j = initialState.grouping) !== null && _j !== void 0 ? _j : []);
    const [hoveredColumn, setHoveredColumn] = useState((_k = initialState.hoveredColumn) !== null && _k !== void 0 ? _k : null);
    const [hoveredRow, setHoveredRow] = useState((_l = initialState.hoveredRow) !== null && _l !== void 0 ? _l : null);
    const [isFullScreen, setIsFullScreen] = useState((_m = initialState === null || initialState === void 0 ? void 0 : initialState.isFullScreen) !== null && _m !== void 0 ? _m : false);
    const [showAlertBanner, setShowAlertBanner] = useState((_p = (_o = tableOptions.initialState) === null || _o === void 0 ? void 0 : _o.showAlertBanner) !== null && _p !== void 0 ? _p : false);
    const [showColumnFilters, setShowColumnFilters] = useState((_q = initialState === null || initialState === void 0 ? void 0 : initialState.showColumnFilters) !== null && _q !== void 0 ? _q : false);
    const [showGlobalFilter, setShowGlobalFilter] = useState((_r = initialState === null || initialState === void 0 ? void 0 : initialState.showGlobalFilter) !== null && _r !== void 0 ? _r : false);
    const [showToolbarDropZone, setShowToolbarDropZone] = useState((_s = initialState === null || initialState === void 0 ? void 0 : initialState.showToolbarDropZone) !== null && _s !== void 0 ? _s : false);
    const displayColumns = useMRT_DisplayColumns({
        columnOrder,
        creatingRow,
        grouping,
        tableOptions,
    });
    const columnDefs = useMemo(() => {
        var _a, _b, _c;
        return prepareColumns({
            aggregationFns: tableOptions.aggregationFns,
            columnDefs: [...displayColumns, ...tableOptions.columns],
            columnFilterFns: (_b = (_a = tableOptions.state) === null || _a === void 0 ? void 0 : _a.columnFilterFns) !== null && _b !== void 0 ? _b : columnFilterFns,
            defaultDisplayColumn: (_c = tableOptions.defaultDisplayColumn) !== null && _c !== void 0 ? _c : {},
            filterFns: tableOptions.filterFns,
            sortingFns: tableOptions.sortingFns,
        });
    }, [
        columnFilterFns,
        displayColumns,
        tableOptions.columns,
        (_t = tableOptions.state) === null || _t === void 0 ? void 0 : _t.columnFilterFns,
    ]);
    const data = useMemo(() => {
        var _a, _b, _c, _d, _e;
        return (((_a = tableOptions.state) === null || _a === void 0 ? void 0 : _a.isLoading) || ((_b = tableOptions.state) === null || _b === void 0 ? void 0 : _b.showSkeletons)) &&
            !tableOptions.data.length
            ? [
                ...Array(((_d = (_c = tableOptions.state) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.pageSize) ||
                    ((_e = initialState === null || initialState === void 0 ? void 0 : initialState.pagination) === null || _e === void 0 ? void 0 : _e.pageSize) ||
                    10).fill(null),
            ].map(() => Object.assign({}, ...getAllLeafColumnDefs(tableOptions.columns).map((col) => ({
                [getColumnId(col)]: null,
            }))))
            : tableOptions.data;
    }, [
        tableOptions.data,
        (_u = tableOptions.state) === null || _u === void 0 ? void 0 : _u.isLoading,
        (_v = tableOptions.state) === null || _v === void 0 ? void 0 : _v.showSkeletons,
    ]);
    //@ts-ignore
    const table = useReactTable(Object.assign(Object.assign({ getCoreRowModel: getCoreRowModel(), getExpandedRowModel: tableOptions.enableExpanding || tableOptions.enableGrouping
            ? getExpandedRowModel()
            : undefined, getFacetedMinMaxValues: tableOptions.enableFacetedValues
            ? getFacetedMinMaxValues()
            : undefined, getFacetedRowModel: tableOptions.enableFacetedValues
            ? getFacetedRowModel()
            : undefined, getFacetedUniqueValues: tableOptions.enableFacetedValues
            ? getFacetedUniqueValues()
            : undefined, getFilteredRowModel: tableOptions.enableColumnFilters ||
            tableOptions.enableGlobalFilter ||
            tableOptions.enableFilters
            ? getFilteredRowModel()
            : undefined, getGroupedRowModel: tableOptions.enableGrouping
            ? getGroupedRowModel()
            : undefined, getPaginationRowModel: tableOptions.enablePagination
            ? getPaginationRowModel()
            : undefined, getSortedRowModel: tableOptions.enableSorting
            ? getSortedRowModel()
            : undefined, onColumnOrderChange: setColumnOrder, onGroupingChange: setGrouping, getSubRows: (row) => row === null || row === void 0 ? void 0 : row.subRows }, tableOptions), { 
        //@ts-ignore
        columns: columnDefs, data, globalFilterFn: (_w = tableOptions.filterFns) === null || _w === void 0 ? void 0 : _w[globalFilterFn !== null && globalFilterFn !== void 0 ? globalFilterFn : 'fuzzy'], initialState, state: Object.assign({ creatingRow,
            columnFilterFns,
            columnOrder,
            density,
            draggingColumn,
            draggingRow,
            editingCell,
            editingRow,
            globalFilterFn,
            grouping,
            hoveredColumn,
            hoveredRow,
            isFullScreen,
            showAlertBanner,
            showColumnFilters,
            showGlobalFilter,
            showToolbarDropZone }, tableOptions.state) }));
    // @ts-ignore
    table.refs = {
        // @ts-ignore
        bottomToolbarRef,
        editInputRefs,
        filterInputRefs,
        // @ts-ignore
        searchInputRef,
        // @ts-ignore
        tableContainerRef,
        // @ts-ignore
        tableFooterRef,
        tableHeadCellRefs,
        // @ts-ignore
        tableHeadRef,
        // @ts-ignore
        tablePaperRef,
        // @ts-ignore
        topToolbarRef,
    };
    const setCreatingRow = (row) => {
        var _a, _b;
        let _row = row;
        if (row === true) {
            _row = createRow(table);
        }
        (_b = (_a = tableOptions === null || tableOptions === void 0 ? void 0 : tableOptions.onCreatingRowChange) === null || _a === void 0 ? void 0 : _a.call(tableOptions, _row)) !== null && _b !== void 0 ? _b : _setCreatingRow(_row);
    };
    table.setCreatingRow = setCreatingRow;
    table.setColumnFilterFns =
        (_x = tableOptions.onColumnFilterFnsChange) !== null && _x !== void 0 ? _x : setColumnFilterFns;
    table.setDensity = (_y = tableOptions.onDensityChange) !== null && _y !== void 0 ? _y : setDensity;
    table.setDraggingColumn =
        (_z = tableOptions.onDraggingColumnChange) !== null && _z !== void 0 ? _z : setDraggingColumn;
    table.setDraggingRow = (_0 = tableOptions.onDraggingRowChange) !== null && _0 !== void 0 ? _0 : setDraggingRow;
    table.setEditingCell = (_1 = tableOptions.onEditingCellChange) !== null && _1 !== void 0 ? _1 : setEditingCell;
    table.setEditingRow = (_2 = tableOptions.onEditingRowChange) !== null && _2 !== void 0 ? _2 : setEditingRow;
    table.setGlobalFilterFn =
        (_3 = tableOptions.onGlobalFilterFnChange) !== null && _3 !== void 0 ? _3 : setGlobalFilterFn;
    table.setHoveredColumn =
        (_4 = tableOptions.onHoveredColumnChange) !== null && _4 !== void 0 ? _4 : setHoveredColumn;
    table.setHoveredRow = (_5 = tableOptions.onHoveredRowChange) !== null && _5 !== void 0 ? _5 : setHoveredRow;
    table.setIsFullScreen = (_6 = tableOptions.onIsFullScreenChange) !== null && _6 !== void 0 ? _6 : setIsFullScreen;
    table.setShowAlertBanner =
        (_7 = tableOptions.onShowAlertBannerChange) !== null && _7 !== void 0 ? _7 : setShowAlertBanner;
    table.setShowColumnFilters =
        (_8 = tableOptions.onShowColumnFiltersChange) !== null && _8 !== void 0 ? _8 : setShowColumnFilters;
    table.setShowGlobalFilter =
        (_9 = tableOptions.onShowGlobalFilterChange) !== null && _9 !== void 0 ? _9 : setShowGlobalFilter;
    table.setShowToolbarDropZone =
        (_10 = tableOptions.onShowToolbarDropZoneChange) !== null && _10 !== void 0 ? _10 : setShowToolbarDropZone;
    useMRT_Effects(table);
    return table;
};

const useMantineReactTable = (tableOptions) => {
    const parsedTableOptions = useMRT_TableOptions(tableOptions);
    const tableInstance = useMRT_TableInstance(parsedTableOptions);
    return tableInstance;
};

var classes$t = {"symbol":"MRT_FilterOptionMenu-module_symbol__5jq-w"};

const mrtFilterOptions = (localization) => [
    {
        option: 'fuzzy',
        symbol: '≈',
        label: localization.filterFuzzy,
        divider: false,
    },
    {
        option: 'contains',
        symbol: '*',
        label: localization.filterContains,
        divider: false,
    },
    {
        option: 'startsWith',
        symbol: 'a',
        label: localization.filterStartsWith,
        divider: false,
    },
    {
        option: 'endsWith',
        symbol: 'z',
        label: localization.filterEndsWith,
        divider: true,
    },
    {
        option: 'equals',
        symbol: '=',
        label: localization.filterEquals,
        divider: false,
    },
    {
        option: 'notEquals',
        symbol: '≠',
        label: localization.filterNotEquals,
        divider: true,
    },
    {
        option: 'between',
        symbol: '⇿',
        label: localization.filterBetween,
        divider: false,
    },
    {
        option: 'betweenInclusive',
        symbol: '⬌',
        label: localization.filterBetweenInclusive,
        divider: true,
    },
    {
        option: 'greaterThan',
        symbol: '>',
        label: localization.filterGreaterThan,
        divider: false,
    },
    {
        option: 'greaterThanOrEqualTo',
        symbol: '≥',
        label: localization.filterGreaterThanOrEqualTo,
        divider: false,
    },
    {
        option: 'lessThan',
        symbol: '<',
        label: localization.filterLessThan,
        divider: false,
    },
    {
        option: 'lessThanOrEqualTo',
        symbol: '≤',
        label: localization.filterLessThanOrEqualTo,
        divider: true,
    },
    {
        option: 'empty',
        symbol: '∅',
        label: localization.filterEmpty,
        divider: false,
    },
    {
        option: 'notEmpty',
        symbol: '!∅',
        label: localization.filterNotEmpty,
        divider: false,
    },
];
const rangeModes = ['between', 'betweenInclusive', 'inNumberRange'];
const emptyModes = ['empty', 'notEmpty'];
const arrModes = ['arrIncludesSome', 'arrIncludesAll', 'arrIncludes'];
const rangeVariants = ['range-slider', 'date-range', 'range'];
const MRT_FilterOptionMenu = ({ header, onSelect, table, }) => {
    var _a, _b, _c, _d;
    const { getState, options: { columnFilterModeOptions, globalFilterModeOptions, localization, renderColumnFilterModeMenuItems, renderGlobalFilterModeMenuItems, }, setColumnFilterFns, setGlobalFilterFn, } = table;
    const { globalFilterFn } = getState();
    const { column } = header !== null && header !== void 0 ? header : {};
    const { columnDef } = column !== null && column !== void 0 ? column : {};
    const currentFilterValue = column === null || column === void 0 ? void 0 : column.getFilterValue();
    let allowedColumnFilterOptions = (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _a !== void 0 ? _a : columnFilterModeOptions;
    if (rangeVariants.includes(columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant)) {
        allowedColumnFilterOptions = [
            ...rangeModes,
            ...(allowedColumnFilterOptions !== null && allowedColumnFilterOptions !== void 0 ? allowedColumnFilterOptions : []),
        ].filter((option) => rangeModes.includes(option));
    }
    const internalFilterOptions = useMemo(() => mrtFilterOptions(localization).filter((filterOption) => columnDef
        ? allowedColumnFilterOptions === undefined ||
            (allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions.includes(filterOption.option))
        : (!globalFilterModeOptions ||
            globalFilterModeOptions.includes(filterOption.option)) &&
            ['fuzzy', 'contains', 'startsWith'].includes(filterOption.option)), []);
    const handleSelectFilterMode = (option) => {
        var _a;
        const prevFilterMode = (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef._filterFn) !== null && _a !== void 0 ? _a : '';
        if (!header || !column) {
            // global filter mode
            setGlobalFilterFn(option);
        }
        else if (option !== prevFilterMode) {
            // column filter mode
            setColumnFilterFns((prev) => (Object.assign(Object.assign({}, prev), { [header.id]: option })));
            // reset filter value and/or perform new filter render
            if (emptyModes.includes(option)) {
                // will now be empty/notEmpty filter mode
                if (currentFilterValue !== ' ' &&
                    !emptyModes.includes(prevFilterMode)) {
                    column.setFilterValue(' ');
                }
                else if (currentFilterValue) {
                    column.setFilterValue(currentFilterValue); // perform new filter render
                }
            }
            else if ((columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant) === 'multi-select' ||
                arrModes.includes(option)) {
                // will now be array filter mode
                if (currentFilterValue instanceof String ||
                    (currentFilterValue === null || currentFilterValue === void 0 ? void 0 : currentFilterValue.length)) {
                    column.setFilterValue([]);
                }
                else if (currentFilterValue) {
                    column.setFilterValue(currentFilterValue); // perform new filter render
                }
            }
            else if (rangeVariants.includes(columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant) ||
                rangeModes.includes(option)) {
                // will now be range filter mode
                if (!Array.isArray(currentFilterValue) ||
                    (!(currentFilterValue === null || currentFilterValue === void 0 ? void 0 : currentFilterValue.every((v) => v === '')) &&
                        !rangeModes.includes(prevFilterMode))) {
                    column.setFilterValue(['', '']);
                }
                else {
                    column.setFilterValue(currentFilterValue); // perform new filter render
                }
            }
            else {
                // will now be single value filter mode
                if (Array.isArray(currentFilterValue)) {
                    column.setFilterValue('');
                }
                else {
                    column.setFilterValue(currentFilterValue); // perform new filter render
                }
            }
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
    };
    const filterOption = !!header && columnDef ? columnDef._filterFn : globalFilterFn;
    return (jsx(Menu.Dropdown, { children: (_d = (header && column && columnDef
            ? (_c = (_b = columnDef.renderColumnFilterModeMenuItems) === null || _b === void 0 ? void 0 : _b.call(columnDef, {
                column: column,
                internalFilterOptions,
                onSelectFilterMode: handleSelectFilterMode,
                table,
            })) !== null && _c !== void 0 ? _c : renderColumnFilterModeMenuItems === null || renderColumnFilterModeMenuItems === void 0 ? void 0 : renderColumnFilterModeMenuItems({
                column: column,
                internalFilterOptions,
                onSelectFilterMode: handleSelectFilterMode,
                table,
            })
            : renderGlobalFilterModeMenuItems === null || renderGlobalFilterModeMenuItems === void 0 ? void 0 : renderGlobalFilterModeMenuItems({
                internalFilterOptions,
                onSelectFilterMode: handleSelectFilterMode,
                table,
            }))) !== null && _d !== void 0 ? _d : internalFilterOptions.map(({ option, label, divider, symbol }, index) => (jsxs(Fragment$1, { children: [jsx(Menu.Item, { onClick: () => handleSelectFilterMode(option), color: option === filterOption ? 'blue' : undefined, value: option, leftSection: jsx("span", { className: classes$t.symbol, children: symbol }), children: label }), divider && jsx(Menu.Divider, {})] }, index))) }));
};

var classes$s = {"root":"MRT_GlobalFilterTextInput-module_root__68P5l","collapse":"MRT_GlobalFilterTextInput-module_collapse__1IEZF"};

const MRT_GlobalFilterTextInput = ({ table, }) => {
    const { getState, setGlobalFilter, options: { enableGlobalFilterModes, icons: { IconSearch, IconX }, localization, manualFiltering, mantineSearchTextInputProps, }, refs: { searchInputRef }, } = table;
    const { globalFilter, showGlobalFilter } = getState();
    const textFieldProps = parseFromValuesOrFunc(mantineSearchTextInputProps, {
        table,
    });
    const isMounted = useRef(false);
    const [searchValue, setSearchValue] = useState(globalFilter !== null && globalFilter !== void 0 ? globalFilter : '');
    const [debouncedSearchValue] = useDebouncedValue(searchValue, manualFiltering ? 500 : 250);
    useEffect(() => {
        setGlobalFilter(debouncedSearchValue || undefined);
    }, [debouncedSearchValue]);
    const handleClear = () => {
        setSearchValue('');
        setGlobalFilter(undefined);
    };
    useEffect(() => {
        if (isMounted.current) {
            if (globalFilter === undefined) {
                handleClear();
            }
            else {
                setSearchValue(globalFilter);
            }
        }
        isMounted.current = true;
    }, [globalFilter]);
    return (jsxs(Collapse, { in: showGlobalFilter, className: classes$s.collapse, children: [enableGlobalFilterModes && (jsxs(Menu, { withinPortal: true, children: [jsx(Menu.Target, { children: jsx(ActionIcon, { "aria-label": localization.changeSearchMode, color: "gray", size: "sm", variant: "transparent", children: jsx(IconSearch, {}) }) }), jsx(MRT_FilterOptionMenu, { table: table, onSelect: handleClear })] })), jsx(TextInput, Object.assign({ placeholder: localization.search, onChange: (event) => setSearchValue(event.target.value), value: searchValue !== null && searchValue !== void 0 ? searchValue : '', variant: "filled", leftSection: !enableGlobalFilterModes && jsx(IconSearch, {}), rightSection: searchValue ? (jsx(ActionIcon, { "aria-label": localization.clearSearch, color: "gray", disabled: !(searchValue === null || searchValue === void 0 ? void 0 : searchValue.length), onClick: handleClear, size: "sm", variant: "transparent", children: jsx(Tooltip, { withinPortal: true, label: localization.clearSearch, children: jsx(IconX, {}) }) })) : null }, textFieldProps, { ref: (node) => {
                    if (node) {
                        searchInputRef.current = node;
                        if (textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.ref) {
                            // @ts-ignore
                            textFieldProps.ref = node;
                        }
                    }
                }, className: clsx('mrt-global-filter-text-input', classes$s.root, textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.className) }))] }));
};

var classes$r = {"collapse":"MRT_ProgressBar-module_collapse__5jb9N","collapse-top":"MRT_ProgressBar-module_collapse-top__RGkm-"};

const MRT_ProgressBar = ({ isTopToolbar, table, }) => {
    const { options: { mantineProgressProps }, getState, } = table;
    const { isSaving, showProgressBars } = getState();
    const linearProgressProps = parseFromValuesOrFunc(mantineProgressProps, {
        isTopToolbar,
        table,
    });
    return (jsx(Collapse, { in: isSaving || showProgressBars, className: clsx(classes$r.collapse, isTopToolbar && classes$r['collapse-top']), children: jsx(Progress, Object.assign({ animated: true, "aria-busy": "true", "aria-label": "Loading", radius: 0, value: 100 }, linearProgressProps)) }));
};

var classes$q = {"root":"MRT_TablePagination-module_root__htEye","pagesize":"MRT_TablePagination-module_pagesize__CbS02","with-top-margin":"MRT_TablePagination-module_with-top-margin__dVoCP"};

const defaultRowsPerPage = [5, 10, 15, 20, 25, 30, 50, 100].map((x) => x.toString());
const MRT_TablePagination = ({ table, position = 'bottom', }) => {
    var _a;
    const { getPrePaginationRowModel, getState, setPageIndex, setPageSize, options: { enableToolbarInternalActions, icons: { IconChevronLeftPipe, IconChevronRightPipe, IconChevronLeft, IconChevronRight, }, localization, mantinePaginationProps, paginationDisplayMode, rowCount, }, } = table;
    const { pagination: { pageSize = 10, pageIndex = 0 }, showGlobalFilter, } = getState();
    const paginationProps = parseFromValuesOrFunc(mantinePaginationProps, {
        table,
    });
    const totalRowCount = rowCount !== null && rowCount !== void 0 ? rowCount : getPrePaginationRowModel().rows.length;
    const numberOfPages = Math.ceil(totalRowCount / pageSize);
    const showFirstLastPageButtons = numberOfPages > 2;
    const firstRowIndex = pageIndex * pageSize;
    const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);
    const _b = paginationProps !== null && paginationProps !== void 0 ? paginationProps : {}, { rowsPerPageOptions = defaultRowsPerPage, showRowsPerPage = true, withEdges = showFirstLastPageButtons } = _b, rest = __rest(_b, ["rowsPerPageOptions", "showRowsPerPage", "withEdges"]);
    const needsTopMargin = position === 'top' && enableToolbarInternalActions && !showGlobalFilter;
    return (jsxs(Box, { className: clsx('mrt-table-pagination', classes$q.root, needsTopMargin && classes$q['with-top-margin']), children: [(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.showRowsPerPage) !== false && (jsxs(Group, { gap: "xs", children: [jsx(Text, { id: "rpp-label", children: localization.rowsPerPage }), jsx(Select, { "aria-labelledby": "rpp-label", className: classes$q.pagesize, data: (_a = paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.rowsPerPageOptions) !== null && _a !== void 0 ? _a : defaultRowsPerPage, onChange: (value) => setPageSize(+value), value: pageSize.toString() })] })), paginationDisplayMode === 'pages' ? (jsx(Pagination, Object.assign({ onChange: (newPageIndex) => setPageIndex(newPageIndex - 1), total: numberOfPages, value: pageIndex + 1, withEdges: withEdges, nextIcon: IconChevronRight, previousIcon: IconChevronLeft, firstIcon: IconChevronLeftPipe, lastIcon: IconChevronRightPipe }, rest))) : paginationDisplayMode === 'default' ? (jsxs(Fragment, { children: [jsx(Text, { children: `${lastRowIndex === 0 ? 0 : (firstRowIndex + 1).toLocaleString()}-${lastRowIndex.toLocaleString()} ${localization.of} ${totalRowCount.toLocaleString()}` }), jsxs(Group, { gap: 6, children: [withEdges && (jsx(ActionIcon, { "aria-label": localization.goToFirstPage, disabled: pageIndex <= 0, onClick: () => setPageIndex(0), variant: "subtle", color: "gray", children: jsx(IconChevronLeftPipe, {}) })), jsx(ActionIcon, { "aria-label": localization.goToPreviousPage, disabled: pageIndex <= 0, onClick: () => setPageIndex(pageIndex - 1), variant: "subtle", color: "gray", children: jsx(IconChevronLeft, {}) }), jsx(ActionIcon, { "aria-label": localization.goToNextPage, disabled: lastRowIndex >= totalRowCount, onClick: () => setPageIndex(pageIndex + 1), variant: "subtle", color: "gray", children: jsx(IconChevronRight, {}) }), withEdges && (jsx(ActionIcon, { "aria-label": localization.goToLastPage, disabled: lastRowIndex >= totalRowCount, onClick: () => setPageIndex(numberOfPages - 1), variant: "subtle", color: "gray", children: jsx(IconChevronRightPipe, {}) }))] })] })) : null] }));
};

var classes$p = {"root":"MRT_FilterCheckBox-module_root__Hork4"};

const MRT_FilterCheckbox = ({ column, table, }) => {
    var _a, _b, _c;
    const { getState, options: { localization, mantineFilterCheckboxProps }, } = table;
    const { density } = getState();
    const { columnDef } = column;
    const arg = { column, table };
    const checkboxProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterCheckboxProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterCheckboxProps, arg));
    const filterLabel = (_a = localization.filterByColumn) === null || _a === void 0 ? void 0 : _a.replace('{column}', columnDef.header);
    const value = column.getFilterValue();
    return (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: (_b = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.title) !== null && _b !== void 0 ? _b : filterLabel, children: jsx(Checkbox, Object.assign({ className: clsx('mrt-filter-checkbox', classes$p.root), checked: value === 'true', indeterminate: value === undefined, color: value === undefined ? 'default' : 'primary', size: density === 'xs' ? 'sm' : 'md', label: (_c = checkboxProps.title) !== null && _c !== void 0 ? _c : filterLabel }, checkboxProps, { onClick: (e) => {
                var _a;
                e.stopPropagation();
                (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onClick) === null || _a === void 0 ? void 0 : _a.call(checkboxProps, e);
            }, onChange: (e) => {
                var _a;
                column.setFilterValue(column.getFilterValue() === undefined
                    ? 'true'
                    : column.getFilterValue() === 'true'
                        ? 'false'
                        : undefined);
                (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onChange) === null || _a === void 0 ? void 0 : _a.call(checkboxProps, e);
            }, title: undefined })) }));
};

var classes$o = {"root":"MRT_FilterTextInput-module_root__LBwHw","date-filter":"MRT_FilterTextInput-module_date-filter__H9ANA","range-filter":"MRT_FilterTextInput-module_range-filter__1yWxH","not-filter-chip":"MRT_FilterTextInput-module_not-filter-chip__f90Ga","filter-chip-badge":"MRT_FilterTextInput-module_filter-chip-badge__7pJVz"};

const SelectClearButton = ({ value, onChange, }) => {
    return value !== null ? (jsx(CloseButton, { size: "sm", onMouseDown: (event) => event.preventDefault(), onClick: () => onChange(null), "aria-label": "Clear value" })) : (jsx(Combobox.Chevron, {}));
};
const MRT_FilterTextInput = ({ header, rangeFilterIndex, table, }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { options: { columnFilterDisplayMode, columnFilterModeOptions, icons: { IconX }, localization, mantineFilterAutocompleteProps, mantineFilterDateInputProps, mantineFilterMultiSelectProps, mantineFilterSelectProps, mantineFilterTextInputProps, manualFiltering, }, refs: { filterInputRefs }, setColumnFilterFns, } = table;
    const { column } = header;
    const { columnDef } = column;
    const arg = { column, table, rangeFilterIndex };
    const textInputProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterTextInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterTextInputProps, arg));
    const selectProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterSelectProps, arg));
    const multiSelectProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterMultiSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterMultiSelectProps, arg));
    const dateInputProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterDateInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterDateInputProps, arg));
    const autoCompleteProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterAutocompleteProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterAutocompleteProps, arg));
    const isRangeFilter = columnDef.filterVariant === 'range' ||
        columnDef.filterVariant === 'date-range' ||
        rangeFilterIndex !== undefined;
    const isSelectFilter = columnDef.filterVariant === 'select';
    const isMultiSelectFilter = columnDef.filterVariant === 'multi-select';
    const isDateFilter = columnDef.filterVariant === 'date' ||
        columnDef.filterVariant === 'date-range';
    const isAutoCompleteFilter = columnDef.filterVariant === 'autocomplete';
    const allowedColumnFilterOptions = (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _a !== void 0 ? _a : columnFilterModeOptions;
    const currentFilterOption = columnDef._filterFn;
    const filterChipLabel = ['empty', 'notEmpty'].includes(currentFilterOption)
        ? localizedFilterOption(localization, currentFilterOption)
        : '';
    const filterPlaceholder = !isRangeFilter
        ? (_b = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.placeholder) !== null && _b !== void 0 ? _b : (_c = localization.filterByColumn) === null || _c === void 0 ? void 0 : _c.replace('{column}', String(columnDef.header))
        : rangeFilterIndex === 0
            ? localization.min
            : rangeFilterIndex === 1
                ? localization.max
                : '';
    const facetedUniqueValues = column.getFacetedUniqueValues();
    const filterSelectOptions = useMemo(() => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = autoCompleteProps === null || autoCompleteProps === void 0 ? void 0 : autoCompleteProps.data) !== null && _a !== void 0 ? _a : selectProps === null || selectProps === void 0 ? void 0 : selectProps.data) !== null && _b !== void 0 ? _b : multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.data) !== null && _c !== void 0 ? _c : ((isAutoCompleteFilter || isSelectFilter || isMultiSelectFilter) &&
            facetedUniqueValues
            ? Array.from(facetedUniqueValues.keys()).sort((a, b) => a.localeCompare(b))
            : []))
            //@ts-ignore
            .filter((o) => o !== undefined && o !== null);
    }, [
        autoCompleteProps === null || autoCompleteProps === void 0 ? void 0 : autoCompleteProps.data,
        facetedUniqueValues,
        isAutoCompleteFilter,
        isMultiSelectFilter,
        isSelectFilter,
        multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.data,
        selectProps === null || selectProps === void 0 ? void 0 : selectProps.data,
    ]);
    const isMounted = useRef(false);
    const [filterValue, setFilterValue] = useState(() => {
        var _a, _b;
        return isMultiSelectFilter
            ? column.getFilterValue() || []
            : isRangeFilter
                ? ((_a = column.getFilterValue()) === null || _a === void 0 ? void 0 : _a[rangeFilterIndex]) || ''
                : (_b = column.getFilterValue()) !== null && _b !== void 0 ? _b : '';
    });
    const [debouncedFilterValue] = useDebouncedValue(filterValue, manualFiltering ? 400 : 200);
    //send debounced filterValue to table instance
    useEffect(() => {
        if (!isMounted.current)
            return;
        if (isRangeFilter) {
            column.setFilterValue((old) => {
                const newFilterValues = Array.isArray(old) ? old : ['', ''];
                newFilterValues[rangeFilterIndex] =
                    debouncedFilterValue;
                return newFilterValues;
            });
        }
        else {
            column.setFilterValue(debouncedFilterValue !== null && debouncedFilterValue !== void 0 ? debouncedFilterValue : undefined);
        }
    }, [debouncedFilterValue]);
    //receive table filter value and set it to local state
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        const tableFilterValue = column.getFilterValue();
        if (tableFilterValue === undefined) {
            handleClear();
        }
        else if (isRangeFilter && rangeFilterIndex !== undefined) {
            setFilterValue((tableFilterValue !== null && tableFilterValue !== void 0 ? tableFilterValue : ['', ''])[rangeFilterIndex]);
        }
        else {
            setFilterValue(tableFilterValue !== null && tableFilterValue !== void 0 ? tableFilterValue : '');
        }
    }, [column.getFilterValue()]);
    const handleClear = () => {
        if (isMultiSelectFilter) {
            setFilterValue([]);
            column.setFilterValue([]);
        }
        else if (isRangeFilter) {
            setFilterValue('');
            column.setFilterValue((old) => {
                const newFilterValues = Array.isArray(old) ? old : ['', ''];
                newFilterValues[rangeFilterIndex] = undefined;
                return newFilterValues;
            });
        }
        else {
            setFilterValue('');
            column.setFilterValue(undefined);
        }
    };
    if (columnDef.Filter) {
        return (jsx(Fragment, { children: (_d = columnDef.Filter) === null || _d === void 0 ? void 0 : _d.call(columnDef, { column, header, rangeFilterIndex, table }) }));
    }
    const handleClearEmptyFilterChip = () => {
        setFilterValue('');
        column.setFilterValue(undefined);
        setColumnFilterFns((prev) => {
            var _a;
            return (Object.assign(Object.assign({}, prev), { [header.id]: (_a = allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions[0]) !== null && _a !== void 0 ? _a : 'fuzzy' }));
        });
    };
    const _h = {
        disabled: !!filterChipLabel,
        placeholder: filterPlaceholder,
        title: filterPlaceholder,
        onClick: (event) => event.stopPropagation(),
        onChange: setFilterValue,
        value: filterValue,
        variant: 'unstyled',
        className: clsx('mrt-filter-text-input', classes$o.root, isDateFilter
            ? classes$o['date-filter']
            : isRangeFilter
                ? classes$o['range-filter']
                : !filterChipLabel && classes$o['not-filter-chip']),
        style: Object.assign({}, (isMultiSelectFilter
            ? multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.style
            : isSelectFilter
                ? selectProps === null || selectProps === void 0 ? void 0 : selectProps.style
                : isDateFilter
                    ? dateInputProps === null || dateInputProps === void 0 ? void 0 : dateInputProps.style
                    : textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.style)),
    }, { className } = _h, commonProps = __rest(_h, ["className"]);
    const ClearButton = filterValue ? (jsx(ActionIcon, { "aria-label": localization.clearFilter, color: "gray", onClick: handleClear, size: "sm", title: (_e = localization.clearFilter) !== null && _e !== void 0 ? _e : '', variant: "transparent", children: jsx(IconX, {}) })) : null;
    return filterChipLabel ? (jsx(Box, { style: commonProps.style, children: jsx(Badge, { size: "lg", onClick: handleClearEmptyFilterChip, className: classes$o['filter-chip-badge'], rightSection: ClearButton, children: filterChipLabel }) })) : isMultiSelectFilter ? (jsx(MultiSelect, Object.assign({}, commonProps, { searchable: true }, multiSelectProps, { className: clsx(className, multiSelectProps.className), data: filterSelectOptions, ref: (node) => {
            if (node) {
                filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] =
                    node;
                if (multiSelectProps.ref) {
                    multiSelectProps.ref.current = node;
                }
            }
        }, style: commonProps.style, rightSection: jsx(SelectClearButton, { value: multiSelectProps.value, onChange: multiSelectProps.onChange }) }))) : isSelectFilter ? (jsx(Select, Object.assign({}, commonProps, { searchable: true }, selectProps, { className: clsx(className, selectProps.className), data: filterSelectOptions, ref: (node) => {
            if (node) {
                filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] =
                    node;
                if (selectProps.ref) {
                    selectProps.ref.current = node;
                }
            }
        }, style: commonProps.style, rightSection: jsx(SelectClearButton, { value: multiSelectProps.value, onChange: multiSelectProps.onChange }) }))) : isDateFilter ? (jsx(DateInput, Object.assign({}, commonProps, { allowDeselect: true, clearable: true, popoverProps: { withinPortal: columnFilterDisplayMode !== 'popover' } }, dateInputProps, { className: clsx(className, dateInputProps.className), ref: (node) => {
            if (node) {
                filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] =
                    node;
                if (dateInputProps.ref) {
                    dateInputProps.ref.current = node;
                }
            }
        }, style: commonProps.style }))) : isAutoCompleteFilter ? (jsx(Autocomplete, Object.assign({}, commonProps, { rightSection: ((_f = filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString()) === null || _f === void 0 ? void 0 : _f.length) ? ClearButton : undefined, onChange: (value) => setFilterValue(value) }, autoCompleteProps, { className: clsx(className, autoCompleteProps.className), data: filterSelectOptions, ref: (node) => {
            if (node) {
                filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] =
                    node;
                if (autoCompleteProps.ref) {
                    autoCompleteProps.ref.current = node;
                }
            }
        }, style: commonProps.style }))) : (jsx(TextInput, Object.assign({}, commonProps, { rightSection: ((_g = filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString()) === null || _g === void 0 ? void 0 : _g.length) ? ClearButton : undefined, onChange: (e) => setFilterValue(e.target.value) }, textInputProps, { className: clsx(className, textInputProps.className), ref: (node) => {
            if (node) {
                filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] =
                    node;
                if (textInputProps.ref) {
                    textInputProps.ref.current = node;
                }
            }
        }, style: commonProps.style })));
};

var classes$n = {"root":"MRT_FilterRangeFields-module_root__Ci-Oq"};

const MRT_FilterRangeFields = ({ header, table, }) => {
    return (jsxs(Box, { className: clsx('mrt-filter-range-fields', classes$n.root), children: [jsx(MRT_FilterTextInput, { header: header, rangeFilterIndex: 0, table: table }), jsx(MRT_FilterTextInput, { header: header, rangeFilterIndex: 1, table: table })] }));
};

var classes$m = {"alert":"MRT_ToolbarAlertBanner-module_alert__7thQ7","alert-stacked":"MRT_ToolbarAlertBanner-module_alert-stacked__L6H0N","alert-bottom":"MRT_ToolbarAlertBanner-module_alert-bottom__dNYrb","alert-badge":"MRT_ToolbarAlertBanner-module_alert-badge__WM5Xi","toolbar-alert":"MRT_ToolbarAlertBanner-module_toolbar-alert__0V-BV","head-overlay":"MRT_ToolbarAlertBanner-module_head-overlay__t42J-"};

const MRT_ToolbarAlertBanner = ({ stackAlertBanner, table, }) => {
    var _a, _b, _c;
    const { getPrePaginationRowModel, getSelectedRowModel, getState, options: { enableRowSelection, enableSelectAll, icons: { IconX }, localization, mantineToolbarAlertBannerBadgeProps, mantineToolbarAlertBannerProps, positionToolbarAlertBanner, renderToolbarAlertBannerContent, rowCount, }, } = table;
    const { grouping, showAlertBanner, density } = getState();
    const alertProps = parseFromValuesOrFunc(mantineToolbarAlertBannerProps, {
        table,
    });
    const badgeProps = parseFromValuesOrFunc(mantineToolbarAlertBannerBadgeProps, { table });
    const selectedAlert = getSelectedRowModel().rows.length > 0
        ? (_b = (_a = localization.selectedCountOfRowCountRowsSelected) === null || _a === void 0 ? void 0 : _a.replace('{selectedCount}', getSelectedRowModel().rows.length.toString())) === null || _b === void 0 ? void 0 : _b.replace('{rowCount}', (rowCount !== null && rowCount !== void 0 ? rowCount : getPrePaginationRowModel().rows.length).toString())
        : null;
    const groupedAlert = grouping.length > 0 ? (jsxs(Flex, { children: [localization.groupedBy, ' ', grouping.map((columnId, index) => (jsxs(Fragment$1, { children: [index > 0 ? localization.thenBy : '', jsxs(Badge, Object.assign({ rightSection: jsx(ActionIcon, { onClick: () => table.getColumn(columnId).toggleGrouping(), size: "xs", children: jsx(IconX, {}) }), className: classes$m['alert-badge'], variant: "filled" }, badgeProps, { children: [table.getColumn(columnId).columnDef.header, ' '] }))] }, `${index}-${columnId}`)))] })) : null;
    return (jsx(Collapse, { in: showAlertBanner || !!selectedAlert || !!groupedAlert, transitionDuration: stackAlertBanner ? 200 : 0, children: jsx(Alert, Object.assign({ color: "blue", icon: false }, alertProps, { className: clsx(classes$m.alert, stackAlertBanner &&
                !positionToolbarAlertBanner &&
                classes$m['alert-stacked'], !stackAlertBanner &&
                positionToolbarAlertBanner &&
                classes$m['alert-bottom'], alertProps === null || alertProps === void 0 ? void 0 : alertProps.className), children: (_c = renderToolbarAlertBannerContent === null || renderToolbarAlertBannerContent === void 0 ? void 0 : renderToolbarAlertBannerContent({
                groupedAlert,
                selectedAlert,
                table,
            })) !== null && _c !== void 0 ? _c : (jsxs(Flex, { className: clsx(classes$m['toolbar-alert'], positionToolbarAlertBanner === 'head-overlay' &&
                    classes$m['head-overlay'], density), children: [enableRowSelection &&
                        enableSelectAll &&
                        positionToolbarAlertBanner === 'head-overlay' && (jsx(MRT_SelectCheckbox, { selectAll: true, table: table })), jsxs(Stack, { children: [alertProps === null || alertProps === void 0 ? void 0 : alertProps.children, (alertProps === null || alertProps === void 0 ? void 0 : alertProps.children) && (selectedAlert || groupedAlert) && (jsx("br", {})), selectedAlert, selectedAlert && groupedAlert && jsx("br", {}), groupedAlert] })] })) })) }));
};

var classes$l = {"root":"MRT_ColumnPinningButtons-module_root__HTo-K","left":"MRT_ColumnPinningButtons-module_left__QPyU1","right":"MRT_ColumnPinningButtons-module_right__FSDcf"};

const MRT_ColumnPinningButtons = ({ column, table: { options: { icons: { IconPinned, IconPinnedOff }, localization, }, }, }) => {
    return (jsx(Flex, { className: clsx('mrt-column-pinning-buttons', classes$l.root), children: column.getIsPinned() ? (jsx(Tooltip, { withinPortal: true, label: localization.unpin, children: jsx(ActionIcon, { onClick: () => column.pin(false), color: "gray", variant: "default", size: "md", children: jsx(IconPinnedOff, {}) }) })) : (jsxs(Fragment, { children: [jsx(Tooltip, { withinPortal: true, label: localization.pinToLeft, children: jsx(ActionIcon, { onClick: () => column.pin('left'), color: "gray", variant: "default", size: "md", children: jsx(IconPinned, { className: classes$l.left }) }) }), jsx(Tooltip, { withinPortal: true, label: localization.pinToRight, children: jsx(ActionIcon, { onClick: () => column.pin('right'), color: "gray", variant: "default", size: "md", children: jsx(IconPinned, { className: classes$l.right }) }) })] })) }));
};

function dataVariable(name, value) {
    const key = `data-${name}`;
    switch (typeof value) {
        case 'boolean':
            return value ? { [key]: '' } : null;
        case 'number':
            return { [key]: `${value}` };
        case 'string':
            return { [key]: value };
        default:
            return null;
    }
}

var classes$k = {"root":"MRT_ShowHideColumnsMenuItems-module_root__62obc","menu":"MRT_ShowHideColumnsMenuItems-module_menu__ziqXu","grab":"MRT_ShowHideColumnsMenuItems-module_grab__-CDIp","pin":"MRT_ShowHideColumnsMenuItems-module_pin__linHc","switch":"MRT_ShowHideColumnsMenuItems-module_switch__FyPF3","header":"MRT_ShowHideColumnsMenuItems-module_header__3Y1fj"};

const MRT_ShowHideColumnsMenuItems = ({ allColumns, hoveredColumn, setHoveredColumn, column, table, }) => {
    var _a;
    const theme = useMantineTheme();
    const { getState, options: { enableColumnOrdering, enableHiding, enablePinning, localization, }, setColumnOrder, } = table;
    const { columnOrder } = getState();
    const { columnDef } = column;
    const { columnDefType } = columnDef;
    const switchChecked = (columnDefType !== 'group' && column.getIsVisible()) ||
        (columnDefType === 'group' &&
            column.getLeafColumns().some((col) => col.getIsVisible()));
    const handleToggleColumnHidden = (column) => {
        var _a, _b;
        if (columnDefType === 'group') {
            (_b = (_a = column === null || column === void 0 ? void 0 : column.columns) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, (childColumn) => {
                childColumn.toggleVisibility(!switchChecked);
            });
        }
        else {
            column.toggleVisibility();
        }
    };
    const menuItemRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const handleDragStart = (e) => {
        setIsDragging(true);
        e.dataTransfer.setDragImage(menuItemRef.current, 0, 0);
    };
    const handleDragEnd = (_e) => {
        setIsDragging(false);
        setHoveredColumn(null);
        if (hoveredColumn) {
            setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
        }
    };
    const handleDragEnter = (_e) => {
        if (!isDragging && columnDef.enableColumnOrdering !== false) {
            setHoveredColumn(column);
        }
    };
    return (jsxs(Fragment, { children: [jsx(Menu.Item, Object.assign({ component: "span", ref: menuItemRef, __vars: {
                    '--_column-depth': rem(column.depth),
                    '--_hover-color': getPrimaryColor(theme),
                }, onDragEnter: handleDragEnter, className: classes$k.root }, dataVariable('dragging', isDragging), dataVariable('hovered', !isDragging && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id), { children: jsxs(Box, { className: classes$k.menu, children: [columnDefType !== 'group' &&
                            enableColumnOrdering &&
                            !allColumns.some((col) => col.columnDef.columnDefType === 'group') &&
                            (columnDef.enableColumnOrdering !== false ? (jsx(MRT_GrabHandleButton, { onDragEnd: handleDragEnd, onDragStart: handleDragStart, table: table })) : (jsx(Box, { className: classes$k.grab }))), enablePinning &&
                            (column.getCanPin() ? (jsx(MRT_ColumnPinningButtons, { column: column, table: table })) : (jsx(Box, { className: classes$k.pin }))), enableHiding ? (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: localization.toggleVisibility, children: jsx(Switch, { checked: switchChecked, disabled: !column.getCanHide(), label: columnDef.header, onChange: () => handleToggleColumnHidden(column), className: classes$k.switch }) })) : (jsx(Text, { className: classes$k.header, children: columnDef.header }))] }) })), (_a = column.columns) === null || _a === void 0 ? void 0 : _a.map((c, i) => (jsx(MRT_ShowHideColumnsMenuItems, { allColumns: allColumns, column: c, hoveredColumn: hoveredColumn, setHoveredColumn: setHoveredColumn, table: table }, `${i}-${c.id}`)))] }));
};

var classes$j = {"root":"MRT_ShowHideColumnsMenu-module_root__Zspd4","content":"MRT_ShowHideColumnsMenu-module_content__1HDkf"};

const MRT_ShowHideColumnsMenu = ({ table, }) => {
    const { getAllColumns, getAllLeafColumns, getCenterLeafColumns, getIsAllColumnsVisible, getIsSomeColumnsPinned, getIsSomeColumnsVisible, getLeftLeafColumns, getRightLeafColumns, getState, toggleAllColumnsVisible, options: { enableColumnOrdering, enableHiding, enablePinning, localization, }, } = table;
    const { columnOrder, columnPinning } = getState();
    const hideAllColumns = () => {
        getAllLeafColumns()
            .filter((col) => col.columnDef.enableHiding !== false)
            .forEach((col) => col.toggleVisibility(false));
    };
    const allColumns = useMemo(() => {
        const columns = getAllColumns();
        if (columnOrder.length > 0 &&
            !columns.some((col) => col.columnDef.columnDefType === 'group')) {
            return [
                ...getLeftLeafColumns(),
                ...Array.from(new Set(columnOrder)).map((colId) => getCenterLeafColumns().find((col) => (col === null || col === void 0 ? void 0 : col.id) === colId)),
                ...getRightLeafColumns(),
            ].filter(Boolean);
        }
        return columns;
    }, [
        columnOrder,
        columnPinning,
        getAllColumns(),
        getCenterLeafColumns(),
        getLeftLeafColumns(),
        getRightLeafColumns(),
    ]);
    const [hoveredColumn, setHoveredColumn] = useState(null);
    return (jsxs(Menu.Dropdown, { className: clsx('mrt-show-hide-columns-menu', classes$j.root), children: [jsxs(Flex, { className: classes$j.content, children: [enableHiding && (jsx(Button, { disabled: !getIsSomeColumnsVisible(), onClick: hideAllColumns, variant: "subtle", children: localization.hideAll })), enableColumnOrdering && (jsx(Button, { onClick: () => table.setColumnOrder(getDefaultColumnOrderIds(table.options)), variant: "subtle", children: localization.resetOrder })), enablePinning && (jsx(Button, { disabled: !getIsSomeColumnsPinned(), onClick: () => table.resetColumnPinning(true), variant: "subtle", children: localization.unpinAll })), enableHiding && (jsx(Button, { disabled: getIsAllColumnsVisible(), onClick: () => toggleAllColumnsVisible(true), variant: "subtle", children: localization.showAll }))] }), jsx(Divider, {}), allColumns.map((column, index) => (jsx(MRT_ShowHideColumnsMenuItems, { allColumns: allColumns, column: column, hoveredColumn: hoveredColumn, setHoveredColumn: setHoveredColumn, table: table }, `${index}-${column.id}`)))] }));
};

const MRT_ShowHideColumnsButton = (_a) => {
    var { table, title } = _a, rest = __rest(_a, ["table", "title"]);
    const { icons: { IconColumns }, localization: { showHideColumns }, } = table.options;
    return (jsxs(Menu, { closeOnItemClick: false, withinPortal: true, children: [jsx(Tooltip, { withinPortal: true, label: title !== null && title !== void 0 ? title : showHideColumns, children: jsx(Menu.Target, { children: jsx(ActionIcon, Object.assign({ size: "lg", variant: "default", "aria-label": title !== null && title !== void 0 ? title : showHideColumns }, rest, { children: jsx(IconColumns, {}) })) }) }), jsx(MRT_ShowHideColumnsMenu, { table: table })] }));
};

const next = {
    xs: 'md',
    md: 'xl',
    xl: 'xs',
};
const MRT_ToggleDensePaddingButton = (_a) => {
    var { table: { getState, options: { icons: { IconBaselineDensityLarge, IconBaselineDensityMedium, IconBaselineDensitySmall, }, localization: { toggleDensity }, }, setDensity, }, title } = _a, rest = __rest(_a, ["table", "title"]);
    const { density } = getState();
    return (jsx(Tooltip, { withinPortal: true, label: title !== null && title !== void 0 ? title : toggleDensity, children: jsx(ActionIcon, Object.assign({ size: "lg", variant: "default", "aria-label": title !== null && title !== void 0 ? title : toggleDensity, onClick: () => setDensity((current) => next[current]) }, rest, { children: density === 'xs' ? (jsx(IconBaselineDensitySmall, {})) : density === 'md' ? (jsx(IconBaselineDensityMedium, {})) : (jsx(IconBaselineDensityLarge, {})) })) }));
};

const MRT_ToggleFiltersButton = (_a) => {
    var { table: { getState, options: { icons: { IconFilter, IconFilterOff }, localization: { showHideFilters }, }, setShowColumnFilters, }, title } = _a, rest = __rest(_a, ["table", "title"]);
    const { showColumnFilters } = getState();
    return (jsx(Tooltip, { withinPortal: true, label: title !== null && title !== void 0 ? title : showHideFilters, children: jsx(ActionIcon, Object.assign({ size: "lg", variant: "default", "aria-label": title !== null && title !== void 0 ? title : showHideFilters, onClick: () => setShowColumnFilters((current) => !current) }, rest, { children: showColumnFilters ? jsx(IconFilterOff, {}) : jsx(IconFilter, {}) })) }));
};

const MRT_ToggleFullScreenButton = (_a) => {
    var { table: { getState, options: { icons: { IconMinimize, IconMaximize }, localization: { toggleFullScreen }, }, setIsFullScreen, }, title } = _a, rest = __rest(_a, ["table", "title"]);
    const { isFullScreen } = getState();
    const [tooltipOpened, setTooltipOpened] = useState(false);
    const handleToggleFullScreen = () => {
        setTooltipOpened(false);
        setIsFullScreen((current) => !current);
    };
    return (jsx(Tooltip, { opened: tooltipOpened, withinPortal: true, label: title !== null && title !== void 0 ? title : toggleFullScreen, children: jsx(ActionIcon, Object.assign({ size: "lg", variant: "default", "aria-label": title !== null && title !== void 0 ? title : toggleFullScreen, onClick: handleToggleFullScreen, onMouseEnter: () => setTooltipOpened(true), onMouseLeave: () => setTooltipOpened(false) }, rest, { children: isFullScreen ? jsx(IconMinimize, {}) : jsx(IconMaximize, {}) })) }));
};

const MRT_ToggleGlobalFilterButton = (_a) => {
    var { table: { getState, options: { icons: { IconSearch, IconSearchOff }, localization: { showHideSearch }, }, refs: { searchInputRef }, setShowGlobalFilter, }, title } = _a, rest = __rest(_a, ["table", "title"]);
    const { globalFilter, showGlobalFilter } = getState();
    const handleToggleSearch = () => {
        setShowGlobalFilter(!showGlobalFilter);
        setTimeout(() => { var _a; return (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 100);
    };
    return (jsx(Tooltip, { withinPortal: true, label: title !== null && title !== void 0 ? title : showHideSearch, children: jsx(ActionIcon, Object.assign({ size: "lg", variant: "default", "aria-label": title !== null && title !== void 0 ? title : showHideSearch, disabled: !!globalFilter, onClick: handleToggleSearch }, rest, { children: showGlobalFilter ? jsx(IconSearchOff, {}) : jsx(IconSearch, {}) })) }));
};

var classes$i = {"root":"MRT_ToolbarInternalButtons-module_root__u7alT"};

const MRT_ToolbarInternalButtons = ({ table, }) => {
    var _a;
    const { options: { columnFilterDisplayMode, enableColumnFilters, enableColumnOrdering, enableDensityToggle, enableFilters, enableFullScreenToggle, enableGlobalFilter, enableHiding, enablePinning, initialState, renderToolbarInternalActions, }, } = table;
    return (jsx(Flex, { className: clsx('mrt-toolbar-internal-buttons', classes$i.root), children: (_a = renderToolbarInternalActions === null || renderToolbarInternalActions === void 0 ? void 0 : renderToolbarInternalActions({ table })) !== null && _a !== void 0 ? _a : (jsxs(ActionIcon.Group, { children: [enableFilters &&
                    enableGlobalFilter &&
                    !(initialState === null || initialState === void 0 ? void 0 : initialState.showGlobalFilter) && (jsx(MRT_ToggleGlobalFilterButton, { table: table })), enableFilters &&
                    enableColumnFilters &&
                    columnFilterDisplayMode !== 'popover' && (jsx(MRT_ToggleFiltersButton, { table: table })), (enableHiding || enableColumnOrdering || enablePinning) && (jsx(MRT_ShowHideColumnsButton, { table: table })), enableDensityToggle && (jsx(MRT_ToggleDensePaddingButton, { table: table })), enableFullScreenToggle && (jsx(MRT_ToggleFullScreenButton, { table: table }))] })) }));
};

var classes$h = {"root":"MRT_ToolbarDropZone-module_root__UxThK","hovered":"MRT_ToolbarDropZone-module_hovered__Vcqor"};

const MRT_ToolbarDropZone = ({ table, }) => {
    const { getState, options: { enableGrouping, localization }, setHoveredColumn, setShowToolbarDropZone, } = table;
    const { draggingColumn, hoveredColumn, grouping, showToolbarDropZone } = getState();
    const handleDragEnter = (_event) => {
        setHoveredColumn({ id: 'drop-zone' });
    };
    useEffect(() => {
        var _a;
        if (((_a = table.options.state) === null || _a === void 0 ? void 0 : _a.showToolbarDropZone) !== undefined) {
            setShowToolbarDropZone(!!enableGrouping &&
                !!draggingColumn &&
                draggingColumn.columnDef.enableGrouping !== false &&
                !grouping.includes(draggingColumn.id));
        }
    }, [enableGrouping, draggingColumn, grouping]);
    return (jsx(Transition, { mounted: showToolbarDropZone, transition: "fade", children: () => {
            var _a, _b;
            return (jsx(Flex, { className: clsx('mrt-toolbar-dropzone', classes$h.root, (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === 'drop-zone' && classes$h.hovered), onDragEnter: handleDragEnter, children: jsx(Text, { children: localization.dropToGroupBy.replace('{column}', (_b = (_a = draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.columnDef) === null || _a === void 0 ? void 0 : _a.header) !== null && _b !== void 0 ? _b : '') }) }));
        } }));
};

var classes$g = {"top-toolbar":"MRT_TopToolbar-module_top-toolbar__3-EkJ","top-toolbar-fullscreen":"MRT_TopToolbar-module_top-toolbar-fullscreen__F7fI2","actions-container":"MRT_TopToolbar-module_actions-container__OROxn","actions-container-stack-alert":"MRT_TopToolbar-module_actions-container-stack-alert__bBWFO"};

var commonClasses = {"common-toolbar-styles":"common-styles-module_common-toolbar-styles__didgq"};

const MRT_TopToolbar = ({ table, }) => {
    var _a;
    const { getState, options: { enableGlobalFilter, enablePagination, enableToolbarInternalActions, mantineTopToolbarProps, positionGlobalFilter, positionPagination, positionToolbarAlertBanner, positionToolbarDropZone, renderTopToolbarCustomActions, }, refs: { topToolbarRef }, } = table;
    const { isFullScreen, showGlobalFilter } = getState();
    const isMobile = useMediaQuery('(max-width: 720px)');
    const toolbarProps = parseFromValuesOrFunc(mantineTopToolbarProps, { table });
    const stackAlertBanner = isMobile || !!renderTopToolbarCustomActions || showGlobalFilter;
    return (jsxs(Box, Object.assign({}, toolbarProps, { className: clsx(commonClasses['common-toolbar-styles'], classes$g['top-toolbar'], isFullScreen && classes$g['top-toolbar-fullscreen'], toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.className), ref: (node) => {
            if (node) {
                topToolbarRef.current = node;
                if (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.ref) {
                    toolbarProps.ref.current = node;
                }
            }
        }, children: [positionToolbarAlertBanner === 'top' && (jsx(MRT_ToolbarAlertBanner, { stackAlertBanner: stackAlertBanner, table: table })), ['both', 'top'].includes(positionToolbarDropZone !== null && positionToolbarDropZone !== void 0 ? positionToolbarDropZone : '') && (jsx(MRT_ToolbarDropZone, { table: table })), jsxs(Flex, { className: clsx(classes$g['actions-container'], stackAlertBanner && classes$g['actions-container-stack-alert']), children: [enableGlobalFilter && positionGlobalFilter === 'left' && (jsx(MRT_GlobalFilterTextInput, { table: table })), (_a = renderTopToolbarCustomActions === null || renderTopToolbarCustomActions === void 0 ? void 0 : renderTopToolbarCustomActions({ table })) !== null && _a !== void 0 ? _a : jsx("span", {}), enableToolbarInternalActions ? (jsxs(Flex, { wrap: 'wrap-reverse', justify: 'end', children: [enableGlobalFilter && positionGlobalFilter === 'right' && (jsx(MRT_GlobalFilterTextInput, { table: table })), jsx(MRT_ToolbarInternalButtons, { table: table })] })) : (enableGlobalFilter &&
                        positionGlobalFilter === 'right' && (jsx(MRT_GlobalFilterTextInput, { table: table })))] }), enablePagination &&
                ['top', 'both'].includes(positionPagination !== null && positionPagination !== void 0 ? positionPagination : '') && (jsx(Flex, { justify: "end", children: jsx(MRT_TablePagination, { table: table, position: "top" }) })), jsx(MRT_ProgressBar, { isTopToolbar: true, table: table })] })));
};

var classes$f = {"root":"MRT_BottomToolbar-module_root__egbmt","bottom-toolbar-fullscreen":"MRT_BottomToolbar-module_bottom-toolbar-fullscreen__PRiML","custom-toolbar-container":"MRT_BottomToolbar-module_custom-toolbar-container__fH1YH","paginator-container":"MRT_BottomToolbar-module_paginator-container__7kgak","paginator-container-alert-banner":"MRT_BottomToolbar-module_paginator-container-alert-banner__tuMV-"};

const MRT_BottomToolbar = ({ table, }) => {
    const { getState, options: { enablePagination, mantineBottomToolbarProps, positionPagination, positionToolbarAlertBanner, positionToolbarDropZone, renderBottomToolbarCustomActions, }, refs: { bottomToolbarRef }, } = table;
    const { isFullScreen } = getState();
    const isMobile = useMediaQuery('(max-width: 720px)');
    const toolbarProps = parseFromValuesOrFunc(mantineBottomToolbarProps, {
        table,
    });
    const stackAlertBanner = isMobile || !!renderBottomToolbarCustomActions;
    return (jsxs(Box, Object.assign({}, toolbarProps, { ref: (node) => {
            if (node) {
                bottomToolbarRef.current = node;
                if (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.ref) {
                    toolbarProps.ref.current = node;
                }
            }
        }, className: clsx('mrt-bottom-toolbar', classes$f.root, commonClasses['common-toolbar-styles'], isFullScreen && classes$f['bottom-toolbar-fullscreen'], toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.className), children: [jsx(MRT_ProgressBar, { isTopToolbar: false, table: table }), positionToolbarAlertBanner === 'bottom' && (jsx(MRT_ToolbarAlertBanner, { stackAlertBanner: stackAlertBanner, table: table })), ['both', 'bottom'].includes(positionToolbarDropZone !== null && positionToolbarDropZone !== void 0 ? positionToolbarDropZone : '') && (jsx(MRT_ToolbarDropZone, { table: table })), jsxs(Box, { className: classes$f['custom-toolbar-container'], children: [renderBottomToolbarCustomActions ? (renderBottomToolbarCustomActions({ table })) : (jsx("span", {})), jsx(Box, { className: clsx(classes$f['paginator-container'], stackAlertBanner && classes$f['paginator-container-alert-banner']), children: enablePagination &&
                            ['bottom', 'both'].includes(positionPagination !== null && positionPagination !== void 0 ? positionPagination : '') && (jsx(MRT_TablePagination, { table: table, position: "bottom" })) })] })] })));
};

var classes$e = {"left":"MRT_ColumnActionMenu-module_left__4iBP3","right":"MRT_ColumnActionMenu-module_right__7HTZK"};

const MRT_ColumnActionMenu = ({ header, table, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { getState, toggleAllColumnsVisible, setColumnOrder, options: { columnFilterDisplayMode, enableColumnFilters, enableColumnResizing, enableGrouping, enableHiding, enablePinning, enableSorting, enableSortingRemoval, icons: { IconArrowAutofitContent, IconBoxMultiple, IconClearAll, IconColumns, IconDotsVertical, IconEyeOff, IconFilter, IconFilterOff, IconPinned, IconPinnedOff, IconSortAscending, IconSortDescending, }, localization, mantineColumnActionsButtonProps, renderColumnActionsMenuItems, }, refs: { filterInputRefs }, setColumnSizingInfo, setShowColumnFilters, } = table;
    const { column } = header;
    const { columnDef } = column;
    const { columnSizing, columnVisibility } = getState();
    const arg = { column, table };
    const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineColumnActionsButtonProps, arg)), parseFromValuesOrFunc(columnDef.mantineColumnActionsButtonProps, arg));
    const handleClearSort = () => {
        column.clearSorting();
    };
    const handleSortAsc = () => {
        column.toggleSorting(false);
    };
    const handleSortDesc = () => {
        column.toggleSorting(true);
    };
    const handleResetColumnSize = () => {
        setColumnSizingInfo((old) => (Object.assign(Object.assign({}, old), { isResizingColumn: false })));
        column.resetSize();
    };
    const handleHideColumn = () => {
        column.toggleVisibility(false);
    };
    const handlePinColumn = (pinDirection) => {
        column.pin(pinDirection);
    };
    const handleGroupByColumn = () => {
        column.toggleGrouping();
        setColumnOrder((old) => ['mrt-row-expand', ...old]);
    };
    const handleClearFilter = () => {
        column.setFilterValue('');
    };
    const handleFilterByColumn = () => {
        setShowColumnFilters(true);
        setTimeout(() => { var _a; return (_a = filterInputRefs.current[`${column.id}-0`]) === null || _a === void 0 ? void 0 : _a.focus(); }, 100);
    };
    const handleShowAllColumns = () => {
        toggleAllColumnsVisible(true);
    };
    const internalColumnMenuItems = (jsxs(Fragment, { children: [enableSorting && column.getCanSort() && (jsxs(Fragment, { children: [enableSortingRemoval !== false && (jsx(Menu.Item, { disabled: !column.getIsSorted(), leftSection: jsx(IconClearAll, {}), onClick: handleClearSort, children: localization.clearSort })), jsx(Menu.Item, { disabled: column.getIsSorted() === 'asc', leftSection: jsx(IconSortAscending, {}), onClick: handleSortAsc, children: (_a = localization.sortByColumnAsc) === null || _a === void 0 ? void 0 : _a.replace('{column}', String(columnDef.header)) }), jsx(Menu.Item, { leftSection: jsx(IconSortDescending, {}), disabled: column.getIsSorted() === 'desc', onClick: handleSortDesc, children: (_b = localization.sortByColumnDesc) === null || _b === void 0 ? void 0 : _b.replace('{column}', String(columnDef.header)) }), (enableColumnFilters || enableGrouping || enableHiding) && (jsx(Menu.Divider, {}, 3))] })), enableColumnFilters &&
                columnFilterDisplayMode !== 'popover' &&
                column.getCanFilter() && (jsxs(Fragment, { children: [jsx(Menu.Item, { disabled: !column.getFilterValue(), leftSection: jsx(IconFilterOff, {}), onClick: handleClearFilter, children: localization.clearFilter }), jsx(Menu.Item, { leftSection: jsx(IconFilter, {}), onClick: handleFilterByColumn, children: (_c = localization.filterByColumn) === null || _c === void 0 ? void 0 : _c.replace('{column}', String(columnDef.header)) }), (enableGrouping || enableHiding) && jsx(Menu.Divider, {}, 2)] })), enableGrouping && column.getCanGroup() && (jsxs(Fragment, { children: [jsx(Menu.Item, { leftSection: jsx(IconBoxMultiple, {}), onClick: handleGroupByColumn, children: (_d = localization[column.getIsGrouped() ? 'ungroupByColumn' : 'groupByColumn']) === null || _d === void 0 ? void 0 : _d.replace('{column}', String(columnDef.header)) }), enablePinning && jsx(Menu.Divider, {})] })), enablePinning && column.getCanPin() && (jsxs(Fragment, { children: [jsx(Menu.Item, { disabled: column.getIsPinned() === 'left' || !column.getCanPin(), leftSection: jsx(IconPinned, { className: classes$e.left }), onClick: () => handlePinColumn('left'), children: localization.pinToLeft }), jsx(Menu.Item, { disabled: column.getIsPinned() === 'right' || !column.getCanPin(), leftSection: jsx(IconPinned, { className: classes$e.right }), onClick: () => handlePinColumn('right'), children: localization.pinToRight }), jsx(Menu.Item, { disabled: !column.getIsPinned(), leftSection: jsx(IconPinnedOff, {}), onClick: () => handlePinColumn(false), children: localization.unpin }), enableHiding && jsx(Menu.Divider, {})] })), enableColumnResizing && column.getCanResize() && (jsx(Menu.Item, { disabled: !columnSizing[column.id], leftSection: jsx(IconArrowAutofitContent, {}), onClick: handleResetColumnSize, children: localization.resetColumnSize }, 0)), enableHiding && (jsxs(Fragment, { children: [jsx(Menu.Item, { disabled: !column.getCanHide(), leftSection: jsx(IconEyeOff, {}), onClick: handleHideColumn, children: (_e = localization.hideColumn) === null || _e === void 0 ? void 0 : _e.replace('{column}', String(columnDef.header)) }, 0), jsx(Menu.Item, { disabled: !Object.values(columnVisibility).filter((visible) => !visible)
                            .length, leftSection: jsx(IconColumns, {}), onClick: handleShowAllColumns, children: (_f = localization.showAllColumns) === null || _f === void 0 ? void 0 : _f.replace('{column}', String(columnDef.header)) }, 1)] }))] }));
    return (jsxs(Menu, { closeOnItemClick: true, withinPortal: true, position: "bottom-start", children: [jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: (_g = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _g !== void 0 ? _g : localization.columnActions, children: jsx(Menu.Target, { children: jsx(ActionIcon, Object.assign({ "aria-label": localization.columnActions }, actionIconProps, { size: "sm", color: "gray", variant: "transparent", children: jsx(IconDotsVertical, {}) })) }) }), jsx(Menu.Dropdown, { children: (_k = (_j = (_h = columnDef.renderColumnActionsMenuItems) === null || _h === void 0 ? void 0 : _h.call(columnDef, {
                    column,
                    table,
                    internalColumnMenuItems,
                })) !== null && _j !== void 0 ? _j : renderColumnActionsMenuItems === null || renderColumnActionsMenuItems === void 0 ? void 0 : renderColumnActionsMenuItems({
                    column,
                    table,
                    internalColumnMenuItems,
                })) !== null && _k !== void 0 ? _k : internalColumnMenuItems })] }));
};

var classes$d = {"root":"MRT_FilterRangeSlider-module_root__Q8OeH"};

const MRT_FilterRangeSlider = ({ header, table, }) => {
    var _a;
    const { options: { mantineFilterRangeSliderProps }, refs: { filterInputRefs }, } = table;
    const { column } = header;
    const { columnDef } = column;
    const arg = { column, table };
    const rangeSliderProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterRangeSliderProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterRangeSliderProps, arg));
    let [min, max] = rangeSliderProps.min !== undefined && rangeSliderProps.max !== undefined
        ? [rangeSliderProps.min, rangeSliderProps.max]
        : (_a = column.getFacetedMinMaxValues()) !== null && _a !== void 0 ? _a : [0, 1];
    //fix potential TanStack Table bugs where min or max is an array
    if (Array.isArray(min))
        min = min[0];
    if (Array.isArray(max))
        max = max[0];
    if (min === null)
        min = 0;
    if (max === null)
        max = 1;
    const [filterValues, setFilterValues] = useState([
        min,
        max,
    ]);
    const columnFilterValue = column.getFilterValue();
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            if (columnFilterValue === undefined) {
                setFilterValues([min, max]);
            }
            else if (Array.isArray(columnFilterValue)) {
                setFilterValues(columnFilterValue);
            }
        }
        isMounted.current = true;
    }, [columnFilterValue, min, max]);
    return (jsx(RangeSlider, Object.assign({ className: clsx('mrt-filter-range-slider', classes$d.root), min: min, max: max, onChange: (values) => {
            setFilterValues(values);
        }, onChangeEnd: (values) => {
            if (Array.isArray(values)) {
                if (values[0] <= min && values[1] >= max) {
                    //if the user has selected the entire range, remove the filter
                    column.setFilterValue(undefined);
                }
                else {
                    column.setFilterValue(values);
                }
            }
        }, value: filterValues }, rangeSliderProps, { ref: (node) => {
            if (node) {
                //@ts-ignore
                filterInputRefs.current[`${column.id}-0`] = node;
                // @ts-ignore
                if (rangeSliderProps === null || rangeSliderProps === void 0 ? void 0 : rangeSliderProps.ref) {
                    //@ts-ignore
                    rangeSliderProps.ref = node;
                }
            }
        } })));
};

var classes$c = {"filter-mode-label":"MRT_TableHeadCellFilterContainer-module_filter-mode-label__knon-"};

const MRT_TableHeadCellFilterContainer = ({ header, table, }) => {
    var _a, _b;
    const { getState, options: { columnFilterDisplayMode, enableColumnFilterModes, columnFilterModeOptions, icons: { IconFilterCog }, localization, }, refs: { filterInputRefs }, } = table;
    const { showColumnFilters } = getState();
    const { column } = header;
    const { columnDef } = column;
    const currentFilterOption = columnDef._filterFn;
    const allowedColumnFilterOptions = (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _a !== void 0 ? _a : columnFilterModeOptions;
    const showChangeModeButton = enableColumnFilterModes &&
        columnDef.enableColumnFilterModes !== false &&
        (allowedColumnFilterOptions === undefined ||
            !!(allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions.length));
    return (jsx(Collapse, { in: showColumnFilters || columnFilterDisplayMode === 'popover', children: jsxs(Flex, { direction: "column", children: [jsxs(Flex, { align: "flex-end", children: [columnDef.filterVariant === 'checkbox' ? (jsx(MRT_FilterCheckbox, { column: column, table: table })) : columnDef.filterVariant === 'range-slider' ? (jsx(MRT_FilterRangeSlider, { header: header, table: table })) : ['range', 'date-range'].includes((_b = columnDef.filterVariant) !== null && _b !== void 0 ? _b : '') ||
                            ['between', 'betweenInclusive', 'inNumberRange'].includes(columnDef._filterFn) ? (jsx(MRT_FilterRangeFields, { header: header, table: table })) : (jsx(MRT_FilterTextInput, { header: header, table: table })), showChangeModeButton && (jsxs(Menu, { withinPortal: columnFilterDisplayMode !== 'popover', children: [jsx(Tooltip, { label: localization.changeFilterMode, position: "bottom-start", withinPortal: true, children: jsx(Menu.Target, { children: jsx(ActionIcon, { color: "gray", variant: "transparent", "aria-label": localization.changeFilterMode, size: "md", children: jsx(IconFilterCog, {}) }) }) }), jsx(MRT_FilterOptionMenu, { header: header, table: table, onSelect: () => setTimeout(() => { var _a; return (_a = filterInputRefs.current[`${column.id}-0`]) === null || _a === void 0 ? void 0 : _a.focus(); }, 100) })] }))] }), showChangeModeButton ? (jsx(Text, { component: "label", className: classes$c['filter-mode-label'], c: "dimmed", children: localization.filterMode.replace('{filterType}', localizedFilterOption(localization, currentFilterOption)) })) : null] }) }));
};

var classes$b = {"root":"MRT_TableHeadCellFilterLabel-module_root__dBJ4L","active":"MRT_TableHeadCellFilterLabel-module_active__R-nuT"};

const MRT_TableHeadCellFilterLabel = ({ header, table, }) => {
    var _a, _b, _c;
    const { options: { columnFilterDisplayMode, icons: { IconFilter }, localization, }, refs: { filterInputRefs }, setShowColumnFilters, } = table;
    const { column } = header;
    const { columnDef } = column;
    const filterValue = column.getFilterValue();
    const [popoverOpened, setPopoverOpened] = useState(false);
    const isFilterActive = (Array.isArray(filterValue) && filterValue.some(Boolean)) ||
        (!!filterValue && !Array.isArray(filterValue));
    const isRangeFilter = columnDef.filterVariant === 'range' ||
        ['between', 'betweenInclusive', 'inNumberRange'].includes(columnDef._filterFn);
    const currentFilterOption = columnDef._filterFn;
    const filterTooltip = columnFilterDisplayMode === 'popover' && !isFilterActive
        ? (_a = localization.filterByColumn) === null || _a === void 0 ? void 0 : _a.replace('{column}', String(columnDef.header))
        : localization.filteringByColumn
            .replace('{column}', String(columnDef.header))
            .replace('{filterType}', localizedFilterOption(localization, currentFilterOption))
            .replace('{filterValue}', `"${Array.isArray(column.getFilterValue())
            ? column.getFilterValue().join(`" ${isRangeFilter ? localization.and : localization.or} "`)
            : column.getFilterValue()}"`)
            .replace('" "', '');
    return (jsxs(Popover, { onClose: () => setPopoverOpened(false), opened: popoverOpened, position: "top", keepMounted: columnDef.filterVariant === 'range-slider', shadow: "xl", width: 360, withinPortal: true, children: [jsx(Transition, { transition: "scale", mounted: columnFilterDisplayMode === 'popover' ||
                    (!!column.getFilterValue() && !isRangeFilter) ||
                    (isRangeFilter && // @ts-ignore
                        (!!((_b = column.getFilterValue()) === null || _b === void 0 ? void 0 : _b[0]) || !!((_c = column.getFilterValue()) === null || _c === void 0 ? void 0 : _c[1]))), children: () => (jsx(Box, { component: "span", children: jsx(Popover.Target, { children: jsx(Tooltip, { disabled: popoverOpened, label: filterTooltip, multiline: true, w: filterTooltip.length > 40 ? 300 : undefined, withinPortal: true, children: jsx(ActionIcon, { size: "sm", variant: "transparent", className: clsx('mrt-table-head-cell-filter-label-icon', classes$b.root, isFilterActive && classes$b.active), onClick: (event) => {
                                    event.stopPropagation();
                                    if (columnFilterDisplayMode === 'popover') {
                                        setPopoverOpened((opened) => !opened);
                                    }
                                    else {
                                        setShowColumnFilters(true);
                                    }
                                    setTimeout(() => {
                                        const input = filterInputRefs.current[`${column.id}-0`];
                                        input === null || input === void 0 ? void 0 : input.focus();
                                        input === null || input === void 0 ? void 0 : input.select();
                                    }, 100);
                                }, children: jsx(IconFilter, {}) }) }) }) })) }), columnFilterDisplayMode === 'popover' && (jsx(Popover.Dropdown, { onClick: (event) => event.stopPropagation(), onKeyDown: (event) => event.key === 'Enter' && setPopoverOpened(false), children: jsx(MRT_TableHeadCellFilterContainer, { header: header, table: table }) }))] }));
};

const MRT_TableHeadCellGrabHandle = ({ column, table, tableHeadCellRef, }) => {
    const { getState, options: { enableColumnOrdering, mantineColumnDragHandleProps }, setColumnOrder, setDraggingColumn, setHoveredColumn, } = table;
    const { columnDef } = column;
    const { hoveredColumn, draggingColumn, columnOrder } = getState();
    const arg = { column, table };
    const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineColumnDragHandleProps, arg)), parseFromValuesOrFunc(columnDef.mantineColumnDragHandleProps, arg));
    const handleDragStart = (event) => {
        var _a;
        (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragStart) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, event);
        setDraggingColumn(column);
        event.dataTransfer.setDragImage(tableHeadCellRef.current, 0, 0);
    };
    const handleDragEnd = (event) => {
        var _a;
        (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragEnd) === null || _a === void 0 ? void 0 : _a.call(actionIconProps, event);
        if ((hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === 'drop-zone') {
            column.toggleGrouping();
        }
        else if (enableColumnOrdering &&
            hoveredColumn &&
            (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) !== (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id)) {
            setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
        }
        setDraggingColumn(null);
        setHoveredColumn(null);
    };
    return (jsx(MRT_GrabHandleButton, { actionIconProps: actionIconProps, onDragStart: handleDragStart, onDragEnd: handleDragEnd, table: table }));
};

var classes$a = {"root":"MRT_TableHeadCellResizeHandle-module_root__JLf0R"};

const MRT_TableHeadCellResizeHandle = ({ header, table, }) => {
    var _a;
    const { getState, options: { columnResizeMode }, setColumnSizingInfo, } = table;
    const { density } = getState();
    const { column } = header;
    const handler = header.getResizeHandler();
    const offset = columnResizeMode === 'onEnd' && column.getIsResizing()
        ? `translateX(${(_a = getState().columnSizingInfo.deltaOffset) !== null && _a !== void 0 ? _a : 0}px)`
        : undefined;
    return (jsx(Box, { role: "separator", onMouseDown: handler, onTouchStart: handler, onDoubleClick: () => {
            setColumnSizingInfo((old) => (Object.assign(Object.assign({}, old), { isResizingColumn: false })));
            column.resetSize();
        }, className: clsx('mrt-table-head-cell-resize-handle', classes$a.root, density), __vars: { '--mrt-transform': offset } }));
};

var classes$9 = {"sort-icon":"MRT_TableHeadCellSortLabel-module_sort-icon__1Pgic"};

const MRT_TableHeadCellSortLabel = ({ header, table: { getState, options: { icons: { IconSortDescending, IconSortAscending, IconArrowsSort }, localization, }, }, }) => {
    const column = header.column;
    const { columnDef } = column;
    const { sorting } = getState();
    const sorted = column.getIsSorted();
    const sortIndex = column.getSortIndex();
    const sortTooltip = sorted
        ? sorted === 'desc'
            ? localization.sortedByColumnDesc.replace('{column}', columnDef.header)
            : localization.sortedByColumnAsc.replace('{column}', columnDef.header)
        : column.getNextSortingOrder() === 'desc'
            ? localization.sortByColumnDesc.replace('{column}', columnDef.header)
            : localization.sortByColumnAsc.replace('{column}', columnDef.header);
    const icon = sorted === 'desc' ? (jsx(IconSortDescending, {})) : sorted === 'asc' ? (jsx(IconSortAscending, {})) : (jsx(IconArrowsSort, {}));
    return (jsx(Tooltip, { withinPortal: true, openDelay: 1000, label: sortTooltip, children: jsx(Indicator, { color: "transparent", disabled: sorting.length < 2 || sortIndex === -1, inline: true, processing: true, label: sortIndex + 1, offset: 3, children: jsx(ActionIcon, Object.assign({ className: clsx('mrt-table-head-sort-button', classes$9['sort-icon']), "aria-label": sortTooltip }, dataVariable('sorted', sorted), { variant: "transparent", children: icon })) }) }));
};

var classes$8 = {"root":"MRT_TableHeadCell-module_root__ROjYZ","root-grid":"MRT_TableHeadCell-module_root-grid__3pJe7","root-virtualized":"MRT_TableHeadCell-module_root-virtualized__9D-BH","root-no-select":"MRT_TableHeadCell-module_root-no-select__rsQ7q","root-pinned":"MRT_TableHeadCell-module_root-pinned__lXd2o","root-pinned-left":"MRT_TableHeadCell-module_root-pinned-left__Xh-TW","root-pinned-right":"MRT_TableHeadCell-module_root-pinned-right__LxQAZ","root-pinned-left-last":"MRT_TableHeadCell-module_root-pinned-left-last__w7njO","root-pinned-right-first":"MRT_TableHeadCell-module_root-pinned-right-first__M2MbN","dragging":"MRT_TableHeadCell-module_dragging__K1xxG","hovered":"MRT_TableHeadCell-module_hovered__pCA-8","content":"MRT_TableHeadCell-module_content__47O7e","content-spaced":"MRT_TableHeadCell-module_content-spaced__PhAXB","content-center":"MRT_TableHeadCell-module_content-center__m9sXp","content-right":"MRT_TableHeadCell-module_content-right__iGCoI","content-wrapper":"MRT_TableHeadCell-module_content-wrapper__k-Rjy","content-wrapper-hidden-overflow":"MRT_TableHeadCell-module_content-wrapper-hidden-overflow__y9gFN","content-wrapper-nowrap":"MRT_TableHeadCell-module_content-wrapper-nowrap__vNojJ","labels":"MRT_TableHeadCell-module_labels__LWNk7","labels-right":"MRT_TableHeadCell-module_labels-right__I2gZy","labels-center":"MRT_TableHeadCell-module_labels-center__twd-q","labels-sortable":"MRT_TableHeadCell-module_labels-sortable__YB55b","labels-data":"MRT_TableHeadCell-module_labels-data__U4Iif","content-actions":"MRT_TableHeadCell-module_content-actions__A9UQq"};

const MRT_TableHeadCell = ({ header, table, }) => {
    var _a, _b, _c, _d;
    const { getState, options: { columnFilterDisplayMode, enableColumnActions, enableColumnDragging, enableColumnOrdering, enableGrouping, enableMultiSort, layoutMode, mantineTableHeadCellProps, }, refs: { tableHeadCellRefs }, setHoveredColumn, } = table;
    const { density, draggingColumn, grouping, hoveredColumn } = getState();
    const { column } = header;
    const { columnDef } = column;
    const { columnDefType } = columnDef;
    const arg = { column, table };
    const tableCellProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableHeadCellProps, arg)), parseFromValuesOrFunc(columnDef.mantineTableHeadCellProps, arg));
    const widthStyles = useMemo(() => {
        var _a;
        const styles = {
            minWidth: `max(calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px), ${(_a = column.columnDef.minSize) !== null && _a !== void 0 ? _a : 30}px)`,
            width: `calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px)`,
        };
        if (layoutMode === 'grid') {
            styles.flex = `${column.getSize()} 0 auto`;
        }
        else if (layoutMode === 'grid-no-grow') {
            styles.flex = '0 0 auto';
        }
        return styles;
    }, [column]);
    const showColumnActions = (enableColumnActions || columnDef.enableColumnActions) &&
        columnDef.enableColumnActions !== false;
    const showDragHandle = enableColumnDragging !== false &&
        columnDef.enableColumnDragging !== false &&
        (enableColumnDragging ||
            (enableColumnOrdering && columnDef.enableColumnOrdering !== false) ||
            (enableGrouping &&
                columnDef.enableGrouping !== false &&
                !grouping.includes(column.id)));
    const headerPL = useMemo(() => {
        let pl = 0;
        if (column.getCanSort())
            pl++;
        if (showColumnActions)
            pl += 1.75;
        if (showDragHandle)
            pl += 1.25;
        return pl;
    }, [showColumnActions, showDragHandle]);
    const headerElement = (columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) instanceof Function
        ? (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) === null || _a === void 0 ? void 0 : _a.call(columnDef, {
            column,
            header,
            table,
        })
        : (_b = columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) !== null && _b !== void 0 ? _b : columnDef.header;
    return (jsxs(Box, Object.assign({}, tableCellProps, { component: "th", align: columnDefType === 'group' ? 'center' : 'left', colSpan: header.colSpan, onDragEnter: () => {
            if (enableGrouping && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === 'drop-zone') {
                setHoveredColumn(null);
            }
            if (enableColumnOrdering &&
                draggingColumn &&
                columnDefType !== 'group') {
                setHoveredColumn(columnDef.enableColumnOrdering !== false ? column : null);
            }
        }, ref: (node) => {
            if (node) {
                tableHeadCellRefs.current[column.id] = node;
            }
        }, __vars: {
            '--mrt-table-head-cell-padding': density === 'xl' ? '23' : density === 'md' ? '16' : '10',
            '--mrt-table-head-cell-z-index': column.getIsResizing() || (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) === column.id
                ? '3'
                : column.getIsPinned() && columnDefType !== 'group'
                    ? '2'
                    : '1',
            '--mrt-table-cell-left': column.getIsPinned() === 'left'
                ? `${column.getStart('left')}`
                : undefined,
            '--mrt-table-cell-right': column.getIsPinned() === 'right'
                ? `${getTotalRight(table, column)}`
                : undefined,
        }, className: clsx(classes$8.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$8['root-grid'], enableMultiSort && column.getCanSort() && classes$8['root-no-select'], column.getIsPinned() &&
            column.columnDef.columnDefType !== 'group' &&
            classes$8['root-pinned'], column.getIsPinned() === 'left' && classes$8['root-pinned-left'], column.getIsPinned() === 'right' && classes$8['root-pinned-right'], getIsLastLeftPinnedColumn(table, column) &&
            classes$8['root-pinned-left-last'], getIsFirstRightPinnedColumn(column) &&
            classes$8['root-pinned-right-first'], tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.className, (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) === column.id && classes$8['dragging'], (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) !== column.id &&
            (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id &&
            classes$8['hovered']), style: (theme) => (Object.assign(Object.assign({}, parseFromValuesOrFunc(tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.style, theme)), widthStyles)), children: [header.isPlaceholder ? null : (jsxs(Flex, { className: clsx('mrt-table-head-cell-content', classes$8.content, (columnDefType === 'group' || (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === 'center') &&
                    classes$8['content-center'], (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === 'right' && classes$8['content-right'], column.getCanResize() && classes$8['content-spaced']), children: [jsxs(Flex, { __vars: {
                            '--mrt-table-head-cell-labels-padding-left': `${headerPL}`,
                        }, className: clsx('mrt-table-head-cell-labels', classes$8.labels, column.getCanSort() &&
                            columnDefType !== 'group' &&
                            classes$8['labels-sortable'], (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === 'right'
                            ? classes$8['labels-right']
                            : (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === 'center' &&
                                classes$8['labels-center'], columnDefType === 'data' && classes$8['labels-data']), onClick: column.getToggleSortingHandler(), children: [jsx(Flex, { className: clsx('mrt-table-head-cell-content-wrapper', classes$8['content-wrapper'], columnDefType === 'data' &&
                                    classes$8['content-wrapper-hidden-overflow'], ((_d = (_c = columnDef.header) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) < 20 &&
                                    classes$8['content-wrapper-nowrap']), title: columnDefType === 'data' ? columnDef.header : undefined, children: headerElement }), column.getCanSort() && (jsx(MRT_TableHeadCellSortLabel, { header: header, table: table })), column.getCanFilter() && (jsx(MRT_TableHeadCellFilterLabel, { header: header, table: table }))] }), columnDefType !== 'group' && (jsxs(Flex, { className: clsx('mrt-table-head-cell-content-actions', classes$8['content-actions']), children: [showDragHandle && (jsx(MRT_TableHeadCellGrabHandle, { column: column, table: table, tableHeadCellRef: {
                                    current: tableHeadCellRefs.current[column.id],
                                } })), showColumnActions && (jsx(MRT_ColumnActionMenu, { header: header, table: table }))] })), column.getCanResize() && (jsx(MRT_TableHeadCellResizeHandle, { header: header, table: table }))] })), columnFilterDisplayMode === 'subheader' && column.getCanFilter() && (jsx(MRT_TableHeadCellFilterContainer, { header: header, table: table }))] })));
};

var classes$7 = {"root":"MRT_TableHeadRow-module_root__qbU5Z","layout-mode-grid":"MRT_TableHeadRow-module_layout-mode-grid__qtVAx","sticky":"MRT_TableHeadRow-module_sticky__Z3pt-"};

const MRT_TableHeadRow = ({ headerGroup, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }) => {
    const { getState, options: { enableStickyHeader, layoutMode, mantineTableHeadRowProps }, } = table;
    const { isFullScreen } = getState();
    const tableRowProps = parseFromValuesOrFunc(mantineTableHeadRowProps, {
        headerGroup,
        table,
    });
    return (jsxs(TableTr, Object.assign({}, tableRowProps, { className: clsx(classes$7.root, (enableStickyHeader || isFullScreen) && classes$7.sticky, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$7['layout-mode-grid']), children: [virtualPaddingLeft ? (jsx(Box, { component: "th", display: "flex", w: virtualPaddingLeft })) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : headerGroup.headers).map((headerOrVirtualHeader) => {
                const header = virtualColumns
                    ? headerGroup.headers[headerOrVirtualHeader.index]
                    : headerOrVirtualHeader;
                return (jsx(MRT_TableHeadCell, { header: header, table: table }, header.id));
            }), virtualPaddingRight ? (jsx(Box, { component: "th", display: "flex", w: virtualPaddingRight })) : null] })));
};

var classes$6 = {"root":"MRT_TableHead-module_root__KSxb-","root-grid":"MRT_TableHead-module_root-grid__OaIuG","root-sticky":"MRT_TableHead-module_root-sticky__CEREV","banner-tr":"MRT_TableHead-module_banner-tr__4VzDy","banner-th":"MRT_TableHead-module_banner-th__T-46i","grid":"MRT_TableHead-module_grid__3tz1n"};

const MRT_TableHead = ({ table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }) => {
    const { getHeaderGroups, getSelectedRowModel, getState, options: { enableStickyHeader, layoutMode, mantineTableHeadProps, positionToolbarAlertBanner, }, refs: { tableHeadRef }, } = table;
    const { isFullScreen, showAlertBanner } = getState();
    const tableHeadProps = parseFromValuesOrFunc(mantineTableHeadProps, {
        table,
    });
    const stickyHeader = enableStickyHeader || isFullScreen;
    return (jsx(TableThead, Object.assign({}, tableHeadProps, { ref: (ref) => {
            tableHeadRef.current = ref;
            if (tableHeadProps === null || tableHeadProps === void 0 ? void 0 : tableHeadProps.ref) {
                // @ts-ignore
                tableHeadProps.ref.current = ref;
            }
        }, className: clsx(classes$6.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$6['root-grid'], stickyHeader && classes$6['root-sticky'], tableHeadProps === null || tableHeadProps === void 0 ? void 0 : tableHeadProps.className), children: positionToolbarAlertBanner === 'head-overlay' &&
            (showAlertBanner || getSelectedRowModel().rows.length > 0) ? (jsx("tr", { className: clsx(classes$6['banner-tr'], (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$6.grid), children: jsx("th", { colSpan: table.getVisibleLeafColumns().length, className: clsx(classes$6['banner-th'], (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$6.grid), children: jsx(MRT_ToolbarAlertBanner, { table: table }) }) })) : (getHeaderGroups().map((headerGroup) => (jsx(MRT_TableHeadRow, { headerGroup: headerGroup, table: table, virtualColumns: virtualColumns, virtualPaddingLeft: virtualPaddingLeft, virtualPaddingRight: virtualPaddingRight }, headerGroup.id)))) })));
};

var classes$5 = {"root":"MRT_TableFooterCell-module_root__8Iy27","pinned":"MRT_TableFooterCell-module_pinned__fHBaK","grid":"MRT_TableFooterCell-module_grid__2gAm-","group":"MRT_TableFooterCell-module_group__aZunC"};

const MRT_TableFooterCell = ({ footer, table, }) => {
    const { options: { layoutMode, mantineTableFooterCellProps }, } = table;
    const { column } = footer;
    const { columnDef } = column;
    const { columnDefType } = columnDef;
    const arg = { column, table };
    const _a = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableFooterCellProps, arg)), parseFromValuesOrFunc(columnDef.mantineTableFooterCellProps, arg)), { className } = _a, tableCellProps = __rest(_a, ["className"]);
    const footerProps = footer.isPlaceholder
        ? null
        : parseFromValuesOrFunc(columnDef.Footer, {
            column,
            footer,
            table,
        });
    return (jsx(TableTh, Object.assign({ colSpan: footer.colSpan }, tableCellProps, { className: clsx(classes$5.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$5.grid, column.getIsPinned() && columnDefType !== 'group' && classes$5.pinned, columnDefType === 'group' && classes$5.group, className), children: jsx(Fragment, { children: footerProps }) })));
};

var classes$4 = {"root":"MRT_TableFooterRow-module_root__7cLvQ","layout-mode-grid":"MRT_TableFooterRow-module_layout-mode-grid__miQGS"};

const MRT_TableFooterRow = ({ footerGroup, table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }) => {
    var _a;
    const { options: { layoutMode, mantineTableFooterRowProps }, } = table;
    // if no content in row, skip row
    if (!((_a = footerGroup.headers) === null || _a === void 0 ? void 0 : _a.some((header) => (typeof header.column.columnDef.footer === 'string' &&
        !!header.column.columnDef.footer) ||
        header.column.columnDef.Footer)))
        return null;
    const tableRowProps = parseFromValuesOrFunc(mantineTableFooterRowProps, {
        footerGroup,
        table,
    });
    return (jsxs(TableTr, Object.assign({ className: clsx(classes$4.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$4['layout-mode-grid']) }, tableRowProps, { children: [virtualPaddingLeft ? (jsx(Box, { component: "th", display: "flex", w: virtualPaddingLeft })) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : footerGroup.headers).map((footerOrVirtualFooter) => {
                const footer = virtualColumns
                    ? footerGroup.headers[footerOrVirtualFooter.index]
                    : footerOrVirtualFooter;
                return (jsx(MRT_TableFooterCell, { footer: footer, table: table }, footer.id));
            }), virtualPaddingRight ? (jsx(Box, { component: "th", display: "flex", w: virtualPaddingRight })) : null] })));
};

var classes$3 = {"root":"MRT_TableFooter-module_root__0y9bn","grid":"MRT_TableFooter-module_grid__5g9HT","sticky":"MRT_TableFooter-module_sticky__65QE2"};

const MRT_TableFooter = ({ table, virtualColumns, virtualPaddingLeft, virtualPaddingRight, }) => {
    const { getFooterGroups, getState, options: { enableStickyFooter, layoutMode, mantineTableFooterProps }, refs: { tableFooterRef }, } = table;
    const { isFullScreen } = getState();
    const tableFooterProps = parseFromValuesOrFunc(mantineTableFooterProps, {
        table,
    });
    const stickFooter = (isFullScreen || enableStickyFooter) && enableStickyFooter !== false;
    return (jsx(TableTfoot, Object.assign({}, tableFooterProps, tableFooterProps, { ref: (ref) => {
            tableFooterRef.current = ref;
            if (tableFooterProps === null || tableFooterProps === void 0 ? void 0 : tableFooterProps.ref) {
                // @ts-ignore
                tableFooterProps.ref.current = ref;
            }
        }, className: clsx(classes$3.root, tableFooterProps === null || tableFooterProps === void 0 ? void 0 : tableFooterProps.className, stickFooter && classes$3.sticky, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$3.grid), children: getFooterGroups().map((footerGroup) => (jsx(MRT_TableFooterRow, { footerGroup: footerGroup, table: table, virtualColumns: virtualColumns, virtualPaddingLeft: virtualPaddingLeft, virtualPaddingRight: virtualPaddingRight }, footerGroup.id))) })));
};

var classes$2 = {"root-grid":"MRT_Table-module_root-grid__q99se","root-semantic-not-resizing":"MRT_Table-module_root-semantic-not-resizing__1cDCm"};

const MRT_Table = ({ table, }) => {
    var _a, _b, _c, _d;
    const { getFlatHeaders, getState, options: { columnVirtualizerInstanceRef, columnVirtualizerOptions, columns, enableColumnResizing, enableColumnVirtualization, enablePinning, enableTableFooter, enableTableHead, layoutMode, mantineTableProps, memoMode, }, refs: { tableContainerRef }, } = table;
    const { columnPinning, columnSizing, columnSizingInfo, columnVisibility, density, } = getState();
    const tableProps = parseFromValuesOrFunc(mantineTableProps, { table });
    const vProps = parseFromValuesOrFunc(columnVirtualizerOptions, { table });
    const columnSizeVars = useMemo(() => {
        const headers = getFlatHeaders();
        const colSizes = {};
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const colSize = header.getSize();
            colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
            colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
        }
        return colSizes;
    }, [columns, columnSizing, columnSizingInfo, columnVisibility]);
    //get first 16 column widths and average them
    const averageColumnWidth = useMemo(() => {
        var _a, _b, _c, _d;
        if (!enableColumnVirtualization)
            return 0;
        const columnsWidths = (_d = (_c = (_b = (_a = table
            .getRowModel()
            .rows[0]) === null || _a === void 0 ? void 0 : _a.getCenterVisibleCells()) === null || _b === void 0 ? void 0 : _b.slice(0, 16)) === null || _c === void 0 ? void 0 : _c.map((cell) => cell.column.getSize() * 1.2)) !== null && _d !== void 0 ? _d : [];
        return columnsWidths.reduce((a, b) => a + b, 0) / columnsWidths.length;
    }, [table.getRowModel().rows, columnPinning, columnVisibility]);
    const [leftPinnedIndexes, rightPinnedIndexes] = useMemo(() => enableColumnVirtualization && enablePinning
        ? [
            table.getLeftLeafColumns().map((c) => c.getPinnedIndex()),
            table
                .getRightLeafColumns()
                .map((c) => table.getVisibleLeafColumns().length - c.getPinnedIndex() - 1),
        ]
        : [[], []], [columnPinning, enableColumnVirtualization, enablePinning]);
    const columnVirtualizer = enableColumnVirtualization
        ? useVirtualizer(Object.assign({ count: table.getVisibleLeafColumns().length, estimateSize: () => averageColumnWidth, getScrollElement: () => tableContainerRef.current, horizontal: true, overscan: 3, rangeExtractor: useCallback((range) => [
                ...new Set([
                    ...leftPinnedIndexes,
                    ...defaultRangeExtractor(range),
                    ...rightPinnedIndexes,
                ]),
            ], [leftPinnedIndexes, rightPinnedIndexes]) }, vProps))
        : undefined;
    if (columnVirtualizerInstanceRef && columnVirtualizer) {
        columnVirtualizerInstanceRef.current = columnVirtualizer;
    }
    const virtualColumns = columnVirtualizer
        ? columnVirtualizer.getVirtualItems()
        : undefined;
    let virtualPaddingLeft;
    let virtualPaddingRight;
    if (columnVirtualizer && (virtualColumns === null || virtualColumns === void 0 ? void 0 : virtualColumns.length)) {
        virtualPaddingLeft = (_b = (_a = virtualColumns[leftPinnedIndexes.length]) === null || _a === void 0 ? void 0 : _a.start) !== null && _b !== void 0 ? _b : 0;
        virtualPaddingRight =
            columnVirtualizer.getTotalSize() -
                ((_d = (_c = virtualColumns[virtualColumns.length - 1 - rightPinnedIndexes.length]) === null || _c === void 0 ? void 0 : _c.end) !== null && _d !== void 0 ? _d : 0);
    }
    const props = {
        columnVirtualizer,
        enableHover: tableProps === null || tableProps === void 0 ? void 0 : tableProps.highlightOnHover,
        isStriped: tableProps === null || tableProps === void 0 ? void 0 : tableProps.striped,
        table,
        virtualColumns,
        virtualPaddingLeft,
        virtualPaddingRight,
    };
    return (jsxs(Table, Object.assign({ className: clsx('mrt-table', classes$2.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith('grid')) && classes$2['root-grid'], enableColumnResizing &&
            layoutMode === 'semantic' &&
            classes$2['root-semantic-not-resizing'], tableProps === null || tableProps === void 0 ? void 0 : tableProps.className), highlightOnHover: true, horizontalSpacing: density, verticalSpacing: density }, tableProps, { __vars: Object.assign(Object.assign({}, columnSizeVars), tableProps === null || tableProps === void 0 ? void 0 : tableProps.__vars), children: [enableTableHead && jsx(MRT_TableHead, Object.assign({}, props)), memoMode === 'table-body' || columnSizingInfo.isResizingColumn ? (jsx(Memo_MRT_TableBody, Object.assign({}, props))) : (jsx(MRT_TableBody, Object.assign({}, props))), enableTableFooter && jsx(MRT_TableFooter, Object.assign({}, props))] })));
};

const MRT_EditRowModal = ({ open, table, }) => {
    var _a;
    const { getState, options: { onEditingRowCancel, onCreatingRowCancel, renderEditRowModalContent, renderCreateRowModalContent, mantineCreateRowModalProps, mantineEditRowModalProps, }, setEditingRow, setCreatingRow, } = table;
    const { creatingRow, editingRow } = getState();
    const row = (creatingRow !== null && creatingRow !== void 0 ? creatingRow : editingRow);
    const arg = { row, table };
    const modalProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditRowModalProps, arg)), (creatingRow && parseFromValuesOrFunc(mantineCreateRowModalProps, arg)));
    const internalEditComponents = row
        .getAllCells()
        .filter((cell) => cell.column.columnDef.columnDefType === 'data')
        .map((cell) => (jsx(MRT_EditCellTextInput, { cell: cell, table: table }, cell.id)));
    const handleCancel = () => {
        var _a;
        if (creatingRow) {
            onCreatingRowCancel === null || onCreatingRowCancel === void 0 ? void 0 : onCreatingRowCancel({ row, table });
            setCreatingRow(null);
        }
        else {
            onEditingRowCancel === null || onEditingRowCancel === void 0 ? void 0 : onEditingRowCancel({ row, table });
            setEditingRow(null);
        }
        row._valuesCache = {}; //reset values cache
        (_a = modalProps.onClose) === null || _a === void 0 ? void 0 : _a.call(modalProps);
    };
    return (createElement(Modal, Object.assign({ opened: open, withCloseButton: false }, modalProps, { onClose: handleCancel, key: row.id }), (_a = ((creatingRow &&
        (renderCreateRowModalContent === null || renderCreateRowModalContent === void 0 ? void 0 : renderCreateRowModalContent({
            row,
            table,
            internalEditComponents,
        }))) ||
        (renderEditRowModalContent === null || renderEditRowModalContent === void 0 ? void 0 : renderEditRowModalContent({
            row,
            table,
            internalEditComponents,
        })))) !== null && _a !== void 0 ? _a : (jsxs(Fragment, { children: [jsx("form", { onSubmit: (e) => e.preventDefault(), children: jsx(Stack, { gap: "lg", pt: 16, pb: 24, children: internalEditComponents }) }), jsx(Flex, { justify: "flex-end", children: jsx(MRT_EditActionButtons, { row: row, table: table, variant: "text" }) })] }))));
};

var classes$1 = {"root":"MRT_TableContainer-module_root__d16Nu","root-sticky":"MRT_TableContainer-module_root-sticky__tBBjf","root-fullscreen":"MRT_TableContainer-module_root-fullscreen__bf-9I"};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
const MRT_TableContainer = ({ table, }) => {
    const { getState, options: { createDisplayMode, editDisplayMode, enableStickyHeader, mantineLoadingOverlayProps, mantineTableContainerProps, }, refs: { tableContainerRef, bottomToolbarRef, topToolbarRef }, } = table;
    const { isFullScreen, isLoading, showLoadingOverlay, creatingRow, editingRow, } = getState();
    const [totalToolbarHeight, setTotalToolbarHeight] = useState(0);
    const tableContainerProps = parseFromValuesOrFunc(mantineTableContainerProps, { table });
    const loadingOverlayProps = parseFromValuesOrFunc(mantineLoadingOverlayProps, { table });
    useIsomorphicLayoutEffect(() => {
        var _a, _b, _c, _d;
        const topToolbarHeight = typeof document !== 'undefined'
            ? (_b = (_a = topToolbarRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0
            : 0;
        const bottomToolbarHeight = typeof document !== 'undefined'
            ? (_d = (_c = bottomToolbarRef === null || bottomToolbarRef === void 0 ? void 0 : bottomToolbarRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) !== null && _d !== void 0 ? _d : 0
            : 0;
        setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight);
    });
    const createModalOpen = createDisplayMode === 'modal' && creatingRow;
    const editModalOpen = editDisplayMode === 'modal' && editingRow;
    return (jsxs(Box, Object.assign({}, tableContainerProps, { className: clsx('mrt-table-container', classes$1.root, enableStickyHeader && classes$1['root-sticky'], isFullScreen && classes$1['root-fullscreen'], tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.className), ref: (node) => {
            if (node) {
                tableContainerRef.current = node;
                if (tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.ref) {
                    //@ts-ignore
                    tableContainerProps.ref.current = node;
                }
            }
        }, __vars: Object.assign({ '--mrt-top-toolbar-height': `${totalToolbarHeight}` }, tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.__vars), children: [jsx(LoadingOverlay, Object.assign({ visible: isLoading || showLoadingOverlay }, loadingOverlayProps)), jsx(MRT_Table, { table: table }), (createModalOpen || editModalOpen) && (jsx(MRT_EditRowModal, { open: true, table: table }))] })));
};

var classes = {"root":"MRT_TablePaper-module_root__W5OvZ"};

const MRT_TablePaper = ({ table, }) => {
    var _a, _b;
    const { getState, options: { enableBottomToolbar, enableTopToolbar, mantinePaperProps, renderBottomToolbar, renderTopToolbar, }, refs: { tablePaperRef }, } = table;
    const { isFullScreen } = getState();
    const tablePaperProps = parseFromValuesOrFunc(mantinePaperProps, { table });
    return (jsxs(Paper, Object.assign({ shadow: "xs", withBorder: true }, tablePaperProps, { className: clsx('mrt-table-paper', classes.root, tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.className), ref: (ref) => {
            tablePaperRef.current = ref;
            if (tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.ref) {
                tablePaperProps.ref.current = ref;
            }
        }, 
        // rare case where we should use inline styles to guarantee highest specificity
        style: (theme) => (Object.assign(Object.assign({}, (isFullScreen
            ? {
                bottom: 0,
                height: '100vh',
                left: 0,
                margin: 0,
                maxHeight: '100vh',
                maxWidth: '100vw',
                padding: 0,
                position: 'fixed',
                right: 0,
                top: 0,
                width: '100vw',
                zIndex: 100,
            }
            : null)), parseFromValuesOrFunc(tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.style, theme))), children: [enableTopToolbar &&
                ((_a = parseFromValuesOrFunc(renderTopToolbar, { table })) !== null && _a !== void 0 ? _a : (jsx(MRT_TopToolbar, { table: table }))), jsx(MRT_TableContainer, { table: table }), enableBottomToolbar &&
                ((_b = parseFromValuesOrFunc(renderBottomToolbar, { table })) !== null && _b !== void 0 ? _b : (jsx(MRT_BottomToolbar, { table: table })))] })));
};

const isTableInstanceProp = (props) => props.table !== undefined;
const MantineReactTable = (props) => {
    let table;
    if (isTableInstanceProp(props)) {
        table = props.table;
    }
    else {
        table = useMantineReactTable(props);
    }
    return jsx(MRT_TablePaper, { table: table });
};

export { MRT_AggregationFns, MRT_BottomToolbar, MRT_ColumnActionMenu, MRT_ColumnPinningButtons, MRT_CopyButton, MRT_DefaultColumn, MRT_DefaultDisplayColumn, MRT_EditActionButtons, MRT_EditCellTextInput, MRT_EditRowModal, MRT_ExpandAllButton, MRT_ExpandButton, MRT_FilterCheckbox, MRT_FilterFns, MRT_FilterOptionMenu, MRT_FilterRangeFields, MRT_FilterTextInput, MRT_GlobalFilterTextInput, MRT_GrabHandleButton, MRT_ProgressBar, MRT_RowActionMenu, MRT_SelectCheckbox, MRT_ShowHideColumnsButton, MRT_ShowHideColumnsMenu, MRT_ShowHideColumnsMenuItems, MRT_SortingFns, MRT_Table, MRT_TableBody, MRT_TableBodyCell, MRT_TableBodyCellValue, MRT_TableBodyRow, MRT_TableBodyRowGrabHandle, MRT_TableContainer, MRT_TableDetailPanel, MRT_TableFooter, MRT_TableFooterCell, MRT_TableFooterRow, MRT_TableHead, MRT_TableHeadCell, MRT_TableHeadCellFilterContainer, MRT_TableHeadCellFilterLabel, MRT_TableHeadCellGrabHandle, MRT_TableHeadCellResizeHandle, MRT_TableHeadCellSortLabel, MRT_TableHeadRow, MRT_TablePagination, MRT_TablePaper, MRT_ToggleDensePaddingButton, MRT_ToggleFiltersButton, MRT_ToggleFullScreenButton, MRT_ToggleGlobalFilterButton, MRT_ToggleRowActionMenuButton, MRT_ToolbarAlertBanner, MRT_ToolbarDropZone, MRT_ToolbarInternalButtons, MRT_TopToolbar, MantineReactTable, Memo_MRT_TableBody, Memo_MRT_TableBodyCell, Memo_MRT_TableBodyRow, createRow, flexRender, getAllLeafColumnDefs, getCanRankRows, getColumnId, getDefaultColumnFilterFn, getDefaultColumnOrderIds, getIsFirstColumn, getIsFirstRightPinnedColumn, getIsLastColumn, getIsLastLeftPinnedColumn, getLeadingDisplayColumnIds, getPrimaryColor, getPrimaryShade, getTotalRight, getTrailingDisplayColumnIds, localizedFilterOption, mrtFilterOptions, parseCSSVarId, parseFromValuesOrFunc, prepareColumns, rankGlobalFuzzy, reorderColumn, showExpandColumn, useMantineReactTable };
//# sourceMappingURL=mantine-react-table.esm.js.map
