import styled from 'styled-components';

export const SortGenreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    background-color: #F0F4EF;
    border-radius: 16px;

    margin-top: 26px;
    padding: 10px 15px 10px;

    width: 330px;

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
`;
