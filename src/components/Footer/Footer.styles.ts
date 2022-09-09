import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0D1821;
  color: #F0F4EF;

  width: 100%;

  padding: 73px 0;

  .footer__wrapper {
    /* display: grid;
    grid-template-columns: 1.4fr 1.2fr 1.8fr; */

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

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
    margin: 0 10px;
  }

  .footer__logo {
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

    color: #F0F4EF;
    text-decoration: none;
  }

  .footer__map {
    width: 100%;
  }
`;
