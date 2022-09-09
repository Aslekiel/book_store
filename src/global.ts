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
  
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.button {
  background-color: #344966;
  border: 0;
  border-radius: 16px;
  padding: 10px 50px;
  color: #F0F4EF;
  letter-spacing: 0.75px;

  white-space: nowrap;

  cursor: pointer;
}
`;
