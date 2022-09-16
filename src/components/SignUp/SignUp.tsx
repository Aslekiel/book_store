import { useFormik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setUser } from '../../store/reducers/user';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { SignUpContainer } from './SignUp.styles';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../../API/userRequests';
import { signupSchema } from '../../Schemas/signupSchema';
import { ReactComponent as ReadingMan } from '../../assets/login-signup-man.svg';

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
    validationSchema: signupSchema,
    onSubmit: async () => {
      if (formik.values.password === formik.values.confirmPassword) {
        try {
          const res = await signUp(formik.values.email, formik.values.password);
          if (res?.data) {
            homePage();
          }
          dispatch(setUser(res?.data));
        } catch (error) {
          if (error instanceof AxiosError) {
            return toast(error.response?.data.message);
          }
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
              isError={!!formik.errors.email}
              defaultClassState
            />
            {formik.errors.email && formik.values.email ? (
              <label className="form__label--err">{formik.errors.email}</label>
            ) : (
              <label className={!formik.values.email ? 'form__label' : 'form__label--acc'}>Enter your email</label>
            )}
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              title="Password"
              onChange={formik.handleChange}
              isActive={false}
              isError={!!formik.errors.password}
              defaultClassState
            />
            {formik.errors.password && formik.values.password ? (
              <label className="form__label--err">{formik.errors.password}</label>
            ) : (
              <label className={!formik.values.password ? 'form__label' : 'form__label--acc'}>Enter your password</label>
            )}
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Password replay"
              value={formik.values.confirmPassword}
              title="Password replay"
              onChange={formik.handleChange}
              isActive={false}
              isError={!!formik.errors.confirmPassword}
              defaultClassState
            />
            {formik.errors.confirmPassword && formik.values.confirmPassword ? (
              <label className="form__label--err">
                {formik.errors.confirmPassword}
              </label>
            ) : (
              <label className={!formik.values.confirmPassword ? 'form__label' : 'form__label--acc'}>
                Repeat your password without errors
              </label>
            )}
            <CommonButton title="Sign Up" type="submit" />
          </form>
        </div>
        <ReadingMan className="signup__img" />
      </div>
      <ToastContainer />
    </SignUpContainer>
  );
};

export default SignUp;
