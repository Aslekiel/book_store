import { ReactComponent as BooksImg } from './img/books.svg';
import { CartContainer } from './Cart.styles';
import { CommonButton } from '../CommonButton/CommonButton';

export const Cart = () => {
  return (
    <CartContainer>
      <BooksImg />
      <div className="cart__info">
        <h2 className="cart__title">Your cart is empty</h2>
        <p className="cart__help">
          Add items to cart to make a purchase.
          <br /> Go to the catalogue no.
        </p>
        {/* <CommonButton title="Go to catalog" /> */}
      </div>
    </CartContainer>
  );
};
