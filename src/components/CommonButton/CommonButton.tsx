import { CommonButtonContainer } from './CommonButton.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  title: string;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggleBtn?: boolean;
};

export const CommonButton: React.FC<Props> = ({ title, type, onClick, toggleBtn }) => {
  return (
    <CommonButtonContainer
      type={type}
      onClick={onClick}
      toggleBtn={toggleBtn}
    >
      {toggleBtn ? title : 'Added to cart'}
    </CommonButtonContainer>
  );
};
