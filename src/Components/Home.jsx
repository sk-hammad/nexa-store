const categories = [
  {
    name: 'Footwear',
    desc: 'Soft soles, bold silhouettes, and everyday comfort.',
    tone: 'bg-[linear-gradient(135deg,#f7e8d5,#efe1cf)]',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Clothing',
    desc: 'Minimal pieces built for easy layering and daily confidence.',
    tone: 'bg-[linear-gradient(135deg,#f7f0ea,#f2e8dc)]',
    image:
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
},
  {
    name: 'Electronics',
    desc: 'Smart tools and essentials designed for better routines.',
    tone: 'bg-[linear-gradient(135deg,#efefe9,#f2ece4)]',
    image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
},
]

const stats = [
  { label: 'Happy clients', value: '12k+' },
  { label: 'Curated styles', value: '320+' },
  { label: 'Avg. rating', value: '4.9/5' },
]

function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f1b18]">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-[#f2f0ed] bg-white shadow-[0_30px_90px_rgba(17,17,17,0.04)]">
          <div className="grid items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-10 lg:px-14 lg:py-14">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-[#f0efe9] bg-[#faf9f7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7a736d]">
                New season arrival
              </p>

              <h1 className="max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#1c1916] md:text-5xl lg:text-[4.2rem]">
                Thoughtful pieces
                <span className="mt-2 block text-[#8c7d70]">for everyday life.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#5f5750] md:text-lg">
                Shop premium essentials that bring comfort, style, and calm to your daily rhythm — carefully chosen for modern living.
              </p>

              

              <div className="mt-8 flex flex-wrap gap-3">
                {['Free shipping', 'New drops', 'Premium quality'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#f0eeeb] bg-white px-3 py-1.5 text-xs font-medium text-[#5d544d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[30px] border border-[#f1f0ee] bg-[#faf9f7] p-4 shadow-[0_25px_80px_rgba(17,17,17,0.04)]">
                <div className="rounded-[28px] bg-white p-5">
                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#786d62]">Featured</p>
                      <h2 className="mt-2 text-3xl font-semibold text-[#241f1b]">The Signature Set</h2>
                    </div>
                    <span className="rounded-full bg-[#f7f5f3] px-3 py-1 text-sm font-medium text-[#5b514a] shadow-sm">
                      $149
                    </span>
                  </div>

                  <div className="relative h-[360px] overflow-hidden rounded-[24px] bg-[#f5f1ec]">
                    <div className="absolute left-8 top-8 z-10 rounded-full border border-[#efeeeb] bg-white px-3 py-1.5 text-xs font-medium text-[#5f564e]">
                      Best seller
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
                      alt="Featured product"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8c7d70]">Curated selections</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#1b1916] md:text-4xl">Popular categories</h2>
          </div>
        
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((value,key) => (
            <article
              key={key}
              className="overflow-hidden rounded-[28px] border border-[#f3f0ed] bg-white p-5 shadow-[0_18px_50px_rgba(17,17,17,0.03)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(17,17,17,0.05)]"
            >
              <div className={`mb-5 overflow-hidden rounded-[22px] ${value.tone}`}>
                <img
                  src={value.image}
                  alt={value.name}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-[#1f1b18]">{ value.name}</h3>
                <span className="rounded-full bg-[#f7f5f3] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#7b6757]">
                  new
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#615a54]">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-[#f1efed] bg-[#faf9f7] p-6 shadow-[0_18px_60px_rgba(17,17,17,0.03)] md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((value,index) => (
              <div key={index} className="rounded-[24px] border border-[#f2f0ed] bg-white p-5 text-center">
                <div className="text-3xl font-semibold text-[#1c1916]">{value.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#756b62]">{value.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
