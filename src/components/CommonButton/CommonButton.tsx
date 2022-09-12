import { CommonButtonContainer } from './CommonButton.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CommonButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <CommonButtonContainer className="button" onClick={onClick}>{title}</CommonButtonContainer>
  );
};
