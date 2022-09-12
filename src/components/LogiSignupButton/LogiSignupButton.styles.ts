import styled from 'styled-components';

export const LoginSignupButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  .header__button {
    background-color: #344966;
    border: 0;
    color: #f0f4ef;
    letter-spacing: 0.75px;
    white-space: nowrap;
    cursor: pointer;
  }
  .button__login {
    border-radius: 16px 0 0 16px;
    padding: 10px 0 10px 50px;
  }
  .button__signup {
    border-radius: 0 16px 16px 0;
    padding: 10px 45px 10px 5px;
  }
`;
