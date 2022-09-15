import { UserProfileCaptionContainer } from './UserProfileCaption.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  captionTitle: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTitle: string;
};

export const UserProfileCaption: React.FC<Props> = (
  { captionTitle, onClick, buttonTitle },
) => {
  return (
    <UserProfileCaptionContainer>
      <h2 className="caption__title">
        {captionTitle}
      </h2>
      <button
        className="caption__link"
        onClick={onClick}
      >
        {buttonTitle}
      </button>
    </UserProfileCaptionContainer>
  );
};
