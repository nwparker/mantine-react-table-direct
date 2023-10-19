import { useEffect, useState } from 'react';
import { type Meta } from '@storybook/react';
import {
  MantineReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
} from '../../src';
import { Button, Flex } from '@mantine/core';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Filtering Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    header: 'Is Active',
    accessorKey: 'isActive',
    Cell: ({ cell }) => (cell.getValue() ? 'Yes' : 'No'),
    size: 110,
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
    filterVariant: 'range',
  },
  {
    Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(), //transform data to readable format for cell render
    accessorFn: (row) => new Date(row.birthDate), //transform data before processing so sorting works
    accessorKey: 'birthDate',
    header: 'Birth Date',
    filterVariant: 'date',
    sortingFn: 'datetime',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
];

const data = [...Array(120)].map(() => ({
  isActive: faker.datatype.boolean(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int(100),
  salary: faker.number.int(1000) * 1000,
  birthDate: faker.date.birthdate({ min: 1990, max: 2020 }),
  hireDate: faker.date.past(),
  gender: faker.person.sex(),
  address: faker.location.streetAddress(),
  state: faker.location.state(),
}));

export const FilteringEnabledDefault = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const PopoverDisplayMode = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    columnFilterDisplayMode="popover"
  />
);

export const ColumnFilteringDisabled = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnFilters={false}
  />
);

export const FilteringDisabled = () => (
  <MantineReactTable columns={columns} data={data} enableFilters={false} />
);

export const FilterHighlightingDisabled = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableFilterMatchHighlighting={false}
  />
);

export const FilterFnAndFilterVariants = () => (
  <MantineReactTable
    columns={[
      {
        header: 'Is Active',
        accessorFn: (originalRow) => (originalRow.isActive ? 'true' : 'false'),
        id: 'isActive',
        filterVariant: 'checkbox',
        Cell: ({ cell }) => (cell.getValue() === 'true' ? 'Yes' : 'No'),
        size: 200,
      },
      {
        header: 'First Name',
        accessorKey: 'firstName',
        filterFn: 'fuzzy', // default
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        filterFn: 'contains',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterVariant: 'range',
      },
      {
        header: 'Salary',
        accessorKey: 'salary',
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
          }),
        filterVariant: 'range-slider',
        mantineFilterRangeSliderProps: {
          min: 1000,
          max: 100000,
        },
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        mantineFilterSelectProps: { data: ['Male', 'Female', 'Other'] as any },
        filterVariant: 'select',
      },
      {
        header: 'Address',
        accessorKey: 'address',
        filterFn: 'includesStringSensitive',
      },
      {
        header: 'State',
        accessorKey: 'state',
        mantineFilterMultiSelectProps: {
          data: [
            'Alabama',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'New York',
            'Texas',
            'Washington',
          ] as any,
        },
        filterVariant: 'multi-select',
      },
      {
        accessorFn: (row) => {
          const bDay = new Date(row.birthDate);
          bDay.setHours(0, 0, 0, 0); // remove time from date
          return bDay;
        },
        id: 'birthDate',
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(),
        filterVariant: 'date',
        header: 'Birth Date',
        sortingFn: 'datetime',
        size: 200,
      },
      {
        accessorFn: (row) => {
          const hDay = new Date(row.hireDate);
          hDay.setHours(0, 0, 0, 0); // remove time from date
          return hDay;
        },
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(),
        id: 'hireDate',
        filterVariant: 'date-range',
        header: 'Hire Date',
        sortingFn: 'datetime',
        size: 200,
      },
    ]}
    data={data}
    initialState={{ showColumnFilters: true }}
  />
);

export const FilterFnAndFilterVariantsPopover = () => (
  <MantineReactTable
    columns={[
      {
        header: 'Is Active',
        accessorFn: (originalRow) => (originalRow.isActive ? 'true' : 'false'),
        id: 'isActive',
        filterVariant: 'checkbox',
        Cell: ({ cell }) => (cell.getValue() === 'true' ? 'Yes' : 'No'),
        size: 200,
      },
      {
        header: 'First Name',
        accessorKey: 'firstName',
        filterFn: 'fuzzy', // default
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        filterFn: 'contains',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterVariant: 'range',
      },
      {
        header: 'Salary',
        accessorKey: 'salary',
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
          }),
        filterVariant: 'range-slider',
        mantineFilterRangeSliderProps: {
          min: 1000,
          max: 100000,
        },
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        mantineFilterSelectProps: { data: ['Male', 'Female', 'Other'] as any },
        filterVariant: 'select',
      },
      {
        header: 'Address',
        accessorKey: 'address',
        filterFn: 'includesStringSensitive',
      },
      {
        header: 'State',
        accessorKey: 'state',
        mantineFilterMultiSelectProps: {
          data: [
            'Alabama',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'New York',
            'Texas',
            'Washington',
          ] as any,
        },
        filterVariant: 'multi-select',
      },
      {
        accessorFn: (row) => {
          const bDay = new Date(row.birthDate);
          bDay.setHours(0, 0, 0, 0); // remove time from date
          return bDay;
        },
        id: 'birthDate',
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(),
        filterVariant: 'date',
        header: 'Birth Date',
        sortingFn: 'datetime',
        size: 200,
      },
      {
        accessorFn: (row) => {
          const hDay = new Date(row.hireDate);
          hDay.setHours(0, 0, 0, 0); // remove time from date
          return hDay;
        },
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(),
        id: 'hireDate',
        filterVariant: 'date-range',
        header: 'Hire Date',
        sortingFn: 'datetime',
        size: 200,
      },
    ]}
    data={data}
    columnFilterDisplayMode="popover"
  />
);

