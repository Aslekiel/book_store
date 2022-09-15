import * as yup from 'yup';

export const LogInSchema = yup.object().shape({
  email: yup.string().email('Email is not correct').required('Enter your email'),
  password: yup.string().required('Enter your password').min(6, 'Password has to be longer than 6 characters'),
});
