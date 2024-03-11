import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CustomSearch,
  CustomTable,
  SingleTableBoxScene,
} from '@/shared/components';
import { useTableFilter } from '@/shared/hooks/useTableFilter';
import { Pet } from '@/shared/interfaces';
import { useDeletePet, useFetchPets } from '@/store/app/pets';
import { useUiConfirmModalStore } from '@/store/ui';
import { emptyCellOneLevel } from '@/shared/utils';

// TODO: change this to the correct url
export const returnUrlPestPage = '/app/pets';

export type PestPageProps = {};

const PestPage: React.FC<PestPageProps> = () => {
  const navigate = useNavigate();

  ///* global state
  const setConfirmDialog = useUiConfirmModalStore(s => s.setConfirmDialog);
  const setConfirmDialogIsOpen = useUiConfirmModalStore(
    s => s.setConfirmDialogIsOpen
  );

  ///* mutations
  const deletePet = useDeletePet();

  ///* table
  const {
    globalFilter,
    pagination,
    // searchTerm, // TODO: add filters here - searchTerm
    onChangeFilter,
    setPagination,
  } = useTableFilter();
  const { pageIndex, pageSize } = pagination;

  ///* fetch data
  const {
    data: PestPagingRes,
    isLoading,
    isRefetching,
  } = useFetchPets({
    page: pageIndex + 1,
    page_size: pageSize,
    // TODO: add filters here - searchTerm
  });

  ///* handlers
  const onEdit = (pet: Pet) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Editar Pet',
      subtitle: '¿Está seguro que desea editar este Pet?',
      onConfirm: () => {
        setConfirmDialogIsOpen(false);
        navigate(`${returnUrlPestPage}/editar/${pet.id}`);
      },
    });
  };

  const onDelete = (pet: Pet) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Eliminar Pet',
      subtitle: '¿Está seguro que desea eliminar este Pet?',
      onConfirm: () => {
        setConfirmDialogIsOpen(false);
        deletePet.mutate(pet.id!);
      },
    });
  };

  ///* columns
  const columns = useMemo<MRT_ColumnDef<Pet>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'id'),
      },

      {
        accessorKey: 'nombre_mascota',
        header: 'Nombre mascota',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'nombre_mascota'),
      },

      {
        accessorKey: 'codigo_chip',
        header: 'Codigo chip',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'codigo_chip'),
      },

      {
        accessorKey: 'lugar_implantacion',
        header: 'Lugar implantacion',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'lugar_implantacion'),
      },

      {
        accessorKey: 'fecha_implantacion',
        header: 'Fecha implantacion',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'fecha_implantacion'),
      },

      {
        accessorKey: 'especie',
        header: 'Especie',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'especie'),
      },

      {
        accessorKey: 'raza',
        header: 'Raza',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'raza'),
      },

      {
        accessorKey: 'pedigree',
        header: 'Pedigree',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'pedigree'),
      },

      {
        accessorKey: 'sexo',
        header: 'Sexo',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'sexo'),
      },

      {
        accessorKey: 'ubicacion',
        header: 'Ubicacion',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'ubicacion'),
      },

      {
        accessorKey: 'estado',
        header: 'Estado',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'estado'),
      },

      {
        accessorKey: 'tutorId',
        header: 'TutorId',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'tutorId'),
      },

      {
        accessorKey: 'responsableId',
        header: 'ResponsableId',
        size: 180,
        Cell: ({ row }) => emptyCellOneLevel(row, 'responsableId'),
      },
    ],
    []
  );

  return (
    <SingleTableBoxScene
      title="Pet"
      createPageUrl={`${returnUrlPestPage}/crear`}
    >
      <CustomSearch
        onChange={onChangeFilter}
        value={globalFilter}
        text="por "
      />

      <CustomTable<Pet>
        columns={columns}
        data={PestPagingRes || []}
        isLoading={isLoading}
        isRefetching={isRefetching}
        // // search
        enableGlobalFilter={false}
        // // pagination
        pagination={pagination}
        onPaging={setPagination}
        rowCount={PestPagingRes?.length || 0}
        // // actions
        actionsColumnSize={180}
        // crud
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </SingleTableBoxScene>
  );
};

export default PestPage;
