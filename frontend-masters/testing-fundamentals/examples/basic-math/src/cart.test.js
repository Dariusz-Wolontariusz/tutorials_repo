import { addItem, getTotal, removeItem, removeCart } from "./cart.js";
import { describe, it, expect } from "vitest";

describe("addItem", () => {
  it("adds a new item to an empty cart", () => {
    const cart = [];
    const result = addItem(cart, { name: "Apple", price: 1.5, quantity: 1 });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Apple");
  });

  it("increases quantity of items if the item already exists in the cart", () => {
    const cart = [{ name: "Apple", price: 1.5, quantity: 1 }];
    const result = addItem(cart, { name: "Apple", price: 1.5, quantity: 1 });
    expect(result[0].quantity).toBe(2);
  });
});

describe("removeItem", () => {
  it("removes an item from the cart", () => {
    const cart = [{ name: "Apple", price: 1.5, quantity: 1 }];
    const result = removeItem(cart, {
      name: "Apple",
      price: 1.5,
      quantity: 1,
    });
    expect(result).toHaveLength(0);
  });

  it("removes an item from the cart when cart contains multiple items", () => {
    const cart = [
      { name: "Apple", price: 1.5, quantity: 1 },
      { name: "Pear", price: 2.5, quantity: 1 },
      { name: "Banana", price: 0.5, quantity: 1 },
    ];
    const result = removeItem(cart, {
      name: "Pear",
      price: 2.5,
      quantity: 1,
    });
    expect(result).toHaveLength(2);
    expect(result[1].name).toBe("Banana");
  });
});

describe("getTotal", () => {
  it("sums up the price of all of the products in the cart", () => {
    const cart = [
      { name: "Apple", price: 1.5, quantity: 1 },
      { name: "Pear", price: 2.5, quantity: 2 },
      { name: "Banana", price: 0.5, quantity: 4 },
    ];
    const result = getTotal(cart);
    expect(result).toBe(8.5);
  });
});

describe("removeCart", () => {
  it("removes all the items form the cart", () => {
    const cart = [
      { name: "Apple", price: 1.5, quantity: 1 },
      { name: "Pear", price: 2.5, quantity: 2 },
      { name: "Banana", price: 0.5, quantity: 4 },
    ];
    const result = removeCart(cart);
    expect(result).toHaveLength(0);
  });
});
