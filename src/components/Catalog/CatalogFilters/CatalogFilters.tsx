import { CatalogFiltersContainer } from './CatalogFiltersContainer.styles';

import { CatalogFilter } from '../CatalogFilter/CatalogFilter';

interface IProps {
  title: string;
}

export const CatalogFilters: React.FC<IProps> = ({ title }) => {
  return (
    <CatalogFiltersContainer>
      <h2 className="catalog__title">{title}</h2>
      <div className="catalog__filters">
        <CatalogFilter
          title="Genre"
        />
        <CatalogFilter
          title="Price"
        />
        <CatalogFilter
          title="Sort by"
        />
      </div>
    </CatalogFiltersContainer>
  );
};
