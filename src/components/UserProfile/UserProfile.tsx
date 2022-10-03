import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import { useState } from 'react';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { setUser } from '../../store/user/user';
import { userApi } from '../../api/userApi';

import { Input } from '../Input/Input';
import { UserProfileContainer } from './UserProfile.styles';
import { UserProfilePhoto } from './UserProfilePhoto/UserProfilePhoto';
import { UserProfileCaption } from './UserProfileCaption/UserProfileCaption';
import { CommonButton } from '../CommonButton/CommonButton';
import { ChangePasswordBlock } from './ChangePasswordBlock/ChangePasswordBlock';

import { editInfoSchema } from '../../Schemas/editInfoSchema';

export const UserProfile = () => {
  const [changeInformation, setChangeInformation] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      fullname: `${user.user.fullname || ''}`,
      email: `${user.user.email}`,
    },
    validationSchema: editInfoSchema,
    onSubmit: async () => {
      try {
        const res = await userApi.editUserInformation({
          fullname: formik.values.fullname,
          email: formik.values.email,
        });

        dispatch(setUser(res?.data));
        setChangeInformation(!changeInformation);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  });

  const onClickChangeInformation = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setChangeInformation(!changeInformation);
  };

  return (
    <UserProfileContainer>
      <div className="user-profile__wrapper">
        <UserProfilePhoto />
        <div className="info__wrapper">
          <form
            className="user-profile__info"
            onSubmit={formik.handleSubmit}
          >
            <UserProfileCaption
              captionTitle="Personal information"
              onClick={onClickChangeInformation}
              buttonTitle="Change information"
            />
            <Input
              name="fullname"
              type="text"
              placeholder={
                formik.values.fullname ||
                'Enter your firstname and lastname'
              }
              value={formik.values.fullname}
              title="Your name"
              onChange={formik.handleChange}
              isActive={!changeInformation}
              isError={!!formik.errors.fullname}
              defaultClassState={changeInformation}
            />
            <Input
              name="email"
              type="text"
              placeholder={formik.values.email}
              value={formik.values.email}
              title="Your email"
              onChange={formik.handleChange}
              isActive={!changeInformation}
              isError={!!formik.errors.email}
              defaultClassState={changeInformation}
            />
            {
              changeInformation &&
              (<CommonButton
                title="Confirm"
                type="submit"
                toggleBtn
              />)
            }
          </form>
          <ChangePasswordBlock />
        </div>
      </div>
      <ToastContainer />
    </UserProfileContainer>
  );
};
