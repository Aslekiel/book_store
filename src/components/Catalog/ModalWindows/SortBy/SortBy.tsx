import { useSearchParams } from 'react-router-dom';
import { SortByContainer } from './SortByContainer.styles';

type PropsType = {
  sortByTitleState: string;
  onClickSetTitle: (title: string) => void;
};

export const SortBy: React.FC<PropsType> = ({ sortByTitleState, onClickSetTitle }) => {
  const sortBy = [
    { title: 'Price', type: 'price' },
    { title: 'Name', type: 'title' },
    { title: 'Author name', type: 'author' },
    { title: 'Rating', type: 'rating' },
    { title: 'Data of issue', type: 'dateOfIssue' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = (title: string, type: string) => {
    onClickSetTitle(title);
    searchParams.set('sortBy', type);
    setSearchParams(searchParams);
  };

  return (
    <SortByContainer>
      <div className="sort__triangle" />
      {sortBy.map((item, index) => {
        return (
          <div
            key={index}
            className={
              sortByTitleState === item.title
                ? 'sort__btn--active'
                : 'sort__btn'
            }
            onClick={() => onClickHandler(item.title, item.type)}
          >
            {item.title}
          </div>
        );
      })}
    </SortByContainer >
  );
};
