import { useFormik } from 'formik';
import { Input } from '../Input/Input';
import { SignUpContainer } from './SignUp.styles';

interface IValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const validate = (values: IValues) => {
    const errors = { email: '', password: '', confirmPassword: '' };
    if (!values.email) {
      errors.email = 'Enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email is not correct';
    }

    if (!values.confirmPassword) {
      errors.password = 'Enter your password';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
      errors.password = 'Passwords do not match';
    } else if (values.confirmPassword === values.password) {
      errors.confirmPassword = 'Passwords match';
      errors.password = 'Passwords match';
    }

    if (!values.password) {
      errors.password = 'Enter your password';
    } else if (values.password.length < 6) {
      errors.password = 'Password has to be longer than 6 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SignUpContainer>
      <div className="signup__wrapper">
        <div className="signup__registration">
          <h1 className="signup__title">Sign Up</h1>
          <form className="signup__form" onSubmit={formik.handleSubmit}>
            <div className='form__item'>
              <Input className={'form__email'} name='email' type="text" placeholder='Email' value={formik.values.email}
                onChange={formik.handleChange} />
              {/* <CloseBtn className='form__close-btn' /> */}
              {/* <img className='form__close-btn' src="./img/close.svg" alt="close-btn" /> */}
            </div>
            {formik.errors.email ? <label className="form__label">{formik.errors.email}</label>
              : <label className="form__label">Enter your email</label>
            }
            <div className='form__item'>
              <Input className="form__password" name='password' type="password" placeholder='Password'
                value={formik.values.password} onChange={formik.handleChange} />
            </div>
            {formik.errors.password ? <label className="form__label">{formik.errors.password}</label>
              : <label className="form__label">Enter your password</label>}
            <div className='form__item'>
              <Input className="form__password" name='confirmPassword' type="password"
                placeholder='Password replay' value={formik.values.confirmPassword} onChange={formik.handleChange} />
            </div>
            {formik.errors.confirmPassword ? <label className="form__label">{formik.errors.confirmPassword}</label>
              : <label className="form__label">Repeat your password without errors</label>}
          </form>
          <button className='button'>Sign Up</button>
        </div>
        <img className="signup__img" src="./img/login-signup-man.svg" alt="reading man" />
      </div>

    </SignUpContainer>
  );
};

export default SignUp;
