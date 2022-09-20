import { Genre } from './Genre/Genre';
import { SortGenreContainer } from './SortGenreContainer.styles';

export const SortGenre = () => {
  return (
    <SortGenreContainer>
      <div className="sort__triangle" />
      <Genre title="Fiction" />
      <Genre title="Non—fiction" />
      <Genre title="Light fiction" />
    </SortGenreContainer>
  );
};
