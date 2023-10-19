import { useEffect, useMemo, useState } from 'react';
import { type Meta } from '@storybook/react';
import {
  MantineReactTable,
  type MRT_Column,
  type MRT_ColumnDef,
} from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Column Grouping Examples',
};

export default meta;

interface Person {
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
  state: string;
}

const columns = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'City',
    accessorKey: 'city',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
] as MRT_ColumnDef<Person>[];

const data = [...Array(200)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  gender: faker.person.sex(),
  city: faker.location.city(),
  state: faker.location.state(),
}));

export const ColumnGroupingEnabled = () => (
  <MantineReactTable columns={columns} data={data} enableGrouping />
);

export const ColumnGroupingNoDragHandles = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableGrouping
    enableColumnDragging={false}
  />
);

export const ColumnGroupingEnabledDropZoneBottom = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableGrouping
    positionToolbarDropZone="bottom"
  />
);

export const ColumnGroupingEnabledCustomAggregate = () => (
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
        header: 'Gender',
        accessorKey: 'gender',
        AggregatedCell: ({ cell }) => (
          <div style={{ color: 'red' }}>{cell.renderValue() as string}</div>
        ),
      },
      {
        header: 'City',
        accessorKey: 'city',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
    ]}
    data={data}
    enableGrouping
  />
);

export const ColumnGroupingBannerOnBottom = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableGrouping
    positionToolbarAlertBanner="bottom"
  />
);

export const GroupingColumnsSetState = () => {
  const [columns, setColumns] = useState<MRT_ColumnDef<any>[]>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // Do something and set columns and data

    setColumns([
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ]);

    setData([
      {
        name: {
          firstName: 'John',
          lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
      },
      {
        name: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
      },
      {
        name: {
          firstName: 'Joe',
          lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
      },
      {
        name: {
          firstName: 'Kevin',
          lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
      },
      {
        name: {
          firstName: 'Joshua',
          lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
      },
    ]);
  }, []);

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableGrouping
      state={{ columnOrder: columns.map((c) => c.accessorKey as string) }}
    />
  );
};

export const ColumnGroupingDropZoneAlwaysVisible = () => {
  const [draggingColumn, setDraggingColumn] =
    useState<MRT_Column<Person> | null>(null);

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableGrouping
      localization={
        !draggingColumn
          ? { dropToGroupBy: 'Drag a column here to group by it' }
          : undefined
      }
      mantineTopToolbarProps={{
        style: {
          '& .Mantine-ToolbarDropZone': {
            border: '1px solid red',
          },
        },
      }}
      onDraggingColumnChange={setDraggingColumn}
      positionToolbarAlertBanner="bottom"
      state={{ draggingColumn, showToolbarDropZone: true }}
    />
  );
};

export const GroupingAndDraggingWithSomeDisabledGrouping = () => {
  const _columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        enableGrouping: false,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={_columns}
      data={data}
      enableColumnDragging
      enableGrouping
    />
  );
};
