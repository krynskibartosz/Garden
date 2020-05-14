import React from "react";

const MenuHamburger = ( {open, setOpen}) => 
    <button
      className="BurgerMenu__container"
      onClick={() => setOpen()}
    >
      <i className={open ? 'open' : 'close'}></i>
      <i className={open ? 'open' : 'close'}></i>
      <i className={open ? 'open' : 'close'}></i>
    </button>


export default MenuHamburger;
