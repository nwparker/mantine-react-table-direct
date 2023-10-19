import { type Meta } from '@storybook/react';
import { MantineReactTable, type MRT_ColumnDef } from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Features/Dense Padding Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
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
  {
    header: 'Zip Code',
    accessorKey: 'zipCode',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
  },
];

const data = [...Array(25)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode(),
  phoneNumber: faker.phone.number(),
}));

export const DensePaddingToggleEnabledDefault = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const DensePaddingDisabled = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableDensityToggle={false}
  />
);

export const DefaultToDensePadding = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    initialState={{
      pagination: { pageSize: 25, pageIndex: 0 },
      density: 'xs',
    }}
  />
);
