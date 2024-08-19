"use client";

import { useState } from "react";
import TestComponent from "./testComponent";

export default function ButtonAddToCart() {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count + 1);
  }

  console.log("conunt", count);

  return (
    <div>
      <button onClick={addToCart}>Add to cart</button>
      <p>Count: {count}</p>
      <TestComponent />
    </div>
  );
}
