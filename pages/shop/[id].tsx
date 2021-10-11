import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';
import chair from '../../public/images/chair.jpg';
import React from 'react';
import { getAllProductIds, getProductData } from '../../lib/products';
import { Product } from '../../interfaces/Product';

const ProductPage = ({ productData }: { productData: Product }) => {
  const { name, id, price, description } = productData;
  // function handleAddToCart(productId: number) {
  //   console.log(productId);
  // }
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <div className="">
            <div className="">
              <h1 className="text-2xl font-semibold mb-2">{name}</h1>
              <span className="mb-4">${price}</span>
              <p>
                <small className="text-gray-600">ProductId: {id}</small>
              </p>
            </div>
            <div className="">
              <h2 className="my-4 text-xl ">Product Description</h2>
              <p className="mb-8">{description}</p>
              <div className="flex">
                <button className="btn mr-4 bg-blue-500 text-white">
                  <Link href={`/cart`}>Add to cart</Link>{' '}
                </button>
                <button className="btn">
                  <Link href="/shop">
                    <a>Back to shopping</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 px-8 flex justify-center">
          <div className="relative w-96 h-96">
            <Image src={chair} layout="fill" className="object-cover" alt={'test'} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: any }) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default ProductPage;
