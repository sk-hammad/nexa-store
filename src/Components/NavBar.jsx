import { NavLink } from 'react-router-dom'
import { useCart } from './Cart_add.jsx'


const navItems = [
  { to: '/', label: 'Home' },
  { to: '/footwear', label: 'Footwear' },
  { to: '/clothing', label: 'Clothing' },
  { to: '/electronics', label: 'Electronics' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-[#f3efe9] bg-white/95 backdrop-blur-xl shadow-[0_12px_26px_rgba(17,17,17,0.04)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f4] text-sm font-black text-[#1c1916] shadow-[0_8px_18px_rgba(17,17,17,0.06)] ring-1 ring-[#efefee]">
            N
          </span>
          <div className="leading-none">
            <div className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#9a938d]">Luxury</div>
            <div className="mt-1 text-lg font-semibold uppercase tracking-[0.2em] text-[#1d1b1a]">Nexa</div>
          </div>
        </NavLink>

        <div className="hidden items-center gap-2 rounded-full border border-[#f0eeeb] bg-[#faf9f7] p-1.5 lg:flex">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-[0_8px_20px_rgba(17,17,17,0.08)]'
                    : 'text-[#5f5a56] hover:bg-white hover:text-[#1d1b1a]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/cart"
            className="rounded-full border border-[#efefee] bg-white px-4 py-2 text-sm font-medium text-[#1d1b1a] transition hover:bg-[#f9f9f8]"
          >
            Cart ({itemCount})
          </NavLink>
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar