import { useState } from 'react';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart = () => {
  const [emptyCart, setEmptyCart] = useState(true);

  return (
    <div>
        {!emptyCart
          ? (<div>
                <div>123</div>
                <div>321321</div>
             </div>)
          : <EmptyCart /> }
    </div>
  );
};
