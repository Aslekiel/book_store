import { useNavigate } from 'react-router-dom';
import React from 'react';
import { UserProfilePhotoContainer } from './UserProfilePhoto.styles';
import { ReactComponent as UserLogo } from '../../../assets/user profile3.svg';
import { ReactComponent as CameraLogo } from '../../../assets/camera.svg';
import { CommonButton } from '../../CommonButton/CommonButton';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setUser } from '../../../store/reducers/user';

export const UserProfilePhoto = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const navigateToHomePage = () => navigate('/');

  const onClickLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.clear();

    dispatch(setUser({ user: { email: '' } }));

    navigateToHomePage();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <UserProfilePhotoContainer>
      <div className="user-photo">
        <UserLogo className="user-photo__user-logo" />
        <label className="user-photo__button">
          <input className="user-photo__button-load" type="file" onChange={handleImageChange} />
          <CameraLogo className="user-photo__camera-logo" />
        </label>
      </div>
      <CommonButton title="Log Out" onClick={onClickLogOut} />
    </UserProfilePhotoContainer>
  );
};
