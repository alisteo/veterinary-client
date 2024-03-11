import * as yup from 'yup';

////* Auth
// TODO: use it
// const emailYupValidation = yup
//   .string()
//   .matches(
//     // eslint-disable-next-line no-useless-escape
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     'Correo electrónico inválido'
//   )
//   .required('El correo electrónico es requerido')
//   .min(5, 'Min 5 caracteres')
//   .max(48, 'Max 48 caracteres');

const passwordYupValidation = yup
  .string()
  .required('La contraseña es requerida')
  .min(5, 'Min 5 caracteres')
  .max(33, 'Max 12 caracteres');

export const loginFormSchema = yup.object({
  // email: emailYupValidation,
  username_or_email: yup.string().required('El correo electrónico es requerido'),
  password: passwordYupValidation,
});
