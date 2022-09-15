import { useNavigate } from 'react-router-dom';
import { UserProfilePhotoContainer } from './UserProfilePhoto.styles';
import { ReactComponent as UserLogo } from '../img/user profile.svg';
import { ReactComponent as CameraLogo } from '../img/camera.svg';
import { CommonButton } from '../../CommonButton/CommonButton';

export const UserProfilePhoto = () => {
  const navigate = useNavigate();
  const homePage = () => navigate('/');

  const onClickLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.setItem('accessToken', '');

    homePage();
  };

  return (
    <UserProfilePhotoContainer>
      <div className="user-photo">
        <UserLogo className="user-photo__user-logo" />
        <button className="user-photo__button">
          <CameraLogo className="user-photo__camera-logo" />
        </button>
      </div>
      <CommonButton title="Log Out" onClick={onClickLogOut} />
    </UserProfilePhotoContainer>
  );
};
