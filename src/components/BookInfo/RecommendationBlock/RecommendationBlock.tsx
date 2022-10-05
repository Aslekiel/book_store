import type { IBook } from '../../../types';
import { Book } from '../../Catalog/Books/Book/Book';
import { RecommendationBlockContainer } from './RecommendationBlockContainer.styles';

type PropsType = {
  books: IBook[];
};

export const RecommendationBlock: React.FC<PropsType> = ({ books }) => {
  return (
    <RecommendationBlockContainer>
      <h2
        className="recommendations__title"
      >
        Recommendations
      </h2>
      <div className="recommendations__books">
        {books?.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              logo={book.logo}
              dataOfIssue={book.dateOfIssue}
              rating={book.rating}
            />);
        })}
      </div>
    </RecommendationBlockContainer>
  );
};
