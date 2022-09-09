import { useFormik } from 'formik';
import { LogInContainer } from './LogIn.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IValues {
  email: string;
  password: string;
}

const LogIn = () => {
  const validate = (values: IValues) => {
    const errors = { email: '', password: '' };
    if (!values.email) {
      errors.email = 'Enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // if (!values.password) {
    //   errors.password = 'Enter your password';
    // } else if (values.password.length < 5) {
    //   errors.password = 'Password has to be longer than 6 characters';
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LogInContainer>
      <div className="login__wrapper">
        <div className='login__registration'>
          <h1 className="login__title">Log In</h1>
          <form className="login__form" onSubmit={formik.handleSubmit}>
            <input className="form__email" name='email' type="email" placeholder='Email' value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email ? <label className="form__label">{formik.errors.email}</label> : <label className="form__label">Enter your email</label>}
            <input className="form__password" name='password' type="password" placeholder='Password' value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password ? <label className="form__label">{formik.errors.password}</label> : <label className="form__label">Enter your password</label>}
          </form>
          <button className='button'>Log In</button>
        </div>
        <img className="login__img" src="./img/login-signup-man.svg" alt="reading man" />
      </div>

    </LogInContainer>
  );
};

export default LogIn;
