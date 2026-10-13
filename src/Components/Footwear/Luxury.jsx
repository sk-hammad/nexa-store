import Footwear from './Footwear.jsx';

const products = [
  {
    name: "Gucci Ace Sneakers",
    price: 650,
    tag: "Luxury",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Prada Leather Sneakers",
    price: 720,
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Louis Vuitton Designer Shoes",
    price: 890,
    tag: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Golden Goose Deluxe",
    price: 580,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Premium Leather Loafers",
    price: 450,
    tag: "Elegant",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Luxury Designer Trainers",
    price: 520,
    tag: "Limited Edition",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
  },
];

function Luxury() {
  return <Footwear products={products} />;
}

export default Luxury;