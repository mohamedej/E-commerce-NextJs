import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    let isExisiting = false;
    let newCart;
    if (cart.length > 0) {
      newCart = cart.map((product) => {
        if (product.id === item.id) {
          isExisiting = true;
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });
    }
    if (isExisiting) {
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };
  const removeItem = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };

  const addSameItem = (id) => {
    const mappedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(mappedCart);
  };

  const removeSameItem = (id) => {
    const mappedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(mappedCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        addSameItem,
        removeSameItem,
        totalPrice,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
