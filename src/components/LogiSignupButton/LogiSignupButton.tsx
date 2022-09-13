import { useNavigate } from 'react-router-dom';
import { LoginSignupButtonContainer } from './LogiSignupButton.styles';

export const LoginSignupButton = () => {
  const navigate = useNavigate();
  const loginPage = () => navigate('/login');
  const signupPage = () => navigate('/signup');

  return (
    <LoginSignupButtonContainer>
      <button
        className="header__button button__login"
        onClick={loginPage}>
        Log In/
      </button>
      <button
        className="header__button button__signup"
        onClick={signupPage}>
        Sign Up
      </button>
    </LoginSignupButtonContainer>
  );
};
