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



  const HnadleIncrease=(id)=>{
    const IncreaseItems=products.map((Item)=> Item.id === id ?{...Item,Quantity:Item.Quantity +1}:Item)
    setProducts(IncreaseItems)
  }
//   updating the totla price
  const totalCost=products.reduce((Total,product)=> Total + product.price * product.Quantity,0)
  const TotalCosts=products.reduce((total,item)=> total +item.price * item.Quantity,0)
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
      <div>
        {products.length > 0 ? (
          <>
          <h3>Product in the cart</h3>
          <ul>
            {products.map((item)=>(
              <li key={item.id}>
                <strong>{item.name} - ${item.price.toFixed(3)}</strong>
                <div>
                  Quantity: {" "}
                  <button type="button" onClick={()=>HandleDecrease(item.id)}>-</button>{" "}{item.Quantity}{" "}
                  <button type="button" onClick={()=>HnadleIncrease(item.id)}> +</button>
                </div>
                  <button type="button" onClick={()=>RemoveFromCart(item.id)} style={{margin:'10px'}}> Remove from the cart</button>
              </li>
            ))}
          </ul>
          </>
          
        ):<p> this cart is empty</p>}
      </div>
        <p>The toctal costs is : {TotalCosts}</p>

    </div>
  );
};

export default Cart;




