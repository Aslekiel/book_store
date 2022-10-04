import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useFormik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';

import { userApi } from '../../../api/userApi';
import { setUser } from '../../../store/user/user';

import { CommonButton } from '../../CommonButton/CommonButton';
import { Input } from '../../Input/Input';
import { InputLabel } from '../../InputLabel/InputLabel';
import { UserProfileCaption } from '../UserProfileCaption/UserProfileCaption';

import { editPasswordSchema } from '../../../schemas/editPasswordSchema';

import { ChangePasswordBlockContainer } from './ChangePasswordBlock.styles';

export const ChangePasswordBlock = () => {
  const [changePassword, setChangePassword] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: editPasswordSchema,
    onSubmit: async () => {
      try {
        const res = await userApi.editUserPassword(
          {
            oldPassword: formik.values.password,
            newPassword: formik.values.newPassword,
            confirmPassword: formik.values.confirmPassword,
          },
        );

        dispatch(setUser(res?.data));
        setChangePassword(!changePassword);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  });

  const onClickChangePassword = () => {
    setChangePassword(!changePassword);
  };

  return (
    <ChangePasswordBlockContainer>
      <UserProfileCaption
        captionTitle="Password"
        onClick={onClickChangePassword}
        buttonTitle="Change password"
      />
      <form
        className="change-password__info"
        onSubmit={formik.handleSubmit}
      >
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          title={
            changePassword
              ? 'Old password'
              : 'Your password'
          }
          onChange={formik.handleChange}
          isActive={!changePassword}
          isError={!!formik.errors.password}
          defaultClassState={changePassword}
        />
        {changePassword && (
          <div className="change-password">
            <Input
              name="newPassword"
              type="password"
              placeholder="New password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              title="New password"
              isActive={false}
              isError={!!formik.errors.newPassword}
              defaultClassState={!changePassword}
            />
            <InputLabel
              title="Enter your password"
              error={formik.errors.newPassword}
              value={formik.values.newPassword}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Password replay"
              value={formik.values.confirmPassword}
              title="Replay new password"
              onChange={formik.handleChange}
              isActive={false}
              isError={!!formik.errors.confirmPassword}
              defaultClassState
            />
            <InputLabel
              title="Repeat your password without errors"
              error={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
            />
          </div>)}
        {
          changePassword &&
          (<CommonButton
            title="Confirm"
            type="submit"
            toggleBtn
          />)
        }
      </form>
    </ChangePasswordBlockContainer>
  );
};
