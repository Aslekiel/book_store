import styled from 'styled-components';

export const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  padding: 5px;

  width: 100%;

  cursor: pointer;

  .genre__checkbox {
    margin-right: 10px;
    width: 22px;
  }

  .genre__title {
    color: #344966;
  }
`;
