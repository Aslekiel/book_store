import styled from 'styled-components';

export const RatingStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating__integer {
    line-height: 24px;
    color: #B9BAC4;

    padding: 0 40px 0 15px;
  }

  .rating__arrow {
    padding-left: 45px;
  }

  .rating__rate-this {
    line-height: 24px;
    color: #B9BAC4;
            
    padding-left: 10px;
  }
  
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: flex-start;

    padding: 20px 0 30px;

    .rating__integer {
      line-height: 24px;
      color: #B9BAC4;

      padding: 0 40px 0 15px;
    }

    .rating__arrow {
      padding-left: 45px;
    }

    .rating__rate-this {
      line-height: 24px;
      color: #B9BAC4;

      padding-left: 10px;

    }
  }

  @media screen and (max-width: 670px) {
    .wrapper:nth-child(2) {
      flex-direction: column;
      justify-content:center;
      align-items: flex-start;
    }

    .rating__arrow {
      display: none;
    }

    .rating__rate-this {
      padding-left: 5px;
      padding-top: 5px;
    }
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 0;

    .wrapper {
      justify-content: flex-end;
      align-items: flex-start;
    }

    .wrapper
      > span 
      > span 
      > span 
      > .css-1vooibu-MuiSvgIcon-root {
        width: 20px;
        height: 20px;
      }

    .wrapper 
      > span 
      > span 
      > label 
      > span 
      > .css-1vooibu-MuiSvgIcon-root {
        width: 20px;
        height: 20px;
      }

    .rating__integer {
      font-size: 13px;

      padding-left: 15px;
      padding-right: 0;
    }

    .rating__rate-this {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
