import styled from 'styled-components';

export const BooksContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
  justify-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(254px, 1fr));
  }
`;
