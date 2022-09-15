import { useFormik } from 'formik';
import { CommonButton } from '../../CommonButton/CommonButton';
import { Input } from '../../Input/Input';
import { ChangePasswordBlockContainer } from './ChangePasswordBlock.styles';

export const ChangePasswordBlock = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (value) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <ChangePasswordBlockContainer>
      <Input
        name="newPassword"
        type="password"
        placeholder="Password"
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
      <CommonButton title="Confirm" />
    </ChangePasswordBlockContainer>
  );
};
