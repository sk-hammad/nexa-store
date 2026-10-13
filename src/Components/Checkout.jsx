import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './Cart_add.jsx'

function Checkout() {
  const { cartItems, clearCart } = useCart()
  const navigate = useNavigate()
  const redirectTimer = useRef(null)
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    address: '',
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  useEffect(() => {
    return () => window.clearTimeout(redirectTimer.current)
  }, [])

  const getPrice = (price) => Number(String(price).replace(/[^0-9.]/g, ''))
  const subtotal = cartItems.reduce(
    (total, item) => total + getPrice(item.price) * item.count,
    0
  )

  function handleSubmit(event) {
    event.preventDefault()
    setOrderPlaced(true)
    redirectTimer.current = window.setTimeout(() => {
      clearCart()   
      navigate('/')
    }, 2500)
  }

  function updateDetails(event) {
    const { name, value } = event.target
    setDeliveryDetails((details) => ({ ...details, [name]: value }))
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#faf9f7] px-4 py-10 text-[#1d1b1a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <Link
            to="/cart"
            className="text-sm font-medium text-[#66615d] transition hover:text-[#1d1b1a]"
          >
            ← Back to cart
          </Link>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a817a]">
            Nexa checkout
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tighter md:text-5xl">
            Almost yours.
          </h1>
          <p className="mt-3 max-w-xl text-[#66615d]">
            Add your delivery details and review your order before continuing.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-[#f0eeeb] bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] sm:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a938d]">
                Step 1
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Delivery information</h2>
              <p className="mt-2 text-sm text-[#66615d]">
                Where should we send your order?
              </p>
            </div>

            <div className="mt-7 space-y-5">
              <label className="block text-sm font-medium">
                Full name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={deliveryDetails.name}
                  onChange={updateDetails}
                  placeholder="e.g. Alex Morgan"
                  className="mt-2 w-full rounded-xl border border-[#e8e3de] px-4 py-3 font-normal outline-none transition placeholder:text-[#aaa39d] focus:border-[#8a817a] focus:ring-2 focus:ring-[#f4eee8]"
                />
              </label>

              <label className="block text-sm font-medium">
                Phone number
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                    inputMode="numeric"
                  required
                  value={deliveryDetails.phone}
                  onChange={updateDetails}
                  placeholder="Enter 10-digit phone number"
                maxLength={10}
                pattern="[0-9]{10}"
                title="Please enter exactly 10 digits"
                className="mt-2 w-full rounded-xl border border-[#e8e3de] px-4 py-3 font-normal outline-none transition placeholder:text-[#aaa39d] focus:border-[#8a817a] focus:ring-2 focus:ring-[#f4eee8]"
                />
              </label>

              <label className="block text-sm font-medium">
                Delivery address
                <textarea
                  name="address"
                  autoComplete="street-address"
                  required
                  rows={4}
                  value={deliveryDetails.address}
                  onChange={updateDetails}
                  placeholder="Street, city, state, and postal code"
                  className="mt-2 w-full resize-y rounded-xl border border-[#e8e3de] px-4 py-3 font-normal outline-none transition placeholder:text-[#aaa39d] focus:border-[#8a817a] focus:ring-2 focus:ring-[#f4eee8]"
                />
              </label>
            </div>

            <button
              type="submit"
                className="group mx-auto mt-7 flex w-fit items-center justify-between gap-6 rounded-2xl bg-[#111111] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_24px_rgba(17,17,17,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2b2b2b] hover:shadow-[0_16px_30px_rgba(17,17,17,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a817a] focus-visible:ring-offset-2"            >
              <span>Continue</span>
              <span
                aria-hidden="true"
                className="ml-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
            <p className="mt-3 text-center text-xs leading-5 text-[#8a817a]">
              Demo checkout only. Your information is not sent or saved.
            </p>
          </form>

          <aside className="rounded-[28px] border border-[#f0eeeb] bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a938d]">
                  Step 2
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Order summary</h2>
              </div>
              <span className="rounded-full bg-[#f7f5f3] px-3 py-1.5 text-xs font-medium text-[#5f5a56]">
                {cartItems.reduce((count, item) => count + item.count, 0)} items
              </span>
            </div>

            <ul className="mt-6 divide-y divide-[#f0eeeb]">
              {cartItems.map((item) => {
                const price = getPrice(item.price)

                return (
                  <li key={item.key} className="flex gap-4 py-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 shrink-0 rounded-xl bg-[#f7f5f3] object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="mt-1 text-sm text-[#77706a]">
                        Qty {item.count} · ${price.toFixed(2)} each
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold">
                      ${(price * item.count).toFixed(2)}
                    </p>
                  </li>
                )
              })}
            </ul>

            <div className="mt-4 space-y-3 border-t border-[#f0eeeb] pt-5 text-sm">
              <div className="flex justify-between text-[#66615d]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#66615d]">
                <span>Shipping</span>
                <span>Calculated later</span>
              </div>
              <div className="flex justify-between border-t border-[#f0eeeb] pt-4 text-base font-semibold text-[#1d1b1a]">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {orderPlaced && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-confirmation-title"
            className="w-full max-w-md rounded-[28px] bg-white p-8 text-center shadow-2xl"
          >
            <span
              aria-hidden="true"
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf5ed] text-3xl text-[#3f7547]"
            >
              ✓
            </span>
            <h2 id="order-confirmation-title" className="mt-5 text-2xl font-semibold">
              Your order has been placed!
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#66615d]">
              Thank you, {deliveryDetails.name}. This is a demo confirmation;
              no real order or payment was submitted.
            </p>
            <p className="mt-4 text-xs text-[#8a817a]">
              Taking you back to the home page…
            </p>
          </section>
        </div>
      )}
    </main>
  )
}

export default Checkout
