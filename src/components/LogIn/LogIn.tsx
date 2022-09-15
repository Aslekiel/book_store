import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { LogInContainer } from './LogIn.styles';
import { logIn } from '../../API/userRequests';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setUser } from '../../store/reducers/user';
import { LogInSchema } from '../../Schemas/LogInSchema';

const LogIn = () => {
  const navigate = useNavigate();
  const homePage = () => navigate('/');

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LogInSchema,
    onSubmit: async () => {
      try {
        const res = await logIn(formik.values.email, formik.values.password)
          .catch((error) => {
            (() => toast(error.response.data.message))();
          });
        if (res?.data) {
          homePage();
        }
        dispatch(setUser(res?.data));
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
            <CommonButton title="Log In" type="submit" />
          </form>
        </div>
        <img
          className="login__img"
          src="./img/login-signup-man.svg"
          alt="reading man"
        />
      </div>
      <ToastContainer />
    </LogInContainer>
  );
};

export default LogIn;
