import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  CustomNumberTextField,
  CustomTextField,
  SampleCheckbox,
  SampleDatePicker,
  SingleFormBoxScene,
} from '@/shared/components';
import { gridSizeMdLg6 } from '@/shared/constants';
import { Pet } from '@/shared/interfaces';
import { petFormSchema } from '@/shared/utils';
import { CreatePetParams, useCreatePet, useUpdatePet } from '@/store/app/pets';
import { returnUrlPestPage } from '../../../pages';

export interface SavePetProps {
  title: string;
  pet?: Pet;
}

type SaveFormData = CreatePetParams & {};

const SavePet: React.FC<SavePetProps> = ({ title, pet }) => {
  const navigate = useNavigate();

  ///* form
  const form = useForm<SaveFormData>({
    resolver: yupResolver(petFormSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = form;

  ///* mutations
  const createPetMutation = useCreatePet({
    navigate,
    returnUrl: returnUrlPestPage,
  });
  const updatePetMutation = useUpdatePet({
    navigate,
    returnUrl: returnUrlPestPage,
  });

  ///* handlers
  const onSave = async (data: SaveFormData) => {
    if (!isValid) return;

    ///* upd
    if (pet?.id) {
      updatePetMutation.mutate({ id: pet.id, data });
      return;
    }

    ///* create
    createPetMutation.mutate(data);
  };

  ///* effects
  useEffect(() => {
    if (!pet?.id) return;
    reset(pet);
  }, [pet, reset]);

  return (
    <SingleFormBoxScene
      titlePage={title}
      onCancel={() => navigate(returnUrlPestPage)}
      onSave={handleSubmit(onSave, () => {})}
    >
      <CustomTextField
        label="nombre mascota"
        name="nombre_mascota"
        control={form.control}
        defaultValue={form.getValues().nombre_mascota}
        error={errors.nombre_mascota}
        helperText={errors.nombre_mascota?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="codigo chip"
        name="codigo_chip"
        control={form.control}
        defaultValue={form.getValues().codigo_chip}
        error={errors.codigo_chip}
        helperText={errors.codigo_chip?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="lugar implantacion"
        name="lugar_implantacion"
        control={form.control}
        defaultValue={form.getValues().lugar_implantacion}
        error={errors.lugar_implantacion}
        helperText={errors.lugar_implantacion?.message}
        size={gridSizeMdLg6}
      />

      <SampleDatePicker
        label="fecha implantacion"
        name="fecha_implantacion"
        control={form.control}
        defaultValue={form.getValues().fecha_implantacion}
        error={errors.fecha_implantacion}
        helperText={errors.fecha_implantacion?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="especie"
        name="especie"
        control={form.control}
        defaultValue={form.getValues().especie}
        error={errors.especie}
        helperText={errors.especie?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="raza"
        name="raza"
        control={form.control}
        defaultValue={form.getValues().raza}
        error={errors.raza}
        helperText={errors.raza?.message}
        size={gridSizeMdLg6}
      />

      <SampleCheckbox
        label="pedigree"
        name="pedigree"
        control={form.control}
        defaultValue={form.getValues().pedigree}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="sexo"
        name="sexo"
        control={form.control}
        defaultValue={form.getValues().sexo}
        error={errors.sexo}
        helperText={errors.sexo?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="ubicacion"
        name="ubicacion"
        control={form.control}
        defaultValue={form.getValues().ubicacion}
        error={errors.ubicacion}
        helperText={errors.ubicacion?.message}
        size={gridSizeMdLg6}
      />

      <CustomTextField
        label="estado"
        name="estado"
        control={form.control}
        defaultValue={form.getValues().estado}
        error={errors.estado}
        helperText={errors.estado?.message}
        size={gridSizeMdLg6}
      />

      <CustomNumberTextField
        label="tutorId"
        name="tutorId"
        control={form.control}
        defaultValue={form.getValues().tutorId}
        error={errors.tutorId}
        helperText={errors.tutorId?.message}
        size={gridSizeMdLg6}
        min={0}
      />

      <CustomNumberTextField
        label="responsableId"
        name="responsableId"
        control={form.control}
        defaultValue={form.getValues().responsableId}
        error={errors.responsableId}
        helperText={errors.responsableId?.message}
        size={gridSizeMdLg6}
        min={0}
      />
    </SingleFormBoxScene>
  );
};

export default SavePet;
