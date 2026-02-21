export const addItem = (cart, item) => {
  if (cart.some((cartItem) => cartItem.name === item.name)) {
    return cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return { ...cartItem, quantity: cartItem.quantity + item.quantity };
      }
      return cartItem;
    });
  }
  return [...cart, item];
};

export const removeItem = (cart, item) => {
  return cart.filter((cartItem) => cartItem.name !== item.name);
};

export const getTotal = (cart) => {
  return cart
    .map((item) => item.price * item.quantity)
    .reduce((total, number) => total + number, 0);
};

export const removeCart = (cart) => {
  return cart.filter((cartItem) => cartItem.name === "");
};
