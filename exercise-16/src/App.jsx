import React, { useState } from "react";
import ShopingCartContaxt from "./ShopingCartContaxt";
import ProductItems from'./ProductItems'
import CartSummary from "./cartSummary";
const App = () => {
  const [cartItems,setCartItems] = useState([]);

  const addToCart=(item)=>{
    setCartItems([...cartItems,item]);
  }
  const removeFromCart=(productId)=>{
    setCartItems(cartItems.filter((item)=> item.id !== productId));
  }

  const Value={ cartItems, addToCart, removeFromCart}
  return (
    <ShopingCartContaxt.Provider value={Value}>
      <ProductItems productId={1} producName='Widget' price={19.99}/>  
      <ProductItems productId={2} producName='Widget' price={29.99}/>
      <ProductItems productId={3} producName='Widget' price={39.99}/>
      <CartSummary />
    </ShopingCartContaxt.Provider>
  );
};

export default App;
