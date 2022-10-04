import styled from 'styled-components';

export const SortSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;

  z-index: 999;

  margin-top: 26px;
  padding: 0 18px;

  width: 380px;
  height: 130px;

  .sort__triangle {
    position: absolute;
    left: 20px;
    top: -12px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #F0F4EF;
  }

  .sort__slider {
    width: 100%;

    margin-top: 50px;
    padding-top: 12px;

    background: #D6D8E7;
    border-radius: 40px;
  }

  .example-thumb {
    top: -10px;
    width: 32px;
    height: 32px;
    background: #F7F7FC;
    border: 2px solid #BFCC94;
    border-radius: 40px;
    color: #F7F7FC;
    user-select: none;
    cursor: grab;
  }

  .example-track-1 {
    top: 0px;
    background: #BFCC94;
    border-radius: 40px;
    padding-top: 12px;
  }

  .sort__min-Price {
    position: absolute;
    top: 77px;
    left: 18px;
    line-height: 34px;
    letter-spacing: 0.75px;
    color: #344966;
  }

  .sort__max-Price {
    position: absolute;
    top: 77px;
    right: 18px;
    line-height: 34px;
    letter-spacing: 0.75px;
    color: #344966;
  }

  @media screen and (max-width: 1000px) {
    max-width: 290px;
    width: 100%;
  }

`;
