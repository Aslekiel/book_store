import * as yup from 'yup';

export const editPasswordSchema = yup.object().shape({
  password: yup.string().min(6, 'Password has to be longer than 6 characters'),
  newPassword: yup.string().min(6, 'Password has to be longer than 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords do not match'),
});
