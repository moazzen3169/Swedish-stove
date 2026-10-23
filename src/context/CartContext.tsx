"use client";

import React, { createContext, useContext, useState } from "react";
import { CURRENT_PRODUCT, ProductData } from "@/data/productData";

interface CartContextType {
  product: ProductData;
  quantity: number;
  setQuantity: (q: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: () => void;
  removeFromCart: () => void;
  totalPriceFormatted: string;
  isAdded: boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const addToCart = () => {
    setCartItemsCount(quantity);
    setIsAdded(true);
    setIsCartOpen(true);
  };

  const removeFromCart = () => {
    setCartItemsCount(0);
    setQuantity(1);
    setIsAdded(false);
  };

  const clearCart = () => {
    setCartItemsCount(0);
    setIsAdded(false);
  };

  const totalPriceNumber = CURRENT_PRODUCT.priceNumber * (cartItemsCount > 0 ? cartItemsCount : quantity);
  const totalPriceFormatted = new Intl.NumberFormat("fa-IR").format(totalPriceNumber);

  return (
    <CartContext.Provider
      value={{
        product: CURRENT_PRODUCT,
        quantity,
        setQuantity,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        totalPriceFormatted,
        isAdded: cartItemsCount > 0,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
