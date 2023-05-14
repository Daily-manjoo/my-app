import React, { useState } from "react";

export default function Counter() {
  // 값, 값을 변경할 떄 쓰는 함수
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 1)}>Show and Hide</button>
      <br /> Counter: {count}
    </div>
  );
}
