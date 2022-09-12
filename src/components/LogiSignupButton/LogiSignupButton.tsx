import { LoginSignupButtonContainer } from './LogiSignupButton.styles';

export const LoginSignupButton = () => {
  return (
    <LoginSignupButtonContainer>
      <button
        className="header__button button__login"
        onClick={() => {
          window.location.assign('http://localhost:3000/login');
        }}>
        Log In/
      </button>
      <button
        className="header__button button__signup"
        onClick={() => {
          window.location.assign('http://localhost:3000/signup');
        }}>
        Sign Up
      </button>
    </LoginSignupButtonContainer>
  );
};
