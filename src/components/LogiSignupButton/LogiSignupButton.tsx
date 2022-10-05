import { Link } from 'react-router-dom';
import { LoginSignupButtonContainer } from './LogiSignupButton.styles';

export const LoginSignupButton = () => {
  return (
    <LoginSignupButtonContainer>
      <Link
        className="header__button button__login"
        to="/login"
      >
        Log In/
      </Link>
      <Link
        className="header__button button__signup"
        to="/signup"
      >
        Sign Up
      </Link>
    </LoginSignupButtonContainer>
  );
};
