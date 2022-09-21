import styled from 'styled-components';

export const SortSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  background-color: #F0F4EF;
  border-radius: 16px;

  margin-top: 26px;
  padding: 0 18px;

  width: 380px;
  height: 150px;

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

  .sort-slider {
    width: 100%;

    margin-top: 50px;
    padding-top: 12px;

    background: #D6D8E7;
    border-radius: 40px;
  }
`;
