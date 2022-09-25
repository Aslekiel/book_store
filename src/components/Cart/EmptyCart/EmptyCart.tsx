import { ReactComponent as BooksImg } from '../../../assets/books.svg';
import { CommonButton } from '../../CommonButton/CommonButton';
import { EmptyCartContainer } from './EmptyCartContainer.styles';

export const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <BooksImg />
      <div className="cart__info">
        <h2 className="cart__title">
          Your cart is empty
        </h2>
        <p className="cart__help">
          Add items to cart to make a purchase.
          <br /> Go to the catalogue no.
        </p>
        <CommonButton title="Go to catalog" />
      </div>
    </EmptyCartContainer>
  );
};
