import { useNavigate } from 'react-router-dom';
import React from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { UserProfilePhotoContainer } from './UserProfilePhoto.styles';
import userLogo from '../../../assets/user profile3.png';
import { ReactComponent as CameraLogo } from '../../../assets/camera.svg';
import { CommonButton } from '../../CommonButton/CommonButton';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { setUser } from '../../../store/user/user';
import { userApi } from '../../../api/userApi';

export const UserProfilePhoto = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClickLogOut = () => {
    localStorage.setItem('accessToken', '');
    dispatch(setUser({ user: null }));

    navigate('/');
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (event) => {
      try {
        const res = await userApi.uploadAvatar(event.target.result);
        dispatch(setUser(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
  };

  return (
    <UserProfilePhotoContainer noAvatar={!user.avatar}>
      <div className="user-photo">
        <img
          src={user.avatar ? user.avatar : userLogo}
          alt="user-avatar"
          className="user-photo__user-logo"
        />
        <form className="user-photo__form">
          <label className="user-photo__button">
            <input
              className="user-photo__button-load"
              type="file"
              onChange={handleImageChange}
            />
            <CameraLogo
              className="user-photo__camera-logo"
            />
          </label>
        </form>
      </div>
      <CommonButton
        title="Log Out"
        onClick={onClickLogOut}
        toggleBtn
      />
    </UserProfilePhotoContainer>
  );
};