export const FilterFnAndFilterVariantsFaceted = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
        filterVariant: 'autocomplete',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        filterVariant: 'select',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterVariant: 'range-slider',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        filterVariant: 'select',
      },
      {
        header: 'State',
        accessorKey: 'state',
        filterVariant: 'multi-select',
      },
    ]}
    data={data}
    enableFacetedValues
    initialState={{ showColumnFilters: true }}
  />
);

export const EnableFilterModes = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterFn: 'between',
      },
      {
        header: 'Salary',
        accessorKey: 'salary',
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
          }),
        filterVariant: 'range-slider',
        mantineFilterRangeSliderProps: {
          min: 1000,
          max: 100000,
        },
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        mantineFilterSelectProps: { data: ['Male', 'Female', 'Other'] as any },
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    enableColumnFilterModes
    initialState={{ showColumnFilters: true }}
  />
);

export const EnableFilterModesPopover = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        filterFn: 'between',
      },
      {
        header: 'Salary',
        accessorKey: 'salary',
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
          }),
        filterVariant: 'range-slider',
        mantineFilterRangeSliderProps: {
          min: 1000,
          max: 100000,
        },
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        mantineFilterSelectProps: { data: ['Male', 'Female', 'Other'] as any },
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    columnFilterDisplayMode="popover"
    enableColumnFilterModes
  />
);

export const DisableSomeFilterTypesForCertainColumns = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        columnFilterModeOptions: ['startsWith', 'endsWith'],
        filterFn: 'startsWith',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        columnFilterModeOptions: ['equals', 'notEquals'],
        filterFn: 'equals',
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    enableColumnFilterModes
    initialState={{ showColumnFilters: true }}
  />
);

export const FilteringDisabledForCertainColumns = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
        enableColumnFilter: false,
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Address',
        accessorKey: 'address',
        enableColumnFilter: false,
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    initialState={{ showColumnFilters: true }}
  />
);

export const CustomFilterFunctionPerColumn = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        filterFn: (row, _columnIds, filterValue) =>
          row
            .getValue<string>('gender')
            .toLowerCase()
            .startsWith(filterValue.toLowerCase()),
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
        filterFn: (row, _columnIds, filterValue) =>
          row
            .getValue<string>('state')
            .toLowerCase()
            .startsWith(filterValue.toLowerCase()),
      },
    ]}
    data={data}
    initialState={{ showColumnFilters: true }}
  />
);

export const CustomFilterFns = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        filterFn: 'customFn',
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
        filterFn: 'customFn',
      },
    ]}
    data={data}
    initialState={{ showColumnFilters: true }}
    filterFns={{
      customFn: (row, _columnIds, filterValue) => {
        console.info('customFn', row, _columnIds, filterValue);
        return row
          .getValue<string>('state')
          .toLowerCase()
          .startsWith(filterValue.toLowerCase());
      },
    }}
  />
);

export const CustomFilterComponent = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Age',
        accessorKey: 'age',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
        // Filter: ({ header }) => (
        //   <TextField
        //     onChange={(e) =>
        //       header.column.setFilterValue(e.target.value || undefined)
        //     }
        //     select
        //     value={header.column.getFilterValue() ?? ''}
        //     margin="none"
        //     placeholder="Filter"
        //     variant="standard"
        //     fullWidth
        //   >
        //     {/*@ts-ignore*/}
        //     <MenuItem value={null}>All</MenuItem>
        //     <MenuItem value="Male">Male</MenuItem>
        //     <MenuItem value="Female">Female</MenuItem>
        //     <MenuItem value="Other">Other</MenuItem>
        //   </TextField>
        // ),
        filterFn: (row, _columnIds, filterValue) =>
          row.getValue<string>('gender').toLowerCase() ===
          filterValue.toLowerCase(),
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    initialState={{ showColumnFilters: true }}
  />
);

export const ManualFiltering = () => {
  const [rows, setRows] = useState(() => [...data]);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );

  //this kind of logic would actually live on a server, not client-side
  useEffect(() => {
    if (columnFilters?.length) {
      let filteredRows = [...data];
      columnFilters.map((filter) => {
        const { id: columnId, value: filterValue } = filter;
        filteredRows = filteredRows.filter((row) => {
          return row[columnId as keyof typeof row]
            ?.toString()
            ?.toLowerCase()
            ?.includes?.((filterValue as string).toLowerCase());
        });
      });
      setRows(filteredRows);
    } else {
      setRows([...data]);
    }
  }, [columnFilters]);

  return (
    <MantineReactTable
      columns={columns}
      data={rows}
      manualFiltering
      columnFilterModeOptions={null}
      onColumnFiltersChange={setColumnFilters}
      state={{ columnFilters }}
    />
  );
};

export const ExternalSetFilterValue = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    initialState={{ showColumnFilters: true }}
    renderTopToolbarCustomActions={({ table }) => (
      <Flex gap="md">
        <Button
          onClick={() =>
            table.setColumnFilters((prev) => [
              ...prev,
              { id: 'firstName', value: 'Joe' },
            ])
          }
        >
          Find Joes
        </Button>
        <Button
          onClick={() =>
            table.setColumnFilters((prev) => [
              ...prev,
              { id: 'age', value: [18, 25] },
            ])
          }
        >
          Find 18-25 Age Range
        </Button>
        <Button onClick={() => table.resetColumnFilters()}>
          Reset Filters
        </Button>
      </Flex>
    )}
  />
);
