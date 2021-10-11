import { Product } from '../interfaces/Product';
import chair from '../public/images/chair.jpg';

export const dbProducts = [
  {
    id: '1',
    name: 'Wooden Leg',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 900,
  },
  {
    id: '2',
    name: 'Boko Chair',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 200,
  },
  {
    id: '3',
    name: 'Boko Chair',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 200,
  },
  {
    id: '4',
    name: 'Boko Chair',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 200,
  },
  {
    id: '5',
    name: 'Boko Chair',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 200,
  },
  {
    id: '6',
    name: 'Boko Chair',
    thumbnail: chair,
    description: 'Cozy high-end chair ecologically sourced from Ethiopian Tree Bark',
    price: 200,
  },
];

export const getProductsList = () => {
  return dbProducts;
};

export const getAllProductIds = () => {
  return dbProducts.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
};

export const getProductData = (id: Product['id']) => {
  return dbProducts.find((product) => product.id === id);
};
