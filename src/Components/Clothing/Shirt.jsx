import CLothing from './clothing'

const products = [
  {
    name: 'Classic White Shirt',
    price: 45,
    tag: 'Best seller',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Casual Denim Shirt',
    price: 65,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Linen Summer Shirt',
    price: 58,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Black Formal Shirt',
    price: 72,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Striped Casual Shirt',
    price: 54,
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Oxford Blue Shirt',
    price: 62,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1620012253295-c15a3e2c2d7d?auto=format&fit=crop&w=900&q=80',
  },
];

function Shirts() {
  return <CLothing products={products} />;
}

export default Shirts;