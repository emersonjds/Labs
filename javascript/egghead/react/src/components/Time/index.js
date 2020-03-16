import React from "react";

export default function Time() {
  const data = new Date().toLocaleTimeString();
  return <div>Time now {data}</div>;
}
