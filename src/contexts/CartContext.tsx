import React, { useCallback, useContext, useMemo, useState } from "react";
import { Product } from "../types";

const CART: string = "cart";

interface CartContextProps {
  children: JSX.Element
}

export interface CartContextValues {
  cartItems: Product[],
  addCart: (product: Product) => void,
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>,
}

const CartContext = React.createContext({} as CartContextValues);
export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}: CartContextProps) => {
  const [cartItems, setCartItems] = useState<Product[]>(JSON.parse(localStorage.getItem(CART) as string) || []);
  const cartLocalStorage = localStorage.setItem(CART, JSON.stringify(cartItems));

  const addCart = useCallback(
    (product: Product) => {
      setCartItems([product, ...cartItems]);
    },[cartItems]);

/*     const deleteProduct = (id) => setCartItems(cartItems.filter((product) => product.id !== id)); */

  const value = useMemo(
    () => ({
      cartItems,
      addCart,
      setCartItems
    }),
    [cartItems, addCart, setCartItems]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}