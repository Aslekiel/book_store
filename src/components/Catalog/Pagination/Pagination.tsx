import { PaginationContainer } from './Pagination.styles';
import arrow from '../../../assets/forward.png';

export const Pagination = () => {
  return (
    <PaginationContainer>
      <img src={arrow} alt="back-arrow" className="pagination__back-arrow" />
      <div className="pagination__list">
        <div className="pagination__list__item" />
        <div className="pagination__list__item" />
        <div className="pagination__list__item" />
      </div>
      <img src={arrow} alt="forward-arrow" className="pagination__forward-arrow" />
    </PaginationContainer>
  );
};
