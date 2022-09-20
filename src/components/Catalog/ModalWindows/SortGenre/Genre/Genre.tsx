import { useState } from 'react';
import { GenreContainer } from './GenreContainer.styles';
import checkBoxFull from '../../../../../assets/checkbox-full.png';
import checkBoxEmpty from '../../../../../assets/checkbox-empty.png';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  title: string;
};

export const Genre: React.FC<Props> = ({ title }) => {
  const [checkBoxState, setCheckBoxState] = useState(false);

  const onClickHandler = () => {
    setCheckBoxState(!checkBoxState);
  };

  return (
    <GenreContainer onClick={onClickHandler}>
      <img
        src={
          checkBoxState
            ? checkBoxFull
            : checkBoxEmpty
        }
        alt="checkbox"
        className="genre__checkbox"
      />
      <div className="genre__title">
        {title}
      </div>
    </GenreContainer>

  );
};
