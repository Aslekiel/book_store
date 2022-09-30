import styled from 'styled-components';

type PropsType = {
  value: string;
};

export const InputLabelContainerError = styled.label`
  font-size: 14px;
  line-height: 24px;
  color:  #C30052;
  padding: 9px 0 30px;
`;

export const InputLabelContainerDefault = styled.label<PropsType>`
  font-size: 14px;
  line-height: 24px;
  color: ${(p) => (!p.value ? '#344966' : '#00966D')};
  padding: 9px 0 30px;
`;
