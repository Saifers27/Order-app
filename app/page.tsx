"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { recipes, MenuItem } from "../data/recipes";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCaption, setShowCaption] = useState<string | null>(null);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { item, quantity: 1 }];
      }
    });

    // Show visual feedback
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1000);

    // Open cart if it's closed
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.item.id !== itemId)
    );
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  };

  const handleConfirmOrder = () => {
    if (cart.length > 0) {
      const orderDetails = cart
        .map(
          (item) => `${item.item.name} - ¥${item.item.price} × ${item.quantity}`
        )
        .join("\n");

      alert(
        `🎉 注文が確定しました！\n\nご注文内容:\n${orderDetails}\n\n合計: ¥${getTotalPrice()}\n\nご利用ありがとうございました！🍕`
      );
      setCart([]);
      setIsCartOpen(false);
    }
  };

  return (
    <div className={styles.mainLayout}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1>🍕 イタリアンキッチン</h1>
            <p>本格的なイタリア料理</p>
          </div>
          <div
            className={styles.cartToggle}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <span className={styles.cartIcon}>🛒</span>
            {getTotalItems() > 0 && (
              <span className={styles.cartCount}>{getTotalItems()}</span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.contentWithCart}>
        {/* Menu section */}
        <section className={styles.menuSection}>
          <div className={styles.menuHeader}>
            <h2>メニュー</h2>
            <p>本格的なイタリア料理をお楽しみください</p>
          </div>

          <div className={styles.menuGrid}>
            {recipes.map((item) => (
              <div
                key={item.id}
                className={`${styles.menuCard} ${
                  addedItem === item.id ? styles.itemAdded : ""
                }`}
                onMouseEnter={() => setShowCaption(item.id)}
                onMouseLeave={() => setShowCaption(null)}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={item.image?.url || ""}
                    alt={item.name}
                    width={500}
                    height={350}
                    className={styles.menuImage}
                    quality={90}
                    priority={item.id === "1"}
                  />
                  <div className={styles.cardOverlay}>
                    <button
                      className={styles.addButton}
                      onClick={() => addToCart(item)}
                    >
                      ➕ 注文に追加
                    </button>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemDescription}>{item.comment}</p>
                  <div className={styles.itemPrice}>¥{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Sidebar */}
        <aside
          className={`${styles.cartSidebar} ${
            isCartOpen ? styles.cartOpen : ""
          }`}
        >
          <div className={styles.cartHeader}>
            <h2>ご注文</h2>
            <button
              className={styles.closeCart}
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyIcon}>🍽️</div>
              <h3>カートは空です</h3>
              <p>メニューから美味しい料理を追加してください！</p>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cart.map((cartItem) => (
                  <div key={cartItem.item.id} className={styles.cartItem}>
                    <div className={styles.itemInfo}>
                      <h4>{cartItem.item.name}</h4>
                      <p>¥{cartItem.item.price}</p>
                    </div>

                    <div className={styles.itemControls}>
                      <button
                        className={styles.quantityBtn}
                        onClick={() =>
                          updateQuantity(
                            cartItem.item.id,
                            cartItem.quantity - 1
                          )
                        }
                      >
                        ➖
                      </button>
                      <span className={styles.quantity}>
                        {cartItem.quantity}
                      </span>
                      <button
                        className={styles.quantityBtn}
                        onClick={() =>
                          updateQuantity(
                            cartItem.item.id,
                            cartItem.quantity + 1
                          )
                        }
                      >
                        ➕
                      </button>
                    </div>

                    <div className={styles.itemTotal}>
                      ¥{cartItem.item.price * cartItem.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.orderTotal}>
                  <span>合計:</span>
                  <span className={styles.totalAmount}>¥{getTotalPrice()}</span>
                </div>

                <div className={styles.orderActions}>
                  <button className={styles.clearButton} onClick={clearCart}>
                    全削除
                  </button>
                  <button
                    className={styles.orderButton}
                    onClick={handleConfirmOrder}
                  >
                    注文確定
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 イタリアンキッチン - 本格的なイタリア料理</p>
          <p>料理愛好家のために❤️で作りました</p>
        </div>
      </footer>
    </div>
  );
}
