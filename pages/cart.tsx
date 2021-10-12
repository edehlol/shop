import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../interfaces/Product';
import {
  productRemoved,
  quantityAdded,
  quantitySubtracted,
  selectAllCartItems,
} from '../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import React, { useState } from 'react';

const CartItem = ({ name, id, price, thumbnail, cartQuantity }: Product) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-b flex items-center justify-between p-8">
      <div className="flex items-center">
        <div className=" h-28 w-28 mr-8 relative">
          <Image src={thumbnail} layout="fill" className="object-cover rounded-full" alt="test" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="mb-4">
            <small>productId: {id}</small>
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className=" flex h-12 mr-4">
                <button
                  onClick={() => dispatch(quantitySubtracted(id))}
                  className="border rounded-l  w-12 p-2 text-lg bg-gray-100"
                >
                  -
                </button>
                <div className="border-t border-b w-12 p-2 flex items-center justify-center select-none">
                  {cartQuantity}
                </div>
                <button
                  onClick={() => dispatch(quantityAdded(id))}
                  className="border w-12 p-2 text-lg rounded-r bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(productRemoved(id))}
                className="text-blue-500 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <span className="mr-8 text-gray-600">
          {cartQuantity > 1 ? `${cartQuantity} x $${price}` : ''}
        </span>
        <span className="font-semibold text-lg">${price * cartQuantity}</span>
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useAppSelector(selectAllCartItems);

  const renderSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.cartQuantity;
    }, 0);
  };

  const renderList = () => {
    return cartItems.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        price={item.price}
        name={item.name}
        thumbnail={item.thumbnail}
        cartQuantity={item.cartQuantity}
      />
    ));
  };
  return (
    <Layout>
      <h1 className="text-2xl mb-8 font-semibold">Your shopping cart</h1>
      <div className="">
        {cartItems && renderList()}
        <div className="flex p-8">
          <h2 className="text-xl font-semibold text-left">Subtotal: ${renderSubtotal()}</h2>
        </div>
      </div>

      <div>
        <button>Continue shopping</button>
        <Link href="/checkout">
          <a className="btn">Checkout</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Cart;
