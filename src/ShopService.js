import { createContext, useState } from "react";

export const ShopContext = createContext({
  basket: [], //panier
  voucherRate: null, //code promo
  addToBasket: (productCode) => {}, //fonction permettant d'ajouter au panier
  clearBasket: () => {}, //vider le panier
  removeFromBasket: () => {}, //retirer du panier
  applyVoucherRate: (voucherCode) => {},
});

const ShopService = ({ children }) => {
  const [state, setState] = useState({
    basket: ['a', 'b', 'c'], //panier
    voucherRate: null, //code promo
    addToBasket: (productCode) => {}, //fonction permettant d'ajouter au panier
    clearBasket: () => {}, //vider le panier
    removeFromBasket: () => {}, //retirer du panier
    applyVoucherRate: (voucherCode) => {},
  });
  return <ShopContext.Provider value={state}>{children}</ShopContext.Provider>;
};

export default ShopService;
