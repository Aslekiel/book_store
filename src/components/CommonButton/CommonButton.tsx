import { CommonButtonContainer } from './CommonButton.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  title: string;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CommonButton: React.FC<Props> = ({ title, type, onClick }) => {
  return (
    <CommonButtonContainer
      type={type}
      onClick={onClick}
    >
      {title}
    </CommonButtonContainer>
  );
};
