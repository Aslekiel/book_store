import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
// import { ReactComponent as CastleImg } from './img/castle.svg';
import { LoginSignupBannerContainer } from './LoginSignupBanner.styles';

export const LoginSignupBanner = () => {
  return (
    <LoginSignupBannerContainer>
      {/* <CastleImg /> */}
      <div className="banner__info">
        <h1 className="banner__info__title">Authorize now</h1>
        <p className="banner__info__text">
          Authorize now and discover the fabulous <br /> world of books
        </p>
        <LoginSignupButton />
        {/* <img
          className="banner__sprite-img"
          src="./img/sprite.svg"
          alt="sprite-img"
        /> */}
      </div>
    </LoginSignupBannerContainer>
  );
};
