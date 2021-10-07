import Link from 'next/link';
import Image from 'next/image';

export interface ProductInfo {
  productId: string;
  title: string;
  thumbnail: StaticImageData;
  description?: string;
  price: number;
}

const ProductCard = ({ productId, title, thumbnail, description, price }: ProductInfo) => {
  return (
    <div className="border rounded w-80 p-4">
      <div className="mb-4 text-lg">{title}</div>
      <div className="flex justify-center mb-4">
        <div className="h-72 w-72 relative">
          <Image src={thumbnail} layout="fill" className="object-cover " alt={description} />
        </div>
      </div>
      <div className="text-sm mb-4 ">{description}</div>
      <div className="flex justify-between items-baseline">
        <div className="text-lg">${price}</div>
        <Link href={`/shop/${productId}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
