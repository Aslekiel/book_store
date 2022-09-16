import * as yup from 'yup';

export const editInfoSchema = yup.object().shape({
  fullname: yup.string(),
  email: yup.string().email('Email is not correct'),
});

// eslint-disable-next-line max-len
// fullname: yup.string().test('is-full-name', 'Please enter both your first and last name', (value) => {
//   const nameArr = value.split(' ');
//   return nameArr.length >= 2;
// }),
