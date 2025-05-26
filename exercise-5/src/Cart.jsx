import { useState } from "react";

const Cart = () => {
  // list of all products
  const [products, setProducts] = useState([]);

  // product Name

  const [productName, setProductName] = useState("");

  // product Price

  const [productPrice, setProductPrice] = useState("");

  //   Add to cart
  const HandleAddTocart = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        Quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
      setProductName.focus();
    }
  };

//   remove from the cart
  const RemoveFromCart = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

//   decrease the quantity of the itimes
  const HandleDecrease = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.Quantity > 1
        ? { ...product, Quantity: product.Quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  //   Increase the quantity of the itimes
  const HandleIncrease = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, Quantity: product.Quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

//   updating the totla price
  const totalCost=products.reduce((Total,product)=>Total+ product.price * product.Quantity,0)
  return (
    <div>
      <h2>The simple shoping cart</h2>
      <div>
        <h3>Add to Cart</h3>
        <input
          type="text"
          placeholder="Enter the produdctName"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          min="0"
          type="number"
          placeholder="Enter the Price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <button type="button" onClick={HandleAddTocart}>
          Add To Cart
        </button>
      </div>
      {products.length > 0 ? (
        <>
          <h3>Products in the cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <div>
                  Quantity :{" "}
                  <button onClick={() => HandleDecrease(product.id)}>-</button>
                  {product.Quantity}{" "}
                  <button onClick={() => HandleIncrease(product.id)}>+</button>
                </div>
                <button onClick={() => RemoveFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total cost : ${totalCost}</h4>
        </>
      ) : (
        <p> this cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
