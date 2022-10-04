import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks';

import { setUser } from '../../store/user/user';
import { userApi } from '../../api/userApi';

import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { ReactComponent as ReadingMan } from '../../assets/login-signup-man.svg';
import { InputLabel } from '../InputLabel/InputLabel';

import { signupSchema } from '../../schemas/signupSchema';

import { SignUpContainer } from './SignUp.styles';

interface ILocationStateType {
  from: { pathname: string };
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const locationState = location.state as ILocationStateType;

  const from = locationState?.from?.pathname || '/';

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
          const res = await userApi.signUp({
            email: formik.values.email,
            password: formik.values.password,
          });

          dispatch(setUser(res?.data));
          navigate(from, { replace: true });
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
          <h1 className="signup__title">
            Sign Up
          </h1>
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
            <InputLabel
              title="Enter your email"
              error={formik.errors.email}
              value={formik.values.email}
            />
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
            <InputLabel
              title="Enter your password"
              error={formik.errors.password}
              value={formik.values.password}
            />
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
            <InputLabel
              title="Repeat your password without errors"
              error={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
            />
            <CommonButton
              title="Sign Up"
              type="submit"
              toggleBtn
            />
          </form>
        </div>
        <ReadingMan className="signup__img" />
      </div>
      <ToastContainer />
    </SignUpContainer>
  );
};

export default SignUp;
