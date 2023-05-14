import React from "react";
import logo from "../logo.svg";

const Header = () => {
  //   const getGreetingMessage = function (name) {
  //     if (name === "yuri") return `Hello, ${name}! Learn React`;
  //     return `Welcome, ${name}! Learn React`;
  //   };

  const name = "yuri";

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. yaho!!!!!!!!!!!
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {name === "yuri" ? `Hello, ${name}! Learn React` : `Welcome, ${name}! Learn React`}
      </a>
    </header>
  );
};

export default Header;
