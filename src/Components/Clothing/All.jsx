import Clothing from './clothing'

const products = [
  {
    name: 'Harbor Knit',
    price: 118,
    tag: 'Best seller',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Velvet Layer',
    price: 145,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Slate Coat',
    price: 220,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Drift Tee',
    price: 68,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Noir Blazer',
    price: 240,
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cotton Flow',
    price: 94,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
]

function All() {
  return <Clothing products={products} />
}
export default All