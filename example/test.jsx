import React, { useState } from "react";

export function Miao() {
  const [count, setCount] = useState(0);
  return <div className={count}> </div>;
}
