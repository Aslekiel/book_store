import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d1821;
  color: #f0f4ef;
  width: 100%;

  padding: 73px 0;
  margin-top: 150px;

  .footer__wrapper {
    display: grid;
    grid-template-columns: 0.9fr 0.85fr 2.2fr;
    width: 1290px;
    padding: 0 5px;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .footer__navigation {
    display: flex;
    flex-direction: column;
    justify-self: end;
    padding: 0 15px;
  }

  .footer__logo {
    width: 30%;
    padding-bottom: 40px;
  }

  .footer__text {
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 5px;
  }

  .footer__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
  }

  .footer__link {
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 5px;
    color: #f0f4ef;
    text-decoration: none;
  }

  .footer__adress {
    display: flex;
    flex-direction: column;
    justify-self: end;
  }
`;
