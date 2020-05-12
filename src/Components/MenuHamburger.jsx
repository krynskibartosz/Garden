import React, { useState } from "react";

const MenuHamburger = () => {
  const [state, setState] = useState("close");

  return (
    <button
      className="BurgerMenu__container"
      onClick={() => setState(state === "open" ? "close" : "open")}
    >
      <i className={state}></i>
      <i className={state}></i>
      <i className={state}></i>
    </button>
  );
};

export default MenuHamburger;
