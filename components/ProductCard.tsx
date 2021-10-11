import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../interfaces/Product';

const ProductCard = ({ id, name, thumbnail, description, price }: Product) => {
  return (
    <div className="border rounded w-80 p-4">
      <div className="mb-4 text-lg">{name}</div>
      <div className="flex justify-center mb-4">
        <div className="h-72 w-72 relative">
          <Image src={thumbnail} layout="fill" className="object-cover " alt={description} />
        </div>
      </div>
      <div className="text-sm mb-4 ">{description}</div>
      <div className="flex justify-between items-baseline">
        <div className="text-lg">${price}</div>
        <Link href={`/shop/${id}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
