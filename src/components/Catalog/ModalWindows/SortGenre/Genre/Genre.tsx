import { useState } from 'react';

import checkBoxFull from '../../../../../assets/checkbox-full.png';
import checkBoxEmpty from '../../../../../assets/checkbox-empty.png';

import { GenreContainer } from './GenreContainer.styles';

type PropsType = {
  id: number;
  title: string;
  filterByGenres: (id: number) => void;
};

export const Genre: React.FC<PropsType> = (
  {
    id,
    title,
    filterByGenres,
  },
) => {
  const [checkBoxState, setCheckBoxState] = useState(false);

  const onClickHandler = () => {
    filterByGenres(id);
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
