import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  id: yup.string(),
  email: yup.string().email('Email is not correct'),
  password: yup.string().min(6, 'Password has to be longer than 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
