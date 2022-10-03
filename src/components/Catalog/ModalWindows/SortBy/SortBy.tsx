import { useSearchParams } from 'react-router-dom';
import { SortByContainer } from './SortByContainer.styles';

type PropsType = {
  sortByTitleState: string;
  onClickSetTitle: (title: string) => void;
};

export const SortBy: React.FC<PropsType> = ({ sortByTitleState, onClickSetTitle }) => {
  const sortByTitleArray = [
    'Price',
    'Name',
    'Author name',
    'Rating',
    'Data of issue',
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = (title: string) => {
    onClickSetTitle(title);
    const lowercaseTitle = title.toLowerCase();
    searchParams.set('sortBy', lowercaseTitle);
    setSearchParams(searchParams);
  };

  return (
    <SortByContainer>
      <div className="sort__triangle" />
      {sortByTitleArray.map((title, index) => {
        return (
          <div
            key={index}
            className={
              sortByTitleState === title
                ? 'sort__btn--active'
                : 'sort__btn'
            }
            onClick={() => onClickHandler(title)}
          >
            {title}
          </div>
        );
      })}
    </SortByContainer >
  );
};
