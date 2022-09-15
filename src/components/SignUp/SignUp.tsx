import { useFormik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setUser } from '../../store/reducers/user';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { SignUpContainer } from './SignUp.styles';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../API/userRequests';
import { SignupSchema } from '../../Schemas/SignupSchema';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const homePage = () => navigate('/');

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      if (formik.values.password === formik.values.confirmPassword) {
        try {
          const res = await signUp(formik.values.email, formik.values.password)
            .catch((error) => {
              (() => toast(error.response.data.message))();
            });
          if (res?.data.user) {
            homePage();
          }
          dispatch(setUser(res?.data.user));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
    },
  });

  return (
    <SignUpContainer>
      <div className="signup__wrapper">
        <div className="signup__registration">
          <h1 className="signup__title">Sign Up</h1>
          <form
            className="signup__form"
            method="post"
            onSubmit={formik.handleSubmit}
          >
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={formik.values.email}
              title="Email"
              onChange={formik.handleChange}
              isActive={false}
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
              title="Password"
              onChange={formik.handleChange}
              isActive={false}
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
              title="Password replay"
              onChange={formik.handleChange}
              isActive={false}
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
            <CommonButton title="Sign Up" type="submit" />
          </form>
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
