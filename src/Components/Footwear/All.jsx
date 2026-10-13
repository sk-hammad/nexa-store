import Footwear from './Footwear.jsx'

const products = [
 {
  name: 'Classic Leather Loafers',
  price: 125,
  tag: 'Formal',
  image:
    'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Urban Chelsea Boots',
  price: 190,
  tag: 'Boots',
  image:
    'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Canvas High-Tops',
  price: '$89',
  tag: 'Casual',
  image:
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Luxury Dress Shoes',
  price: 240,
  tag: 'Luxury',
  image:
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Trail Hiking Shoes',
  price: 155,
  tag: 'Outdoor',
  image:
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=80',
},
{
  name: 'Minimal White Sneakers',
  price: 115,
  tag: 'Everyday',
  image:
    'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80',
},
]

function All() {
  return <Footwear products={products} />
}

export default All
