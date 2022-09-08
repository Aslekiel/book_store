import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: #0D1821;
  color: #F0F4EF;

  padding: 73px 80px;

  .footer__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    padding-bottom: 5px;
  }
  
  .footer__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    list-style: none;
  }

  .footer__map {
    width: 100%;
  }
`;
