import React, { createContext } from 'react';
import { foods } from '../assets/data';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'R$';
  const navigate = useNavigate();

  const contextValue = { foods, currency, navigate };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
