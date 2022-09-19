import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { LogInContainer } from './LogIn.styles';
import { logIn } from '../../API/userRequests';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setUser } from '../../store/user/user';
import { logInSchema } from '../../Schemas/logInSchema';
import { ReactComponent as ReadingMan } from '../../assets/login-signup-man.svg';

const LogIn = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: async () => {
      try {
        const res = await logIn(formik.values.email, formik.values.password);
        if (res?.data) {
          navigate(-1);
        }
        dispatch(setUser(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  });

  return (
    <LogInContainer>
      <div className="login__wrapper">
        <div className="login__registration">
          <h1 className="login__title">Log In</h1>
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
            {formik.errors.email && formik.values.email ? (
              <label className="form__label--err">{formik.errors.email}</label>
            ) : (
              <label className={!formik.values.email ? 'form__label' : 'form__label--acc'}>
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
            {formik.errors.password && formik.values.password ? (
              <label className="form__label--err">{formik.errors.password}</label>
            ) : (
              <label className={!formik.values.password ? 'form__label' : 'form__label--acc'}>
                Enter your password
              </label>
            )}
            <CommonButton title="Log In" type="submit" />
          </form>
        </div>
        <ReadingMan className="login__img" />
      </div>
      <ToastContainer />
    </LogInContainer>
  );
};

export default LogIn;
