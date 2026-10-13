
import { useCart } from './Cart_add.jsx'

const gadgets = [
  {
    name: 'Pulse Speaker',
    price: 179,
    tag: 'Audio',
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Orbit Watch',
    price: 249,
    tag: 'Wearable',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Halo Lamp',
    price: 139,
    tag: 'Smart',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
  name: 'Echo Headphones',
  price: 199,
  tag: 'Audio',
  image:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Nova Tablet',
  price: 399,
  tag: 'Electronics',
  image:
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Pixel Camera',
  price: 549,
  tag: 'Photography',
  image:
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Luxe Keyboard',
  price: 129,
  tag: 'Accessories',
  image:
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Aero Laptop',
  price: 899,
  tag: 'Computers',
  image:
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Pulse Controller',
  price: 79,
  tag: 'Gaming',
  image:
    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
},
]

function Electronics() {
  const { addToCart } = useCart()


  return (
    <main className="min-h-screen bg-white px-4 py-10 text-[#1d1b1a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[30px] border border-[#f0eeeb] bg-[#faf9f7] p-6 shadow-[0_25px_80px_rgba(17,17,17,0.04)] md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a817a]">
            Electronics
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#171412] md:text-5xl">
            Smart essentials for modern living.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gadgets.map(({ name, price, tag, image }) => (
            <article
              key={name}
              className="overflow-hidden rounded-[28px] border border-[#f0eeeb] bg-white shadow-[0_18px_40px_rgba(17,17,17,0.03)]"
            >
              <img src={image} alt={name} className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f7f5f3] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a524d]">
                    {tag}
                  </span>
                  <span className="text-lg font-semibold">${price}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-[#1b1917]">{name}</h2>
                <button
                  type="button"
                  onClick={() => addToCart({ key: name, name, price, tag, image })}
                  className="mt-5 rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Electronics
