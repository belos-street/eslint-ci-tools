import React, { useState } from "react";

export function Test() {
  const [count, setCount] = useState<string>(0);
  return <div> {count } </div>;
}
