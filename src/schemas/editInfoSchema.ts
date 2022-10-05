import * as yup from 'yup';

export const editInfoSchema = yup.object().shape({
  fullname: yup.string(),
  email: yup.string().email('Email is not correct'),
});
