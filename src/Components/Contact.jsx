import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })



  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.phone.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields before submitting the form.')
      return
    }
    event.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Your details have been submitted successfully!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-[#1d1b1a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#f0eeeb] bg-[#faf9f7] p-6 shadow-[0_25px_80px_rgba(17,17,17,0.04)] md:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8a817a]">
          Contact us
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#171412] md:text-5xl">
          Let’s build your next favorite routine.
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[26px] border border-[#f0eeeb] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#1c1916]">Email</h2>
            <p className="mt-2 text-[#5f5750]">hello@nexa.store</p>
          </div>
          <div className="rounded-[26px] border border-[#f0eeeb] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#1c1916]">Phone</h2>
            <p className="mt-2 text-[#5f5750]">+1 (800) 555-0198</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 rounded-[26px] border border-[#f0eeeb] bg-white p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1d1b1a]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-[18px] border border-[#efeeeb] bg-[#faf9f7] p-3 text-[#1d1b1a] outline-none placeholder:text-[#8c7d70]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1d1b1a]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-[18px] border border-[#efeeeb] bg-[#faf9f7] p-3 text-[#1d1b1a] outline-none placeholder:text-[#8c7d70]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#1d1b1a]">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (000) 000-0000"
                className="w-full rounded-[18px] border border-[#efeeeb] bg-[#faf9f7] p-3 text-[#1d1b1a] outline-none placeholder:text-[#8c7d70]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#1d1b1a]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you’re looking for..."
                className="h-32 w-full rounded-[18px] border border-[#efeeeb] bg-[#faf9f7] p-4 text-[#1d1b1a] outline-none placeholder:text-[#8c7d70]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b2b]"
          >
            Send message
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contact
