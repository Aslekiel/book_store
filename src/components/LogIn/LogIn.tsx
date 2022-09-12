import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { CommonButton } from '../CommonButton/CommonButton';
import { Input } from '../Input/Input';
import { LogInContainer } from './LogIn.styles';

const SignupSchema = yup.object().shape({
  email: yup.string().email('Email is not correct').required('Enter your email'),
  password: yup.string().required('Enter your password').min(6, 'Password has to be longer than 6 characters'),
});

const LogIn = () => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    (async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: formik.values.email,
          password: formik.values.password,
        }).catch((error) => {
          (() => toast(error.response.data.message))();
        });
        if (response) {
          window.location.assign('http://localhost:3000/');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
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
          </form>
          <CommonButton title={'Log In'} onClick={onClickHandler} />
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
