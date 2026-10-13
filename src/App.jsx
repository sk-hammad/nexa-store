import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar.jsx'
import Home from './Components/Home.jsx'
import All from './Components/Footwear/All.jsx'
import Sneakers from './Components/Footwear/Sneakers.jsx'
import All_c from './Components/Clothing/All.jsx'
import Shirts from './Components/Clothing/Shirt.jsx'
import Electronics from './Components/Electronics.jsx'
import Contact from './Components/Contact.jsx'
import Running from './Components/Footwear/Running.jsx'
import Boots from './Components/Footwear/Boots.jsx'
import Luxury from './Components/Footwear/Luxury.jsx'
import Cart_add, { CartProvider } from './Components/Cart_add.jsx'
import Checkout from './Components/Checkout.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Footwear Routes */}
          <Route path="/footwear" element={<All />} />
          <Route path="/footwear/sneakers" element={<Sneakers />} />
          <Route path="/footwear/running" element={<Running />} />
          <Route path="/footwear/boots" element={<Boots />} />
          <Route path="/footwear/luxury" element={<Luxury />} />

          {/* Clothing route */}
          <Route path="/clothing" element={<All_c />} />
          <Route path="/clothing/shirts" element={<Shirts />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart_add />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
