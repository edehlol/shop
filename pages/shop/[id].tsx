import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';
import chair from '../../public/images/chair.jpg';
import React, { useState } from 'react';
import { getAllProductIds, getProductData } from '../../lib/products';
import { Product } from '../../interfaces/Product';
import { AiFillCheckCircle } from 'react-icons/ai';

const ProductPage = ({ productData }: { productData: Product }) => {
  const { name, id, price, description } = productData;
  const [showDialog, setShowDialog] = useState(false);

  function handleAddToCart(id: string) {
    setShowDialog(true);
  }
  return (
    <>
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
                <div className="flex mb-8">
                  <button
                    className="btn mr-4 bg-blue-500 text-white"
                    onClick={() => handleAddToCart(id)}
                  >
                    {/* <Link href={`/cart`}> */}
                    <a>Add to cart</a>
                    {/* </Link>{' '} */}
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
        {/* dialog */}
      </Layout>
      <div
        className={`${
          showDialog ? 'block' : 'hidden'
        } fixed -bottom-12 h-12 bg-gray-100 border-t w-full flex justify-center items-center transition-transform duration-500 transform -translate-y-12 `}
      >
        <p className="flex items-center">
          <span className="font-bold">{name}&nbsp;</span> is added to your cart!
          <span className="ml-2 text-green-600">
            <AiFillCheckCircle size="1.25rem" />
          </span>
        </p>
      </div>
      {/* <div
        className={`h-full w-full flex justify-center items-center fixed inset-0 bg-gray-600 bg-opacity-50 ${
          showDialog ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`border rounded-md  w-full h-full md:max-w-screen-md md:max-h-96 bg-white py-8 px-8`}
        >
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-xl font-bold">{name} added to your cart!</h2>
            <div className="flex justify-end">
              <button className="btn mr-4">
                <Link href="/shop">Continue shopping</Link>
              </button>
              <button className="btn bg-blue-500 text-white">
                <Link href="/cart">Go to checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
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
