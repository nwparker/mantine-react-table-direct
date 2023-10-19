import { type Meta } from '@storybook/react';
import { MantineReactTable, type MRT_ColumnDef } from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Click to Copy Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'name.firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'name.lastName',
  },
  {
    header: 'Email Address',
    accessorKey: 'email',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'City',
    accessorKey: 'city',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
];

const data = [...Array(100)].map(() => ({
  name: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
}));

export const ClickToCopyEnabled = () => (
  <MantineReactTable columns={columns} data={data} enableClickToCopy />
);

export const ClickToCopyEnabledPerColumn = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'name.firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'name.lastName',
      },
      {
        header: 'Email Address',
        accessorKey: 'email',
        enableClickToCopy: true,
      },
      {
        header: 'Address',
        accessorKey: 'address',
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
  />
);

export const ClickToCopyDisabledPerColumn = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'name.firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'name.lastName',
      },
      {
        header: 'Email Address',
        accessorKey: 'email',
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
      {
        header: 'City',
        accessorKey: 'city',
        enableClickToCopy: false,
      },
      {
        header: 'State',
        accessorKey: 'state',
        enableClickToCopy: false,
      },
    ]}
    data={data}
    enableClickToCopy
  />
);
