import { createContext, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.key === product.key)

      if (existingItem) {
        return items.map((item) =>
          item.key === product.key ? { ...item, count: item.count + 1 } : item
        )
      }

      return [...items, { ...product, count: 1 }]
    })
  }

  function removeFromCart(productKey) {
    setCartItems((items) => items.filter((item) => item.key !== productKey))
  }

  function clearCart() {
    setCartItems([])
  }

  const itemCount = cartItems.reduce((total, item) => total + item.count, 0)

  return (
    <CartContext.Provider value={{ cartItems, itemCount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

function Cart_add() {
  const { cartItems, removeFromCart } = useCart()
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.count
  }, 0)

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-[#1d1b1a] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold">Your cart</h1>
        {cartItems.length === 0 ? (
          <p className="mt-6 text-[#66615d]">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mt-6 divide-y divide-[#f0eeeb] rounded-2xl border border-[#f0eeeb] px-5">
              {cartItems.map((item) => {
                const unitPrice = item.price;

                return (
                  <li
                    key={item.key}
                    className="flex items-center justify-between gap-4 py-5"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />
                      )}
                      <div>
                        <h2 className="font-medium">{item.name}</h2>
                        <p className="mt-1 text-sm text-[#66615d]">
                          ${unitPrice.toFixed(2)} × {item.count}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="shrink-0 text-sm text-[#8a5146] hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-right text-lg font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </p>

           <div className="mt-6 flex justify-end">
            <NavLink to="/checkout" className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a2a]">
                Checkout
            </NavLink>
           </div>
          </>
        )}
      </section>
    </main>
  )
}

export default Cart_add
