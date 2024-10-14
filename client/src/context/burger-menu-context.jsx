import React, { createContext, useContext, useState } from "react";

const userBurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <userBurgerMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </userBurgerMenuContext.Provider>
  );
}

const useBurgerMenu = () => useContext(userBurgerMenuContext);

export { BurgerMenuProvider, useBurgerMenu };
