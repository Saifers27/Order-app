"use client";

import { useEffect, useState } from "react";
import styles from "../../page.module.css";

// Menu item type
interface MenuItem {
  id: string;
  name: string;
  price: number;
  comment?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (orderPlaced) {
    return (
      <div
        className={styles.container}
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{ color: "#b91c1c", fontSize: "2rem", marginBottom: "1.5rem" }}
        >
          Thank you for your order!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Your delicious Italian meal is being prepared. 🍝
        </p>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{
        minHeight: "60vh",
        maxWidth: 600,
        margin: "2rem auto",
        background: "#fffdfa",
        borderRadius: "1.2rem",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        padding: "2rem",
      }}
    >
      <h1
        className={styles.title}
        style={{ color: "#b91c1c", fontSize: "2rem", marginBottom: "1.5rem" }}
      >
        Order Confirmation
      </h1>
      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>No items in cart.</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item, i) => (
            <li key={`${item.id}-${i}`} className={styles.cartItem}>
              <span className={styles.cartItemName}>{item.name}</span>
              <span className={styles.cartItemPrice}>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.cartTotal} style={{ marginTop: "1.5rem" }}>
        Total: <span>${total}</span>
      </div>
      {cart.length > 0 && (
        <button
          className={styles.addToCartBtn}
          style={{ marginTop: "2rem", width: "100%" }}
          onClick={placeOrder}
        >
          Place Order
        </button>
      )}
    </div>
  );
}
