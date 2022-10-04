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
    max-width: 1290px;
    width: 100%;
    padding: 0 15px;
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

  @media screen and (max-width: 1000px) {
    max-height: 340px;
    height: 100%;

    margin-top: 100px;
    padding: 73px 20px;

    .footer__logo {
      width: 50%;
    }

    .footer__list {
      justify-content: space-between;
      height: 120px;
    }

    .footer__text, .footer__link {
      font-size: 16px;
      line-height: 24px;
    }

    .footer__map {
      max-width: 392px;
      max-height: 160px;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 540px) {
    max-height: 650px;
    height: 100%;

    margin-top: 70px;

    .footer__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .footer__logo {
      max-width: 88px;
      width: 100%;

      padding-bottom: 30px;
    }

    .footer__navigation {
      padding: 40px 0;
    }

    .footer__map {
      max-width: 291px;
      max-height: 160px;
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }
  }
`;
