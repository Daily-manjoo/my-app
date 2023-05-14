import React from "react";
import cat from "../images/cat.jpg";
//아래는 props를 인자로 디스트럭처링
export default function Welcome({ withImg, firstName, lastName }) {
  // image + Hello, firstName, lastName
  return (
    <>
      {withImg && <img src={cat} alt="welcomeCat" height="200" />}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
