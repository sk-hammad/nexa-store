import { NavLink } from 'react-router-dom'
import { useCart } from '../Cart_add.jsx';

const filterOptions = [
  { name: 'All', path: '/clothing' },
  {name : "Shirts", path: '/clothing/shirts'},
]


function Clothing({ products }) {

  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white text-[#1d1b1a]">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-[#f0eeeb] bg-[#faf9f7] p-6 shadow-[0_25px_80px_rgba(17,17,17,0.04)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a817a]">
                Clothing collection
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#171412] md:text-5xl">
                Everyday essentials, elevated.
              </h1>
            </div>

           
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filterOptions.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.name === 'All'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#111111] text-white'
                      : 'border border-[#ece8e4] bg-white text-[#544f4b] hover:bg-[#f8f7f5]'
                  }`  
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map(({ name, price, tag, image }) => (
            <article
              key={name}
              className="overflow-hidden rounded-[28px] border border-[#f0eeeb] bg-white shadow-[0_18px_40px_rgba(17,17,17,0.03)] transition hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(17,17,17,0.05)]"
            >
              <div className="relative overflow-hidden bg-[#f7f5f3]">
                <img
                  src={image}
                  alt={name}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#534e4a] backdrop-blur-sm">
                  {tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#1b1917]">{name}</h2>
                    <p className="mt-2 text-sm text-[#66615d]">Soft, refined, and easy to wear</p>
                  </div>
                  <span className="text-lg font-semibold text-[#1d1b1a]">${price}</span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#d1b177]">
                    {'★★★★★'}
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart({ key: name, name, price, tag, image })}
                    className="rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2b2b2b]"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Clothing
