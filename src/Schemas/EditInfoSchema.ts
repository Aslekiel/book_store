import * as yup from 'yup';

export const EditInfoSchema = yup.object().shape({
  fullname: yup.string(),
  email: yup.string().email('Email is not correct').required('Enter your email'),
});
