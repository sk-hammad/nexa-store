import Footwear from "./Footwear";

const products = [
  {
    name: 'Nike Air Max',
    price: 149,
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adidas Ultraboost',
    price: 179,
    tag: 'New Arrival',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Puma Suede Classic',
    price: 110,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'New Balance 574',
    price: 138,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Air Jordan Retro',
    price: 220,
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Converse Chuck Taylor',
    price: 85,
    tag: 'Classic',
    image:
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=900&q=80',
  },
];

function Sneakers() {
  return <Footwear products={products} />;
}

export default Sneakers;