import React, { useState } from "react";

export default function Counter() {
  // const [count, setCount] = useState(0);
  // const [show, setShow] = useState(true);
  const operators = ["+", "-", "*"];
  // const [operator, setOperator] = useState(operators[0]);

  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });

  console.log(info);

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === "+") result = info.count + 1;
          if (info.operator === "-") result = info.count - 1;
          if (info.operator === "*") result = info.count * 1;
          // setCount(result);
          setInfo({ ...info, count: result });
        }}
      >
        {info.operator}1
      </button>
      <button
        onClick={() => {
          // info.show = !info.show;
          // const newInfo = info;  얕은복사
          setInfo({ ...info, show: !info.show });
        }}
      >
        Show and Hide
      </button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          // setOperator(operators[idx]);
          setInfo({ ...info, operator: operators[idx] });
        }}
      >
        Change Operator
      </button>
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  );
}
