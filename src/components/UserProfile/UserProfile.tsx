import { useState } from 'react';
import { useFormik } from 'formik';
import { Input } from '../Input/Input';
import { ReactComponent as UserLogo } from './img/user profile.svg';
import { ReactComponent as CameraLogo } from './img/camera.svg';
import { UserProfileContainer } from './UserProfile.styles';
import { CommonButton } from '../CommonButton/CommonButton';

interface IValues {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const UserProfile = () => {
  const [changePassword, setChangePassword] = useState(false);

  const validate = (values: IValues) => {
    const errors = {
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
    };
    if (!values.email) {
      errors.email = 'Enter your email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Email is not correct';
    }

    if (!values.confirmPassword) {
      errors.newPassword = 'Enter your password';
    } else if (values.confirmPassword !== values.newPassword) {
      errors.confirmPassword = 'Passwords do not match';
      errors.newPassword = 'Passwords do not match';
    } else if (values.confirmPassword === values.newPassword) {
      errors.confirmPassword = 'Passwords match';
      errors.newPassword = 'Passwords match';
    }

    if (!values.newPassword) {
      errors.newPassword = 'Enter your password';
    } else if (values.newPassword.length < 6) {
      errors.newPassword = 'Password has to be longer than 6 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (value) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(value, null, 2));
    },
  });

  const onClickChangePassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (changePassword) {
      setChangePassword(false);
    } else {
      setChangePassword(true);
    }
  };

  const onClickLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.setItem('accessToken', '');
    window.location.assign('http://localhost:3000/');
  };

  return (
    <UserProfileContainer>
      <div className="user-profile__wrapper">
        <div className='user-profile__photo'>
          <div className="user-profile__photo__wrapper">
            <UserLogo className="user-profile__user-logo" />
            <button className="user-profile__button">
              <CameraLogo className="user-profile__camera-logo" />
            </button>
          </div>
          <CommonButton title={'Log Out'} onClick={onClickLogOut} />
        </div>
        <form className="user-profile__info">
          <div className="user-profile__caption">
            <h2 className="user-profile__caption__title">
              Personal information
            </h2>
            <button
              className="user-profile__caption__link"
              onClick={(event) => {
                event.preventDefault();
              }}>
              Change information
            </button>
          </div>
          <Input
            name="fullname"
            type="text"
            placeholder="Your fullname"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <Input
            name="email"
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="user-profile__caption">
            <h2 className="user-profile__caption__title">Password</h2>
            <button
              className="user-profile__caption__link"
              onClick={onClickChangePassword}>
              Change password
            </button>
          </div>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {changePassword && (
            <>
              <form className="change-form">
                <Input
                  name="newPassword"
                  type="password"
                  placeholder="Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.newPassword ? (
                  <label className="change-form__label">
                    {formik.errors.newPassword}
                  </label>
                ) : (
                  <label className="change-form__label">
                    Enter your password
                  </label>
                )}
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Password replay"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword ? (
                  <label className="change-form__label">
                    {formik.errors.confirmPassword}
                  </label>
                ) : (
                  <label className="change-form__label">
                    Repeat your password without errors
                  </label>
                )}
              </form>
              {/* <CommonButton title={'Confirm'} /> */}
            </>
          )}
        </form>
      </div>
    </UserProfileContainer>
  );
};
