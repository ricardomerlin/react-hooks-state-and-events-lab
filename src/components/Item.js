import React, { useState } from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(true)

  const shop = addCart ? 'in-cart' : ""

  const buttonText = shop ? 'Remove From Cart' : "Add to Cart"

  function handleClick() {
    setAddCart(addCart => !addCart)
  }

  return (
    <li className={shop}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={shop}>{buttonText}</button>
    </li>
  );
}

export default Item;
