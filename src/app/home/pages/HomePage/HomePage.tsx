import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';

import { SingleTableBoxScene, TableWithoutActions } from '@/shared/components';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'veterinario',
        header: 'Nombre veterinario',
        size: 200,
      },
      {
        accessorKey: 'propetario',
        header: 'Nombre propetario',
        size: 200,
      },
      {
        accessorKey: 'mascota',
        header: 'Nombre mascota',
        size: 200,
      },
      {
        accessorKey: 'especie',
        header: 'Especie',
        size: 100,
      },
      {
        accessorKey: 'raza',
        header: 'Raza',
        size: 140,
      },
      {
        accessorKey: 'microchip',
        header: 'Numero microchip',
        size: 300,
      },
      {
        accessorKey: 'certificado',
        header: 'Certificado',
        size: 200,
        Cell: ({ row }) => {
          console.log(row);

          return 'Certificado';
        },
      },
    ],
    []
  );

  return (
    <>
      <SingleTableBoxScene title="Consulta microchips" showCreateBtn={false}>
        <TableWithoutActions
          columns={columns}
          data={[]}
          pagination={{}}
          onPaging={() => {}}
        />
      </SingleTableBoxScene>
    </>
  );
};

export default HomePage;
