import { SortByContainer } from './SortByContainer.styles';

export const SortBy = () => {
  return (
    <SortByContainer>
      <div className="sort__triangle" />
      <div className="sort__btn">Price</div>
      <div className="sort__btn">Name</div>
      <div className="sort__btn">Author name</div>
      <div className="sort__btn">Rating</div>
      <div className="sort__btn">Date of issue</div>
    </SortByContainer>
  );
};
