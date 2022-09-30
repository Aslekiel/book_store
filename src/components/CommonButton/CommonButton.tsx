import { CommonButtonContainer } from './CommonButton.styles';

type PropsType = {
  title: string;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CommonButton: React.FC<PropsType> = ({ title, type, onClick }) => {
  return (
    <CommonButtonContainer
      type={type}
      onClick={onClick}
      title={title}
    >
      {title}
    </CommonButtonContainer>
  );
};
