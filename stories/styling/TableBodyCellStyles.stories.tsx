import { type Meta } from '@storybook/react';
import { MantineReactTable, type MRT_ColumnDef } from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Styling/Style Table Body Cells',
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
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
];
const data = [...Array(21)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int(80),
  address: faker.location.streetAddress(),
}));

export const DefaultTableBodyCellStyles = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const StyleAllMantineTableBodyCell = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    mantineTableBodyCellProps={{
      style: {
        backgroundColor: 'rgba(52, 210, 235, 0.1)',
        borderRight: '1px solid rgba(224,224,224,1)',
      },
    }}
  />
);

export const StyleMantineTableBodyCellConditionallyIn1Column = () => (
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
        mantineTableBodyCellProps: ({ cell }) => ({
          style: {
            backgroundColor:
              cell.getValue<number>() > 40
                ? 'rgba(22, 184, 44, 0.5)'
                : undefined,
            fontWeight:
              cell.column.id === 'age' && cell.getValue<number>() > 40
                ? 'bold'
                : 'normal',
          },
        }),
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
    ]}
    data={data}
  />
);

export const CustomCellRender = () => (
  <MantineReactTable
    columns={[
      {
        header: 'First Name',
        accessorKey: 'firstName',
        Cell: ({ cell }) => (
          <span style={{ fontStyle: 'italic' }}>{cell.getValue<string>()}</span>
        ),
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        Cell: ({ cell }) => (
          <span style={{ color: 'red' }}>{cell.getValue<string>()}</span>
        ),
      },
      {
        header: 'Age',
        accessorKey: 'age',
        Cell: ({ cell }) => (
          <span
            style={{
              fontStyle: 'italic',
              padding: '8px',
              backgroundColor:
                cell.column.id === 'age' && cell.getValue<number>() > 40
                  ? 'rgba(22, 184, 44, 0.5)'
                  : undefined,
            }}
          >
            {cell.getValue<string>()}
          </span>
        ),
      },
      {
        header: 'Address',
        accessorKey: 'address',
      },
    ]}
    data={data}
  />
);
