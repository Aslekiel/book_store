import { useState } from 'react';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../Input/Input';
import { UserProfileContainer } from './UserProfile.styles';
import { UserProfilePhoto } from './UserProfilePhoto/UserProfilePhoto';
import { UserProfileCaption } from './UserProfileCaption/UserProfileCaption';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setUser } from '../../store/reducers/user';
import { editUserInformation, editUserPassword } from '../../API/userRequests';
import { CommonButton } from '../CommonButton/CommonButton';
import { EditInfoSchema } from '../../Schemas/EditInfoSchema';
import { EditPasswordSchema } from '../../Schemas/EditPasswordSchema';

export const UserProfile = () => {
  const [changePassword, setChangePassword] = useState(true);
  const [changeInformation, setChangeInformation] = useState(true);

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: EditInfoSchema || EditPasswordSchema,
    onSubmit: async () => {
      try {
        if (formik.values.fullname || formik.values.email) {
          const res = await editUserInformation(formik.values.fullname, formik.values.email)
            .catch((error) => {
              (() => toast(error.response.data.message))();
            });
          dispatch(setUser(res?.data.user));
        } else {
          const res = await editUserPassword(
            formik.values.password, formik.values.newPassword, formik.values.confirmPassword,
          ).catch((error) => {
            (() => toast(error.response.data.message))();
          });
          dispatch(setUser(res?.data.user));
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
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
        <form className="user-profile__info" method="patch" onSubmit={formik.handleSubmit}>
          <UserProfileCaption
            captionTitle="Personal information"
            onClick={onClickChangeInformation}
            buttonTitle="Change information"
          />
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your firstname and lastname"
            value={user.fullname || formik.values.fullname}
            title="Your name"
            onChange={formik.handleChange}
            isActive={changeInformation}
          />
          <Input
            name="email"
            type="text"
            placeholder={user.email}
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
            title={!changePassword ? 'Old password' : 'Your password'}
            onChange={formik.handleChange}
            isActive={changePassword}
          />
          {!changePassword && (
            <div className="change-password">
              <Input
                name="newPassword"
                type="password"
                placeholder="New password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                title="New password"
                isActive={false}
              />
              {formik.errors.newPassword ? (
                <label className="change-password__label">
                  {formik.errors.newPassword}
                </label>
              ) : (
                <label className="change-password__label">
                  Enter your password
                </label>
              )}
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Password replay"
                value={formik.values.confirmPassword}
                title="Replay new password"
                onChange={formik.handleChange}
                isActive={false}
              />
              {formik.errors.confirmPassword ? (
                <label className="change-password__label">
                  {formik.errors.confirmPassword}
                </label>
              ) : (
                <label className="change-password__label">
                  Repeat your password without errors
                </label>
              )}
            </div>)}
          {!changePassword || !changeInformation ? <CommonButton title="Confirm" type="submit" /> : null}

        </form>
      </div>
      <ToastContainer />
    </UserProfileContainer>
  );
};
