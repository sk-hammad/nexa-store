import Footwear from './Footwear.jsx'

const products = [
  {
    name: "Nike Pegasus",
    price: 130,
    tag: "Running",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Adidas Adizero",
    price: 150,
    tag: "Lightweight",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Asics Gel-Kayano",
    price: 160,
    tag: "Stability",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brooks Ghost",
    price: 140,
    tag: "Comfort",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Puma Velocity Nitro",
    price: 120,
    tag: "Performance",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "New Balance FuelCell",
    price: 170,
    tag: "Premium Running",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
  },
];  


function Running() {
    return <Footwear products={products} />
}

export default Running