import * as yup from 'yup';

export const logInSchema = yup.object().shape({
  email: yup.string().email('Email is not correct'),
  password: yup.string().min(6, 'Password has to be longer than 6 characters'),
});
