import * as yup from 'yup';

export const petFormSchema = yup.object({
  nombre_mascota: yup.string().required('El campo nombre mascota es requerido'),
  codigo_chip: yup.string().required('El campo codigo chip es requerido'),
  lugar_implantacion: yup
    .string()
    .required('El campo lugar implantacion es requerido'),
  fecha_implantacion: yup
    .string()
    .required('El campo fecha implantacion es requerido'),
  especie: yup.string().required('El campo especie es requerido'),
  raza: yup.string().required('El campo raza es requerido'),
  pedigree: yup
    .boolean()
    .typeError('El campo pedigree es requerido')
    .required('El campo pedigree es requerido'),
  sexo: yup.string().required('El campo sexo es requerido'),
  ubicacion: yup.string().required('El campo ubicacion es requerido'),
  estado: yup.string().required('El campo estado es requerido'),

  tutorId: yup
    .number()
    .typeError('El campo tutorId es requerido')
    .required('El campo tutorId es requerido'),
  responsableId: yup
    .number()
    .typeError('El campo responsableId es requerido')
    .required('El campo responsableId es requerido'),
});
