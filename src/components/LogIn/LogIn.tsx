import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { LogInContainer } from './LogIn.styles';
import { useAppDispatch } from '../../store/hooks/hooks';
import { logInSchema } from '../../Schemas/logInSchema';
import { ReactComponent as ReadingMan } from '../../assets/login-signup-man.svg';
import { logInThunk } from '../../store/thunks/userThunks/userThunk';

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
        const res = await dispatch(logInThunk({
          email: formik.values.email, password: formik.values.password,
        })).unwrap();

        if (res?.data) {
          navigate(from, { replace: true });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
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
            {formik.errors.email && formik.values.email
              ? (
                <label
                  className="form__label--err"
                >
                  {formik.errors.email}
                </label>
              ) : (
                <label
                  className={!formik.values.email
                    ? 'form__label'
                    : 'form__label--acc'
                  }
                >
                  Enter your email
                </label>
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
            {formik.errors.password && formik.values.password
              ? (
                <label
                  className="form__label--err"
                >
                  {formik.errors.password}
                </label>
              ) : (
                <label
                  className={!formik.values.password
                    ? 'form__label'
                    : 'form__label--acc'}
                >
                  Enter your password
                </label>
              )}
            <CommonButton
              title="Log In"
              type="submit"
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
