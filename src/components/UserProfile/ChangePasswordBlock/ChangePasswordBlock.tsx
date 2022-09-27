import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../../api/userApi';
import { editPasswordSchema } from '../../../Schemas/editPasswordSchema';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setUser } from '../../../store/user/user';
import { CommonButton } from '../../CommonButton/CommonButton';
import { Input } from '../../Input/Input';
import { UserProfileCaption } from '../UserProfileCaption/UserProfileCaption';
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
        const options = {
          oldPassword: formik.values.password,
          newPassword: formik.values.newPassword,
          confirmPassword: formik.values.confirmPassword,
        };

        const res = await userApi.editUserPassword(options);

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

  const onClickChangePassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
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
            !changePassword
              ? 'Old password'
              : 'Your password'
          }
          onChange={formik.handleChange}
          isActive={!changePassword}
          isError={!!formik.errors.password}
          defaultClassState={!changePassword}
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
            {
              formik.errors.newPassword
                ? (
                  <label
                    className="change-password__label"
                  >
                    {formik.errors.newPassword}
                  </label>
                ) : (
                  <label
                    className="change-password__label"
                  >
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
              isError={!!formik.errors.confirmPassword}
              defaultClassState
            />
            {
              formik.errors.confirmPassword
                ? (
                  <label
                    className="change-password__label"
                  >
                    {formik.errors.confirmPassword}
                  </label>
                ) : (
                  <label
                    className="change-password__label"
                  >
                    Repeat your password without errors
                  </label>
                )}
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
