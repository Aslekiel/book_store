import { useNavigate } from 'react-router-dom';
import { ReactComponent as BooksImg } from '../../../assets/books.svg';
import { CommonButton } from '../../CommonButton/CommonButton';
import { EmptyFavoriteContainer } from './EmptyFavoriteContainer.styles';

export const EmptyFavorite = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate('/catalog');
  };

  return (
    <EmptyFavoriteContainer>
      <BooksImg />
      <div className="cart__info">
        <h2 className="cart__title">
          Your favorite is empty
        </h2>
        <p className="cart__help">
          Add items to favorite to make a purchase.
          <br /> Go to the catalogue no.
        </p>
        <CommonButton
          title="Go to catalog"
          onClick={onClickNavigate}
          toggleBtn
        />
      </div>
    </EmptyFavoriteContainer>
  );
};
