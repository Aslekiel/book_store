import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  id: yup.string(),
  email: yup.string().email('Email is not correct').required('Enter your email'),
  password: yup.string().required('Enter your password').min(6, 'Password has to be longer than 6 characters'),
  confirmPassword: yup.string().required('Repeat your password without errors')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
