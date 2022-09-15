import { useState } from 'react';
import { useFormik } from 'formik';
import { Input } from '../Input/Input';
import { UserProfileContainer } from './UserProfile.styles';
import { UserProfilePhoto } from './UserProfilePhoto/UserProfilePhoto';
import { ChangePasswordBlock } from './ChangePasswordBlock/ChangePasswordBlock';
import { UserProfileCaption } from './UserProfileCaption/UserProfileCaption';

export const UserProfile = () => {
  const [changePassword, setChangePassword] = useState(true);
  const [changeInformation, setChangeInformation] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (value) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(value, null, 2));
    },
  });

  const onClickChangePassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (!changePassword) {
      setChangePassword(true);
    } else {
      setChangePassword(false);
    }
  };

  const onClickChangeInformation = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (!changeInformation) {
      setChangeInformation(true);
    } else {
      setChangeInformation(false);
    }
  };

  return (
    <UserProfileContainer>
      <div className="user-profile__wrapper">
        <UserProfilePhoto />
        <form className="user-profile__info">
          <UserProfileCaption
            captionTitle="Personal information"
            onClick={onClickChangeInformation}
            buttonTitle="Change information"
          />
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your firstname and lastname"
            value={formik.values.name}
            title="Your name"
            onChange={formik.handleChange}
            isActive={changeInformation}
          />
          <Input
            name="email"
            type="text"
            placeholder="Email"
            value={formik.values.email}
            title="Your email"
            onChange={formik.handleChange}
            isActive={changeInformation}
          />
          <UserProfileCaption
            captionTitle="Password"
            onClick={onClickChangePassword}
            buttonTitle="Change password"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            title="Your password"
            onChange={formik.handleChange}
            isActive={changePassword}
          />
          {!changePassword && <ChangePasswordBlock />}
        </form>
      </div>
    </UserProfileContainer>
  );
};
