"use client";

import { ReactNode, useState } from "react";

export default function ButtonAddToCart({children} : {children: ReactNode}) {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count + 1);
  }

  console.log("conunt", count);

  return (
    <div>
      <button onClick={addToCart}>Add to cart</button>
      <p>Count: {count}</p>
      {
        children
      }
    </div>
  );
}
