import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';
import chair from '../../public/images/chair.jpg';

const ProductPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2  place-items-center mt-24">
        <div className="relative w-96 h-96 mb-4">
          <Image src={chair} layout="fill" className="object-cover" alt={'test'} />
        </div>

        <div className="">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-2">Boko Chair</h1>
            <span className="mb-4">$200</span>
          </div>

          {/* <div className="flex items-center justify-between w-full"></div> */}

          <div className="flex flex-col flex-1">
            <h2 className="my-4 text-xl ">Product Description</h2>
            <p className="w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <button className="btn bg-blue-500 text-white w-full my-8">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="mb-8 flex justify-center">
        <Link href="/shop">
          <a className="btn">See more products</a>
        </Link>
      </div>
    </Layout>
  );
};
export default ProductPage;
