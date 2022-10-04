import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;
