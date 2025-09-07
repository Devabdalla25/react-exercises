
import React, { useContext } from 'react';
import ShopingCartContaxt from './ShopingCartContaxt';

function PrductItems({ productId, productName, price }) {
  const { addToCart } = useContext(ShopingCartContaxt);

  const handleAdd = () => {
    addToCart({ id: productId, name: productName, price });
  };

  return (
    <div>
      <p>{productName}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default PrductItems;
