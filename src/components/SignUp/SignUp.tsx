import * as yup from 'yup';
import { useFormik } from 'formik';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../store/hooks/hooks';
import { signUpUser } from '../../store/reducers/user';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { SignUpContainer } from './SignUp.styles';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../API/userRequests';

const SignupSchema = yup.object().shape({
  email: yup.string().email('Email is not correct').required('Enter your email'),
  password: yup.string().required('Enter your password').min(6, 'Password has to be longer than 6 characters')
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Enter your password', function () {
      return this.parent.confirmPassword;
    })
    // eslint-disable-next-line func-names
    .test('passwords-do-not-match', 'Passwords do not match', function () {
      return this.parent.password === this.parent.confirmPassword;
    })
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Passwords match', function () {
      return this.parent.password !== this.parent.confirmPassword;
    }),
  confirmPassword: yup.string().required('Repeat your password without errors')
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Repeat your password without errors', function () {
      return this.parent.password;
    })
    // eslint-disable-next-line func-names
    .test('passwords-do-not-match', 'Passwords do not match', function () {
      return this.parent.password === this.parent.confirmPassword;
    })
    // eslint-disable-next-line func-names
    .test('passwords-match', 'Passwords match', function () {
      return this.parent.password !== this.parent.confirmPassword;
    }),
});

const SignUp = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!formik.values.password || !formik.values.confirmPassword || !formik.values.email) return;

    if (formik.values.password.length < 6) return;

    if (formik.values.password === formik.values.confirmPassword) {
      (async () => {
        try {
          const response = await signUp(formik.values.email, formik.values.password);

          if (response) {
            window.location.assign('http://localhost:3000/');
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      })();

      dispatch(signUpUser(formik.values.email));
    }
  };

  return (
    <SignUpContainer >
      <div className="signup__wrapper">
        <div className="signup__registration">
          <h1 className="signup__title">Sign Up</h1>
          <form
            className="signup__form"
            method="post"
            onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <label className="form__label">{formik.errors.email}</label>
            ) : (
              <label className="form__label">Enter your email</label>
            )}
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <label className="form__label">{formik.errors.password}</label>
            ) : (
              <label className="form__label">Enter your password</label>
            )}
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Password replay"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword ? (
              <label className="form__label">
                {formik.errors.confirmPassword}
              </label>
            ) : (
              <label className="form__label">
                Repeat your password without errors
              </label>
            )}
          </form>
          <CommonButton title={'Sign Up'} onClick={onClickHandler} />
        </div>
        <img
          className="signup__img"
          src="./img/login-signup-man.svg"
          alt="reading man"
        />
      </div>
      <ToastContainer />
    </SignUpContainer>
  );
};

export default SignUp;
