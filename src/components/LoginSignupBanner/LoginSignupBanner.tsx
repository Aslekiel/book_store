import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { LoginSignupBannerContainer } from './LoginSignupBanner.styles';
import castle from '../../assets/castle.png';
import sprite from '../../assets/sprite.png';

export const LoginSignupBanner = () => {
  return (
    <LoginSignupBannerContainer>
      <img
        className="banner__castle-img"
        src={castle}
        alt="castle-img"
      />
      <img
        className="banner__sprite-img"
        src={sprite}
        alt="sprite-img"
      />
      <div className="banner__info">
        <h1 className="banner__info_title">
          Authorize now
        </h1>
        <p className="banner__info_text">
          Authorize now and discover the fabulous world of books
        </p>
        <LoginSignupButton />
      </div>
    </LoginSignupBannerContainer>
  );
};
