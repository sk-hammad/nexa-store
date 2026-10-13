import Footwear from './Footwear.jsx';

const products = [
  {
    name: "Timberland Classic Boot",
    price: 180,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Martens Leather Boot",
    price: 170,
    tag: "Classic",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chelsea Leather Boots",
    price: 150,
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hiking Trail Boots",
    price: 140,
    tag: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Urban Combat Boots",
    price: 125,
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Suede Desert Boots",
    price: 110,
    tag: "Casual",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
  },
];


function Boots() {
  return <Footwear products={products} />;
}

export default Boots;