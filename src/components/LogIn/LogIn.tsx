import { AxiosError } from 'axios';

import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';

import { userApi } from '../../api/userApi';
import { setUser } from '../../store/user/user';
import { useAppDispatch } from '../../store/hooks/hooks';

import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { ReactComponent as ReadingMan } from '../../assets/login-signup-man.svg';
import { InputLabel } from '../InputLabel/InputLabel';

import { logInSchema } from '../../Schemas/logInSchema';

import { LogInContainer } from './LogIn.styles';

interface ILocationStateType {
  from: { pathname: string };
}

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const locationState = location.state as ILocationStateType;

  const from = locationState?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: async () => {
      try {
        const res = await userApi.logIn({
          email: formik.values.email,
          password: formik.values.password,
        });

        dispatch(setUser(res.data));
        navigate(from, { replace: true });
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        throw new Error();
      }
    },
  });

  return (
    <LogInContainer>
      <div className="login__wrapper">
        <div className="login__registration">
          <h1 className="login__title">
            Log In
          </h1>
          <form
            className="login__form"
            method="post"
            onSubmit={formik.handleSubmit}
          >
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              title="Email"
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
            <CommonButton
              title="Log In"
              type="submit"
              toggleBtn
            />
          </form>
        </div>
        <ReadingMan className="login__img" />
      </div>
      <ToastContainer />
    </LogInContainer>
  );
};

export default LogIn;
