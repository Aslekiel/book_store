import { CatalogFiltersContainer } from './CatalogFiltersContainer.styles';

import { Filter } from '../CatalogFilter/Filter';

interface IProps {
  title: string;
}

export const CatalogFilters: React.FC<IProps> = ({ title }) => {
  return (
    <CatalogFiltersContainer>
      <h2 className="catalog__title">{title}</h2>
      <div className="catalog__filters">
        <Filter
          title="Genre"
        />
        <Filter
          title="Price"
        />
        <Filter
          title="Sort by"
        />
      </div>
    </CatalogFiltersContainer>
  );
};
